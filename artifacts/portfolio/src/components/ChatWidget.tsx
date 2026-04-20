import { askOfflineAssistant, preloadOfflineAssistant } from "@/lib/offlineAssistant";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, LoaderCircle, MessageCircle, Send, User, WifiOff, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

const STARTER_PROMPTS = [
  "Tell me about your Flutter experience",
  "What projects have you built?",
  "How can I contact you?",
  "Are you available for freelance work?"
];

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function ThinkingDots() {
  return (
    <div className="inline-flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/80 animate-[pulse_1s_ease-in-out_infinite]" />
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/80 animate-[pulse_1s_ease-in-out_0.2s_infinite]" />
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/80 animate-[pulse_1s_ease-in-out_0.4s_infinite]" />
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: createId(),
      role: "assistant",
      text: "Hi, I am Asad AI. Ask me about my projects, experience, skills, or how we can work together."
    }
  ]);
  const [input, setInput] = useState("");
  const [modelReady, setModelReady] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [statusText, setStatusText] = useState("Preparing offline model...");
  const [thinking, setThinking] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    preloadOfflineAssistant((update) => {
      if (cancelled) {
        return;
      }

      setLoadProgress(Math.max(0, Math.min(1, update.progress)));
      setStatusText(update.status || "Preparing offline model...");
    })
      .then(() => {
        if (!cancelled) {
          setModelReady(true);
          setStatusText("Offline model ready");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setModelError("Offline model failed to load.");
          setStatusText("Model load failed");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!listRef.current) {
      return;
    }

    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, thinking, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const canSend = useMemo(() => {
    return input.trim().length > 0 && !thinking;
  }, [input, thinking]);

  async function streamAssistantMessage(id: string, fullText: string) {
    const chars = [...fullText];
    let visible = "";

    for (let i = 0; i < chars.length; i += 1) {
      visible += chars[i];
      setMessages((prev) =>
        prev.map((message) => (message.id === id ? { ...message, text: visible } : message))
      );
      await new Promise((resolve) => window.setTimeout(resolve, 9));
    }
  }

  async function handleAsk(questionRaw: string) {
    const question = questionRaw.trim();

    if (!question || thinking) {
      return;
    }

    const userMessage: ChatMessage = { id: createId(), role: "user", text: question };
    const assistantPlaceholder: ChatMessage = { id: createId(), role: "assistant", text: "" };

    setInput("");
    setThinking(true);
    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);

    const historyForModel = messages.map((message) => ({
      role: message.role,
      text: message.text
    }));

    try {
      const result = await askOfflineAssistant(question, historyForModel);
      await streamAssistantMessage(assistantPlaceholder.id, result.answer);
    } catch {
      await streamAssistantMessage(
        assistantPlaceholder.id,
        "I could not process that right now on-device. Please try again in a moment."
      );
    } finally {
      setThinking(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed right-4 bottom-4 sm:right-5 sm:bottom-5 z-40 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 px-4 h-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider hover:opacity-90 transition-opacity print:hidden"
        aria-label="Toggle Asad AI chat"
      >
        <MessageCircle size={15} />
        Ask Asad
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 right-3 bottom-20 sm:right-5 w-[calc(100vw-1.5rem)] sm:w-[420px] max-w-[420px] rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/40 print:hidden overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-border/60 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center shrink-0">
                  <Bot size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold font-display truncate">Asad AI</p>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground uppercase tracking-wider truncate">
                    <WifiOff size={11} className="text-primary" />
                    <span>{statusText}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                aria-label="Close chat"
              >
                <X size={15} />
              </button>
            </div>

            {!modelReady && !modelError && (
              <div className="px-4 py-2 border-b border-border/60 bg-secondary/30">
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${Math.round(loadProgress * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {modelError && (
              <div className="px-4 py-2 border-b border-border/60 bg-red-500/10 text-red-300 text-xs font-mono">
                {modelError}
              </div>
            )}

            <div ref={listRef} className="h-[380px] overflow-y-auto px-3 py-3 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={12} />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/70 text-foreground border border-border/50"
                    }`}
                  >
                    {message.text || (thinking && message.role === "assistant" ? <ThinkingDots /> : "")}
                  </div>

                  {message.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-foreground/10 border border-border text-foreground flex items-center justify-center shrink-0 mt-0.5">
                      <User size={12} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-3 pb-3 pt-2 border-t border-border/60">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {STARTER_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void handleAsk(prompt)}
                    disabled={thinking || !modelReady}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  void handleAsk(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={modelReady ? "Ask anything about Asad..." : "Loading offline model..."}
                  disabled={!modelReady || thinking}
                  className="flex-1 h-10 rounded-full border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/40 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!canSend || !modelReady}
                  className="h-10 px-4 rounded-full bg-primary text-primary-foreground text-[11px] font-mono uppercase tracking-wider disabled:opacity-55 disabled:cursor-not-allowed hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  {thinking ? <LoaderCircle size={13} className="animate-spin" /> : <Send size={13} />}
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
