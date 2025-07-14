'use client'

import { motion } from 'framer-motion'
import { Heart, Target, Lightbulb, Users } from 'lucide-react'

const principles = [
  {
    icon: Heart,
    title: 'User-Centered Design',
    description: 'Every line of code should serve the user. I believe in creating experiences that are intuitive, accessible, and delightful.'
  },
  {
    icon: Target,
    title: 'Quality Over Quantity',
    description: 'I focus on writing clean, maintainable code that stands the test of time rather than rushing to implement features.'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and so do I. I stay curious and embrace new tools and methodologies that can improve my craft.'
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'The best solutions emerge from diverse perspectives. I value open communication and knowledge sharing with my team.'
  }
]

export function Philosophy() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide my approach to development and problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-muted-foreground mb-4">
              "The best code is not just functional, but also readable, maintainable, and serves real human needs."
            </blockquote>
            <cite className="text-accent font-medium">— My development mantra</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}