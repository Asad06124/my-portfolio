'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    features: [
      'React & Next.js Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Performance Optimization'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    gradient: 'from-accent to-accent-tertiary',
    price: 'Starting at $5,000',
    timeline: '4-12 weeks'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps that work seamlessly on iOS and Android.',
    features: [
      'React Native Development',
      'Flutter Applications',
      'Native iOS & Android',
      'App Store Deployment',
      'Push Notifications & Analytics'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    gradient: 'from-accent-secondary to-accent',
    price: 'Starting at $8,000',
    timeline: '6-16 weeks'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience and drive conversions.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Design System Creation',
      'Usability Testing'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    gradient: 'from-accent-tertiary to-accent-secondary',
    price: 'Starting at $3,000',
    timeline: '2-8 weeks'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies that increase visibility and drive growth.',
    features: [
      'Search Engine Optimization (SEO)',
      'Content Marketing Strategy',
      'Social Media Management',
      'PPC Advertising',
      'Analytics & Reporting'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Facebook Ads'],
    gradient: 'from-accent to-accent-secondary',
    price: 'Starting at $2,000/mo',
    timeline: 'Ongoing'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust, scalable backend systems that power your applications.',
    features: [
      'RESTful API Development',
      'GraphQL Implementation',
      'Database Design & Optimization',
      'Third-party Integrations',
      'Real-time Features'
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    gradient: 'from-accent-secondary to-accent-tertiary',
    price: 'Starting at $4,000',
    timeline: '3-10 weeks'
  },
  {
    icon: Shield,
    title: 'DevOps & Security',
    description: 'Secure, automated deployment pipelines and infrastructure management.',
    features: [
      'CI/CD Pipeline Setup',
      'Cloud Infrastructure (AWS/Azure)',
      'Security Audits',
      'Performance Monitoring',
      'Backup & Disaster Recovery'
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins'],
    gradient: 'from-accent-tertiary to-accent',
    price: 'Starting at $3,500',
    timeline: '2-6 weeks'
  }
]

export function ServicesGrid() {
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
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs and growth objectives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="neon-card p-8 group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-neon group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground/60 mb-3 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-glass border border-glass-border text-foreground/80 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & Timeline */}
              <div className="flex items-center justify-between mb-6 p-4 bg-glass/50 rounded-xl border border-glass-border">
                <div>
                  <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Timeline: {service.timeline}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`btn-secondary w-full justify-center group/cta hover:bg-gradient-to-r hover:${service.gradient} hover:text-black transition-all duration-300`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/cta:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-10 max-w-3xl mx-auto">
            <Globe className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Need Something Custom?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              We specialize in creating tailored solutions that perfectly fit your unique business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="btn-secondary group"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link href="/contact" className="text-accent underline hover:text-accent/80">Contact</Link>
          <Link href="/projects" className="text-accent underline hover:text-accent/80">Projects</Link>
        </div>
      </div>
    </section>
  )
}