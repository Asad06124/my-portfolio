'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={cn(
      'fixed top-0 z-50 w-full transition-all duration-300',
      scrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-accent focus-ring rounded-lg p-2 -ml-2"
          >
            <Code2 className="w-6 h-6" />
            <span>John Doe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-xl group',
                  pathname === item.href
                    ? 'text-accent bg-glass/50 shadow-neon'
                    : 'text-foreground/80 hover:text-accent hover:bg-glass/30'
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-tertiary/20 rounded-xl border border-accent/30"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-accent-tertiary/10 rounded-xl transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary group"
            >
              <span>Start Project</span>
              <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus-ring rounded-xl p-3 glass-card"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-accent" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-accent" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-glass-border bg-glass/50 backdrop-blur-xl rounded-b-2xl mt-4 overflow-hidden"
            >
              <div className="py-6 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        'block px-6 py-4 text-lg font-semibold transition-all duration-300 rounded-xl mx-4',
                        pathname === item.href
                          ? 'text-accent bg-glass shadow-neon border border-accent/30'
                          : 'text-foreground/80 hover:text-accent hover:bg-glass/50'
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="px-4 pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="btn-primary w-full justify-center group"
                  >
                    <span>Start Project</span>
                    <Sparkles className="w-4 h-4 ml-2 group-hover:animate-spin" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}