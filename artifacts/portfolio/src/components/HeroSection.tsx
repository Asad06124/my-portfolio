import { motion } from "framer-motion";
import { Link } from "wouter";

function ProfileOrb() {
  return (
    <div className="absolute right-[4%] md:right-[8%] top-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 pointer-events-none select-none">
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ border: "1px solid rgba(34,211,238,0.3)" }}
      />
      <motion.div
        className="absolute inset-5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={{ border: "1px solid rgba(34,211,238,0.18)" }}
      />

      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const r = 128;
        return (
          <motion.div
            key={deg}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "rgba(34,211,238,0.7)",
              top: "50%",
              left: "50%",
              marginTop: -3,
              marginLeft: -3,
              boxShadow: "0 0 6px rgba(34,211,238,0.7)",
            }}
            animate={{
              x: [Math.cos(rad) * r, Math.cos(rad + Math.PI * 2) * r],
              y: [Math.sin(rad) * r, Math.sin(rad + Math.PI * 2) * r],
            }}
            transition={{
              duration: 14 + i * 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}

      <div
        className="absolute inset-10 rounded-full overflow-hidden"
        style={{
          boxShadow: "0 0 0 1px rgba(34,211,238,0.25), 0 0 40px rgba(34,211,238,0.08)",
        }}
      >
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: "radial-gradient(circle at center, transparent 60%, var(--tw-bg, rgba(0,0,0,0.5)) 100%)",
          }}
        >
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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <ProfileOrb />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary tracking-widest uppercase text-xs font-mono mb-4">
            // Senior Mobile Developer · Lahore, Pakistan
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-foreground mb-5 tracking-tight">
            Asad Ullah<span className="text-primary">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-xl leading-relaxed">
            3+ years building cross-platform mobile apps — Flutter, iOS Swift, React Native.
          </h2>

          <div className="flex items-center flex-wrap gap-6">
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

          <div className="mt-14 flex flex-wrap gap-10 md:gap-16">
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
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
