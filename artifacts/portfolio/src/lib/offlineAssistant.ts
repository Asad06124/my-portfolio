import { PROFILE_KNOWLEDGE_DOCS } from "@/lib/profileKnowledge";
import { env, pipeline } from "@xenova/transformers";

type AssistantRole = "user" | "assistant";

type AssistantMessage = {
    role: AssistantRole;
    text: string;
};

type ProgressUpdate = {
    progress: number;
    status: string;
};

type AskResult = {
    answer: string;
    sources: string[];
};

type ProgressEvent = {
    progress?: number;
    status?: string;
    file?: string;
    loaded?: number;
    total?: number;
};

type Text2TextPipeline = (
    input: string,
    options?: {
        max_new_tokens?: number;
        temperature?: number;
        top_k?: number;
        repetition_penalty?: number;
    }
) => Promise<Array<{ generated_text: string }>>;

const REMOTE_MODEL_ID = "Xenova/flan-t5-small";
const LOCAL_MODEL_ID = "/models/flan-t5-small";
const STOP_WORDS = new Set([
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "by",
    "for",
    "from",
    "how",
    "i",
    "in",
    "is",
    "it",
    "my",
    "of",
    "on",
    "or",
    "that",
    "the",
    "to",
    "was",
    "what",
    "when",
    "where",
    "which",
    "who",
    "with",
    "you",
    "your"
]);

let pipelinePromise: Promise<Text2TextPipeline> | null = null;

function normalize(text: string): string[] {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function scoreDocument(queryTokens: string[], document: string): number {
    const docTokens = new Set(normalize(document));
    let score = 0;

    for (const token of queryTokens) {
        if (docTokens.has(token)) {
            score += 1;
        }
    }

    return score;
}

function retrieveContext(question: string, history: AssistantMessage[]): string[] {
    const query = [question, ...history.slice(-4).map((m) => m.text)].join(" ");
    const queryTokens = normalize(query);

    const ranked = PROFILE_KNOWLEDGE_DOCS.map((doc) => ({
        doc,
        score: scoreDocument(queryTokens, doc)
    }))
        .sort((a, b) => b.score - a.score)
        .filter((entry) => entry.score > 0)
        .slice(0, 6)
        .map((entry) => entry.doc);

    if (ranked.length > 0) {
        return ranked;
    }

    return PROFILE_KNOWLEDGE_DOCS.slice(0, 5);
}

function buildPrompt(question: string, history: AssistantMessage[], contextDocs: string[]): string {
    const historyText = history
        .slice(-6)
        .map((message) => `${message.role === "user" ? "User" : "Asad AI"}: ${message.text}`)
        .join("\n");

    return [
        "You are Asad AI, a local offline assistant that speaks in first person as Asad Ullah.",
        "Answer naturally and clearly, like a helpful chatbot on a portfolio site.",
        "Use only the provided context and do not invent facts.",
        "If the information is not in context, say you do not have that detail yet and ask the user to contact Asad directly.",
        "Keep answers concise unless the user asks for detail.",
        "",
        "Context:",
        ...contextDocs.map((doc, index) => `${index + 1}. ${doc}`),
        "",
        "Recent conversation:",
        historyText || "No previous messages.",
        "",
        `User question: ${question}`,
        "Answer:"
    ].join("\n");
}

function cleanAnswer(text: string): string {
    return text
        .replace(/^answer\s*:\s*/i, "")
        .replace(/^asad ai\s*:\s*/i, "")
        .trim();
}

function fallbackAnswer(question: string, contextDocs: string[]): string {
    const topFacts = contextDocs.slice(0, 2).join(" ");
    const hint = question.trim() ? `About your question, \"${question.trim()}\":` : "";
    return `${hint} I can share this from my profile: ${topFacts}`.trim();
}

export async function preloadOfflineAssistant(onProgress?: (update: ProgressUpdate) => void): Promise<void> {
    if (!pipelinePromise) {
        env.useBrowserCache = true;

        const progressCallback = (event: ProgressEvent) => {
            const progress =
                typeof event.progress === "number"
                    ? event.progress
                    : typeof event.loaded === "number" && typeof event.total === "number" && event.total > 0
                        ? event.loaded / event.total
                        : 0;

            onProgress?.({
                progress,
                status: event.status || event.file || "Loading offline model"
            });
        };

        pipelinePromise = (async () => {
            try {
                env.allowLocalModels = true;
                return (await pipeline("text2text-generation", LOCAL_MODEL_ID, {
                    quantized: true,
                    progress_callback: progressCallback
                })) as Text2TextPipeline;
            } catch {
                env.allowLocalModels = false;
                return (await pipeline("text2text-generation", REMOTE_MODEL_ID, {
                    quantized: true,
                    progress_callback: progressCallback
                })) as Text2TextPipeline;
            }
        })();
    }

    await pipelinePromise;
}

export async function askOfflineAssistant(
    question: string,
    history: AssistantMessage[]
): Promise<AskResult> {
    const contextDocs = retrieveContext(question, history);

    try {
        await preloadOfflineAssistant();
        const text2text = await pipelinePromise;

        if (!text2text) {
            throw new Error("Model pipeline was not initialized.");
        }

        const prompt = buildPrompt(question, history, contextDocs);
        const output = await text2text(prompt, {
            max_new_tokens: 180,
            temperature: 0.3,
            top_k: 40,
            repetition_penalty: 1.15
        });

        const generated = output?.[0]?.generated_text || "";
        const answer = cleanAnswer(generated);

        return {
            answer: answer || fallbackAnswer(question, contextDocs),
            sources: contextDocs
        };
    } catch {
        return {
            answer: fallbackAnswer(question, contextDocs),
            sources: contextDocs
        };
    }
}
