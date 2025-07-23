'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Code, Sparkles, Users, Award, Clock, Zap, Globe, Rocket, Star } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Projects Delivered', value: '30+', color: 'text-emerald-500', bgColor: 'from-emerald-500/20 to-emerald-600/10' },
  { icon: Users, label: 'Happy Clients', value: '15+', color: 'text-blue-500', bgColor: 'from-blue-500/20 to-blue-600/10' },
  { icon: Code, label: 'Technologies', value: '25+', color: 'text-purple-500', bgColor: 'from-purple-500/20 to-purple-600/10' },
  { icon: Clock, label: 'Years Experience', value: '8+', color: 'text-orange-500', bgColor: 'from-orange-500/20 to-orange-600/10' },
]

const features = [
  { text: 'Enterprise-grade solutions', icon: Globe },
  { text: 'Scalable architecture', icon: Rocket },
  { text: '24/7 support & maintenance', icon: Star },
  { text: 'Agile development process', icon: Zap }
]


export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.03, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-primary/20 shadow-2xl">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-primary" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-cyan-500 opacity-50" />
              </motion.div>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Elite Development Team
            </span>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-primary to-cyan-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Enhanced Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 60 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight">
            <motion.span 
              className="block text-foreground"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.03, delay: 0.5 }}
            >
              We Build
            </motion.span>
            
            <motion.span 
              className="block relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 100 }}
            >
              <span className="bg-gradient-to-r from-primary via-purple-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent font-extrabold bg-[length:200%_auto] animate-gradient">
                Digital Excellence
              </span>
              
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
              
              {/* Sparkle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${20 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5 + i * 0.3,
                  }}
                />
              ))}
            </motion.span>
            
            <motion.span 
              className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-muted-foreground mt-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.03, delay: 0.9 }}
            >
              That <span className="text-accent font-semibold">Scales</span>
            </motion.span>
          </h1>
        </motion.div>
        
        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 1.1 }}
          className="mb-10"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Professional development team specializing in{' '}
            <motion.span 
              className="text-primary font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              enterprise web applications
            </motion.span>
            ,{' '}
            <motion.span 
              className="text-purple-500 font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              mobile solutions
            </motion.span>
            ,{' '}
            <motion.span 
              className="text-cyan-500 font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              cloud architecture
            </motion.span>
            , and{' '}
            <motion.span 
              className="text-emerald-500 font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              digital transformation
            </motion.span>
            .
          </p>
        </motion.div>

        {/* Enhanced Features List */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 1.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.4 + index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <feature.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 1.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/projects"
              className="group flex items-center px-12 py-6 text-lg font-bold rounded-2xl bg-background/50 backdrop-blur-xl border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                View Our Work
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-white/20 to-transparent transition-all duration-700 transform -skew-y-12" />
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/contact"
              className="group flex items-center px-12 py-6 text-lg font-bold rounded-2xl bg-background/50 backdrop-blur-xl border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform duration-300" />
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 2 + index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative p-8 text-center rounded-3xl bg-background/50 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <motion.div 
                  className="text-4xl md:text-5xl font-black mb-3"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.03, delay: 2.2 + index * 0.1 }}
                >
                  <span className={`bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                </motion.div>
                
                <div className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Ultra-Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.03, delay: 2.5 }}
      >
        <div className="flex flex-col items-center space-y-3">
          <motion.span 
            className="text-xs text-muted-foreground font-semibold tracking-wider uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.span>
          
          <div className="relative w-8 h-12 border-2 border-primary/40 rounded-full backdrop-blur-sm bg-background/20">
            <motion.div
              className="absolute w-2 h-4 bg-gradient-to-b from-primary to-cyan-500 rounded-full left-1/2 top-2 transform -translate-x-1/2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}