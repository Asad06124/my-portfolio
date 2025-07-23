'use client'

import { motion } from 'framer-motion/dist/framer-motion'
import { useState } from 'react'
import { 
  Code, 
  Server, 
  Wrench, 
  Star, 
  TrendingUp,
  Zap,
  Target,
  Award
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    description: 'Building beautiful, responsive user interfaces',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    skills: [
      { name: 'React', level: 95, color: 'text-blue-500' },
      { name: 'Next.js', level: 90, color: 'text-cyan-500' },
      { name: 'TypeScript', level: 85, color: 'text-blue-600' },
      { name: 'Tailwind CSS', level: 90, color: 'text-cyan-600' },
      { name: 'Vue.js', level: 75, color: 'text-emerald-500' },
      { name: 'HTML5/CSS3', level: 95, color: 'text-orange-500' }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Creating robust, scalable server-side solutions',
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    skills: [
      { name: 'Node.js', level: 90, color: 'text-green-500' },
      { name: 'Express.js', level: 85, color: 'text-purple-500' },
      { name: 'Python', level: 80, color: 'text-yellow-500' },
      { name: 'PostgreSQL', level: 85, color: 'text-blue-600' },
      { name: 'MongoDB', level: 80, color: 'text-green-600' },
      { name: 'GraphQL', level: 75, color: 'text-pink-500' }
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    description: 'Streamlining development and deployment workflows',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    skills: [
      { name: 'Git', level: 90, color: 'text-orange-600' },
      { name: 'Docker', level: 80, color: 'text-blue-600' },
      { name: 'AWS', level: 75, color: 'text-orange-500' },
      { name: 'CI/CD', level: 80, color: 'text-emerald-500' },
      { name: 'Jest', level: 85, color: 'text-red-500' },
      { name: 'Webpack', level: 75, color: 'text-cyan-500' }
    ]
  }
]

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="section-padding relative overflow-hidden">
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
            <Zap className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            Skills &{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Technologies
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
            The{' '}
            <span className="text-blue-500 font-semibold">tools and technologies</span>{' '}
            I use to bring{' '}
            <span className="text-purple-500 font-semibold">ideas to life</span>.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.03, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCategory(category.title)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border border-border/50 rounded-3xl group-hover:border-blue-500/30 transition-all duration-500" />
              
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`} />

              <div className="relative z-10 p-8 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name} 
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.03, delay: 0.3 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <Star className={`w-3 h-3 ${skill.color}`} />
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-border/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.gradient} relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Category Stats */}
                <motion.div
                  className="mt-8 p-4 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.03, delay: 0.8 + categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm font-semibold text-muted-foreground">
                        Avg. Proficiency
                      </span>
                    </div>
                    <div className="text-lg font-bold text-emerald-500">
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}
                initial={false}
                animate={{ 
                  opacity: hoveredCategory === category.title ? 0.05 : 0 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 group hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
            <Target className="w-8 h-8 text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-blue-500 mb-1">18+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 group hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
            <Award className="w-8 h-8 text-purple-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-purple-500 mb-1">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 group hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <TrendingUp className="w-8 h-8 text-emerald-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-emerald-500 mb-1">85%</div>
            <div className="text-sm text-muted-foreground">Avg. Proficiency</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 group hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
            <Zap className="w-8 h-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-orange-500 mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}