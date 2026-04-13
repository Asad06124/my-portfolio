import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Dart (Advanced OOP)", "JavaScript", "Swift", "Kotlin"],
  },
  {
    title: "Frameworks",
    skills: ["Flutter SDK", "SwiftUI", "React Native", "Node.js", "Express.js"],
  },
  {
    title: "State Management",
    skills: ["GetX", "Riverpod", "Provider", "BLoC Pattern"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "GitHub / GitLab", "Azure DevOps", "Firebase", "REST APIs", "MongoDB", "PostgreSQL", "CI/CD Pipelines", "OTA Updates"],
  },
  {
    title: "Platforms",
    skills: ["Android", "iOS", "Play Store", "App Store Connect", "TestFlight"],
  },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
        {title}<span className="text-primary">.</span>
      </h2>
      <div className="h-0.5 w-10 bg-primary mt-5" />
    </motion.div>
  );
}

export default function AboutPage() {
  useSEO({
    title: "About — Asad Ullah",
    description: "Learn about Asad Ullah — a Senior Mobile Developer from Lahore, Pakistan with 3+ years building Flutter, iOS, and React Native apps.",
    path: "/about",
  });
  return (
    <main className="pt-28 pb-24 max-w-5xl mx-auto px-6 space-y-28" data-testid="page-about">
      <section>
        <SectionHeader title="About Me" />
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-56 h-56 md:w-64 md:h-64"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden border border-border">
                <img
                  src="/asad.jpg"
                  alt="Asad Ullah"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="absolute -inset-2 rounded-xl border border-primary/20 -z-10"
                style={{ transform: "rotate(3deg)" }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-5 text-muted-foreground text-base leading-relaxed"
          >
            <p>
              I'm a <span className="text-foreground font-medium">Senior Mobile Developer</span> based in Lahore, Pakistan, with 3+ years of hands-on experience building and shipping apps in Flutter, iOS (Swift/SwiftUI), and React Native.
            </p>
            <p>
              My work spans healthcare, e-commerce, ride-sharing, and enterprise platforms — typically taking ownership of features end-to-end, from architecture and API design to App Store submission.
            </p>
            <p>
              Beyond client work, I contribute to the Flutter open-source ecosystem and believe in writing clean, modular code that scales without drama.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Location", value: "Model Town, Lahore" },
                { label: "Experience", value: "3+ Years" },
                { label: "Education", value: "BS Computer Science, GCUF (2023)" },
                { label: "Focus", value: "Flutter · iOS · React Native" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-primary/30 pl-3 py-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section data-testid="section-skills">
        <SectionHeader title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary/60 text-muted-foreground border border-border/50 hover:text-foreground hover:border-primary/40 transition-colors rounded-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
