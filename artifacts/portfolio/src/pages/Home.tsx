import HeroSection from "@/components/HeroSection";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Link } from "wouter";

const WHAT_I_DO = [
  {
    icon: "📱",
    title: "Flutter Development",
    desc: "Cross-platform apps for Android & iOS from a single codebase. Clean architecture, state management with GetX/Riverpod, 60fps performance.",
  },
  {
    icon: "🍎",
    title: "iOS · Swift / SwiftUI",
    desc: "Native iOS apps with Swift and SwiftUI — tight OS integration, smooth animations, App Store submission end-to-end.",
  },
  {
    icon: "⚛️",
    title: "React Native",
    desc: "JS-driven cross-platform mobile apps with React Native — reusing web expertise to ship mobile products faster.",
  },
  {
    icon: "🏗️",
    title: "Architecture & CI/CD",
    desc: "Clean Architecture, SOLID principles, automated pipelines (Azure DevOps, GitHub Actions), OTA update systems.",
  },
  {
    icon: "🔥",
    title: "Firebase & Backend",
    desc: "Real-time databases, push notifications, authentication, crash reporting. Custom Node.js / Express APIs when needed.",
  },
  {
    icon: "📦",
    title: "Open Source",
    desc: "Published Flutter packages on pub.dev — contributing tools that other developers use to ship faster.",
  },
];

const STATS = [
  { number: "3+", label: "Years Experience" },
  { number: "5", label: "Companies" },
  { number: "10+", label: "Apps Shipped" },
  { number: "1", label: "Flutter Package" },
];

const TECH_STACK = [
  "Flutter", "Dart", "Swift", "SwiftUI", "React Native",
  "Firebase", "GetX", "Riverpod", "BLoC", "Node.js",
  "REST APIs", "CI/CD", "Git", "PostgreSQL", "MongoDB",
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useSEO({
    title: "Asad Ullah — Mobile App Developer | Flutter · iOS · React Native",
    description: "Asad Ullah is a Mobile App Developer with 3+ years of experience in Flutter, iOS Swift/SwiftUI, and React Native. Based in Lahore, Pakistan.",
    path: "/",
  });
  return (
    <main data-testid="page-home">
      <HeroSection />

      {/* Stats bar */}
      <section className="border-y border-border/60 bg-card">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.07}>
              <p className="text-4xl font-bold font-display text-foreground">{s.number}</p>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-2">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* What I do */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            What I Do<span className="text-primary">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-5" />
          <p className="text-muted-foreground mt-5 max-w-xl">
            Specializing in mobile-first development — shipping polished, performant apps for real users.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {WHAT_I_DO.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <div className="h-full border border-border/60 rounded-sm p-6 bg-card hover:border-primary/30 transition-colors group">
                <span className="text-2xl mb-4 block">{item.icon}</span>
                <h3 className="text-base font-semibold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Tech stack marquee */}
      <section className="border-y border-border/60 bg-card overflow-hidden py-6">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
            <span key={i} className="text-sm font-mono text-muted-foreground px-4 py-1.5 border border-border/50 rounded-sm shrink-0">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Open source highlight */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Open Source<span className="text-primary">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-5" />
        </FadeIn>

        <FadeIn>
          <div className="border border-primary/30 rounded-sm p-8 bg-primary/5 hover:bg-primary/8 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm">
                    Flutter Package
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">pub.dev · MIT License</span>
                </div>
                <h3 className="text-xl font-bold font-display text-foreground">easypaisa_flutter</h3>
                <p className="text-muted-foreground text-sm mt-3 max-w-xl leading-relaxed">
                  A Flutter plugin for integrating Easypaisa — Pakistan's leading mobile payment gateway. Enables seamless Mobile Account (MA) transactions with a clean, idiomatic Dart API. Used by Flutter developers across Pakistan to add payment flows without dealing with Easypaisa's raw SDK.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Flutter", "Dart", "Payments", "Easypaisa", "Plugin"].map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 bg-secondary/60 text-muted-foreground border border-border/50 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="https://github.com/Asad06124/easypaisa_flutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs font-mono uppercase tracking-widest rounded-sm hover:opacity-80 transition-opacity"
                >
                  GitHub →
                </a>
                <a
                  href="https://pub.dev/packages/easypaisa_flutter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border border-border text-muted-foreground text-xs font-mono uppercase tracking-widest rounded-sm hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  pub.dev →
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Selected experience */}
      <section className="border-t border-border/60 bg-card">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn className="mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Experience<span className="text-primary">.</span>
            </h2>
            <div className="h-0.5 w-10 bg-primary mt-5" />
          </FadeIn>

          <div className="space-y-6">
            {[
              { role: "Flutter Developer", company: "RootPointers", period: "Jan 2025 – Present", location: "Lahore" },
              { role: "Flutter Developer", company: "BritSols", period: "Jun 2024 – Dec 2024", location: "London (Remote)" },
              { role: "Associate Flutter Developer", company: "Ride Options", period: "Aug 2023 – May 2024", location: "Lahore" },
              { role: "Junior Flutter Developer", company: "MicroProgramers", period: "Jun 2022 – Aug 2023", location: "Layyah" },
              { role: "Intern Flutter Developer", company: "MicroProgramers", period: "Mar 2022 – May 2022", location: "Layyah" },
            ].map((exp, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 border-b border-border/60 last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      <span className="text-primary/80">{exp.company}</span> · {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-10">
            <Link href="/experience">
              <span className="text-sm font-mono text-primary hover:underline cursor-pointer">
                View full experience →
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">
            Let's build something<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Open to full-time roles, freelance projects, and collaboration. Reach out — I reply fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:asadbalqani@gmail.com"
              className="px-8 py-3.5 bg-primary text-primary-foreground text-sm font-mono uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
            >
              Send an Email
            </a>
            <a
              href="https://linkedin.com/in/theasadsahir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-border text-muted-foreground text-sm font-mono uppercase tracking-widest rounded-sm hover:border-primary/40 hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
