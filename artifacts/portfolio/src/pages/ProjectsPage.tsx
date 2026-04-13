import { motion } from "framer-motion";
import { ExternalLink, Package, Star, GitFork } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const OPEN_SOURCE = [
  {
    name: "easypaisa_flutter",
    type: "Flutter Package",
    description:
      "A Flutter plugin for integrating Easypaisa payment gateway — Pakistan's leading mobile payment platform. Supports MA (Mobile Account) transactions and provides a clean, idiomatic Dart API for seamless checkout flows.",
    tags: ["Flutter", "Dart", "Payments", "Easypaisa", "Plugin"],
    pubLink: "https://pub.dev/packages/easypaisa_flutter",
    githubLink: "https://github.com/Asad06124/easypaisa_flutter",
    highlight: true,
  },
];

const PROJECTS = [
  {
    name: "Enterprise OTA Update System",
    description:
      "Architected and shipped a full over-the-air update delivery system for Flutter enterprise apps at RootPointers — enabling silent background updates without Play Store review cycles.",
    tags: ["Flutter", "Firebase", "CI/CD", "GetX"],
    company: "RootPointers",
  },
  {
    name: "Real-time Ride Sharing Platform",
    description:
      "Full-featured ride-sharing Flutter app with real-time GPS tracking, in-app chat, service booking, and secure encrypted data storage.",
    tags: ["Flutter", "Google Maps", "Firebase", "Riverpod"],
    company: "Ride Options",
  },
  {
    name: "Multi-tenant Healthcare App",
    description:
      "Cross-platform Flutter app for a UK healthcare client featuring scheduling, patient records, and custom Node.js APIs — optimized to 60fps with 25% faster startup.",
    tags: ["Flutter", "Node.js", "REST APIs", "Clean Architecture"],
    company: "BritSols",
  },
  {
    name: "Flutter UI Component Library",
    description:
      "Internal reusable component library covering 40+ widgets — reduced development time by 20% across team projects and enforced design consistency.",
    tags: ["Flutter", "Dart", "Design System"],
    company: "MicroProgramers",
  },
];

function CardShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-border/60 rounded-sm p-6 bg-card hover:border-primary/30 transition-colors ${className}`}>
      {children}
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((t) => (
        <span key={t} className="text-xs font-mono px-2.5 py-1 bg-secondary/60 text-muted-foreground border border-border/50 rounded-sm">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  useSEO({
    title: "Projects — Asad Ullah",
    description: "Open source work and professional projects by Asad Ullah. Includes easypaisa_flutter — a Flutter payment plugin for Pakistan's Easypaisa gateway.",
    path: "/projects",
  });
  return (
    <main className="pt-28 pb-24 max-w-5xl mx-auto px-6 space-y-24" data-testid="page-projects">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Open Source<span className="text-primary">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-5" />
          <p className="text-muted-foreground mt-5 max-w-xl">
            Contributing back to the Flutter & Dart ecosystem.
          </p>
        </motion.div>

        {OPEN_SOURCE.map((pkg, idx) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <CardShell className="border-primary/30 bg-primary/5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-md border border-primary/20">
                    <Package size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-display text-foreground">{pkg.name}</h3>
                    <span className="text-xs font-mono text-primary">{pkg.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {pkg.pubLink && (
                    <a
                      href={pkg.pubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/40 px-3 py-1.5 rounded-sm transition-colors"
                    >
                      pub.dev <ExternalLink size={11} />
                    </a>
                  )}
                  {pkg.githubLink && (
                    <a
                      href={pkg.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/40 px-3 py-1.5 rounded-sm transition-colors"
                    >
                      GitHub <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">{pkg.description}</p>
              <TagList tags={pkg.tags} />

              <div className="flex items-center gap-6 mt-5 pt-4 border-t border-border/50">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Star size={12} className="text-primary/60" />
                  Available on pub.dev
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <GitFork size={12} className="text-primary/60" />
                  Open source · MIT License
                </div>
              </div>
            </CardShell>
          </motion.div>
        ))}
      </section>

      <section data-testid="section-projects">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Work Projects<span className="text-primary">.</span>
          </h2>
          <div className="h-0.5 w-10 bg-primary mt-5" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <CardShell className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="text-base font-semibold font-display text-foreground">{project.name}</h3>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-sm border border-border/50 whitespace-nowrap shrink-0">
                    {project.company}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
                <TagList tags={project.tags} />
              </CardShell>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
