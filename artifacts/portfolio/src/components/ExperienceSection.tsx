import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Senior Flutter Developer",
    company: "RootPointers",
    location: "Lahore",
    period: "Jan 2025 – Present",
    highlights: [
      "Architected and deployed enterprise OTA update delivery system",
      "Implemented automated CI/CD pipelines reducing release cycle time by 40%",
      "Engineered real-time chat, ticketing, and communication modules (Firebase + REST APIs, 1000+ concurrent users)",
      "Designed modular Clean Architecture with GetX, reducing feature dev time by 30%",
      "Led cross-platform deployment strategy for Android and iOS"
    ]
  },
  {
    role: "Flutter Developer",
    company: "BritSols",
    location: "London (Remote), UK",
    period: "June 2024 – Dec 2024",
    highlights: [
      "Delivered production Flutter apps with custom Node.js backend APIs",
      "Optimized for 60fps rendering, reduced startup time by 25%",
      "Collaborated with UK-based leads in Agile environment"
    ]
  },
  {
    role: "Associate Flutter Developer",
    company: "Ride Options",
    location: "Lahore",
    period: "August 2023 – May 2024",
    highlights: [
      "Developed real-time chat, GPS-based map integrations, and service booking for ride-sharing platform",
      "Refactored legacy codebase improving stability by 35%",
      "Implemented data security and encryption standards",
      "Established coding standards across 4-person team"
    ]
  },
  {
    role: "Junior Flutter Developer",
    company: "MicroProgramers",
    location: "Layyah",
    period: "June 2022 – August 2023",
    highlights: [
      "Built reusable Flutter UI component library reducing dev time by 20%",
      "Participated in Agile ceremonies",
      "Maintained 95% code coverage on critical modules"
    ]
  },
  {
    role: "Intern Flutter Developer",
    company: "MicroProgramers",
    location: "Layyah",
    period: "March 2022 – May 2022",
    highlights: [
      "Assisted in UI/UX improvements and debugging",
      "Mastered Git workflows and Flutter fundamentals"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative" data-testid="section-experience">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
          Experience<span className="text-primary">.</span>
        </h2>
        <div className="h-1 w-12 bg-primary mt-6"></div>
      </motion.div>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border-l border-border pl-8 py-2 md:pl-10"
            data-testid={`experience-card-${index}`}
          >
            <div className="absolute w-3 h-3 bg-background border border-primary rounded-full -left-[6.5px] top-4 group-hover:bg-primary transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-semibold text-white font-display">{exp.role}</h3>
                <div className="text-lg text-muted-foreground mt-1">
                  <span className="text-primary/90">{exp.company}</span> — {exp.location}
                </div>
              </div>
              <div className="text-sm font-mono text-muted-foreground bg-secondary/50 px-3 py-1 rounded-sm w-fit">
                {exp.period}
              </div>
            </div>
            
            <ul className="space-y-2 mt-4">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="text-muted-foreground flex items-start gap-3 text-base">
                  <span className="text-primary/50 mt-1.5 text-xs">▹</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
