'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="section-padding pt-24">
      <div className="container">
        <div className="grid gap-16 items-center grid-cols-1 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl mx-auto text-center lg:text-left lg:mx-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Developer Journey
            </h1>
            <div className="prose prose-lg mx-auto lg:mx-0">
              <p>
                I've always been fascinated by the intersection of technology and creativity. 
                What started as curiosity about how websites work has evolved into a passion 
                for crafting digital experiences that make a real difference in people's lives.
              </p>
              
              <p>
                Over the past 5 years, I've had the privilege of working with startups, 
                agencies, and established companies, helping them bring their visions to life 
                through code. Each project has taught me something new, whether it's a 
                cutting-edge framework, a better way to solve problems, or simply how to 
                communicate more effectively with diverse teams.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community 
                through blog posts and talks.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden mx-auto lg:mx-0">
              <Image
                src="/profile2.jpg"
                alt="Asad Ullah"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}