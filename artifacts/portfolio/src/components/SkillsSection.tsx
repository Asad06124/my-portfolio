import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Dart (Advanced OOP)", "JavaScript", "Kotlin", "Swift"]
  },
  {
    title: "Frameworks",
    skills: ["Flutter SDK", "Node.js", "Express.js", "Next.js (Learning)", "SwiftUI", "React Native"]
  },
  {
    title: "State Management",
    skills: ["GetX", "Riverpod", "Provider", "BLoC Pattern"]
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "GitHub/GitLab", "Azure DevOps", "Firebase", "REST APIs", "MongoDB", "PostgreSQL", "OTA Updates", "CI/CD Pipelines"]
  },
  {
    title: "Platforms",
    skills: ["Android", "iOS", "Play Store", "TestFlight", "App Store Connect"]
  }
];

export default function SkillsSection() {
  return (
    <section className="relative" data-testid="section-skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
          Technical Arsenal<span className="text-primary">.</span>
        </h2>
        <div className="h-1 w-12 bg-primary mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-medium text-white mb-4 font-display uppercase tracking-wider text-sm border-b border-border pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary/30 text-muted-foreground border border-border/50 text-sm hover:text-white hover:border-primary/50 transition-colors rounded-sm cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: SKILL_CATEGORIES.length * 0.1 }}
            className="flex flex-col md:col-span-2 mt-8 p-6 bg-secondary/20 border border-border rounded-sm"
          >
            <h3 className="text-lg font-medium text-white mb-2 font-display uppercase tracking-wider text-sm">
              Education
            </h3>
            <p className="text-muted-foreground">
              <span className="text-white">Bachelor of Science in Computer Science</span> <span className="text-primary mx-2">|</span> GCUF (2023)
            </p>
        </motion.div>
      </div>
    </section>
  );
}
