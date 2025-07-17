'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { 
  ExternalLink, 
  Github, 
  Award, 
  Star, 
  TrendingUp, 
  Users, 
  Download,
  Eye,
  Play,
  Sparkles,
  ArrowUpRight,
  Zap
} from 'lucide-react'

const projects = [
  {
    title: 'FinTech Mobile App',
    description: 'A comprehensive financial management app with real-time analytics, investment tracking, and secure payment processing. Built for modern users who demand security and speed.',
    image: '/projects/fintech.webp',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    liveUrl: 'https://fintech-demo.com',
    githubUrl: 'https://github.com/devstudio/fintech-app',
    stats: [
      { icon: Users, label: 'Active Users', value: '50K+', color: 'text-blue-500' },
      { icon: Star, label: 'App Rating', value: '4.8', color: 'text-yellow-500' },
      { icon: Download, label: 'Downloads', value: '100K+', color: 'text-green-500' }
    ],
    category: 'Mobile App',
    featured: true,
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
    achievements: ['App Store Featured', 'Best Financial App 2024', 'Users Choice Award']
  },
  {
    title: 'E-Learning Platform',
    description: 'Modern educational platform with live streaming, interactive courses, and AI-powered learning recommendations. Revolutionizing online education with cutting-edge technology.',
    image: '/projects/elearning.webp',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC', 'OpenAI'],
    liveUrl: 'https://elearning-demo.com',
    githubUrl: 'https://github.com/devstudio/elearning-platform',
    stats: [
      { icon: Users, label: 'Students', value: '25K+', color: 'text-purple-500' },
      { icon: Play, label: 'Courses', value: '500+', color: 'text-pink-500' },
      { icon: TrendingUp, label: 'Completion', value: '94%', color: 'text-emerald-500' }
    ],
    category: 'Web Platform',
    featured: true,
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    achievements: ['EdTech Innovation Award', 'Best UX Design', 'Top Platform 2024']
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Advanced healthcare management system with patient records, appointment scheduling, and telemedicine features. Empowering healthcare providers with data-driven insights.',
    image: '/projects/healthcare.webp',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://healthcare-demo.com',
    githubUrl: 'https://github.com/devstudio/healthcare-dashboard',
    stats: [
      { icon: TrendingUp, label: 'Hospitals', value: '50+', color: 'text-emerald-500' },
      { icon: Users, label: 'Patients', value: '10K+', color: 'text-blue-500' },
      { icon: Zap, label: 'Uptime', value: '99.9%', color: 'text-orange-500' }
    ],
    category: 'Enterprise',
    featured: true,
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    achievements: ['Healthcare Innovation', 'HIPAA Compliant', 'Enterprise Ready']
  }
]

export function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 backdrop-blur-xl border border-blue-500/20 mb-8"
          >
            <div className="relative">
              <Award className="w-5 h-5 text-blue-500" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-purple-500 opacity-50" />
              </motion.div>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Featured Work
            </span>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Projects That{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Make Impact
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
            Showcasing our most{' '}
            <span className="text-blue-500 font-semibold">successful projects</span>{' '}
            that have transformed businesses and delighted{' '}
            <span className="text-purple-500 font-semibold">users worldwide</span>.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.03, delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-background/50 backdrop-blur-xl border border-border/50 hover:border-blue-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                
                <div className={`grid lg:grid-cols-2 gap-12 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden group/image">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <span className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-sm font-bold rounded-full shadow-lg backdrop-blur-sm`}>
                          {project.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-6 right-6">
                          <div className="px-3 py-1 bg-yellow-500/90 text-yellow-900 text-xs font-bold rounded-full backdrop-blur-sm">
                            <Star className="w-3 h-3 inline mr-1" />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Enhanced Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="grid grid-cols-3 gap-3">
                          {project.stats.map((stat, statIndex) => (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: 0.1 + statIndex * 0.03 }}
                              viewport={{ once: true }}
                              className="text-center bg-background/80 backdrop-blur-sm rounded-xl p-3 border border-border/30 group-hover:bg-background/90 transition-all duration-300"
                            >
                              <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                              <div className="text-sm font-bold text-foreground">{stat.value}</div>
                              <div className="text-xs text-muted-foreground">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Play Button */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: hoveredProject === project.title ? 1 : 0,
                          scale: hoveredProject === project.title ? 1 : 0
                        }}
                        transition={{ duration: 0.03 }}
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center shadow-2xl`}>
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                      viewport={{ once: true }}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {project.achievements.map((achievement, achievementIndex) => (
                        <motion.span
                          key={achievement}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.03, delay: 0.18 + achievementIndex * 0.03 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-yellow-500/10 text-yellow-600 text-xs font-semibold rounded-full border border-yellow-500/20"
                        >
                          <Award className="w-3 h-3 inline mr-1" />
                          {achievement}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <motion.h3 
                        className="text-3xl md:text-4xl font-black text-foreground mb-6 group-hover:text-blue-500 transition-colors duration-300"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.08 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.12 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-sm font-bold text-foreground/60 mb-4 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.03, delay: 0.05 + techIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-background/70 backdrop-blur-sm border border-border/50 text-foreground/80 rounded-xl font-medium hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-foreground transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.03, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Live Project</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Link>
                      
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-3 px-8 py-4 bg-background/50 backdrop-blur-sm border border-border/50 text-foreground rounded-2xl font-bold hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                        <span>View Source</span>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-2xl`}
                  initial={false}
                  animate={{ 
                    opacity: hoveredProject === project.title ? 0.05 : 0 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <Link
              href="/projects"
              className="group relative overflow-hidden px-12 py-6 text-xl font-bold rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Projects
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-white/20 to-transparent transition-all duration-700 transform -skew-y-12" />
            </Link>
            
            {/* Floating particles around button */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}