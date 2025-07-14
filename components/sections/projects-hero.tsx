'use client'

import { motion } from 'framer-motion'

export function ProjectsHero() {
  return (
    <section className="section-padding pt-24">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A collection of web applications and tools I've built using modern technologies. 
            Each project represents a unique challenge and learning opportunity.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
              React & Next.js
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
              Full Stack
            </span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">
              Open Source
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}