'use client'

import { motion } from 'framer-motion'
import { Users, Award, Target, Zap } from 'lucide-react'

const achievements = [
  { icon: Users, label: 'Team Members', value: '12+', color: 'text-accent' },
  { icon: Award, label: 'Years Combined Experience', value: '20+', color: 'text-accent-secondary' },
  { icon: Target, label: 'Projects Completed', value: '30+', color: 'text-accent-tertiary' },
  { icon: Zap, label: 'Client Satisfaction', value: '99%', color: 'text-accent' },
]

export function TeamHero() {
  return (
    <section className="section-padding pt-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.02 }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-glass backdrop-blur-xl border border-glass-border rounded-full mb-8">
            <Users className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">
              Meet Our Elite Team
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="block">The Minds Behind</span>
            <span className="block gradient-text">Your Success</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of developers, designers, and digital strategists 
            who transform ambitious ideas into extraordinary digital experiences.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="neon-card p-8 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-glass to-glass/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-black mb-2 ${achievement.color}`}>
                {achievement.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}