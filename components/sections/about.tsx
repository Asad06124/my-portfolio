import { Code, Zap, Users, Globe } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and user experience'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively with cross-functional teams'
  },
  {
    icon: Globe,
    title: 'Full Stack',
    description: 'From frontend to backend, databases to deployment'
  }
]

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className="prose prose-lg"
          >
            <p>
              I'm a Full Stack Developer with over 5 years of experience creating 
              modern web applications. I specialize in React, Next.js, TypeScript, 
              and Node.js, with a strong focus on user experience and performance.
            </p>
            
            <p>
              My journey began with a curiosity about how things work on the web, 
              and it has evolved into a passion for crafting digital solutions that 
              solve real problems. I believe in writing clean, maintainable code 
              and staying up-to-date with the latest technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
