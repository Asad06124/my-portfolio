'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Code, Sparkles, Users, Award, Clock, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Projects Delivered', value: '30+', color: 'text-emerald-600' },
  { icon: Users, label: 'Happy Clients', value: '5+', color: 'text-blue-600' },
  { icon: Code, label: 'Technologies', value: '15+', color: 'text-purple-600' },
  { icon: Clock, label: 'Years Experience', value: '8+', color: 'text-orange-600' },
]

const features = [
  'Enterprise-grade solutions',
  'Scalable architecture',
  '24/7 support & maintenance',
  'Agile development process'
]

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0  from-background via-background/90 to-background" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        style={{ y: y1 }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"
        style={{ y: y2 }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content */}
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-muted-foreground">
                Elite Development Team
              </span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`
            }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-balance">
              <span className="block">We Build</span>
              <span className="block gradient-text text-shadow-lg">
                Digital Excellence
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-muted-foreground">
                That Scales
              </span>
            </h1>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional development team specializing in{' '}
            <span className="text-primary font-semibold">enterprise web applications</span>,{' '}
            <span className="text-purple-600 font-semibold">mobile solutions</span>,{' '}
            <span className="text-cyan-600 font-semibold">cloud architecture</span>, and{' '}
            <span className="text-orange-600 font-semibold">digital transformation</span>.
          </motion.p>

          {/* Features List */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"
              >
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              href="/projects"
              className="btn-primary group text-lg px-10 py-5 shadow-xl"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="btn-secondary group text-lg px-10 py-5"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Start Your Project</span>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="card-3d p-6 text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
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
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center relative">
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Ambient Particle System */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
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
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Internal Links */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Link href="/about" className="text-accent underline hover:text-accent/80">About</Link>
        <Link href="/services" className="text-accent underline hover:text-accent/80">Services</Link>
        <Link href="/projects" className="text-accent underline hover:text-accent/80">Projects</Link>
        <Link href="/team" className="text-accent underline hover:text-accent/80">Team</Link>
        <Link href="/blog" className="text-accent underline hover:text-accent/80">Blog</Link>
        <Link href="/contact" className="text-accent underline hover:text-accent/80">Contact</Link>
      </div>
    </section>
  )
}