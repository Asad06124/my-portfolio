import { AnimatePresence, motion } from "framer-motion";
import { Bot, Loader2, MessageCircle, Send, User, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
  reasoning_details?: unknown;
};

const ABUSIVE_RESPONSE = "😤🤬😡";
const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = "google/gemma-4-31b-it:free";
const MAX_TOKENS = 500;
const ERROR_MESSAGE =
  "Sorry, I couldn't reach the assistant right now. Please try again in a moment.";
const GITHUB_PAGES_API_MESSAGE =
  "Chat is not configured yet. Set either VITE_API_BASE_URL or VITE_OPENROUTER_API_KEY in your deployment build variables.";

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

const abusivePattern =
  /\b(fuck|f\*+k|shit|bitch|asshole|bastard|motherfucker|mf|slut|whore|idiot|stupid|dumbass|chutiya|madarchod|mc|bc|bsdk|gandu|harami|lund|randi|gaand|kutta)\b/i;

function isAbusive(text: string): boolean {
  return abusivePattern.test(text);
}

export default function AIChatWidget() {
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "").replace(
    /\/$/,
    "",
  );
  const directOpenRouterKey = import.meta.env.VITE_OPENROUTER_API_KEY ?? "";
  const directModel = import.meta.env.VITE_OPENROUTER_MODEL ?? DEFAULT_MODEL;
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [wasAbusive, setWasAbusive] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(
    () => input.trim().length > 0 && !isLoading,
    [input, isLoading],
  );

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  async function submitMessage() {
    const content = input.trim();
    if (!content || isLoading) {
      return;
    }

    setInput("");

    // Frontend abuse guard mirrors backend behavior for immediate feedback.
    if (isAbusive(content)) {
      const nextUser: ChatMessage = { role: "user", content };
      const angryReply: ChatMessage = {
        role: "assistant",
        content: ABUSIVE_RESPONSE,
      };

      setMessages((prev) =>
        wasAbusive ? [nextUser, angryReply] : [...prev, nextUser, angryReply],
      );
      setWasAbusive(true);
      return;
    }

    const nextUser: ChatMessage = { role: "user", content };
    const freshStart = wasAbusive;
    const payloadMessages = freshStart ? [nextUser] : [...messages, nextUser];

    setMessages(payloadMessages);
    setWasAbusive(false);
    setIsLoading(true);

    if (
      !apiBaseUrl &&
      !directOpenRouterKey &&
      window.location.hostname.endsWith("github.io")
    ) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: GITHUB_PAGES_API_MESSAGE,
        },
      ]);
      setIsLoading(false);
      return;
    }

    try {
      let data: {
        reply?: string;
        error?: string;
        reasoning_details?: unknown;
      };

      if (apiBaseUrl) {
        const response = await fetch(`${apiBaseUrl}/api/chat`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: payloadMessages,
            freshStart,
          }),
        });

        try {
          data = (await response.json()) as {
            reply?: string;
            error?: string;
            reasoning_details?: unknown;
          };
        } catch {
          data = { error: "Unable to parse server response." };
        }

        if (!response.ok || !data.reply) {
          throw new Error(data.error ?? "Unable to process message");
        }
      } else {
        const openRouterResponse = await fetch(OPENROUTER_ENDPOINT, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${directOpenRouterKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
            "X-Title": "Asad Ullah Portfolio AI Assistant",
          },
          body: JSON.stringify({
            model: directModel,
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
              ...payloadMessages.map((message) =>
                message.role === "assistant" &&
                  typeof message.reasoning_details !== "undefined"
                  ? {
                    role: message.role,
                    content: message.content,
                    reasoning_details: message.reasoning_details,
                  }
                  : {
                    role: message.role,
                    content: message.content,
                  },
              ),
            ],
          }),
        });

        const openRouterData = (await openRouterResponse.json()) as {
          choices?: Array<{
            message?: {
              content?: string;
              reasoning_details?: unknown;
            };
          }>;
          error?: { message?: string };
        };

        if (!openRouterResponse.ok) {
          throw new Error(
            openRouterData.error?.message ??
            "OpenRouter request failed from frontend.",
          );
        }

        const assistantMessage = openRouterData.choices?.[0]?.message;
        data = {
          reply: assistantMessage?.content,
          reasoning_details: assistantMessage?.reasoning_details,
        };

        if (!data.reply) {
          throw new Error("No response was returned by OpenRouter.");
        }
      }

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.reply,
        reasoning_details: data.reasoning_details,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setWasAbusive(data.reply.trim() === ABUSIVE_RESPONSE);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: ERROR_MESSAGE,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      void submitMessage();
    }
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[70] sm:bottom-6 sm:right-6 print:hidden">
        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-14 w-14 rounded-full border border-primary/40 bg-background/95 shadow-[0_10px_35px_rgba(34,211,238,0.28)] backdrop-blur-md flex items-center justify-center text-primary hover:text-foreground transition-colors"
          aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed z-[65] bottom-24 right-4 w-[calc(100vw-2rem)] max-w-[390px] h-[65vh] max-h-[560px] rounded-xl border border-border/70 bg-card/95 backdrop-blur-md shadow-2xl overflow-hidden print:hidden sm:right-6"
          >
            <header className="h-14 px-4 border-b border-border/60 flex items-center justify-between bg-background/90">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="h-8 w-8 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary">
                  <Bot size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-display font-semibold text-foreground truncate">
                    Ask Asad AI
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    Portfolio Assistant
                  </p>
                </div>
              </div>
            </header>

            <div className="h-[calc(100%-7.6rem)] overflow-y-auto px-3.5 py-3.5 space-y-3 bg-background/40">
              {messages.length === 0 && (
                <div className="h-full min-h-40 flex items-center justify-center text-center px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ask about Asad's skills, projects, experience, or availability.
                  </p>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[86%] rounded-lg px-3 py-2.5 text-sm leading-relaxed border ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground border-primary/60"
                        : "bg-card text-foreground border-border/70"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1.5 opacity-75">
                      {message.role === "user" ? <User size={12} /> : <Bot size={12} />}
                      <span className="text-[10px] font-mono uppercase tracking-widest">
                        {message.role === "user" ? "You" : "Asad AI"}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap break-words">{message.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-lg px-3 py-2.5 bg-card border border-border/70 text-sm text-muted-foreground flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            <footer className="h-[4.6rem] border-t border-border/60 px-3 py-2.5 bg-background/90">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask about Asad's work..."
                  className="flex-1 h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <button
                  type="button"
                  onClick={() => {
                    void submitMessage();
                  }}
                  disabled={!canSend}
                  className="h-10 w-10 rounded-md border border-primary/45 bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-55 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
              <p className="mt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground text-right">
                Powered by AI
              </p>
            </footer>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}