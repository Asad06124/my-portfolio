'use client'

import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight,
  Clock,
  Users,
  Target
} from 'lucide-react'

const processSteps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed discussions.',
    duration: '1-2 weeks',
    deliverables: ['Project Scope Document', 'Timeline & Budget', 'Technical Requirements'],
    color: 'text-accent'
  },
  {
    step: '02',
    icon: Lightbulb,
    title: 'Strategy & Planning',
    description: 'Our team develops a comprehensive strategy, creates user personas, and plans the technical architecture.',
    duration: '1-2 weeks',
    deliverables: ['Project Strategy', 'User Journey Maps', 'Technical Architecture'],
    color: 'text-accent-secondary'
  },
  {
    step: '03',
    icon: Palette,
    title: 'Design & Prototyping',
    description: 'We create wireframes, mockups, and interactive prototypes to visualize the final product before development.',
    duration: '2-4 weeks',
    deliverables: ['Wireframes', 'UI Mockups', 'Interactive Prototypes', 'Design System'],
    color: 'text-accent-tertiary'
  },
  {
    step: '04',
    icon: Code,
    title: 'Development & Integration',
    description: 'Our developers bring the designs to life using modern technologies and best practices for scalable solutions.',
    duration: '4-12 weeks',
    deliverables: ['Frontend Development', 'Backend APIs', 'Database Setup', 'Third-party Integrations'],
    color: 'text-accent'
  },
  {
    step: '05',
    icon: TestTube,
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your product is bug-free, secure, and performs optimally across all devices.',
    duration: '1-2 weeks',
    deliverables: ['Quality Assurance Report', 'Performance Testing', 'Security Audit', 'Bug Fixes'],
    color: 'text-accent-secondary'
  },
  {
    step: '06',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We deploy your product to production and provide ongoing support to ensure smooth operation and growth.',
    duration: 'Ongoing',
    deliverables: ['Production Deployment', 'Documentation', 'Training', '24/7 Support'],
    color: 'text-accent-tertiary'
  }
]

export function ProcessSection() {
  return (
    <section className="section-padding bg-glass/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch and beyond.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-1/2 top-32 w-px h-24 bg-gradient-to-b from-accent/50 to-transparent transform -translate-x-1/2 hidden lg:block" />
              )}

              {/* Content */}
              <div className="flex-1">
                <div className={`glass-card p-8 group hover:scale-105 transition-all duration-500 ${
                  index % 2 === 0 ? 'text-left' : 'text-right lg:text-left'
                }`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`text-6xl font-black ${step.color} opacity-20`}>
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground/80 mb-3">
                      Key Deliverables:
                    </h4>
                    {step.deliverables.map((deliverable) => (
                      <div key={deliverable} className="flex items-center gap-2">
                        <ArrowRight className={`w-4 h-4 ${step.color}`} />
                        <span className="text-foreground/80 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br from-glass to-glass/50 border-2 border-glass-border flex items-center justify-center shadow-neon group-hover:scale-110 transition-all duration-300`}>
                  <step.icon className={`w-12 h-12 ${step.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent-tertiary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Goal-Oriented</h3>
            <p className="text-muted-foreground">Every step is aligned with your business objectives</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Collaborative</h3>
            <p className="text-muted-foreground">Transparent communication throughout the journey</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-tertiary/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-accent-tertiary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Results-Driven</h3>
            <p className="text-muted-foreground">Focused on delivering measurable outcomes</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}