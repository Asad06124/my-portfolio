import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Clock, 
  Users, 
  Award,
  Sparkles,
  Heart,
  Coffee,
  Zap
} from 'lucide-react'

const stats = [
  { icon: Clock, value: '24h', label: 'Response Time', color: 'text-blue-500', bgColor: 'from-blue-500/20 to-blue-600/10' },
  { icon: Users, value: '8+', label: 'Years Experience', color: 'text-purple-500', bgColor: 'from-purple-500/20 to-purple-600/10' },
  { icon: Award, value: '100%', label: 'Client Satisfaction', color: 'text-emerald-500', bgColor: 'from-emerald-500/20 to-emerald-600/10' }
]

export function ContactHero() {
  return (
    <section className="section-padding pt-32 bg-background">
      
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.02 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.02 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 backdrop-blur-xl border border-blue-500/20 mb-8"
          >
            <div className="relative">
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-purple-500 opacity-50" />
              </motion.div>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 0.3 }}
          >
            Let's{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Connect
              </span>
              {/* Sparkle effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500 rounded-full"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${10 + (i % 2) * 30}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5 + i * 0.3,
                  }}
                />
              ))}
            </span>{' '}
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mt-2">
              & Create Together
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 0.5 }}
          >
            I'm always interested in hearing about{' '}
            <span className="text-blue-500 font-semibold">new opportunities</span>, 
            collaborations, or just connecting with{' '}
            <span className="text-purple-500 font-semibold">fellow developers</span>. 
            Feel free to reach out!
          </motion.p>

          {/* Contact Options */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 0.6 }}
          >
            <div className="group p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-500/5">
              <MessageCircle className="w-8 h-8 text-blue-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground mb-2">Quick Message</h3>
              <p className="text-sm text-muted-foreground">Send me a direct message</p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 hover:border-purple-500/30 transition-all duration-300 hover:bg-purple-500/5">
              <Coffee className="w-8 h-8 text-purple-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground mb-2">Coffee Chat</h3>
              <p className="text-sm text-muted-foreground">Let's discuss over coffee</p>
            </div>
            
            <div className="group p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 hover:border-emerald-500/30 transition-all duration-300 hover:bg-emerald-500/5">
              <Zap className="w-8 h-8 text-emerald-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-foreground mb-2">Quick Call</h3>
              <p className="text-sm text-muted-foreground">Schedule a quick call</p>
            </div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.03, delay: 0.9 + index * 0.1 }}
                className="group relative p-8 text-center rounded-3xl bg-background/50 backdrop-blur-xl border border-border/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-black mb-3">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground font-semibold group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.03, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-sm">
              Ready to build something amazing together?
            </span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-lg">👇</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}