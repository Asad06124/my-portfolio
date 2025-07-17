'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, Calendar, Folder, Star, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
    longDescription: 'Built a complete e-commerce platform from scratch with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard.',
    image: '/projects/ecommerce.webp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/asad06124/ecommerce-platform',
    year: '2024',
    category: 'Full Stack',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'Developed a comprehensive task management system with real-time collaboration features. Users can create projects, assign tasks, set deadlines, and collaborate with team members in real-time.',
    image: '/projects/taskapp.webp',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
    liveUrl: 'https://taskapp-demo.com',
    githubUrl: 'https://github.com/asad06124/task-management',
    year: '2024',
    category: 'Full Stack',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
    longDescription: 'Created a modern weather dashboard that provides detailed weather information with beautiful visualizations. Features include location-based forecasts, interactive charts, and responsive design.',
    image: '/projects/weather.webp',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid', 'Responsive Design'],
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/asad06124/weather-dashboard',
    year: '2023',
    category: 'Frontend'
  },
  {
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
    longDescription: 'Built a comprehensive analytics platform that aggregates social media data from multiple platforms. Features include custom dashboards, automated reporting, and detailed analytics with interactive charts.',
    image: '/projects/analytics.webp',
    technologies: ['Next.js', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis', 'API Integration'],
    liveUrl: 'https://analytics-demo.com',
    githubUrl: 'https://github.com/asad06124/social-analytics',
    year: '2023',
    category: 'Full Stack'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    longDescription: 'Designed and developed a professional portfolio website showcasing projects and skills. Built with performance and SEO in mind, featuring smooth animations and modern design.',
    image: '/projects/portfolio.webp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MDX'],
    liveUrl: 'https://asadullah.dev',
    githubUrl: 'https://github.com/asad06124/portfolio',
    year: '2023',
    category: 'Frontend'
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with rooms, private messaging, and file sharing capabilities.',
    longDescription: 'Developed a real-time chat application with modern features including chat rooms, private messaging, file sharing, emoji support, and user presence indicators.',
    image: '/projects/chat.webp',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express', 'File Upload'],
    liveUrl: 'https://chat-demo.com',
    githubUrl: 'https://github.com/asad06124/chat-app',
    year: '2022',
    category: 'Full Stack'
  }
]

const categories = ['All', 'Full Stack', 'Frontend']

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="section-padding">
      <div className="container">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25'
                  : 'bg-background/50 text-muted-foreground hover:bg-accent/10 hover:text-accent border border-border/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                  <Star className="w-3 h-3 inline mr-1" />
                  Featured
                </div>
              )}

              <div className={`flex ${project.featured ? 'lg:flex-row' : 'flex-col'} h-full`}>
                {/* Project Image */}
                <div className={`relative ${project.featured ? 'lg:w-1/2' : 'w-full h-48'} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredProject === project.title ? 1 : 0,
                      y: hoveredProject === project.title ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 left-4 right-4 flex gap-2"
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent/90 text-accent-foreground text-sm font-medium rounded-lg backdrop-blur-sm hover:bg-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-background/90 text-foreground text-sm font-medium rounded-lg backdrop-blur-sm hover:bg-background transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                  </motion.div>

                  {/* Tags on image */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full border border-border/50">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {project.year}
                    </span>
                    <span className="px-2 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full">
                      <Folder className="w-3 h-3 inline mr-1" />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${project.featured ? 'lg:w-1/2' : 'w-full'} p-6 flex flex-col justify-between`}>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.featured ? project.longDescription : project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      View Project
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-accent/20 backdrop-blur-sm overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                I'm constantly pushing the boundaries of web development, experimenting with emerging technologies, 
                and building solutions that make a difference. Follow my journey on GitHub to see what's next.
              </p>
              <Link
                href="https://github.com/asad06124"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-medium transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 hover:scale-105"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Follow on GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}