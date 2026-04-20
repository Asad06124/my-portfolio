import { Router, type IRouter } from "express";
import { logger } from "../lib/logger";

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "nvidia/nemotron-3-super-120b-a12b:free";
const MAX_TOKENS = 500;
const ABUSIVE_RESPONSE = "😤🤬😡";
const FRESH_START_NOTICE =
    "I don't respond to bad language. Let's start fresh - feel free to ask me something about Asad Ullah's work!";

const SYSTEM_PROMPT = `You are an AI assistant embedded in Asad Ullah's portfolio website. You represent me professionally.

ABOUT ME:
- Name: Asad Ullah
- Role: Senior Mobile Developer
- Skills: Flutter/Dart, iOS (Swift/SwiftUI), React Native, GetX, Riverpod, BLoC, Firebase, Node.js/Express, REST APIs, CI/CD, Git/GitHub
- Projects: easypaisa_flutter (Flutter payment plugin), Enterprise OTA Update System, Real-time Ride Sharing Platform, Multi-tenant Healthcare App, Flutter UI Component Library
- Contact: asadbalqani@gmail.com
- Available for: Full-time senior mobile roles and select freelance projects

RULES:
1. Only answer questions related to me, my work, skills, projects, and experience.
2. If someone uses any abusive, offensive, or inappropriate language - respond with ONLY this: "😤🤬😡" and nothing else.
3. After an abusive message, if the user sends another message - FIRST reset the conversation context completely (ignore all previous messages), then respond with: "I don't respond to bad language. Let's start fresh - feel free to ask me something about Asad Ullah's work!" and then answer their new question if it's appropriate.
4. Be concise, friendly, and professional.
5. Use conversation history to give context-aware follow-up answers.`;

type ChatMessage = {
    role: "user" | "assistant";
    content: string;
    reasoning_details?: unknown;
};

const abusivePattern =
    /\b(fuck|f\*+k|shit|bitch|asshole|bastard|motherfucker|mf|slut|whore|idiot|stupid|dumbass|chutiya|madarchod|mc|bc|bsdk|gandu|harami|lund|randi|gaand|kutta)\b/i;

function isChatMessage(value: unknown): value is ChatMessage {
    if (!value || typeof value !== "object") {
        return false;
    }

    const message = value as Partial<ChatMessage>;

    return (
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string"
    );
}

function toOpenRouterMessage(message: ChatMessage): Record<string, unknown> {
    if (
        message.role === "assistant" &&
        typeof message.reasoning_details !== "undefined"
    ) {
        return {
            role: message.role,
            content: message.content,
            reasoning_details: message.reasoning_details,
        };
    }

    return {
        role: message.role,
        content: message.content,
    };
}

function isAbusive(content: string): boolean {
    return abusivePattern.test(content);
}

const router: IRouter = Router();

router.post("/chat", async (req, res) => {
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey || apiKey === "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") {
        logger.error("OPENROUTER_API_KEY is missing or placeholder");
        return res.status(500).json({
            error: "AI assistant is not configured yet. Please try again later.",
        });
    }

    const rawMessages = req.body?.messages;
    const freshStart = req.body?.freshStart === true;

    if (!Array.isArray(rawMessages)) {
        return res.status(400).json({
            error: "Invalid payload. Expected messages array.",
        });
    }

    const messages = rawMessages.filter(isChatMessage);

    if (messages.length === 0) {
        return res.status(400).json({
            error: "At least one message is required.",
        });
    }

    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");

    if (!lastUserMessage) {
        return res.status(400).json({
            error: "No user message found.",
        });
    }

    if (isAbusive(lastUserMessage.content)) {
        return res.json({ reply: ABUSIVE_RESPONSE });
    }

    const referer =
        process.env.PORTFOLIO_URL?.trim() || "https://asad06124.github.io";

    try {
        const openRouterResponse = await fetch(OPENROUTER_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": referer,
                "X-Title": "Asad Ullah Portfolio AI Assistant",
            },
            body: JSON.stringify({
                model: MODEL,
                max_tokens: MAX_TOKENS,
                reasoning: { enabled: true },
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...(freshStart
                        ? [
                            {
                                role: "system",
                                content:
                                    'The user is returning after abusive language. Start your response with this exact sentence: "I don\'t respond to bad language. Let\'s start fresh - feel free to ask me something about Asad Ullah\'s work!" Then answer the current user question concisely if it is appropriate.',
                            },
                        ]
                        : []),
                    ...messages.map(toOpenRouterMessage),
                ],
            }),
        });

        if (!openRouterResponse.ok) {
            const errorBody = await openRouterResponse.text();
            logger.error(
                {
                    status: openRouterResponse.status,
                    errorBody,
                },
                "OpenRouter request failed",
            );

            return res.status(502).json({
                error: "I hit a temporary issue reaching the AI service. Please try again.",
            });
        }

        const data = (await openRouterResponse.json()) as {
            choices?: Array<{
                message?: {
                    content?: string;
                    reasoning_details?: unknown;
                };
            }>;
        };

        const assistantMessage = data.choices?.[0]?.message;
        const reply = assistantMessage?.content?.trim();

        if (!reply) {
            return res.status(502).json({
                error: "No response was returned by the AI service.",
            });
        }

        return res.json({
            reply,
            reasoning_details: assistantMessage?.reasoning_details,
        });
    } catch (error) {
        logger.error({ error }, "Unexpected error in /api/chat");

        return res.status(500).json({
            error: "Something went wrong while processing your message.",
        });
    }
});

export default router;
export { ABUSIVE_RESPONSE, FRESH_START_NOTICE, isAbusive };
