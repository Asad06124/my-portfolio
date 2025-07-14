'use client'

import { motion } from 'framer-motion'
import { Building, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: [
      'Led development of a customer-facing web application serving 100K+ users',
      'Architected microservices infrastructure reducing response times by 40%',
      'Mentored junior developers and established coding standards',
      'Collaborated with product and design teams to deliver pixel-perfect UIs'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: [
      'Built and maintained multiple client projects using modern web technologies',
      'Implemented CI/CD pipelines improving deployment efficiency by 60%',
      'Developed RESTful APIs and integrated third-party services',
      'Optimized application performance and implemented SEO best practices'
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Docker', 'Git']
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Inc',
    period: '2019 - 2020',
    description: [
      'Created responsive web applications for diverse client portfolio',
      'Collaborated with designers to transform mockups into interactive UIs',
      'Implemented accessibility standards and cross-browser compatibility',
      'Maintained and updated existing client websites and applications'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Sass', 'Webpack']
  }
]

export function Experience() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at each stage
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 w-px h-full bg-border">
                <div className="absolute -left-1 top-2 w-3 h-3 bg-accent rounded-full" />
              </div>

              {/* Content */}
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}