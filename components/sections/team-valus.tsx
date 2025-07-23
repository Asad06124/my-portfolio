'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Target, Users, Lightbulb, Shield } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'We love what we do and it shows in every project we deliver. Our passion fuels innovation and excellence.',
    color: 'text-accent-secondary'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Speed matters in digital. We deliver rapid prototypes and quick iterations without compromising quality.',
    color: 'text-accent'
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Every decision we make is aligned with your business objectives and user needs for maximum impact.',
    color: 'text-accent-tertiary'
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We work as an extension of your team, maintaining transparent communication throughout the journey.',
    color: 'text-accent'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of trends and leverage cutting-edge technologies to give you a competitive advantage.',
    color: 'text-accent-secondary'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous testing, code reviews, and best practices ensure your project is built to last and scale.',
    color: 'text-accent-tertiary'
  }
]

export function TeamValues() {
  return (
    <section className="section-padding bg-glass/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.02 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to excellence in every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.03, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:shadow-neon-strong transition-all duration-500 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-glass to-glass/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 ${value.color}`}>
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-foreground/90 mb-8 leading-relaxed">
              "We don't just build software, we craft digital experiences that 
              <span className="gradient-text font-semibold"> transform businesses</span> and 
              <span className="gradient-text-secondary font-semibold"> delight users</span>."
            </blockquote>
            <cite className="text-accent font-semibold text-lg">
              — DevStudio Pro Team
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}