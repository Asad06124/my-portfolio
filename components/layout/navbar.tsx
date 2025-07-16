'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Sparkles, Rocket, Star, Zap, ChevronDown, BookOpen, Home, FolderKanban, Hammer, Info, Mail, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    description: 'Back to the homepage',
    isExternal: false,
    badge: null,
    tag: null,
    submenu: null,
    isDisabled: false,
    isActive: true
  },
  {
    name: 'About',
    href: '/about',
    icon: Info,
    description: 'Learn more about us',
    isExternal: false,
    badge: null,
    tag: null,
    submenu: null,
    isDisabled: false
  },
  {
    name: 'Services',
    href: '/services',
    icon: Hammer,
    description: 'What we offer',
    isExternal: false,
    badge: null,
    tag: null,
    submenu: [
      { name: 'Web Development', href: '/services/web' },
      { name: 'Mobile Apps', href: '/services/mobile' },
      { name: 'UI/UX Design', href: '/services/design' }
    ],
    isDisabled: false
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: FolderKanban,
    description: 'Our past work',
    isExternal: false,
    badge: null,
    tag: null,
    submenu: null,
    isDisabled: false
  },
  {
    name: 'Team',
    href: '/team',
    icon: Users,
    description: 'Meet our team',
    isExternal: false,
    badge: null,
    tag: null,
    submenu: null,
    isDisabled: false
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: BookOpen,
    description: 'Read our latest thoughts',
    isExternal: false,
    badge: { text: 'Coming Soon', variant: 'secondary' },
    tag: 'Coming Soon',
    submenu: null,
    isDisabled: true
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Mail,
    description: 'Get in touch',
    isExternal: false,
    badge: null,
    tag: null,
    submenu: null,
    isDisabled: false
  }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <motion.header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-blue-500/5'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: isLoaded ? 0 : -100 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/"
              className="group flex items-center space-x-3 focus-ring rounded-2xl p-3 -ml-3 transition-all duration-300 hover:bg-blue-500/10"
            >
              <div className="relative">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Code2 className="w-6 h-6 text-white" />
                </motion.div>

                {/* Floating sparkle */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
              </div>

              <div className="hidden sm:block">
                <span className="text-xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Asad Ullah
                </span>
                <div className="text-xs text-muted-foreground font-medium">
                  Full-Stack Developer
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 flex items-center gap-2 group overflow-hidden',
                    pathname === item.href
                      ? 'text-white bg-gradient-to-r from-blue-600/80 to-purple-600/80 shadow-md shadow-blue-500/20'
                      : 'text-balck-300 hover:text-blue-400 hover:bg-blue-500/10'
                  )}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Star className="w-3 h-3 text-yellow-400" />
                      </motion.div>
                    )}
                  </span>

                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 rounded-md"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-md transition-all duration-300" />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-white/10 to-transparent transition-all duration-500 transform -skew-y-12 opacity-0 group-hover:opacity-100" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            className="hidden lg:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center px-6 py-2 text-base font-semibold rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/40 text-gray-200 hover:bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 hover:border-blue-500/50 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Project
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </span>

              {/* Shine effect */}
              <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-white/30 to-transparent transition-all duration-700 transform -skew-y-12 opacity-0 group-hover:opacity-100" />
            </Link>
          </motion.div>

          {/* Enhanced Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus-ring rounded-2xl p-3 bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            whileTap={{ scale: 0.95 }}
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
                  <X className="w-6 h-6 text-blue-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-blue-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden border-t border-border/50 bg-background/80 backdrop-blur-xl rounded-b-3xl mt-4 overflow-hidden shadow-2xl shadow-blue-500/10"
            >
              <div className="py-8 space-y-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        'group flex items-center justify-between px-6 py-4 text-lg font-semibold transition-all duration-300 rounded-2xl mx-4 overflow-hidden',
                        pathname === item.href
                          ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/25'
                          : 'text-foreground/80 hover:text-blue-500 hover:bg-blue-500/10'
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {item.name}
                        {pathname === item.href && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Star className="w-4 h-4" />
                          </motion.div>
                        )}
                      </span>

                      <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="px-4 pt-6"
                >
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="group relative overflow-hidden flex items-center justify-center gap-3 w-full px-8 py-5 text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Rocket className="w-5 h-5" />
                      Start Project
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    </span>

                    {/* Shine effect */}
                    <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-white/20 to-transparent transition-all duration-700 transform -skew-y-12" />
                  </Link>
                </motion.div>

                {/* Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="px-6 pt-6 border-t border-border/30 mx-4 mt-6"
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <span>Ready to build something amazing?</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}