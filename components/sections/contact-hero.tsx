'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section className="section-padding pt-24 bg-card/50">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just connecting with fellow developers. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-accent mb-1">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-accent mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}