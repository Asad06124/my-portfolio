"use client";

import { motion } from 'framer-motion/dist/framer-motion'
import { useState } from 'react'
import { 
  Heart, 
  Target, 
  Lightbulb, 
  Users,
  Sparkles,
  Quote,
  Star,
  Rocket,
  Shield,
  Zap
} from 'lucide-react'

const principles = [
  {
    icon: Heart,
    title: 'User-Centered Design',
    description: 'Every line of code should serve the user. I believe in creating experiences that are intuitive, accessible, and delightful.',
    gradient: 'from-pink-600 via-pink-500 to-red-500',
    bgGradient: 'from-pink-500/10 to-red-500/10',
    stats: { impact: '98%', metric: 'User Satisfaction' }
  },
  {
    icon: Target,
    title: 'Quality Over Quantity',
    description: 'I focus on writing clean, maintainable code that stands the test of time rather than rushing to implement features.',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    stats: { impact: '40%', metric: 'Fewer Bugs' }
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and so do I. I stay curious and embrace new tools and methodologies that can improve my craft.',
    gradient: 'from-yellow-600 via-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10',
    stats: { impact: '12+', metric: 'New Skills/Year' }
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'The best solutions emerge from diverse perspectives. I value open communication and knowledge sharing with my team.',
    gradient: 'from-purple-600 via-purple-500 to-indigo-500',
    bgGradient: 'from-purple-500/10 to-indigo-500/10',
    stats: { impact: '5x', metric: 'Team Productivity' }
  }
]

const coreValues = [
  { icon: Shield, text: 'Security First', color: 'text-emerald-500' },
  { icon: Zap, text: 'Performance Focused', color: 'text-yellow-500' },
  { icon: Star, text: 'Excellence Driven', color: 'text-blue-500' },
  { icon: Rocket, text: 'Innovation Minded', color: 'text-purple-500' }
]

export function Philosophy() {
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null)

  return (
    <section className="section-padding bg-background">
      
      <div className="container relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.02 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-pink-500/20 mb-8"
          >
            <Lightbulb className="w-5 h-5 text-pink-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Core Values
            </span>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            My{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Philosophy
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500/0 via-pink-500 to-pink-500/0 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.03, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The{' '}
            <span className="text-pink-500 font-semibold">principles</span>{' '}
            that guide my approach to{' '}
            <span className="text-blue-500 font-semibold">development</span>{' '}
            and{' '}
            <span className="text-purple-500 font-semibold">problem-solving</span>.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={value.text}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.03, delay: 0.08 + index * 0.02 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/50 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
            >
              <value.icon className={`w-5 h-5 ${value.color} group-hover:scale-110 transition-transform duration-300`} />
              <span className="text-sm font-semibold text-foreground group-hover:text-pink-500 transition-colors duration-300">
                {value.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Principles */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.03, delay: index * 0.04 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredPrinciple(principle.title)}
              onHoverEnd={() => setHoveredPrinciple(null)}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border border-border/50 rounded-3xl group-hover:border-pink-500/30 transition-all duration-500" />
              
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${principle.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`} />

              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <motion.div 
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <principle.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-pink-500 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>

                {/* Impact Stats */}
                <motion.div
                  className="mt-auto p-4 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.02 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-muted-foreground">
                      {principle.stats.metric}
                    </span>
                    <div className={`text-xl font-bold bg-gradient-to-r ${principle.gradient} bg-clip-text text-transparent`}>
                      {principle.stats.impact}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}
                initial={false}
                animate={{ 
                  opacity: hoveredPrinciple === principle.title ? 0.05 : 0 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-pink-500/20 p-12 text-center max-w-4xl mx-auto">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/5 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.03, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Quote className="w-16 h-16 text-pink-500/30 mx-auto mb-8" />
            </motion.div>

            <div className="relative z-10">
              <motion.blockquote 
                className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.03, delay: 0.4 }}
                viewport={{ once: true }}
              >
                "The best code is not just{' '}
                <span className="text-pink-500 font-semibold">functional</span>, but also{' '}
                <span className="text-blue-500 font-semibold">readable</span>,{' '}
                <span className="text-purple-500 font-semibold">maintainable</span>, and serves{' '}
                <span className="text-emerald-500 font-semibold">real human needs</span>."
              </motion.blockquote>
              
              <motion.cite 
                className="text-lg font-semibold bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.03, delay: 0.6 }}
                viewport={{ once: true }}
              >
                — My development mantra
              </motion.cite>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 left-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-pink-500/30" />
              </motion.div>
            </div>
            <div className="absolute bottom-8 right-8">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Star className="w-6 h-6 text-blue-500/30" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}