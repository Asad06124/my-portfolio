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
const ANSWER_MIN_WORDS = 10;
const LOW_QUALITY_PATTERNS = [
    /snoop/i,
    /i am a professional developer and developer/i,
    /cannot answer/i,
    /as an ai language model/i
];

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
        "You are Asad AI, an offline portfolio assistant speaking in first person as Asad Ullah.",
        "Your tone is confident, friendly, and professional.",
        "Write answers that attract potential clients and employers while staying honest.",
        "Use only the provided context and do not invent facts.",
        "If the information is not in context, say you do not have that detail yet and ask the user to contact Asad directly.",
        "Always write 2 to 5 sentences unless the user asks for a short reply.",
        "Never use offensive wording. Never insult anyone.",
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
        .replace(/\s+/g, " ")
        .trim();
}

function detectIntent(question: string):
    | "intro"
    | "skills"
    | "projects"
    | "experience"
    | "contact"
    | "availability"
    | "education"
    | "other" {
    const q = question.toLowerCase();

    if (/who\s+is|about\s+you|introduce|tell\s+me\s+about\s+you/.test(q)) return "intro";
    if (/skill|stack|tech|flutter|swift|react\s*native|firebase/.test(q)) return "skills";
    if (/project|built|build|open\s*source|easypaisa/.test(q)) return "projects";
    if (/experience|work|company|role|career/.test(q)) return "experience";
    if (/contact|email|phone|linkedin|github|reach/.test(q)) return "contact";
    if (/available|hire|freelance|full[-\s]?time|open\s+to/.test(q)) return "availability";
    if (/education|degree|university|gcuf/.test(q)) return "education";

    return "other";
}

function toSentenceList(contextDocs: string[]): string[] {
    return contextDocs
        .map((doc) => doc.replace(/\s+/g, " ").trim())
        .filter((doc) => doc.length > 0)
        .slice(0, 4);
}

function synthesizeGroundedAnswer(question: string, contextDocs: string[]): string {
    const intent = detectIntent(question);
    const facts = toSentenceList(contextDocs);
    const opener = "I am Asad Ullah, and thanks for asking.";

    if (intent === "contact") {
        return [
            "You can reach me directly at asadbalqani@gmail.com, and I am active on LinkedIn at linkedin.com/in/theasadsahir.",
            "If you want to discuss a role or project quickly, feel free to call me at +92 317 6854356.",
            "I usually reply fast and I am happy to discuss full-time or freelance opportunities."
        ].join(" ");
    }

    if (intent === "availability") {
        return [
            "Yes, I am open to full-time roles, freelance projects, and collaborations.",
            "I focus on shipping high-quality mobile apps with Flutter, Swift/SwiftUI, and React Native.",
            "Share your project goals and timeline, and I can suggest the best implementation approach."
        ].join(" ");
    }

    if (intent === "skills") {
        return [
            "My strongest stack is Flutter and Dart, plus iOS with Swift/SwiftUI and React Native.",
            "I also work deeply with Firebase, REST APIs, CI/CD pipelines, and clean architecture patterns.",
            "I focus on building apps that are maintainable, high-performance, and production-ready."
        ].join(" ");
    }

    if (intent === "projects") {
        return [
            "I have built enterprise mobile products across healthcare, ride-sharing, and business platforms.",
            "A key open-source project is my easypaisa_flutter package, which simplifies Easypaisa payment integration for Flutter apps.",
            "I also shipped OTA update systems, real-time communication modules, and scalable mobile architectures."
        ].join(" ");
    }

    if (intent === "experience") {
        return [
            "I have 3+ years of mobile development experience across RootPointers, BritSols, Ride Options, and MicroProgramers.",
            "My work includes enterprise OTA systems, real-time app features, performance optimization, and production releases.",
            "I take ownership from architecture and coding to deployment and ongoing improvements."
        ].join(" ");
    }

    if (intent === "education") {
        return [
            "I completed a BS in Computer Science from GCUF in 2023.",
            "That foundation, combined with hands-on production work, shaped my focus on practical and scalable mobile engineering."
        ].join(" ");
    }

    if (intent === "intro") {
        return [
            opener,
            "I am a mobile app developer based in Lahore with 3+ years of experience building real-world apps.",
            "I specialize in Flutter, Swift/SwiftUI, and React Native, and I enjoy turning product ideas into polished releases."
        ].join(" ");
    }

    if (facts.length > 0) {
        return [
            opener,
            ...facts,
            "If you share your exact goal, I can give you a more focused answer."
        ].join(" ");
    }

    return "I do not have that exact detail in my current offline knowledge yet, but you can contact me at asadbalqani@gmail.com and I will share it directly.";
}

function isLowQualityAnswer(answer: string, contextDocs: string[]): boolean {
    if (!answer) {
        return true;
    }

    const wordCount = answer.split(/\s+/).filter(Boolean).length;
    if (wordCount < ANSWER_MIN_WORDS) {
        return true;
    }

    if (LOW_QUALITY_PATTERNS.some((pattern) => pattern.test(answer))) {
        return true;
    }

    const answerTokens = new Set(normalize(answer));
    const contextTokens = new Set(normalize(contextDocs.join(" ")));

    let overlap = 0;
    for (const token of answerTokens) {
        if (contextTokens.has(token)) {
            overlap += 1;
        }
    }

    return overlap < 3;
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
        const safeAnswer = isLowQualityAnswer(answer, contextDocs)
            ? synthesizeGroundedAnswer(question, contextDocs)
            : answer;

        return {
            answer: safeAnswer,
            sources: contextDocs
        };
    } catch {
        return {
            answer: synthesizeGroundedAnswer(question, contextDocs),
            sources: contextDocs
        };
    }
}
