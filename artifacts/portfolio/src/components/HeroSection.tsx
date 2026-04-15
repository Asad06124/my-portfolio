import { motion } from "framer-motion";
import { Link } from "wouter";

function ProfileOrb() {
  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0 pointer-events-none select-none">
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          background: "conic-gradient(from 0deg, rgba(34,211,238,0.75), rgba(34,211,238,0.08) 22%, rgba(34,211,238,0.08) 78%, rgba(34,211,238,0.75))",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))",
        }}
      />
      <motion.div
        className="absolute inset-5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={{
          background: "conic-gradient(from 0deg, rgba(34,211,238,0.6), rgba(34,211,238,0.06) 25%, rgba(34,211,238,0.06) 75%, rgba(34,211,238,0.6))",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))",
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="absolute top-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ background: "rgba(34,211,238,0.95)", boxShadow: "0 0 8px rgba(34,211,238,0.8)" }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-5"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ background: "rgba(34,211,238,0.85)", boxShadow: "0 0 7px rgba(34,211,238,0.6)" }}
        />
      </motion.div>

      <div
        className="absolute inset-10 rounded-full overflow-hidden"
        style={{
          boxShadow: "0 0 0 1px rgba(34,211,238,0.25), 0 0 40px rgba(34,211,238,0.08)",
        }}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <img
            src="/asad.jpg"
            alt="Asad Ullah"
            className="w-full h-full object-cover object-top"
            style={{ mixBlendMode: "luminosity", filter: "contrast(1.05) brightness(0.92)" }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at center, transparent 55%, rgba(14,17,23,0.85) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-8">

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 min-w-0"
          >
            <p className="text-primary tracking-widest uppercase text-xs font-mono mb-4">
              // Senior Mobile Developer · Lahore, Pakistan
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-foreground mb-5 tracking-tight">
              Asad Ullah<span className="text-primary">.</span>
            </h1>
            <h2 className="text-lg md:text-2xl text-muted-foreground font-light mb-10 max-w-xl leading-relaxed">
              3+ years building cross-platform mobile apps — Flutter, iOS Swift, React Native.
            </h2>

            <div className="flex items-center flex-wrap gap-5">
              <Link href="/resume">
                <motion.span
                  whileHover={{ y: -2 }}
                  className="px-6 py-3 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest cursor-pointer rounded-sm hover:opacity-90 transition-opacity inline-block"
                  data-testid="link-view-resume"
                >
                  View Resume
                </motion.span>
              </Link>

              <Link href="/projects">
                <motion.span
                  whileHover={{ x: 4 }}
                  className="text-muted-foreground hover:text-foreground border-b border-transparent hover:border-border pb-0.5 flex items-center gap-2 transition-colors uppercase tracking-widest text-xs font-mono cursor-pointer"
                >
                  My Work <span className="text-primary">→</span>
                </motion.span>
              </Link>

              <a
                href="mailto:theasadsahir@gmail.com"
                className="text-muted-foreground hover:text-foreground border-b border-transparent hover:border-border pb-0.5 transition-colors uppercase tracking-widest text-xs font-mono"
              >
                Contact
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 md:gap-14">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "5", label: "Companies" },
                { number: "1", label: "Flutter Package" },
                { number: "∞", label: "Lines Shipped" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold font-display text-foreground">{stat.number}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-mono">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile orb — centered on mobile, right-aligned on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center md:justify-end shrink-0"
          >
            <ProfileOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
