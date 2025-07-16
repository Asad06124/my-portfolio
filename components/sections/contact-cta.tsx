'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { 
  Mail, 
  ArrowRight, 
  MessageCircle, 
  Calendar,
  Phone,
  Sparkles,
  Zap,
  Heart,
  Coffee,
  Rocket,
  Star,
  Send,
  ChevronRight
} from 'lucide-react'

export function ContactCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-background/50 backdrop-blur-xl border border-border/50 p-12 md:p-16 text-center max-w-5xl mx-auto">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
            
            {/* Floating Icons */}
            <div className="absolute top-8 left-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-blue-500/50" />
              </motion.div>
            </div>
            <div className="absolute top-8 right-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Rocket className="w-6 h-6 text-purple-500/50" />
              </motion.div>
            </div>
            <div className="absolute bottom-8 left-8">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 text-pink-500/50" />
              </motion.div>
            </div>
            <div className="absolute bottom-8 right-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Zap className="w-6 h-6 text-orange-500/50" />
              </motion.div>
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-blue-500/20 mb-8"
              >
                <Coffee className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Let's Connect
                </span>
                <motion.div 
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Main Heading */}
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Let's Build Something{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Amazing
                  </span>
                  {/* Sparkle effects */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-500 rounded-full"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${10 + (i % 2) * 30}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5 + i * 0.3,
                      }}
                    />
                  ))}
                </span>{' '}
                <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mt-4">
                  Together
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                I'm always excited about{' '}
                <span className="text-blue-500 font-semibold">new projects</span>{' '}
                and opportunities. Whether you're a company looking to hire, or a fellow developer wanting to{' '}
                <span className="text-purple-500 font-semibold">collaborate</span>
                , I'd love to hear from you.
              </motion.p>

              {/* Contact Options */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="group p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-500/5">
                  <MessageCircle className="w-8 h-8 text-blue-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-2">Quick Chat</h3>
                  <p className="text-sm text-muted-foreground">Let's discuss your project ideas</p>
                </div>
                
                <div className="group p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 hover:border-purple-500/30 transition-all duration-300 hover:bg-purple-500/5">
                  <Calendar className="w-8 h-8 text-purple-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-2">Schedule Meeting</h3>
                  <p className="text-sm text-muted-foreground">Book a consultation call</p>
                </div>
                
                <div className="group p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 hover:border-pink-500/30 transition-all duration-300 hover:bg-pink-500/5">
                  <Send className="w-8 h-8 text-pink-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-2">Send Message</h3>
                  <p className="text-sm text-muted-foreground">Drop me a detailed message</p>
                </div>
              </motion.div>

              {/* Main CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Link
                    href="/contact"
                    className="group relative overflow-hidden px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Get In Touch
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-white/20 to-transparent transition-all duration-700 transform -skew-y-12" />
                    
                    {/* Floating particles */}
                    {isHovered && [...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="mailto:asadbalqani@gmail.com"
                    className="group flex items-center gap-3 px-10 py-5 text-xl font-bold rounded-2xl bg-background/50 backdrop-blur-xl border-2 border-blue-500/30 text-foreground hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                    Send Email
                  </Link>
                </motion.div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                className="flex flex-wrap gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/about" 
                  className="group flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-semibold"
                >
                  <Star className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  About Me
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services" 
                  className="group flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors font-semibold"
                >
                  <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Services
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/projects" 
                  className="group flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors font-semibold"
                >
                  <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  Projects
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Response Time Indicator */}
              <motion.div
                className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold text-emerald-600">
                  Usually responds within 24 hours
                </span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Statistics */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-1">24h</div>
              <div className="text-sm text-muted-foreground">Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500 mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-500 mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${
              ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)]
            }, transparent)`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  )
}