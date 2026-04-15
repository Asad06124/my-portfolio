import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background mt-10">
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-bold text-xl text-foreground mb-2">
            Asad Ullah<span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Mobile Developer — Flutter, iOS Swift, React Native.
          </p>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Navigate</p>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Experience", href: "/experience" },
              { label: "Projects", href: "/projects" },
              { label: "Resume", href: "/resume" },
              { label: "Articles", href: "/articles" },
            ].map((l) => (
              <Link key={l.href} href={l.href}>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  {l.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
          <div className="flex flex-col gap-3">
            <a href="mailto:asadbalqani@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={13} className="text-primary/60 shrink-0" />
              asadbalqani@gmail.com
            </a>
            <a href="tel:+923176854356" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={13} className="text-primary/60 shrink-0" />
              +92 317 6854356
            </a>
            <a href="https://linkedin.com/in/theasadsahir" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={13} className="text-primary/60 shrink-0" />
              linkedin.com/in/theasadsahir
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={13} className="text-primary/60 shrink-0" />
              Model Town, Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
        <p>© {new Date().getFullYear()} Asad Ullah. All rights reserved.</p>
        <p>Built with precision.</p>
      </div>
    </footer>
  );
}
