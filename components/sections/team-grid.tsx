'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Code, Palette, Smartphone, TrendingUp } from 'lucide-react'

const teamMembers = [
  {
    name: 'Alex Rodriguez',
    role: 'Full-Stack Developer & Team Lead',
    specialization: 'React, Node.js, Cloud Architecture',
    bio: 'Passionate about building scalable web applications and leading development teams to deliver exceptional results.',
    image: '/team/alex.jpg',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    experience: '8+ years',
    icon: Code,
    gradient: 'from-accent to-accent-tertiary',
    social: {
      github: 'https://github.com/alexrod',
      linkedin: 'https://linkedin.com/in/alexrod',
      twitter: 'https://twitter.com/alexrod',
      email: 'alex@devstudio.pro'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer & Creative Director',
    specialization: 'Product Design, User Research, Branding',
    bio: 'Creating beautiful, intuitive interfaces that users love and businesses need to succeed in the digital world.',
    image: '/team/sarah.jpg',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems'],
    experience: '6+ years',
    icon: Palette,
    gradient: 'from-accent-secondary to-accent',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@devstudio.pro'
    }
  },
  {
    name: 'Marcus Johnson',
    role: 'Mobile App Developer',
    specialization: 'React Native, Flutter, iOS/Android',
    bio: 'Specializing in cross-platform mobile development with native performance and stunning user experiences.',
    image: '/team/marcus.jpg',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    experience: '5+ years',
    icon: Smartphone,
    gradient: 'from-accent-tertiary to-accent-secondary',
    social: {
      github: 'https://github.com/marcusj',
      linkedin: 'https://linkedin.com/in/marcusj',
      email: 'marcus@devstudio.pro'
    }
  },
  {
    name: 'Emma Thompson',
    role: 'Digital Marketing Strategist',
    specialization: 'SEO, Content Marketing, Analytics',
    bio: 'Driving growth through data-driven marketing strategies and compelling content that converts visitors into customers.',
    image: '/team/emma.jpg',
    skills: ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media', 'PPC'],
    experience: '7+ years',
    icon: TrendingUp,
    gradient: 'from-accent to-accent-secondary',
    social: {
      linkedin: 'https://linkedin.com/in/emmathompson',
      twitter: 'https://twitter.com/emmathompson',
      email: 'emma@devstudio.pro'
    }
  },
  {
    name: 'David Park',
    role: 'Backend Engineer',
    specialization: 'API Development, Database Design, DevOps',
    bio: 'Building robust, scalable backend systems that power modern applications with reliability and performance.',
    image: '/team/david.jpg',
    skills: ['Python', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL'],
    experience: '6+ years',
    icon: Code,
    gradient: 'from-accent-tertiary to-accent',
    social: {
      github: 'https://github.com/davidpark',
      linkedin: 'https://linkedin.com/in/davidpark',
      email: 'david@devstudio.pro'
    }
  },
  {
    name: 'Lisa Wang',
    role: 'Graphic Designer',
    specialization: 'Brand Identity, Print Design, Illustrations',
    bio: 'Creating compelling visual identities and memorable brand experiences that resonate with target audiences.',
    image: '/team/lisa.jpg',
    skills: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Brand Design', 'Typography'],
    experience: '4+ years',
    icon: Palette,
    gradient: 'from-accent-secondary to-accent-tertiary',
    social: {
      linkedin: 'https://linkedin.com/in/lisawang',
      email: 'lisa@devstudio.pro'
    }
  }
]

export function TeamGrid() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet the <span className="gradient-text">Dream Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each member brings unique expertise and passion to deliver exceptional results for every project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="team-card neon-card p-8 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-2xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className={`absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center shadow-neon`}>
                    <member.icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-2`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      {member.specialization} • {member.experience}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-glass border border-glass-border text-foreground/80 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 pt-2">
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-glass hover:bg-accent/20 border border-glass-border hover:border-accent/40 rounded-xl flex items-center justify-center transition-all duration-300 group/social"
                      >
                        <Github className="w-4 h-4 text-muted-foreground group-hover/social:text-accent transition-colors" />
                      </Link>
                    )}
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-glass hover:bg-accent/20 border border-glass-border hover:border-accent/40 rounded-xl flex items-center justify-center transition-all duration-300 group/social"
                      >
                        <Linkedin className="w-4 h-4 text-muted-foreground group-hover/social:text-accent transition-colors" />
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-glass hover:bg-accent/20 border border-glass-border hover:border-accent/40 rounded-xl flex items-center justify-center transition-all duration-300 group/social"
                      >
                        <Twitter className="w-4 h-4 text-muted-foreground group-hover/social:text-accent transition-colors" />
                      </Link>
                    )}
                    <Link
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-glass hover:bg-accent/20 border border-glass-border hover:border-accent/40 rounded-xl flex items-center justify-center transition-all duration-300 group/social"
                    >
                      <Mail className="w-4 h-4 text-muted-foreground group-hover/social:text-accent transition-colors" />
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
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready to Work with Us?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate and bring your vision to life with our expertise and passion.
            </p>
            <Link
              href="/contact"
              className="btn-primary group"
            >
              <span>Start Your Project</span>
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                →
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}