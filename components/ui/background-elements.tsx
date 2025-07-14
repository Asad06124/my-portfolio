'use client'

import { motion } from 'framer-motion'

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Enhanced animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 dark:bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/20 dark:bg-accent-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 180, 0],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-tertiary/10 dark:bg-accent-tertiary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced cyber grid overlay */}
      <div className="absolute inset-0 bg-light-cyber-grid dark:bg-cyber-grid opacity-40" />

      {/* Additional floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-6 h-6 bg-accent/30 dark:bg-accent/30 rotate-45 rounded-sm"
        animate={{
          y: [0, -30, 0],
          rotate: [45, 135, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-40 right-32 w-8 h-8 border-2 border-accent-secondary/30 dark:border-accent-secondary/30 rounded-full"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-4 h-16 bg-accent-tertiary/20 dark:bg-accent-tertiary/20 rounded-full"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.5, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-5 h-5 bg-gradient-to-br from-accent/40 to-accent-tertiary/40 dark:from-accent/40 dark:to-accent-tertiary/40 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Particle system */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/20 dark:bg-accent/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-accent/50 to-transparent dark:from-accent/50"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-accent-secondary/50 to-transparent dark:from-accent-secondary/50"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut",
        }}
      />

      {/* Glowing nodes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent/60 dark:bg-accent/60 rounded-full shadow-neon dark:shadow-neon"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-accent-tertiary/60 dark:bg-accent-tertiary/60 rounded-full shadow-neon dark:shadow-neon"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}