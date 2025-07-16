'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { 
  Sparkles, 
  Code, 
  Heart, 
  Coffee, 
  Rocket,
  Star,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Mail
} from 'lucide-react'

export function AboutHero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="section-padding pt-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-blue-500/20"
            >
              <Heart className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
              <motion.div 
                className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              My{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Developer
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
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mt-2">
                Journey
              </span>
            </motion.h1>

            {/* Enhanced Content */}
            <motion.div
              className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p>
                I've always been fascinated by the intersection of{' '}
                <span className="text-blue-500 font-semibold">technology</span>{' '}
                and{' '}
                <span className="text-purple-500 font-semibold">creativity</span>. 
                What started as curiosity about how websites work has evolved into a passion 
                for crafting digital experiences that make a real difference in people's lives.
              </p>
              
              <p>
                Over the past{' '}
                <span className="text-pink-500 font-semibold">8+ years</span>, 
                I've had the privilege of working with startups, agencies, and established companies, 
                helping them bring their visions to life through code. Each project has taught me 
                something new, whether it's a cutting-edge framework or simply how to communicate 
                more effectively with diverse teams.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to{' '}
                <span className="text-emerald-500 font-semibold">open source projects</span>, 
                or sharing knowledge with the developer community through blog posts and talks.
              </p>
            </motion.div>

            {/* Personal Info Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="p-4 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 group hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                <MapPin className="w-5 h-5 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-semibold text-foreground">Lahore, Pakistan</div>
              </div>
              
              <div className="p-4 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 group hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <Calendar className="w-5 h-5 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-muted-foreground">Experience</div>
                <div className="font-semibold text-foreground">8+ Years</div>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="https://github.com/asad06124"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-background/50 hover:bg-blue-500/10 border border-border/50 hover:border-blue-500/30 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/theasadsahir"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-background/50 hover:bg-blue-500/10 border border-border/50 hover:border-blue-500/30 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="mailto:asadbalqani@gmail.com"
                className="group w-12 h-12 bg-background/50 hover:bg-blue-500/10 border border-border/50 hover:border-blue-500/30 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div 
                className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden ring-4 ring-background/50 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/profile2.jpg"
                  alt="Asad Ullah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -left-4 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Code className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Rocket className="w-6 h-6" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 p-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Coffee className="w-6 h-6" />
              </motion.div>

              {/* Background Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
              
              {/* Floating Sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}