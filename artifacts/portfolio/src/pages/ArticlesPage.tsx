import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { Bell, Rss, BookOpen } from "lucide-react";
import { useState } from "react";

const UPCOMING_TOPICS = [
  {
    emoji: "📱",
    title: "Flutter Performance Deep Dive",
    desc: "Profiling, rendering optimisation, and squeezing every frame on low-end Android.",
  },
  {
    emoji: "🏗️",
    title: "Clean Architecture in Flutter",
    desc: "How I structure large Flutter apps so features stay isolated and testable.",
  },
  {
    emoji: "🍎",
    title: "Swift → Flutter: What I Learned",
    desc: "Bridging the mental model gap between native iOS and cross-platform development.",
  },
  {
    emoji: "🔌",
    title: "Building a Flutter Plugin from Scratch",
    desc: "From platform channels to pub.dev publication — the full journey of easypaisa_flutter.",
  },
  {
    emoji: "⚡",
    title: "CI/CD for Mobile Apps",
    desc: "Automating builds, tests, and releases for Flutter and iOS with GitHub Actions.",
  },
  {
    emoji: "🧩",
    title: "State Management Compared",
    desc: "GetX vs Riverpod vs BLoC — when to use each and why I keep switching.",
  },
];

export default function ArticlesPage() {
  useSEO({
    title: "Articles — Coming Soon",
    description: "Asad Ullah's upcoming technical blog covering Flutter, iOS, React Native, and mobile engineering best practices.",
    path: "/articles",
  });

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <main className="pt-28 pb-24 max-w-5xl mx-auto px-6" data-testid="page-articles">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-mono text-primary mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
          Coming Soon
        </div>

        <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6 tracking-tight">
          Articles<span className="text-primary">.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
          A technical blog about mobile engineering — Flutter, iOS, architecture patterns, and lessons from shipping real apps.
        </p>

        <div className="flex items-center justify-center gap-6 mt-8 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen size={13} className="text-primary/60" />
            In-depth guides
          </div>
          <div className="flex items-center gap-2">
            <Rss size={13} className="text-primary/60" />
            Regular updates
          </div>
        </div>
      </motion.div>

      {/* Notify form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="max-w-md mx-auto mb-24"
      >
        <div className="border border-border/60 rounded-sm bg-card p-8 text-center">
          <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4 border border-primary/20">
            <Bell size={20} className="text-primary" />
          </div>
          <h3 className="text-lg font-semibold font-display text-foreground mb-2">
            Get notified when I publish
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Drop your email and I'll let you know when the first article goes live.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-3 px-4 bg-primary/10 border border-primary/20 rounded-sm text-sm text-primary font-mono"
            >
              ✓ You're on the list. I'll reach out soon!
            </motion.div>
          ) : (
            <form onSubmit={handleNotify} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 min-w-0 px-3 py-2.5 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </motion.div>

      {/* Upcoming topics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Topics I'm planning to write about
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {UPCOMING_TOPICS.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className="border border-border/50 rounded-sm p-5 bg-card hover:border-primary/25 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-2 py-0.5 bg-secondary/60 text-xs font-mono text-muted-foreground border-b border-l border-border/40 rounded-bl-sm">
                Draft
              </div>
              <span className="text-2xl mb-3 block">{topic.emoji}</span>
              <h3 className="text-sm font-semibold font-display text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                {topic.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
