"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle,
  Globe,
  Star,
  Clock,
  DollarSign,
  Sparkles,
  Eye,
  ChevronRight
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
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    price: 'Starting at $5,000',
    timeline: '4-12 weeks',
    popularity: 'Most Popular',
    featured: true
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
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    price: 'Starting at $8,000',
    timeline: '6-16 weeks',
    popularity: 'High Demand'
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
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    price: 'Starting at $3,000',
    timeline: '2-8 weeks',
    popularity: 'Creative Focus'
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
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    price: 'Starting at $2,000/mo',
    timeline: 'Ongoing',
    popularity: 'Growth Driver'
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
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-500/10 to-purple-500/10',
    price: 'Starting at $4,000',
    timeline: '3-10 weeks',
    popularity: 'Enterprise Ready'
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
    gradient: 'from-slate-500 to-gray-600',
    bgGradient: 'from-slate-500/10 to-gray-600/10',
    price: 'Starting at $3,500',
    timeline: '2-6 weeks',
    popularity: 'Security First'
  }
]

export function ServicesGrid() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className="section-padding bg-background">

      <div className="container relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.02 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.02 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-foreground">Premium Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Our{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Services
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.03, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions crafted to{' '}
            <span className="text-blue-500 font-semibold">transform your business</span>{' '}
            and accelerate growth in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredService(service.title)}
              onHoverEnd={() => setHoveredService(null)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                service.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border border-border/50 rounded-3xl group-hover:border-blue-500/30 transition-all duration-500" />
              
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`} />
              
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                  <Star className="w-3 h-3 inline mr-1" />
                  Most Popular
                </div>
              )}

              {/* Popularity Badge */}
              <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-semibold rounded-full border border-border/50">
                {service.popularity}
              </div>

              <div className={`relative z-10 p-8 ${service.featured ? 'lg:p-12' : ''} h-full flex flex-col`}>
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <motion.div 
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl shadow-blue-500/20`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.03, delay: 0.08 + featureIndex * 0.03 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group/feature"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground/90 group-hover/feature:text-foreground transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-foreground/60 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.03, delay: 0.1 + techIndex * 0.02 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-background/70 backdrop-blur-sm border border-border/50 text-foreground/80 text-sm rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-foreground transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Timeline */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">
                        Investment
                      </span>
                    </div>
                    <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">
                        Timeline
                      </span>
                    </div>
                    <div className="text-lg font-bold text-foreground">
                      {service.timeline}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className={`group/cta flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/projects"
                    className="group/view flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold bg-background/50 backdrop-blur-sm border border-border/50 text-foreground hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    <span>View Work</span>
                  </Link>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                initial={false}
                animate={{ 
                  opacity: hoveredService === service.title ? 0.1 : 0 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-blue-500/20 p-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.02 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/25"
              >
                <Globe className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black mb-6">
                Need Something{' '}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Custom?
                </span>
              </h3>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                We specialize in creating bespoke solutions that perfectly align with your unique business vision and technical requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    Discuss Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  href="/projects"
                  className="group px-8 py-4 bg-background/50 backdrop-blur-sm border border-border/50 text-foreground rounded-2xl font-bold hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    View Our Portfolio
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-500 mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}