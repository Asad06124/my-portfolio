'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles, Zap, Code, Palette } from 'lucide-react'

const stats = [
  { icon: Code, label: 'Projects Delivered', value: '200+' },
  { icon: Sparkles, label: 'Happy Clients', value: '50+' },
  { icon: Zap, label: 'Team Members', value: '12+' },
  { icon: Palette, label: 'Years Experience', value: '8+' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="container relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-glass backdrop-blur-xl border border-glass-border rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                Elite Development Team
              </span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">We Build</span>
            <span className="block gradient-text glitch" data-text="Digital Dreams">
              Digital Dreams
            </span>
            <span className="block text-foreground/60 text-4xl md:text-5xl lg:text-6xl font-light">
              Into Reality
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-stack development team specializing in{' '}
            <span className="text-accent font-semibold">web applications</span>,{' '}
            <span className="text-accent-tertiary font-semibold">mobile apps</span>,{' '}
            <span className="text-accent-secondary font-semibold">UI/UX design</span>, and{' '}
            <span className="text-accent font-semibold">digital marketing</span> solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/projects"
              className="btn-primary group text-lg px-10 py-5"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="btn-secondary group text-lg px-10 py-5"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Start Project</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-tertiary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-neon transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-8 h-14 border-2 border-accent/50 rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            className="w-1 h-4 bg-accent rounded-full mt-3"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}