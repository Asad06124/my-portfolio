import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

/* ── Typewriter hook ── */
function useTypewriter(text: string, speed = 28, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ── One terminal line ── */
function TermLine({
  prefix,
  text,
  color = "text-foreground",
  delay = 0,
  speed = 22,
  onDone,
}: {
  prefix?: string;
  text: string;
  color?: string;
  delay?: number;
  speed?: number;
  onDone?: () => void;
}) {
  const { displayed, done } = useTypewriter(text, speed, delay);

  useEffect(() => {
    if (done && onDone) onDone();
  }, [done, onDone]);

  return (
    <div className="flex gap-2 leading-relaxed">
      {prefix && <span className="text-primary shrink-0 select-none">{prefix}</span>}
      <span className={color}>
        {displayed}
        {!done && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-primary align-middle ml-0.5"
          />
        )}
      </span>
    </div>
  );
}

const NAV_CMDS = [
  { cmd: "cd ~/home",         href: "/" },
  { cmd: "open /about",       href: "/about" },
  { cmd: "cat projects.md",   href: "/projects" },
  { cmd: "less resume.pdf",   href: "/resume" },
];

/* ── Build the terminal script based on the bad path ── */
function buildScript(path: string) {
  return [
    { prefix: "$", text: `curl https://asadullah.dev${path}`, color: "text-foreground", speed: 30 },
    { prefix: ">", text: "Resolving host...", color: "text-muted-foreground", speed: 18 },
    { prefix: ">", text: "Connecting... 200 OK", color: "text-muted-foreground", speed: 18 },
    { prefix: ">", text: "Fetching route...", color: "text-muted-foreground", speed: 18 },
    { prefix: "✗", text: `RouteNotFoundError: Cannot GET ${path}`, color: "text-red-400", speed: 20 },
    { prefix: " ", text: `  at Router.resolve (router.ts:142:7)`, color: "text-red-400/60", speed: 14 },
    { prefix: " ", text: `  at App.navigate (index.tsx:88:3)`, color: "text-red-400/60", speed: 14 },
    { prefix: "$", text: "node --inspect debug.js", color: "text-foreground", speed: 28 },
    { prefix: ">", text: "Scanning registered routes...", color: "text-muted-foreground", speed: 16 },
    { prefix: ">", text: "[ /, /about, /experience, /projects, /resume, /articles ]", color: "text-primary/80", speed: 12 },
    { prefix: ">", text: `No match for "${path}" — 0 of 6 routes`, color: "text-yellow-400", speed: 16 },
    { prefix: "$", text: "git stash && git checkout main", color: "text-foreground", speed: 28 },
    { prefix: ">", text: "Switching to a valid page... where would you like to go?", color: "text-green-400", speed: 18 },
  ];
}

export default function NotFound() {
  useSEO({
    title: "404 — Page Not Found",
    description: "The page you are looking for does not exist.",
    path: "/404",
  });

  const [location] = useLocation();
  const script = buildScript(location);

  const [step, setStep] = useState(0);
  const [showNav, setShowNav] = useState(false);

  function advance() {
    setStep((s) => {
      const next = s + 1;
      if (next >= script.length) setShowNav(true);
      return Math.min(next, script.length);
    });
  }

  /* cumulative delay per line so each line starts after the previous */
  const delays: number[] = [];
  let acc = 0;
  for (const line of script) {
    delays.push(acc + 120);
    acc += line.text.length * (line.speed ?? 22) + 320;
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 pt-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="w-full max-w-2xl"
      >
        {/* Terminal window chrome */}
        <div className="bg-[#0d1117] border border-border/70 rounded-lg overflow-hidden shadow-2xl shadow-black/60">

          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-border/60">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="flex-1 text-center text-xs font-mono text-muted-foreground/60 select-none">
              asad@portfolio: ~{location}
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-7 font-mono text-sm space-y-1.5 min-h-[380px]">

            {script.slice(0, step + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {i < step ? (
                  /* Already-finished lines show instantly */
                  <div className="flex gap-2 leading-relaxed">
                    {line.prefix && (
                      <span
                        className={`shrink-0 select-none ${
                          line.prefix === "✗"
                            ? "text-red-400"
                            : line.prefix === "$"
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {line.prefix}
                      </span>
                    )}
                    <span className={line.color}>{line.text}</span>
                  </div>
                ) : (
                  /* Current line types out */
                  <TermLine
                    prefix={line.prefix}
                    text={line.text}
                    color={line.color}
                    speed={line.speed}
                    delay={0}
                    onDone={advance}
                  />
                )}
              </motion.div>
            ))}

            {/* Navigation commands */}
            <AnimatePresence>
              {showNav && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4 space-y-2"
                >
                  {NAV_CMDS.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.1 }}
                    >
                      <Link href={item.href}>
                        <span className="flex items-center gap-2 group cursor-pointer w-fit">
                          <span className="text-primary group-hover:text-primary/70 transition-colors">$</span>
                          <span className="text-foreground group-hover:text-primary transition-colors underline-offset-2 group-hover:underline">
                            {item.cmd}
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Blinking prompt */}
                  <div className="flex gap-2 pt-1">
                    <span className="text-primary">$</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-primary align-middle"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Skip button */}
        {!showNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-5"
          >
            <button
              onClick={() => { setStep(script.length); setShowNav(true); }}
              className="text-xs font-mono text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-pointer"
            >
              skip animation →
            </button>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
