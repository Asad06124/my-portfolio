import { useTheme } from "@/context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Articles", href: "/articles", badge: "Soon" },
    { label: "Contact", href: "/contact" },

];

export default function Navbar() {
  const [location] = useLocation();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md print:hidden">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 bg-primary/10 font-display font-bold text-sm text-foreground cursor-pointer tracking-wide shadow-[0_0_14px_rgba(34,211,238,0.22)]">
            AU
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className="flex items-center gap-1.5 cursor-pointer">
                <span
                  className={`text-sm font-mono uppercase tracking-widest transition-colors ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
                {link.badge && (
                  <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full leading-none">
                    {link.badge}
                  </span>
                )}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-2 text-sm font-mono uppercase tracking-widest cursor-pointer transition-colors py-1 ${
                      location === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full leading-none">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
