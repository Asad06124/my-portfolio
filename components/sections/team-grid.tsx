"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code, 
  Palette, 
  TrendingUp,
  Star,
  Award,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Coffee
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Asad Ullah',
    role: 'Mobile App Developer & Backend Engineer',
    specialization: 'React Native, Flutter, iOS/Android, Node.js API Development, API Development, Database Design, DevOps',
    bio: 'Specializing in cross-platform mobile development, robust Node.js APIs, and building scalable backend systems with native performance and stunning user experiences.',
    image: '/profile.webp',
    skills: [ 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL' ],
    experience: '8+ years',
    icon: Code,
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
    location: 'Lahore, Pakistan',
    timezone: 'PKT (UTC+5)',
    featured: true,
    achievements: ['Lead Developer', 'Mobile Expert', 'Backend Specialist'],
    social: {
      github: 'https://github.com/asad06124',
      linkedin: 'https://linkedin.com/in/theasadsahir',
      twitter: 'https://x.com/theasadsahir',
      email: 'asadbalqani@gmail.com'
    }
  },
  {
    name: 'Amir Abbas',
    role: 'UI/UX Designer, Logo Designer & Graphic Designer',
    specialization: 'Product Design, User Research, Branding, Logo Design, Graphic Design, Brand Identity, Print Design, Illustrations',
    bio: 'Creating beautiful, intuitive interfaces, memorable logos, compelling graphics, and visual identities that users love and businesses need to succeed in the digital world.',
    image: '/amir-profile.webp',
    skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems', 'Logo Design', 'Graphic Design', 'Adobe Illustrator', 'Photoshop', 'InDesign', 'Brand Design', 'Typography'],
    experience: '4+ years',
    icon: Palette,
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    location: 'Lahore, Pakistan',
    timezone: 'PKT (UTC+5)',
    achievements: ['Design Expert', 'Brand Specialist', 'Creative Director'],
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah@devstudio.pro'
    }
  },
  {
    name: 'M Zeeshan',
    role: 'SEO Expert',
    specialization: 'SEO, Content Marketing, Analytics',
    bio: 'Driving growth through data-driven SEO strategies and compelling content that converts visitors into customers.',
    image: '/team/zeeshan.webp',
    skills: ['SEO', 'Google Analytics', 'Content Strategy', 'Social Media', 'PPC'],
    experience: '7+ years',
    icon: TrendingUp,
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    location: 'Lahore, Pakistan',
    timezone: 'PKT (UTC+5)',
    achievements: ['SEO Specialist', 'Growth Expert', 'Analytics Pro'],
    social: {
      linkedin: 'https://linkedin.com/in/mzeeshan',
      twitter: 'https://twitter.com/mzeeshan',
      email: 'zeeshan@devstudio.pro'
    }
  }
]

export function TeamGrid() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

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
            <div className="relative">
              <Star className="w-5 h-5 text-blue-500" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-purple-500 opacity-50" />
              </motion.div>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Dream Team
            </span>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Meet the{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Dream Team
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
            Each member brings{' '}
            <span className="text-blue-500 font-semibold">unique expertise</span>{' '}
            and passion to deliver{' '}
            <span className="text-purple-500 font-semibold">exceptional results</span>{' '}
            for every project.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredMember(member.name)}
              onHoverEnd={() => setHoveredMember(null)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                member.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border border-border/50 rounded-3xl group-hover:border-blue-500/30 transition-all duration-500" />
              
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`} />
              
              {/* Featured Badge */}
              {member.featured && (
                <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                  <Star className="w-3 h-3 inline mr-1" />
                  Lead
                </div>
              )}

              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header with Avatar */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative flex-shrink-0">
                    {/* Avatar */}
                    <motion.div 
                      className="w-20 h-20 relative rounded-2xl overflow-hidden ring-4 ring-background/50 group-hover:ring-blue-500/30 transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </motion.div>
                    
                    {/* Role Icon */}
                    <motion.div 
                      className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center shadow-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <member.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors truncate">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-2`}>
                      {member.role}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <motion.span
                        key={achievement}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.03, delay: 0.1 + achievementIndex * 0.02 }}
                        viewport={{ once: true }}
                        className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs font-semibold rounded-full border border-blue-500/20"
                      >
                        <Award className="w-3 h-3 inline mr-1" />
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-foreground/60 mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-3 h-3" />
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 6).map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.03, delay: 0.12 + skillIndex * 0.02 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-background/70 backdrop-blur-sm border border-border/50 text-foreground/80 text-xs rounded-xl hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-foreground transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {member.skills.length > 6 && (
                      <span className="px-3 py-1 bg-background/50 border border-border/30 text-muted-foreground text-xs rounded-xl">
                        +{member.skills.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {member.social.github && (
                    <Link
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social w-10 h-10 bg-background/50 hover:bg-blue-500/10 border border-border/50 hover:border-blue-500/30 rounded-xl flex items-center justify-center transition-all duration-300"
                    >
                      <Github className="w-4 h-4 text-muted-foreground group-hover/social:text-blue-500 transition-colors" />
                    </Link>
                  )}
                  {member.social.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social w-10 h-10 bg-background/50 hover:bg-blue-500/10 border border-border/50 hover:border-blue-500/30 rounded-xl flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground group-hover/social:text-blue-500 transition-colors" />
                    </Link>
                  )}
                  {member.social.twitter && (
                    <Link
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social w-10 h-10 bg-background/50 hover:bg-blue-500/10 border border-border/50 hover:border-blue-500/30 rounded-xl flex items-center justify-center transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4 text-muted-foreground group-hover/social:text-blue-500 transition-colors" />
                    </Link>
                  )}
                  <Link
                    href={`mailto:${member.social.email}`}
                    className="group/social w-10 h-10 bg-background/50 hover:bg-blue-500/10 border border-border/50 hover:border-blue-500/30 rounded-xl flex items-center justify-center transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 text-muted-foreground group-hover/social:text-blue-500 transition-colors" />
                  </Link>
                </div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}
                initial={false}
                animate={{ 
                  opacity: hoveredMember === member.name ? 0.05 : 0 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 backdrop-blur-xl border border-blue-500/20 p-12 text-center">
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
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/25"
              >
                <Coffee className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black mb-6">
                Ready to{' '}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                  Work with Us?
                </span>
              </h3>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate and bring your vision to life with our{' '}
                <span className="text-blue-500 font-semibold">expertise</span>{' '}
                and{' '}
                <span className="text-purple-500 font-semibold">passion</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  href="/projects"
                  className="group px-8 py-4 bg-background/50 backdrop-blur-sm border border-border/50 text-foreground rounded-2xl font-bold hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    View Our Work
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Team Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-1">8+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-500 mb-1">24/7</div>
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