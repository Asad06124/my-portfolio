import { motion } from 'framer-motion/dist/framer-motion'
import { Code, Palette, Smartphone, TrendingUp, Database, Shield } from 'lucide-react'

const serviceHighlights = [
  { icon: Code, label: 'Web Development' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: TrendingUp, label: 'Digital Marketing' },
  { icon: Database, label: 'Backend Systems' },
  { icon: Shield, label: 'Security & DevOps' },
]

export function ServicesHero() {
  return (
    <section className="section-padding pt-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.02 }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-glass backdrop-blur-xl border border-glass-border rounded-full mb-8">
            <Code className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">
              Full-Service Digital Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="block">Complete Digital</span>
            <span className="block gradient-text">Transformation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital solutions that 
            drive growth, enhance user experience, and deliver measurable results.
          </p>
        </motion.div>

        {/* Service Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
        >
          {serviceHighlights.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.03, delay: 0.5 + index * 0.1 }}
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent-tertiary/20 flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-sm font-semibold text-foreground/80">
                {service.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}