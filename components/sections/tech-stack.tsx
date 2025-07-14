'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    title: 'Frontend',
    description: 'Modern frameworks and libraries for exceptional user interfaces',
    technologies: [
      { name: 'React', logo: '/tech/react.svg', proficiency: 98 },
      { name: 'Next.js', logo: '/tech/nextjs.svg', proficiency: 95 },
      { name: 'TypeScript', logo: '/tech/typescript.svg', proficiency: 92 },
      { name: 'Tailwind CSS', logo: '/tech/tailwind.svg', proficiency: 96 },
      { name: 'Vue.js', logo: '/tech/vue.svg', proficiency: 85 },
      { name: 'Angular', logo: '/tech/angular.svg', proficiency: 80 }
    ],
    gradient: 'from-accent to-accent-tertiary'
  },
  {
    title: 'Backend',
    description: 'Robust server-side technologies for scalable applications',
    technologies: [
      { name: 'Node.js', logo: '/tech/nodejs.svg', proficiency: 94 },
      { name: 'Python', logo: '/tech/python.svg', proficiency: 90 },
      { name: 'Express.js', logo: '/tech/express.svg', proficiency: 92 },
      { name: 'GraphQL', logo: '/tech/graphql.svg', proficiency: 88 },
      { name: 'PostgreSQL', logo: '/tech/postgresql.svg', proficiency: 91 },
      { name: 'MongoDB', logo: '/tech/mongodb.svg', proficiency: 87 }
    ],
    gradient: 'from-accent-secondary to-accent'
  },
  {
    title: 'Mobile',
    description: 'Cross-platform and native mobile development solutions',
    technologies: [
      { name: 'React Native', logo: '/tech/react-native.svg', proficiency: 93 },
      { name: 'Flutter', logo: '/tech/flutter.svg', proficiency: 89 },
      { name: 'Swift', logo: '/tech/swift.svg', proficiency: 85 },
      { name: 'Kotlin', logo: '/tech/kotlin.svg', proficiency: 82 },
      { name: 'Expo', logo: '/tech/expo.svg', proficiency: 90 },
      { name: 'Firebase', logo: '/tech/firebase.svg', proficiency: 88 }
    ],
    gradient: 'from-accent-tertiary to-accent-secondary'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Modern infrastructure and deployment solutions',
    technologies: [
      { name: 'AWS', logo: '/tech/aws.svg', proficiency: 90 },
      { name: 'Docker', logo: '/tech/docker.svg', proficiency: 92 },
      { name: 'Kubernetes', logo: '/tech/kubernetes.svg', proficiency: 85 },
      { name: 'Vercel', logo: '/tech/vercel.svg', proficiency: 95 },
      { name: 'GitHub Actions', logo: '/tech/github-actions.svg', proficiency: 88 },
      { name: 'Terraform', logo: '/tech/terraform.svg', proficiency: 83 }
    ],
    gradient: 'from-accent to-accent-secondary'
  },
  {
    title: 'Design & Tools',
    description: 'Creative tools and platforms for stunning visual experiences',
    technologies: [
      { name: 'Figma', logo: '/tech/figma.svg', proficiency: 96 },
      { name: 'Adobe XD', logo: '/tech/adobe-xd.svg', proficiency: 89 },
      { name: 'Sketch', logo: '/tech/sketch.svg', proficiency: 85 },
      { name: 'Framer', logo: '/tech/framer.svg', proficiency: 87 },
      { name: 'Photoshop', logo: '/tech/photoshop.svg', proficiency: 92 },
      { name: 'Illustrator', logo: '/tech/illustrator.svg', proficiency: 88 }
    ],
    gradient: 'from-accent-secondary to-accent-tertiary'
  },
  {
    title: 'Marketing & Analytics',
    description: 'Data-driven tools for growth and performance optimization',
    technologies: [
      { name: 'Google Analytics', logo: '/tech/google-analytics.svg', proficiency: 94 },
      { name: 'SEMrush', logo: '/tech/semrush.svg', proficiency: 90 },
      { name: 'HubSpot', logo: '/tech/hubspot.svg', proficiency: 87 },
      { name: 'Mailchimp', logo: '/tech/mailchimp.svg', proficiency: 85 },
      { name: 'Facebook Ads', logo: '/tech/facebook-ads.svg', proficiency: 89 },
      { name: 'Google Ads', logo: '/tech/google-ads.svg', proficiency: 91 }
    ],
    gradient: 'from-accent-tertiary to-accent'
  }
]

export function TechStack() {
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
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies and proven tools to deliver exceptional results across all platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-3`}>
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-2 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-glass/50 rounded-xl border border-glass-border hover:border-accent/30 transition-all duration-300 group/tech"
                  >
                    {/* Tech Logo */}
                    <div className="w-12 h-12 flex items-center justify-center bg-glass rounded-lg group-hover/tech:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-accent/20 rounded-md flex items-center justify-center">
                        <span className="text-xs font-bold text-accent">
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Tech Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground mb-1 truncate">
                        {tech.name}
                      </div>
                      
                      {/* Proficiency Bar */}
                      <div className="w-full bg-muted/30 rounded-full h-2 mb-1">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        {tech.proficiency}% Proficiency
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-6">
              Always Learning, Always Innovating
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Technology evolves rapidly, and so do we. Our team stays at the forefront of 
              emerging technologies and best practices to deliver solutions that are not 
              just current, but future-ready.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-accent mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-accent-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-accent-tertiary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certification & Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Certified & Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Partner logos would go here */}
            <div className="w-24 h-12 bg-glass rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-accent">AWS</span>
            </div>
            <div className="w-24 h-12 bg-glass rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-accent">Google</span>
            </div>
            <div className="w-24 h-12 bg-glass rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-accent">Meta</span>
            </div>
            <div className="w-24 h-12 bg-glass rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-accent">Microsoft</span>
            </div>
            <div className="w-24 h-12 bg-glass rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-accent">Vercel</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}