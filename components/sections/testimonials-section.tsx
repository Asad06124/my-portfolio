'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    image: '/testimonials/sarah.jpg',
    content: 'DevStudio Pro transformed our vision into a world-class platform. Their attention to detail and technical expertise exceeded our expectations. The team delivered on time and within budget.',
    rating: 5,
    project: 'Enterprise SaaS Platform'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, FinanceFlow',
    company: 'FinanceFlow',
    image: '/testimonials/michael.jpg',
    content: 'Working with DevStudio Pro was a game-changer for our company. They built a secure, scalable mobile app that our users love. The development process was smooth and professional.',
    rating: 5,
    project: 'FinTech Mobile App'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Founder, HealthBridge',
    company: 'HealthBridge',
    image: '/testimonials/emily.jpg',
    content: 'The healthcare platform they developed has revolutionized how we connect with patients. The team understood our complex requirements and delivered a solution that truly makes a difference.',
    rating: 5,
    project: 'Healthcare Platform'
  }
]

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gradient mb-6">
            Client Success Stories
          </h2>
          <p className="body-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            working with DevStudio Pro and the results we've delivered together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="professional-card p-8 group enhance-3d"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground/90 leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Project Badge */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                  Project
                </div>
                <div className="text-sm font-medium text-foreground">
                  {testimonial.project}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="professional-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 50+ companies that have transformed their digital presence with DevStudio Pro.
            </p>
            <div className="grid grid-cols-4 gap-8 opacity-60">
              {/* Company logos would go here */}
              <div className="h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">Company A</span>
              </div>
              <div className="h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">Company B</span>
              </div>
              <div className="h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">Company C</span>
              </div>
              <div className="h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">Company D</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}