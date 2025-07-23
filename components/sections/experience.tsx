"use client";

import { motion } from 'framer-motion/dist/framer-motion'
import { useState } from 'react'
import { 
  Building, 
  Calendar, 
  TrendingUp, 
  Code, 
  Award,
  MapPin,
  Briefcase,
  Star,
  ChevronRight,
  Zap
} from 'lucide-react'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    duration: '2+ years',
    type: 'Full-time',
    description: [
      'Led development of a customer-facing web application serving 100K+ users',
      'Architected microservices infrastructure reducing response times by 40%',
      'Mentored junior developers and established coding standards',
      'Collaborated with product and design teams to deliver pixel-perfect UIs'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
    achievements: [
      '40% performance improvement',
      '100K+ active users',
      'Led team of 5 developers',
      'Zero-downtime deployments'
    ],
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    featured: true
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2020 - 2022',
    duration: '2 years',
    type: 'Full-time',
    description: [
      'Built and maintained multiple client projects using modern web technologies',
      'Implemented CI/CD pipelines improving deployment efficiency by 60%',
      'Developed RESTful APIs and integrated third-party services',
      'Optimized application performance and implemented SEO best practices'
    ],
    technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Docker', 'Git'],
    achievements: [
      '60% deployment efficiency gain',
      '15+ successful projects',
      'API integrations',
      'SEO optimization'
    ],
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Inc',
    location: 'New York, NY',
    period: '2019 - 2020',
    duration: '1 year',
    type: 'Full-time',
    description: [
      'Created responsive web applications for diverse client portfolio',
      'Collaborated with designers to transform mockups into interactive UIs',
      'Implemented accessibility standards and cross-browser compatibility',
      'Maintained and updated existing client websites and applications'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Sass', 'Webpack'],
    achievements: [
      '20+ client projects',
      '100% accessibility compliance',
      'Cross-browser compatibility',
      'UI/UX implementation'
    ],
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10'
  }
]

export function Experience() {
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null)

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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 backdrop-blur-xl border border-blue-500/20 mb-8"
          >
            <Briefcase className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            My{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Experience
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
            My{' '}
            <span className="text-blue-500 font-semibold">professional journey</span>{' '}
            and the{' '}
            <span className="text-purple-500 font-semibold">impact I've made</span>{' '}
            at each stage of my career.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.03, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredExperience(exp.company)}
              onHoverEnd={() => setHoveredExperience(null)}
              className="group relative pl-12 pb-16 last:pb-0"
            >
              {/* Enhanced Timeline Line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-border via-blue-500/30 to-border">
                <motion.div 
                  className={`absolute -left-2 top-8 w-5 h-5 bg-gradient-to-r ${exp.gradient} rounded-full shadow-lg border-4 border-background`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-full animate-pulse opacity-50`} />
                </motion.div>
              </div>

              {/* Experience Card */}
              <div className="relative overflow-hidden rounded-3xl bg-background/50 backdrop-blur-xl border border-border/50 group-hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Featured Badge */}
                {exp.featured && (
                  <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                    <Star className="w-3 h-3 inline mr-1" />
                    Current
                  </div>
                )}

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-emerald-500" />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold text-sm">{exp.period}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Duration: {exp.duration}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="text-muted-foreground flex items-start group/item"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.03, delay: 0.3 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 mr-3 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span className="group-hover/item:text-foreground transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-500" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.03, delay: 0.5 + achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="p-3 bg-background/30 backdrop-blur-sm rounded-xl border border-border/30 text-center group/achievement hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                        >
                          <Zap className="w-4 h-4 text-purple-500 mx-auto mb-2 group-hover/achievement:scale-110 transition-transform" />
                          <div className="text-xs font-semibold text-foreground">
                            {achievement}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-emerald-500" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.03, delay: 0.6 + techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 bg-gradient-to-r ${exp.gradient} bg-opacity-10 text-transparent bg-clip-text font-semibold text-sm rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300`}
                          style={{
                            background: `linear-gradient(to right, var(--tw-gradient-stops)), rgba(59, 130, 246, 0.1)`,
                            backgroundClip: 'padding-box, border-box'
                          }}
                        >
                          <span className={`bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}>
                            {tech}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}
                  initial={false}
                  animate={{ 
                    opacity: hoveredExperience === exp.company ? 0.05 : 0 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30">
              <div className="text-3xl font-bold text-blue-500 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30">
              <div className="text-3xl font-bold text-purple-500 mb-2">35+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30">
              <div className="text-3xl font-bold text-emerald-500 mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30">
              <div className="text-3xl font-bold text-orange-500 mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Users Impacted</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}