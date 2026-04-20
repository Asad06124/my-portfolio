import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, LoaderCircle, Send, User, WifiOff } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { askOfflineAssistant, preloadOfflineAssistant } from "@/lib/offlineAssistant";

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

export default function AssistantPage() {
  useSEO({
    title: "Asad AI Assistant — Offline",
    description:
      "Ask Asad AI anything about experience, projects, skills, and contact details. Runs fully in-browser with local offline inference.",
    path: "/assistant"
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: createId(),
      role: "assistant",
      text: "I am Asad AI. Ask me anything about my skills, projects, experience, or how to contact me."
    }
  ]);
  const [input, setInput] = useState("");
  const [modelReady, setModelReady] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [statusText, setStatusText] = useState("Preparing offline model...");
  const [thinking, setThinking] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);

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
          setModelError("Offline model failed to load. Refresh and try again.");
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
  }, [messages, thinking]);

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
      await new Promise((resolve) => window.setTimeout(resolve, 10));
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
      const fallbackText = "I could not process that right now on-device. Please try again in a moment.";
      await streamAssistantMessage(assistantPlaceholder.id, fallbackText);
    } finally {
      setThinking(false);
    }
  }

  return (
    <main className="pt-24 pb-24 max-w-5xl mx-auto px-6" data-testid="page-assistant">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Asad AI Assistant<span className="text-primary">.</span>
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          Fully in-browser assistant. No backend API. No server round-trips. Responses are generated locally using an offline model and your portfolio knowledge.
        </p>
      </motion.section>

      <section className="border border-border/60 rounded-lg bg-card overflow-hidden">
        <div className="px-5 py-4 border-b border-border/60 flex flex-wrap items-center gap-3 justify-between">
          <div className="flex items-center gap-2 text-sm">
            <WifiOff size={15} className="text-primary" />
            <span className="font-mono uppercase tracking-wider text-muted-foreground">Offline Mode</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            {!modelReady && !modelError && <LoaderCircle size={13} className="animate-spin" />}
            <span>{statusText}</span>
          </div>
        </div>

        {!modelReady && !modelError && (
          <div className="px-5 py-3 border-b border-border/60 bg-secondary/40">
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <p className="text-xs font-mono text-muted-foreground mt-2">
              First load may take a bit. After caching, it starts much faster.
            </p>
          </div>
        )}

        {modelError && (
          <div className="px-5 py-3 border-b border-border/60 bg-red-500/10 text-red-300 text-sm">
            {modelError}
          </div>
        )}

        <div ref={listRef} className="h-[55vh] min-h-[380px] overflow-y-auto px-4 py-5 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Bot size={14} />
                </div>
              )}

              <div
                className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground border border-border/50"
                }`}
              >
                {message.text || (thinking && message.role === "assistant" ? "Thinking..." : "")}
              </div>

              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-foreground/10 border border-border text-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <User size={14} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="px-4 pb-4 pt-2 border-t border-border/60">
          <div className="flex flex-wrap gap-2 mb-3">
            {STARTER_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => void handleAsk(prompt)}
                disabled={thinking || !modelReady}
                className="px-3 py-1.5 text-xs font-mono rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={modelReady ? "Ask me anything..." : "Loading offline model..."}
              disabled={!modelReady || thinking}
              className="flex-1 h-11 rounded-full border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!canSend || !modelReady}
              className="h-11 px-5 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider disabled:opacity-55 disabled:cursor-not-allowed hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              {thinking ? <LoaderCircle size={14} className="animate-spin" /> : <Send size={14} />}
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
