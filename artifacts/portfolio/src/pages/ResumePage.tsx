import { motion } from "framer-motion";
import { Download, Mail, Phone, Linkedin, MapPin, ExternalLink, Printer } from "lucide-react";

function printResume() {
  window.print();
}

const EXP = [
  {
    role: "Senior Flutter Developer",
    company: "RootPointers",
    period: "Jan 2025 – Present",
    location: "Lahore, Pakistan",
    highlights: [
      "Architected and deployed enterprise OTA update delivery system",
      "Implemented CI/CD pipelines reducing release cycle time by 40%",
      "Engineered real-time chat & ticketing modules supporting 1000+ concurrent users",
      "Designed modular Clean Architecture with GetX, reducing feature dev time by 30%",
    ],
  },
  {
    role: "Flutter Developer",
    company: "BritSols",
    period: "Jun 2024 – Dec 2024",
    location: "London (Remote), UK",
    highlights: [
      "Delivered production Flutter apps with custom Node.js backend APIs",
      "Optimized rendering to 60fps, reduced startup time by 25%",
      "Collaborated with UK-based leads in Agile sprints",
    ],
  },
  {
    role: "Associate Flutter Developer",
    company: "Ride Options",
    period: "Aug 2023 – May 2024",
    location: "Lahore, Pakistan",
    highlights: [
      "Built real-time chat, GPS map integrations, and service booking for a ride-sharing platform",
      "Refactored legacy codebase improving stability by 35%",
      "Implemented data encryption and security standards",
    ],
  },
  {
    role: "Junior Flutter Developer",
    company: "MicroProgramers",
    period: "Jun 2022 – Aug 2023",
    location: "Layyah, Pakistan",
    highlights: [
      "Built reusable Flutter UI component library reducing dev time by 20%",
      "Maintained 95% code coverage on critical modules",
    ],
  },
  {
    role: "Intern Flutter Developer",
    company: "MicroProgramers",
    period: "Mar 2022 – May 2022",
    location: "Layyah, Pakistan",
    highlights: [
      "Assisted in UI/UX improvements and debugging",
      "Mastered Git workflows and Flutter fundamentals",
    ],
  },
];

const SKILLS = [
  { category: "Languages", items: ["Dart", "Swift", "JavaScript", "Kotlin"] },
  { category: "Frameworks", items: ["Flutter", "SwiftUI", "React Native", "Node.js", "Express.js"] },
  { category: "State Mgmt", items: ["GetX", "Riverpod", "BLoC", "Provider"] },
  { category: "Tools", items: ["Git", "Firebase", "Azure DevOps", "CI/CD", "REST APIs", "MongoDB", "PostgreSQL"] },
  { category: "Platforms", items: ["Android", "iOS", "App Store Connect", "TestFlight", "Play Store"] },
];

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-4 bg-primary rounded-full shrink-0" />
      <h3 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold">{label}</h3>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export default function ResumePage() {
  return (
    <main className="pt-28 pb-24 max-w-4xl mx-auto px-6" data-testid="page-resume">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Resume<span className="text-primary">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-4" />
        </div>
        <div className="flex gap-3 print:hidden">
          <button
            onClick={printResume}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
            data-testid="btn-download-resume"
          >
            <Download size={13} />
            Save as PDF
          </button>
          <button
            onClick={printResume}
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-muted-foreground text-xs font-mono uppercase tracking-widest rounded-sm hover:border-primary/40 hover:text-foreground transition-colors cursor-pointer"
          >
            <Printer size={13} />
            Print
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border border-border/60 rounded-sm bg-card overflow-hidden shadow-sm"
      >
        {/* Header */}
        <div className="p-8 md:p-10 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-start gap-7">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 shrink-0 shadow-sm">
              <img src="/asad.jpg" alt="Asad Ullah" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl md:text-3xl font-bold font-display text-foreground leading-tight">Asad Ullah</h1>
              <p className="text-primary font-mono text-sm mt-1 font-medium">Senior Mobile App Developer</p>
              <p className="text-muted-foreground text-xs mt-3 leading-relaxed max-w-2xl">
                Mobile Developer with 3+ years of experience shipping cross-platform apps in Flutter, iOS (Swift/SwiftUI), and React Native. Expert in clean architecture, CI/CD, and App Store deployment.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs text-muted-foreground font-mono">
                <a href="mailto:theasadsahir@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Mail size={11} className="text-primary/60" /> theasadsahir@gmail.com
                </a>
                <a href="tel:+923176854356" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Phone size={11} className="text-primary/60" /> +92 317 6854356
                </a>
                <a href="https://linkedin.com/in/theasadsahir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Linkedin size={11} className="text-primary/60" /> linkedin.com/in/theasadsahir
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} className="text-primary/60" /> Model Town, Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10 grid md:grid-cols-3 gap-10">
          {/* Left column — narrow */}
          <div className="md:col-span-1 space-y-8 md:border-r md:border-border md:pr-8">
            <div>
              <Divider label="Skills" />
              {SKILLS.map((s) => (
                <div key={s.category} className="mb-4">
                  <p className="text-xs font-mono text-primary mb-2 font-medium">{s.category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <span key={item} className="text-xs text-muted-foreground bg-secondary/60 border border-border/50 px-2 py-0.5 rounded-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Divider label="Open Source" />
              <div className="space-y-1.5">
                <p className="text-sm font-medium text-foreground">easypaisa_flutter</p>
                <p className="text-xs text-muted-foreground">Flutter payment gateway plugin for Easypaisa</p>
                <div className="flex gap-3 mt-2">
                  <a href="https://pub.dev/packages/easypaisa_flutter" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary hover:underline">pub.dev</a>
                  <a href="https://github.com/Asad06124/easypaisa_flutter" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary hover:underline">GitHub</a>
                </div>
              </div>
            </div>

            <div>
              <Divider label="Education" />
              <p className="text-sm font-medium text-foreground">BS Computer Science</p>
              <p className="text-xs text-muted-foreground mt-1">GCUF, Faisalabad</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">2019 – 2023</p>
            </div>
          </div>

          {/* Right column — experience */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <Divider label="Experience" />
              <div className="space-y-8">
                {EXP.map((e, i) => (
                  <div key={i} className="resume-entry relative pl-4 border-l-2 border-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{e.role}</p>
                        <p className="text-xs text-muted-foreground">
                          <span className="text-primary/80 font-medium">{e.company}</span>
                          {" · "}{e.location}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0">{e.period}</span>
                    </div>
                    <ul className="space-y-1 mt-2">
                      {e.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-primary mt-1 shrink-0">▸</span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-8 py-4 bg-secondary/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono print:hidden">
          <p>Asad Ullah · Senior Mobile Developer · theasadsahir@gmail.com</p>
          <button onClick={printResume} className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
            <Download size={11} /> Save as PDF
          </button>
        </div>
      </motion.div>
    </main>
  );
}
