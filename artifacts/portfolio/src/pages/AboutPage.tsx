import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";

const SKILL_GROUPS = [
  {
    title: "Primary Frameworks",
    skills: [
      { name: "Flutter / Dart",   level: 95, tag: "Expert" },
      { name: "iOS · Swift / SwiftUI", level: 80, tag: "Advanced" },
      { name: "React Native",     level: 72, tag: "Advanced" },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "GetX",      level: 95, tag: "Expert" },
      { name: "Riverpod",  level: 82, tag: "Advanced" },
      { name: "BLoC",      level: 75, tag: "Advanced" },
      { name: "Provider",  level: 78, tag: "Advanced" },
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "Firebase",      level: 85, tag: "Advanced" },
      { name: "Node.js / Express", level: 68, tag: "Proficient" },
      { name: "REST APIs",     level: 90, tag: "Expert" },
      { name: "CI/CD Pipelines", level: 80, tag: "Advanced" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub",           level: 92, tag: "Expert" },
      { name: "App Store / Play Store", level: 88, tag: "Advanced" },
      { name: "Azure DevOps",           level: 75, tag: "Advanced" },
      { name: "PostgreSQL / MongoDB",   level: 65, tag: "Proficient" },
    ],
  },
];

const LEVEL_COLORS: Record<string, string> = {
  Expert:     "text-primary border-primary/30 bg-primary/10",
  Advanced:   "text-blue-400 border-blue-400/30 bg-blue-400/10",
  Proficient: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  Learning:   "text-muted-foreground border-border bg-secondary/40",
};

const BAR_COLORS: Record<string, string> = {
  Expert:     "bg-primary",
  Advanced:   "bg-blue-400",
  Proficient: "bg-yellow-400",
  Learning:   "bg-muted-foreground",
};

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

      {/* About Me */}
      <section>
        <SectionHeader title="About Me" />
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="hidden md:flex md:col-span-2 justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-56 h-56 md:w-64 md:h-64"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden border border-border">
                <img src="/asad.jpg" alt="Asad Ullah" className="w-full h-full object-cover object-top" />
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
                { label: "Location",   value: "Model Town, Lahore" },
                { label: "Experience", value: "3+ Years" },
                { label: "Education",  value: "BS Computer Science, GCUF (2023)" },
                { label: "Focus",      value: "Flutter · iOS · React Native" },
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

      {/* Technical Skills — visual */}
      <section data-testid="section-skills">
        <SectionHeader title="Technical Skills" />

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-10">
          {Object.entries(LEVEL_COLORS).map(([label, cls]) => (
            <span key={label} className={`text-xs font-mono px-2.5 py-1 rounded-sm border ${cls}`}>
              {label}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {SKILL_GROUPS.map((group, gIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gIdx * 0.08 }}
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-5">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gIdx * 0.06 + sIdx * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm border ${LEVEL_COLORS[skill.tag]}`}>
                        {skill.tag}
                      </span>
                    </div>
                    <div className="h-1 bg-secondary/60 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${BAR_COLORS[skill.tag]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: gIdx * 0.06 + sIdx * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
