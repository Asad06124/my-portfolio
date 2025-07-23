'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import Link from 'next/link'
import { 
  BookOpen, 
  ArrowLeft, 
  Clock, 
  Bell, 
  Sparkles,
  Code,
  Lightbulb,
  Users,
  TrendingUp,
  Calendar
} from 'lucide-react'

const blogCategories = [
  { icon: Code, title: 'Development', description: 'Latest coding techniques and frameworks' },
  { icon: Lightbulb, title: 'Innovation', description: 'Emerging technologies and trends' },
  { icon: Users, title: 'Team Insights', description: 'Behind the scenes and team stories' },
  { icon: TrendingUp, title: 'Industry News', description: 'Market trends and analysis' },
]

export function ComingSoonSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Countdown to launch (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background" />
      
      {/* Floating Elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          <BookOpen className="w-6 h-6 text-primary" />
        </motion.div>
      ))}

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Main Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.03, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-professional rounded-3xl opacity-20 blur-xl animate-pulse" />
              <div className="relative w-full h-full bg-gradient-professional rounded-3xl flex items-center justify-center shadow-xl">
                <BookOpen className="w-16 h-16 text-white" />
                <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-2 -right-2 animate-bounce" />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 gradient-text">
              Blog Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We're crafting an amazing blog experience filled with insights, tutorials, 
              and the latest trends in technology and development.
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Launching In
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.03, delay: 0.8 + index * 0.1 }}
                  className="card-3d p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-black gradient-text mb-1">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 1 }}
            className="mb-12"
          >
            {!isSubscribed ? (
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Get Notified When We Launch
                </h3>
                <form onSubmit={handleSubscribe} className="glass-card p-2 flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent border-0 outline-0 px-4 py-3 text-foreground placeholder-muted-foreground"
                    required
                  />
                  <button type="submit" className="btn-primary px-6 py-3 whitespace-nowrap">
                    Notify Me
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-6 max-w-md mx-auto"
              >
                <div className="flex items-center justify-center gap-2 text-emerald-600 mb-2">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      ✓
                    </motion.div>
                  </div>
                  <span className="font-semibold">You're All Set!</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll notify you as soon as our blog goes live.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Blog Categories Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 1.2 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-foreground mb-8">
              What to Expect
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {blogCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.03, delay: 1.4 + index * 0.1 }}
                  className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{category.title}</h4>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 1.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Follow us for updates and sneak peeks
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="btn-secondary group"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Contact Us</span>
              </Link>
              <Link
                href="/projects"
                className="btn-outline group"
              >
                <span>View Our Work</span>
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional Floating Elements */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`secondary-${i}`}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}