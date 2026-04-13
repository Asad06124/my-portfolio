import { motion } from "framer-motion";
import { Download, Mail, Phone, Linkedin, MapPin } from "lucide-react";

const EXP = [
  { role: "Senior Flutter Developer", company: "RootPointers", period: "Jan 2025 – Present", location: "Lahore" },
  { role: "Flutter Developer", company: "BritSols", period: "Jun 2024 – Dec 2024", location: "London (Remote)" },
  { role: "Associate Flutter Developer", company: "Ride Options", period: "Aug 2023 – May 2024", location: "Lahore" },
  { role: "Junior Flutter Developer", company: "MicroProgramers", period: "Jun 2022 – Aug 2023", location: "Layyah" },
  { role: "Intern Flutter Developer", company: "MicroProgramers", period: "Mar 2022 – May 2022", location: "Layyah" },
];

const SKILLS_FLAT = [
  "Flutter", "Dart", "Swift", "SwiftUI", "React Native", "JavaScript",
  "GetX", "Riverpod", "BLoC", "Provider",
  "Firebase", "REST APIs", "MongoDB", "PostgreSQL",
  "Git", "CI/CD", "Azure DevOps", "App Store Connect",
];

export default function ResumePage() {
  return (
    <main className="pt-28 pb-24 max-w-5xl mx-auto px-6" data-testid="page-resume">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Resume<span className="text-primary">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-5" />
        </div>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity w-fit"
          data-testid="btn-download-resume"
        >
          <Download size={14} />
          Download PDF
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border border-border/60 rounded-sm bg-card overflow-hidden"
      >
        <div className="bg-secondary/40 border-b border-border px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
              <img src="/asad.jpg" alt="Asad Ullah" className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold font-display text-foreground">Asad Ullah</h1>
              <p className="text-primary font-mono text-sm mt-1">Senior Mobile App Developer</p>
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground font-mono">
                <a href="mailto:theasadsahir@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Mail size={12} /> theasadsahir@gmail.com
                </a>
                <a href="tel:+923047755530" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Phone size={12} /> +92 304 7755530
                </a>
                <a href="https://linkedin.com/in/theasadsahir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Linkedin size={12} /> linkedin.com/in/theasadsahir
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} /> Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-10">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
              Summary
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mobile Developer with 4+ years of experience building and launching cross-platform apps across healthcare, e-commerce, ride-sharing, and enterprise sectors. Expert in Flutter, with growing depth in iOS (Swift/SwiftUI) and React Native. Advocates for clean, modular architecture and takes full ownership of features — from design to App Store deployment.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 border-b border-border pb-2">
              Experience
            </h3>
            <div className="space-y-5">
              {EXP.map((e, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <p className="text-sm font-medium text-foreground">{e.role}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      <span className="text-primary/80">{e.company}</span> · {e.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">{e.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
              Open Source
            </h3>
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-foreground">easypaisa_flutter</p>
              <span className="text-xs font-mono text-primary/80">Flutter Package · pub.dev</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Flutter plugin for Easypaisa payment gateway integration</p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS_FLAT.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono px-2.5 py-1 bg-secondary/60 text-muted-foreground border border-border/50 rounded-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 border-b border-border pb-2">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <p className="text-sm font-medium text-foreground">Bachelor of Science in Computer Science</p>
                <p className="text-xs text-muted-foreground mt-0.5">Government College University Faisalabad (GCUF)</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground">2019 – 2023</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-8 py-4 bg-secondary/20 flex justify-end">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download size={12} />
            Download PDF version
          </a>
        </div>
      </motion.div>
    </main>
  );
}
