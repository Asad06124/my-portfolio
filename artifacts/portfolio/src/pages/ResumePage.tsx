import { motion } from "framer-motion";
import { Download, Mail, Phone, Linkedin, MapPin, Github, Globe, Printer } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

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
      "Architected and deployed enterprise OTA update delivery system used in production",
      "Implemented CI/CD pipelines with GitHub Actions, reducing release cycle time by 40%",
      "Engineered real-time chat and ticketing modules supporting 1,000+ concurrent users",
      "Designed modular Clean Architecture using GetX, cutting feature development time by 30%",
    ],
  },
  {
    role: "Flutter Developer",
    company: "BritSols",
    period: "Jun 2024 – Dec 2024",
    location: "London, UK (Remote)",
    highlights: [
      "Delivered production Flutter apps with custom Node.js/Express backend APIs",
      "Optimized UI rendering to stable 60fps and reduced cold start time by 25%",
      "Collaborated with UK-based product leads in Agile sprints across time zones",
    ],
  },
  {
    role: "Associate Flutter Developer",
    company: "Ride Options",
    period: "Aug 2023 – May 2024",
    location: "Lahore, Pakistan",
    highlights: [
      "Built real-time chat, Google Maps GPS integrations, and service booking for a ride-sharing platform",
      "Refactored legacy codebase reducing crash rate by 35% and improving app stability",
      "Implemented AES data encryption and followed OWASP mobile security standards",
    ],
  },
  {
    role: "Junior Flutter Developer",
    company: "MicroProgramers",
    period: "Jun 2022 – Aug 2023",
    location: "Layyah, Pakistan",
    highlights: [
      "Built reusable Flutter UI component library adopted across 4 internal projects, reducing dev time by 20%",
      "Maintained 95% unit test coverage on critical business logic modules",
      "Shipped 3 apps to Google Play Store and Apple App Store",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "MicroProgramers",
    period: "Mar 2022 – May 2022",
    location: "Layyah, Pakistan",
    highlights: [
      "Assisted in UI/UX implementation and bug resolution across active projects",
      "Mastered Git version control, Agile workflows, and Flutter widget architecture",
    ],
  },
];

const SKILLS_FLAT = [
  { label: "Languages", value: "Dart, Swift, JavaScript, Kotlin, TypeScript" },
  { label: "Frameworks", value: "Flutter, SwiftUI, React Native, Node.js, Express.js" },
  { label: "State Management", value: "GetX, Riverpod, BLoC, Provider" },
  { label: "Tools & Platforms", value: "Git, Firebase, Azure DevOps, REST APIs, GraphQL, MongoDB, PostgreSQL" },
  { label: "Mobile Deployment", value: "App Store Connect, TestFlight, Google Play Console, Fastlane, CI/CD" },
  { label: "Architecture", value: "Clean Architecture, MVVM, MVC, Repository Pattern" },
];

export default function ResumePage() {
  useSEO({
    title: "Resume — Asad Ullah",
    description: "View or download the resume of Asad Ullah — Senior Mobile App Developer specialising in Flutter, iOS Swift/SwiftUI, and React Native.",
    path: "/resume",
  });

  return (
    <main className="pt-28 pb-24 max-w-4xl mx-auto px-6" data-testid="page-resume">

      {/* Action buttons — hidden on print */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 print:hidden"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Resume<span className="text-primary">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-4" />
        </div>
        <div className="flex gap-3">
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

      {/* Resume document */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        id="resume-document"
        className="border border-border/60 rounded-sm bg-card shadow-sm print:border-none print:shadow-none print:rounded-none print:bg-white print:text-black"
      >
        {/* ── HEADER ── */}
        <div className="p-8 md:p-10 border-b border-border print:border-b-2 print:border-gray-300">
          <h1 className="text-3xl font-bold text-foreground print:text-black print:text-4xl">Asad Ullah</h1>
          <p className="text-primary font-semibold text-base mt-1 print:text-black print:font-bold">
            Senior Mobile App Developer — Flutter · iOS Swift/SwiftUI · React Native
          </p>
          <p className="text-muted-foreground text-sm mt-3 max-w-2xl leading-relaxed print:text-black">
            Mobile Developer with 3+ years of experience delivering cross-platform apps in Flutter, iOS (Swift/SwiftUI), and React Native. Specialised in clean architecture, CI/CD pipelines, App Store deployment, and high-performance UI engineering.
          </p>

          {/* Contact row */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-xs text-muted-foreground print:text-black print:text-sm">
            <a href="mailto:theasadsahir@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors print:no-underline">
              <Mail size={12} className="text-primary print:text-black" />
              theasadsahir@gmail.com
            </a>
            <a href="tel:+923176854356" className="flex items-center gap-1.5 hover:text-foreground transition-colors print:no-underline">
              <Phone size={12} className="text-primary print:text-black" />
              +92 317 6854356
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} className="text-primary print:text-black" />
              Model Town, Lahore, Pakistan
            </span>
            <a href="https://linkedin.com/in/theasadsahir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors print:no-underline">
              <Linkedin size={12} className="text-primary print:text-black" />
              linkedin.com/in/theasadsahir
            </a>
            <a href="https://github.com/Asad06124" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors print:no-underline">
              <Github size={12} className="text-primary print:text-black" />
              github.com/Asad06124
            </a>
            <a href="https://pub.dev/packages/easypaisa_flutter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors print:no-underline">
              <Globe size={12} className="text-primary print:text-black" />
              pub.dev/packages/easypaisa_flutter
            </a>
          </div>
        </div>

        {/* ── BODY (single column — ATS safe) ── */}
        <div className="p-8 md:p-10 space-y-9 print:space-y-7">

          {/* SKILLS */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-foreground border-b border-border pb-2 mb-4 print:text-sm print:text-black print:border-gray-300 print:font-bold">
              Technical Skills
            </h2>
            <div className="space-y-2">
              {SKILLS_FLAT.map((s) => (
                <div key={s.label} className="flex flex-col sm:flex-row sm:gap-2 text-sm print:text-sm">
                  <span className="font-semibold text-foreground min-w-[140px] shrink-0 print:text-black">{s.label}:</span>
                  <span className="text-muted-foreground print:text-black">{s.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-foreground border-b border-border pb-2 mb-5 print:text-sm print:text-black print:border-gray-300 print:font-bold">
              Professional Experience
            </h2>
            <div className="space-y-7 print:space-y-6">
              {EXP.map((e, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                    <div>
                      <span className="font-semibold text-foreground text-sm print:text-black">{e.role}</span>
                      <span className="text-muted-foreground text-sm print:text-black"> — {e.company}, {e.location}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono shrink-0 print:text-black print:text-sm">{e.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {e.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-primary print:text-black print:before:text-black leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* OPEN SOURCE */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-foreground border-b border-border pb-2 mb-4 print:text-sm print:text-black print:border-gray-300 print:font-bold">
              Open Source
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                <span className="font-semibold text-foreground text-sm print:text-black">easypaisa_flutter</span>
                <span className="text-muted-foreground text-sm print:text-black">— Flutter Plugin · pub.dev · github.com/Asad06124/easypaisa_flutter</span>
              </div>
              <ul className="mt-2 space-y-1">
                <li className="text-sm text-muted-foreground pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-primary print:text-black print:before:text-black leading-relaxed">
                  Published Flutter payment gateway plugin integrating Pakistan's Easypaisa mobile wallet
                </li>
                <li className="text-sm text-muted-foreground pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-primary print:text-black print:before:text-black leading-relaxed">
                  Covers platform channel bridging, SDK wrapping, and complete pub.dev publication workflow
                </li>
              </ul>
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-foreground border-b border-border pb-2 mb-4 print:text-sm print:text-black print:border-gray-300 print:font-bold">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <div>
                <span className="font-semibold text-foreground text-sm print:text-black">Bachelor of Science in Computer Science</span>
                <span className="text-muted-foreground text-sm print:text-black"> — Government College University Faisalabad (GCUF)</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono shrink-0 print:text-black print:text-sm">2019 – 2023</span>
            </div>
          </section>

        </div>

        {/* Footer bar */}
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
