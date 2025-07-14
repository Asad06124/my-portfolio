'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Mail, 
  Rocket, 
  Sparkles,
  Zap,
  Star,
  Globe,
  Code,
  Compass,
  RefreshCw,
  ChevronRight
} from 'lucide-react'

const floatingElements = [
  { icon: Code, delay: 0, duration: 20, color: 'text-blue-500 dark:text-accent' },
  { icon: Rocket, delay: 6, duration: 20, color: 'text-purple-500 dark:text-accent-secondary' },
  { icon: Globe, delay: 10, duration: 20, color: 'text-green-500 dark:text-accent-tertiary' },
  { icon: Sparkles, delay: 14, duration: 20, color: 'text-yellow-500 dark:text-accent' },
  { icon: Star, delay: 20, duration: 20, color: 'text-pink-500 dark:text-accent-secondary' },
  { icon: Zap, delay: 24, duration: 20, color: 'text-blue-400 dark:text-accent-tertiary' },
]

const glitchTexts = [
  "404",
  "40ERROR4", 
  "404"
]

export function NotFoundHero() {
  const [glitchIndex, setGlitchIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchIndex(prev => (prev + 1) % glitchTexts.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 dark:from-background via-blue-50/30 dark:via-background/80 to-purple-50/30 dark:to-background" />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} opacity-20 dark:opacity-30`}
          style={{
            left: `${10 + index * 15}%`,
            top: `${15 + index * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <element.icon size={24 + index * 4} />
        </motion.div>
      ))}

      {/* Main Content Container */}
      <div className="container relative z-10 text-center">
        {/* 3D 404 Number */}
        <motion.div
          className="relative mb-8"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
          }}
        >
          {/* Main 404 Text */}
          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glitch Effect Background Layers */}
            <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-black">
              <div className="absolute inset-0 text-blue-500/20 dark:text-accent/20 animate-pulse transform translate-x-1 translate-y-1" />
              <div className="absolute inset-0 text-purple-500/20 dark:text-accent-secondary/20 animate-pulse transform -translate-x-1 -translate-y-1" />
            </div>
            
            {/* Main Text with Glitch Animation */}
            <AnimatePresence mode="wait">
              {(() => {
                // 4 animation types: fade, slide, rotate, scale+color
                const animationType = glitchIndex % 4
                const baseProps = {
                  className: "text-8xl md:text-9xl lg:text-[12rem] font-black bg-gradient-to-r from-gray-800 dark:from-foreground via-blue-600 dark:via-accent to-purple-600 dark:to-accent-secondary bg-clip-text text-transparent relative z-10",
                  style: {
                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))',
                    textShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
                  },
                  key: glitchIndex,
                }
                if (animationType === 0) {
                  // Fade
                  return (
                    <motion.h1
                      {...baseProps}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {glitchTexts[glitchIndex]}
                    </motion.h1>
                  )
                } else if (animationType === 1) {
                  // Slide
                  return (
                    <motion.h1
                      {...baseProps}
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 60 }}
                      transition={{ duration: 0.3 }}
                    >
                      {glitchTexts[glitchIndex]}
                    </motion.h1>
                  )
                } else if (animationType === 2) {
                  // Rotate
                  return (
                    <motion.h1
                      {...baseProps}
                      initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      transition={{ duration: 0.3 }}
                    >
                      {glitchTexts[glitchIndex]}
                    </motion.h1>
                  )
                } else {
                  // Scale + color glitch
                  return (
                    <motion.h1
                      {...baseProps}
                      initial={{ opacity: 0, scale: 1.3, color: '#f43f5e' }}
                      animate={{ opacity: 1, scale: 1, color: '#2563eb' }}
                      exit={{ opacity: 0, scale: 0.7, color: '#a21caf' }}
                      transition={{ duration: 0.3 }}
                    >
                      {glitchTexts[glitchIndex]}
                    </motion.h1>
                  )
                }
              })()}
            </AnimatePresence>
            
            {/* 3D Shadow Effect */}
            <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-black text-gray-300/50 dark:text-gray-700/50 transform translate-x-2 translate-y-2 -z-10" />
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            But don't worry, we'll help you find your way back!
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12 max-w-md mx-auto"
        >
          <div className="relative glass-card p-2">
            <div className="flex items-center">
              <Search className="w-5 h-5 text-gray-500 dark:text-muted-foreground ml-4" />
              <input
                type="text"
                placeholder="Search for what you need..."
                className="flex-1 bg-transparent border-0 outline-0 px-4 py-3 text-gray-700 dark:text-foreground placeholder-gray-500 dark:placeholder-muted-foreground"
              />
              <button className="btn-primary px-6 py-3 m-1">
                Search
              </button>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/"
            className="btn-primary group flex items-center gap-3 text-lg px-8 py-4"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="btn-secondary group flex items-center gap-3 text-lg px-8 py-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary group flex items-center gap-3 text-lg px-8 py-4"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Refresh</span>
          </button>
        </motion.div>

        {/* Popular Pages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-foreground mb-6">
            Maybe you were looking for:
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'About Us', href: '/about', icon: Compass, description: 'Learn about our team' },
              { name: 'Services', href: '/services', icon: Rocket, description: 'What we offer' },
              { name: 'Projects', href: '/projects', icon: Code, description: 'Our latest work' },
              { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch' },
            ].map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Link
                  href={link.href}
                  className="block glass-card p-6 text-center hover:border-blue-300/50 dark:hover:border-accent/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 dark:from-accent/20 to-purple-500/20 dark:to-accent-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-blue-600 dark:text-accent" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-foreground mb-1 group-hover:text-blue-600 dark:group-hover:text-accent transition-colors">
                    {link.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-muted-foreground">
                    {link.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 glass-card p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500 dark:text-accent animate-pulse" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-foreground">
              Did You Know?
            </h3>
            <Sparkles className="w-6 h-6 text-yellow-500 dark:text-accent animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-muted-foreground">
            The first 404 error was discovered at CERN in 1992. The room where the first web server was located 
            was number 404, and when people couldn't find web pages, they literally couldn't find room 404!
          </p>
        </motion.div>
      </div>

      {/* Particle System */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 dark:bg-accent/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 dark:bg-accent-secondary/10 rounded-full blur-3xl animate-pulse" />
    </div>
  )
}