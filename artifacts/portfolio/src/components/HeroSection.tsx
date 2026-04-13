import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

function GeometricOrb() {
  return (
    <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 pointer-events-none">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: "1px solid rgba(34,211,238,0.35)",
            boxShadow: "0 0 60px rgba(34,211,238,0.08) inset",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-6"
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: "1px solid rgba(34,211,238,0.25)",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-12"
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-full h-full"
          style={{
            border: "1px solid rgba(34,211,238,0.18)",
            transform: "rotate(45deg)",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 40%, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.04) 60%, transparent 100%)",
            boxShadow: "0 0 40px rgba(34,211,238,0.12)",
          }}
        />
      </motion.div>
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: "rgba(34,211,238,0.7)",
            top: "50%",
            left: "50%",
            transformOrigin: "0 0",
            boxShadow: "0 0 6px rgba(34,211,238,0.8)",
          }}
          animate={{
            rotate: [deg, deg + 360],
            x: [
              Math.cos((deg * Math.PI) / 180) * 130,
              Math.cos(((deg + 360) * Math.PI) / 180) * 130,
            ],
            y: [
              Math.sin((deg * Math.PI) / 180) * 130,
              Math.sin(((deg + 360) * Math.PI) / 180) * 130,
            ],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background"
      data-testid="section-hero"
    >
      <GeometricOrb />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary tracking-widest uppercase text-sm font-mono mb-4">
            // Based in Lahore, Pakistan
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 tracking-tight">
            Asad Ullah<span className="text-primary">.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 max-w-2xl leading-snug">
            Senior Mobile App Developer crafting precise, high-performance applications.
          </h2>

          <div className="flex items-center gap-6 mt-12">
            <motion.a
              whileHover={{ x: 5 }}
              href="#contact"
              className="text-white border-b border-primary/50 hover:border-primary pb-1 flex items-center gap-2 transition-colors uppercase tracking-widest text-xs font-mono"
              data-testid="link-get-in-touch"
            >
              Get in touch
              <span className="text-primary">→</span>
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="#experience"
              className="text-muted-foreground hover:text-white border-b border-transparent hover:border-white/30 pb-1 flex items-center gap-2 transition-colors uppercase tracking-widest text-xs font-mono"
              data-testid="link-view-work"
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
