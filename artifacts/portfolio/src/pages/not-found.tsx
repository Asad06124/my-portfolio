import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, FileText, Folder, Home, User } from "lucide-react";
import { Link } from "wouter";

const QUICK_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Resume", href: "/resume", icon: FileText },
];

export default function NotFound() {
  useSEO({
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
    path: "/404",
  });

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs text-primary/60 mb-6 tracking-widest"
      >
        ERROR_CODE: 404 - RESOURCE_NOT_FOUND
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative select-none mb-6"
      >
        <span
          className="absolute inset-0 font-display font-bold text-[8rem] sm:text-[12rem] md:text-[16rem] leading-none tracking-tighter"
          style={{
            WebkitTextStroke: "1px rgba(34,211,238,0.15)",
            color: "transparent",
            transform: "translate(3px, 3px)",
            userSelect: "none",
          }}
          aria-hidden
        >
          404
        </span>
        <span className="relative font-display font-bold text-[8rem] sm:text-[12rem] md:text-[16rem] leading-none tracking-tighter text-foreground">
          4<span className="text-primary">0</span>4
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-3">
          Page not found<span className="text-primary">.</span>
        </h1>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed font-mono">
          The page you're looking for doesn't exist or has been moved.
          <br />
          Here are some places you can go instead.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.32 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {QUICK_LINKS.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 + i * 0.07 }}
            >
              <Link href={link.href}>
                <span className="flex items-center gap-2 px-4 py-2.5 border border-border/60 rounded-sm text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer">
                  <Icon size={12} className="text-primary/70" />
                  {link.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        <Link href="/">
          <motion.span
            whileHover={{ x: -3 }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft size={13} />
            Back to Home
          </motion.span>
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 font-mono text-xs text-primary/30 hidden md:block"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity }}
      >
        _
      </motion.div>
    </main>
  );
}
