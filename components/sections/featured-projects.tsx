'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, Award } from 'lucide-react'

const projects = [
  {
    title: 'FinTech Mobile App',
    description: 'A comprehensive financial management app with real-time analytics, investment tracking, and secure payment processing.',
    image: '/projects/fintech.jpg',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    liveUrl: 'https://fintech-demo.com',
    githubUrl: 'https://github.com/devstudio/fintech-app',
    stats: { users: '50K+', rating: '4.8', downloads: '100K+' },
    category: 'Mobile App',
    featured: true,
    gradient: 'from-accent to-accent-tertiary'
  },
  {
    title: 'E-Learning Platform',
    description: 'Modern educational platform with live streaming, interactive courses, and AI-powered learning recommendations.',
    image: '/projects/elearning.jpg',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC', 'OpenAI'],
    liveUrl: 'https://elearning-demo.com',
    githubUrl: 'https://github.com/devstudio/elearning-platform',
    stats: { users: '25K+', courses: '500+', completion: '94%' },
    category: 'Web Platform',
    featured: true,
    gradient: 'from-accent-secondary to-accent'
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Advanced healthcare management system with patient records, appointment scheduling, and telemedicine features.',
    image: '/projects/healthcare.jpg',
    technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://healthcare-demo.com',
    githubUrl: 'https://github.com/devstudio/healthcare-dashboard',
    stats: { hospitals: '50+', patients: '10K+', uptime: '99.9%' },
    category: 'Enterprise',
    featured: true,
    gradient: 'from-accent-tertiary to-accent-secondary'
  }
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding bg-glass/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-glass backdrop-blur-xl border border-glass-border rounded-full mb-8">
            <Award className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">
              Featured Work
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Projects That <span className="gradient-text">Make Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our most successful projects that have transformed businesses and delighted users worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="neon-card group hover:scale-[1.01] transition-all duration-500"
            >
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden perspective-container">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-black text-sm font-bold rounded-full`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-2">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center bg-glass/80 backdrop-blur-sm rounded-lg p-2">
                          <div className="text-sm font-bold text-white">{value}</div>
                          <div className="text-xs text-white/80 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/60 mb-3 uppercase tracking-wide">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-glass border border-glass-border text-foreground/80 rounded-xl font-medium hover:border-accent/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-primary group/btn bg-gradient-to-r ${project.gradient} hover:scale-105`}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <span>View Live Project</span>
                    </Link>
                    
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary group/btn"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span>View Source</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="btn-primary group text-lg px-10 py-5"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}