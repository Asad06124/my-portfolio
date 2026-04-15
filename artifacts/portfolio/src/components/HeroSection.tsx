import { motion } from "framer-motion";
import { Link } from "wouter";

function Dot({ size = 10, glow = true }: { size?: number; glow?: boolean }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(34,211,238,1)",
        boxShadow: glow ? "0 0 8px 2px rgba(34,211,238,0.8)" : undefined,
        position: "absolute",
        top: -(size / 2),
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />
  );
}

function ProfileOrb() {
  return (
    <div
      className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0 pointer-events-none select-none"
    >
      {/* Outer ring — rotates CW — 1 large dot at top, 1 small dot ~240° */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{ border: "1.5px solid rgba(34,211,238,0.35)" }}
      >
        <Dot size={10} />
        {/* Second dot rotated 240° on this ring — wrap in a rotated div */}
        <div style={{ position: "absolute", inset: 0, rotate: "240deg" }}>
          <Dot size={6} glow={false} />
        </div>
      </motion.div>

      {/* Middle ring — rotates CCW — 1 dot at top, 1 at 150° */}
      <motion.div
        className="absolute inset-6 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ border: "1px solid rgba(34,211,238,0.22)" }}
      >
        <Dot size={8} />
        <div style={{ position: "absolute", inset: 0, rotate: "150deg" }}>
          <Dot size={5} glow={false} />
        </div>
      </motion.div>

      {/* Inner decorative ring — slow CW — 1 tiny dot */}
      <motion.div
        className="absolute inset-12 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ border: "1px dashed rgba(34,211,238,0.12)" }}
      >
        <Dot size={4} glow={false} />
      </motion.div>

      {/* Profile photo */}
      <div
        className="absolute inset-10 rounded-full overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1.5px rgba(34,211,238,0.3), 0 0 40px rgba(34,211,238,0.1)",
        }}
      >
        <img
          src="/asad.jpg"
          alt="Asad Ullah"
          className="w-full h-full object-cover object-top"
          style={{
            filter: "contrast(1.05) brightness(0.93)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, transparent 55%, rgba(10,13,20,0.7) 100%)",
          }}
        />
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
              // Mobile Developer · Lahore, Pakistan
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
                href="mailto:asadbalqani@gmail.com"
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
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-mono">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
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