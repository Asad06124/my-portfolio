'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Star, GitBranch } from 'lucide-react'

const stats = [
  { icon: Code, value: '6+', label: 'Projects Built' },
  { icon: GitBranch, value: '50+', label: 'Commits' },
  { icon: Star, value: '10+', label: 'Technologies' },
  { icon: Zap, value: '2+', label: 'Years Experience' }
]

const techStack = [
  { name: 'React & Next.js', color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-400' },
  { name: 'Full Stack', color: 'from-green-500 to-emerald-500' },
  { name: 'Open Source', color: 'from-purple-500 to-pink-500' }
]

export function ProjectsHero() {
  return (
    <section className="relative section-padding pt-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/3 to-primary/3 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Title with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              My{' '}
              {/* <span className="relative"> */}
              <span className="gradient-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Projects
                {/* </span> */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A curated collection of{' '}
            <span className="text-accent font-semibold">innovative web applications</span>{' '}
            and tools I've crafted using cutting-edge technologies. Each project tells a story of{' '}
            <span className="text-primary font-semibold">problem-solving</span> and continuous learning.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <stat.icon className="w-8 h-8 text-accent mb-2 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Tech Stack Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
                
                {/* Border */}
                <div className={`absolute inset-0 rounded-full border border-current opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Text */}
                <span className={`relative z-10 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold`}>
                  {tech.name}
                </span>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-white/20 to-transparent transition-all duration-500 transform -skew-y-12" />
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4">Scroll to explore projects</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-accent rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}