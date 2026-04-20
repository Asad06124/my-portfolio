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

const PRIMARY_REMOTE_MODEL_ID = "Xenova/LaMini-Flan-T5-248M";
const SECONDARY_REMOTE_MODEL_ID = "Xenova/flan-t5-small";
const PRIMARY_LOCAL_MODEL_ID = "/models/lamini-flan-t5-248m";
const SECONDARY_LOCAL_MODEL_ID = "/models/flan-t5-small";
const ANSWER_MIN_WORDS = 10;
const LOW_QUALITY_PATTERNS = [
    /snoop/i,
    /i am a professional developer and developer/i,
    /i am a professional app developer based in lahore/i,
    /i am a professional developer based in lahore/i,
    /cannot answer/i,
    /as an ai language model/i
];

const BAD_LANGUAGE_WORDS = [
    "fuck",
    "fucking",
    "bitch",
    "asshole",
    "bastard",
    "motherfucker",
    "shit",
    "chutiya",
    "madarchod",
    "gandu"
];

const APOLOGY_WORDS = [
    "sorry",
    "apologize",
    "apology",
    "my bad",
    "pardon",
    "forgive"
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

function buildRetryPrompt(
    question: string,
    history: AssistantMessage[],
    contextDocs: string[],
    previousAnswer: string
): string {
    const historyText = history
        .slice(-6)
        .map((message) => `${message.role === "user" ? "User" : "Asad AI"}: ${message.text}`)
        .join("\n");

    return [
        "You are Asad AI, an offline portfolio assistant speaking in first person as Asad Ullah.",
        "Generate a better answer than the previous draft.",
        "Use only provided context. Keep it specific, human, and engaging.",
        "Avoid generic introductions. Answer the question directly in 2 to 5 sentences.",
        "Do not use abusive words.",
        "",
        "Context:",
        ...contextDocs.map((doc, index) => `${index + 1}. ${doc}`),
        "",
        "Recent conversation:",
        historyText || "No previous messages.",
        "",
        `User question: ${question}`,
        `Previous low-quality draft: ${previousAnswer || "N/A"}`,
        "Improved answer:"
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
    | "achievement"
    | "skills"
    | "projects"
    | "experience"
    | "contact"
    | "availability"
    | "education"
    | "other" {
    const q = question.toLowerCase();

    if (/biggest\s+achiev|big\s+achiev|achievement|proudest|best\s+work|major\s+win/.test(q)) return "achievement";
    if (/who\s+is|about\s+you|introduce|tell\s+me\s+about\s+you/.test(q)) return "intro";
    if (/skill|stack|tech|flutter|swift|react\s*native|firebase/.test(q)) return "skills";
    if (/project|built|build|open\s*source|easypaisa/.test(q)) return "projects";
    if (/experience|work|company|role|career/.test(q)) return "experience";
    if (/contact|email|phone|linkedin|github|reach/.test(q)) return "contact";
    if (/available|hire|freelance|full[-\s]?time|open\s+to/.test(q)) return "availability";
    if (/education|degree|university|gcuf/.test(q)) return "education";

    return "other";
}

function jaccardSimilarity(textA: string, textB: string): number {
    const tokensA = new Set(normalize(textA));
    const tokensB = new Set(normalize(textB));

    if (tokensA.size === 0 || tokensB.size === 0) {
        return 0;
    }

    let intersection = 0;
    for (const token of tokensA) {
        if (tokensB.has(token)) {
            intersection += 1;
        }
    }

    const union = tokensA.size + tokensB.size - intersection;
    return union === 0 ? 0 : intersection / union;
}

function hasIntentSignal(intent: ReturnType<typeof detectIntent>, answer: string): boolean {
    const a = answer.toLowerCase();

    if (intent === "other") {
        return true;
    }

    if (intent === "intro") {
        return /asad|mobile|developer|flutter|lahore/.test(a);
    }

    if (intent === "achievement") {
        return /achievement|proud|ota|ci\/?cd|system|result|impact|delivery|real-time/.test(a);
    }

    if (intent === "skills") {
        return /flutter|dart|swift|swiftui|react\s*native|firebase|ci\/?cd|api|architecture/.test(a);
    }

    if (intent === "projects") {
        return /project|built|shipped|ota|easypaisa|ride|healthcare|enterprise|open\s*source/.test(a);
    }

    if (intent === "experience") {
        return /year|experience|rootpointers|britsols|ride options|microprogramers|role|company/.test(a);
    }

    if (intent === "contact") {
        return /email|phone|linkedin|github|contact|reach/.test(a);
    }

    if (intent === "availability") {
        return /open|available|full[-\s]?time|freelance|collaboration|hire/.test(a);
    }

    if (intent === "education") {
        return /education|bs|computer science|gcuf|degree/.test(a);
    }

    return true;
}

function containsBadLanguage(text: string): boolean {
    const normalized = text.toLowerCase();
    return BAD_LANGUAGE_WORDS.some((word) => {
        const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`\\b${escaped}\\b`, "i").test(normalized);
    });
}

function isApologyMessage(text: string): boolean {
    const normalized = text.toLowerCase();
    return APOLOGY_WORDS.some((word) => normalized.includes(word));
}

function needsApologyFromHistory(history: AssistantMessage[]): boolean {
    const userMessages = history.filter((entry) => entry.role === "user").map((entry) => entry.text);
    let apologyRequired = false;

    for (const message of userMessages) {
        if (containsBadLanguage(message)) {
            apologyRequired = true;
            continue;
        }

        if (apologyRequired && isApologyMessage(message)) {
            apologyRequired = false;
        }
    }

    return apologyRequired;
}

function hasDuplicateSentence(answer: string): boolean {
    const sentences = answer
        .split(/[.!?]+/)
        .map((sentence) => sentence.replace(/\s+/g, " ").trim().toLowerCase())
        .filter((sentence) => sentence.length > 0);

    const seen = new Set<string>();
    for (const sentence of sentences) {
        if (seen.has(sentence)) {
            return true;
        }
        seen.add(sentence);
    }

    return false;
}

function qualityScore(
    answer: string,
    question: string,
    contextDocs: string[],
    history: AssistantMessage[]
): number {
    if (!answer) {
        return -100;
    }

    const wordCount = answer.split(/\s+/).filter(Boolean).length;
    const answerTokens = new Set(normalize(answer));
    const contextTokens = new Set(normalize(contextDocs.join(" ")));
    let overlap = 0;
    for (const token of answerTokens) {
        if (contextTokens.has(token)) {
            overlap += 1;
        }
    }

    const previousAssistantMessages = history
        .filter((entry) => entry.role === "assistant")
        .slice(-4)
        .map((entry) => entry.text);
    let maxSimilarity = 0;
    for (const previous of previousAssistantMessages) {
        maxSimilarity = Math.max(maxSimilarity, jaccardSimilarity(previous, answer));
    }

    let score = 0;
    score += Math.min(wordCount, 60) * 0.4;
    score += overlap * 1.5;
    score += hasIntentSignal(detectIntent(question), answer) ? 10 : -15;
    score += hasDuplicateSentence(answer) ? -20 : 0;
    score += LOW_QUALITY_PATTERNS.some((pattern) => pattern.test(answer)) ? -40 : 0;
    score += maxSimilarity > 0.72 ? -30 : 0;

    return score;
}

function isLowQualityAnswer(
    answer: string,
    question: string,
    contextDocs: string[],
    history: AssistantMessage[]
): boolean {
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

    if (!/\bI\b/.test(answer) && /\bAsad\b/i.test(answer)) {
        return true;
    }

    if (hasDuplicateSentence(answer)) {
        return true;
    }

    const intent = detectIntent(question);
    if (!hasIntentSignal(intent, answer)) {
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

    if (overlap < 3) {
        return true;
    }

    const previousAssistantMessages = history
        .filter((entry) => entry.role === "assistant")
        .slice(-4)
        .map((entry) => entry.text);

    for (const previous of previousAssistantMessages) {
        if (jaccardSimilarity(previous, answer) >= 0.72) {
            return true;
        }
    }

    return false;
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
            const tryModel = async (modelId: string, local: boolean): Promise<Text2TextPipeline> => {
                env.allowLocalModels = local;
                return (await pipeline("text2text-generation", modelId, {
                    quantized: true,
                    progress_callback: progressCallback
                })) as Text2TextPipeline;
            };

            try {
                return await tryModel(PRIMARY_LOCAL_MODEL_ID, true);
            } catch {
                try {
                    return await tryModel(SECONDARY_LOCAL_MODEL_ID, true);
                } catch {
                    try {
                        return await tryModel(PRIMARY_REMOTE_MODEL_ID, false);
                    } catch {
                        return await tryModel(SECONDARY_REMOTE_MODEL_ID, false);
                    }
                }
            }
        })();
    }

    await pipelinePromise;
}

export async function askOfflineAssistant(
    question: string,
    history: AssistantMessage[]
): Promise<AskResult> {
    if (containsBadLanguage(question)) {
        return {
            answer: "😠",
            sources: []
        };
    }

    if (needsApologyFromHistory(history) && !isApologyMessage(question)) {
        return {
            answer: "Please clean your previous message first. I do not want to continue with bad language.",
            sources: []
        };
    }

    if (needsApologyFromHistory(history) && isApologyMessage(question)) {
        return {
            answer: "Thanks for apologizing. We can continue now. Ask me anything about my work or experience.",
            sources: []
        };
    }

    const contextDocs = retrieveContext(question, history);

    try {
        await preloadOfflineAssistant();
        const text2text = await pipelinePromise;

        if (!text2text) {
            throw new Error("Model pipeline was not initialized.");
        }

        let bestAnswer = "";
        let bestScore = -Infinity;
        let previousAttempt = "";

        const attemptConfigs = [
            { temperature: 0.6, top_k: 40, repetition_penalty: 1.15 },
            { temperature: 0.75, top_k: 50, repetition_penalty: 1.2 },
            { temperature: 0.85, top_k: 60, repetition_penalty: 1.22 }
        ];

        for (let i = 0; i < attemptConfigs.length; i += 1) {
            const prompt = i === 0
                ? buildPrompt(question, history, contextDocs)
                : buildRetryPrompt(question, history, contextDocs, previousAttempt);

            const output = await text2text(prompt, {
                max_new_tokens: 200,
                ...attemptConfigs[i]
            });

            const candidate = cleanAnswer(output?.[0]?.generated_text || "");
            if (!candidate) {
                continue;
            }

            previousAttempt = candidate;
            const candidateScore = qualityScore(candidate, question, contextDocs, history);
            if (candidateScore > bestScore) {
                bestScore = candidateScore;
                bestAnswer = candidate;
            }

            if (!isLowQualityAnswer(candidate, question, contextDocs, history)) {
                bestAnswer = candidate;
                break;
            }
        }

        return {
            answer: bestAnswer || "I could not generate a strong answer right now. Please ask again in a slightly different way.",
            sources: contextDocs
        };
    } catch {
        return {
            answer: "I could not generate an answer on-device right now. Please try again in a moment.",
            sources: contextDocs
        };
    }
}
