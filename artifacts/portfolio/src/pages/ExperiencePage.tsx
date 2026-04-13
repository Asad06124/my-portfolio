import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Senior Flutter Developer",
    company: "RootPointers",
    location: "Lahore",
    period: "Jan 2025 – Present",
    type: "Full-time",
    highlights: [
      "Architected and deployed enterprise OTA update delivery system",
      "Implemented automated CI/CD pipelines reducing release cycle time by 40%",
      "Engineered real-time chat, ticketing, and communication modules (Firebase + REST APIs, 1000+ concurrent users)",
      "Designed modular Clean Architecture with GetX, reducing feature dev time by 30%",
      "Led cross-platform deployment strategy for Android and iOS",
    ],
  },
  {
    role: "Flutter Developer",
    company: "BritSols",
    location: "London (Remote), UK",
    period: "Jun 2024 – Dec 2024",
    type: "Contract",
    highlights: [
      "Delivered production Flutter apps with custom Node.js backend APIs",
      "Optimized for 60fps rendering, reduced startup time by 25%",
      "Collaborated with UK-based leads in an Agile environment",
    ],
  },
  {
    role: "Associate Flutter Developer",
    company: "Ride Options",
    location: "Lahore",
    period: "Aug 2023 – May 2024",
    type: "Full-time",
    highlights: [
      "Developed real-time chat, GPS-based map integrations, and service booking for ride-sharing platform",
      "Refactored legacy codebase improving stability by 35%",
      "Implemented data security and encryption standards",
      "Established coding standards across a 4-person team",
    ],
  },
  {
    role: "Junior Flutter Developer",
    company: "MicroProgramers",
    location: "Layyah",
    period: "Jun 2022 – Aug 2023",
    type: "Full-time",
    highlights: [
      "Built reusable Flutter UI component library reducing dev time by 20%",
      "Participated in Agile ceremonies and sprint planning",
      "Maintained 95% code coverage on critical modules",
    ],
  },
  {
    role: "Intern Flutter Developer",
    company: "MicroProgramers",
    location: "Layyah",
    period: "Mar 2022 – May 2022",
    type: "Internship",
    highlights: [
      "Assisted in UI/UX improvements and debugging",
      "Mastered Git workflows and Flutter fundamentals",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="pt-28 pb-24 max-w-5xl mx-auto px-6" data-testid="page-experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
          Experience<span className="text-primary">.</span>
        </h2>
        <div className="h-0.5 w-10 bg-primary mt-5" />
        <p className="text-muted-foreground mt-6 max-w-xl">
          4+ years across startups, agencies, and enterprises — building mobile products used by real people.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-2 bottom-0 w-px bg-border md:left-0" />
        <div className="space-y-12 pl-8 md:pl-10">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
              data-testid={`experience-card-${index}`}
            >
              <div className="absolute -left-8 md:-left-10 top-1.5 w-3 h-3 rounded-full border border-primary bg-background group-hover:bg-primary transition-colors duration-300" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-semibold text-foreground font-display">{exp.role}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1">
                    <span className="text-primary/80 font-medium">{exp.company}</span>
                    <span className="mx-2 text-border">—</span>
                    {exp.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary/60 px-3 py-1.5 rounded-sm border border-border/50 whitespace-nowrap w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="text-primary mt-1.5 text-xs shrink-0">▹</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
