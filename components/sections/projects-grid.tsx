'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
    longDescription: 'Built a complete e-commerce platform from scratch with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/asad06124/ecommerce-platform',
    year: '2024',
    category: 'Full Stack'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'Developed a comprehensive task management system with real-time collaboration features. Users can create projects, assign tasks, set deadlines, and collaborate with team members in real-time.',
    image: '/projects/taskapp.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
    liveUrl: 'https://taskapp-demo.com',
    githubUrl: 'https://github.com/asad06124/task-management',
    year: '2024',
    category: 'Full Stack'
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
    longDescription: 'Created a modern weather dashboard that provides detailed weather information with beautiful visualizations. Features include location-based forecasts, interactive charts, and responsive design.',
    image: '/projects/weather.jpg',
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
    image: '/projects/analytics.jpg',
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
    image: '/projects/portfolio.jpg',
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
    image: '/projects/chat.jpg',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express', 'File Upload'],
    liveUrl: 'https://chat-demo.com',
    githubUrl: 'https://github.com/asad06124/chat-app',
    year: '2022',
    category: 'Full Stack'
  }
]

export function ProjectsGrid() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs rounded-full border">
                    {project.year}
                  </span>
                  <span className="px-2 py-1 bg-accent/80 text-accent-foreground text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors focus-ring rounded-lg px-3 py-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-lg px-3 py-2"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and experimenting with emerging technologies. 
              Follow me on GitHub to stay updated with my latest work.
            </p>
            <Link
              href="https://github.com/asad06124"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Follow on GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}