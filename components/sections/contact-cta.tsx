'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you're a company looking to hire, or you're a fellow developer 
            wanting to collaborate, I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href="/about" className="text-accent underline hover:text-accent/80">About</Link>
            <Link href="/services" className="text-accent underline hover:text-accent/80">Services</Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="mailto:asadbalqani@gmail.com"
              className="btn-secondary inline-flex items-center gap-2 text-lg"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}