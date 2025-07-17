'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Heart, 
  Code2, 
  Sparkles, 
  ArrowUp,
  MapPin,
  Globe,
  Zap
} from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/asad06124',
    icon: Github,
    color: 'hover:text-gray-400',
    bgColor: 'hover:bg-gray-500/10'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/theasadsahir',
    icon: Twitter,
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-500/10'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/theasadsahir',
    icon: Linkedin,
    color: 'hover:text-blue-600',
    bgColor: 'hover:bg-blue-600/10'
  },
  {
    name: 'Email',
    href: 'mailto:asadbalqani@gmail.com',
    icon: Mail,
    color: 'hover:text-red-400',
    bgColor: 'hover:bg-red-500/10'
  },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const footerElement = document.getElementById('footer')
    if (footerElement) {
      observer.observe(footerElement)
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 focus-ring"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-6 h-6 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer 
        id="footer" 
        className="relative bg-background/50 backdrop-blur-xl border-t border-border/50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Link 
                href="/" 
                className="group inline-flex items-center space-x-3 focus-ring rounded-2xl p-3 -ml-3 transition-all duration-300 hover:bg-blue-500/10 mb-6"
              >
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Code2 className="w-7 h-7 text-white" />
                  </motion.div>
                  
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
                
                <div>
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Asad Ullah
                  </span>
                  <div className="text-sm text-muted-foreground font-medium">
                    Full-Stack Developer
                  </div>
                </div>
              </Link>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
                Crafting digital experiences with passion and precision. Let's build something extraordinary together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Lahore, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Mail className="w-4 h-4 text-blue-500" />
                  <a href="mailto:asadbalqani@gmail.com" className="text-sm hover:text-blue-500 transition-colors duration-300">
                    asadbalqani@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Available for freelance projects</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.1, delay: 0.02 }}
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                Quick Links
              </h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-muted-foreground hover:text-blue-500 transition-colors duration-300 hover:translate-x-1 transform py-1"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                Connect
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden flex items-center justify-center w-12 h-12 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 focus-ring ${social.bgColor}`}
                    >
                      <social.icon className={`w-5 h-5 text-muted-foreground transition-colors duration-300 ${social.color}`} />
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-white/10 to-transparent transition-all duration-500 transform -skew-y-12" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium border border-green-500/20"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="py-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {new Date().getFullYear()} Asad Ullah. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Code2 className="w-4 h-4 text-blue-500" />
              </motion.div>
              <span>in Pakistan</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}