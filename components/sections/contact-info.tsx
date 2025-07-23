'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Mail, 
  MapPin, 
  Clock, 
  Github, 
  Twitter, 
  Linkedin,
  ExternalLink,
  Phone,
  Globe,
  Star,
  Sparkles,
  Coffee,
  MessageCircle
} from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'asadbalqani@gmail.com',
    href: 'mailto:asadbalqani@gmail.com',
    action: 'Send Email',
    color: 'text-blue-500',
    bgColor: 'hover:bg-blue-500/10 hover:border-blue-500/30'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Model Town Lahore, Pakistan',
    href: 'https://maps.google.com',
    action: 'View Map',
    color: 'text-purple-500',
    bgColor: 'hover:bg-purple-500/10 hover:border-purple-500/30'
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'Usually within 24 hours',
    href: '#',
    action: '',
    color: 'text-emerald-500',
    bgColor: 'hover:bg-emerald-500/10 hover:border-emerald-500/30'
  },
  {
    icon: Globe,
    title: 'Timezone',
    description: 'PKT (UTC+5)',
    href: '#',
    action: '',
    color: 'text-orange-500',
    bgColor: 'hover:bg-orange-500/10 hover:border-orange-500/30'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/asad06124',
    icon: Github,
    description: 'Follow my code & projects',
    color: 'text-slate-600',
    bgColor: 'hover:bg-slate-600/10 hover:border-slate-600/30'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/theasadsahir',
    icon: Twitter,
    description: 'Latest updates & thoughts',
    color: 'text-sky-500',
    bgColor: 'hover:bg-sky-500/10 hover:border-sky-500/30'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/theasadsahir',
    icon: Linkedin,
    description: 'Professional network',
    color: 'text-blue-600',
    bgColor: 'hover:bg-blue-600/10 hover:border-blue-600/30'
  }
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.02 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-background/50 backdrop-blur-xl border border-border/50 p-8"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
      
      <div className="relative z-10 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0.02 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-black">
              Get in{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                touch
              </span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently available for{' '}
            <span className="text-purple-500 font-semibold">freelance projects</span>{' '}
            and{' '}
            <span className="text-pink-500 font-semibold">full-time opportunities</span>. 
            Whether you want to collaborate on a project or just want to say hi, 
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-purple-500" />
            Contact Methods
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.03, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-4 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 ${method.bgColor} transition-all duration-300 overflow-hidden`}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-background/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-purple-500 transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
                      {method.description}
                    </p>
                    {method.action && method.href !== '#' && (
                      <Link
                        href={method.href}
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${method.color} hover:opacity-80 transition-opacity`}
                      >
                        {method.action}
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-pink-500" />
            Follow me
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.03, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center gap-4 p-4 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30 ${social.bgColor} transition-all duration-300 overflow-hidden`}
                >
                  <div className="relative z-10 flex items-center gap-4 flex-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-background/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <social.icon className={`w-6 h-6 ${social.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground group-hover:text-purple-500 transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {social.description}
                      </p>
                    </div>
                    
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-purple-500 transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.7 }}
          viewport={{ once: true }}
          className="relative p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-teal-500/20 rounded-full blur-2xl" />
          </div>

          {/* Floating Icons */}
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-emerald-500/30" />
            </motion.div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Let's collaborate
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm passionate about working on projects that make a positive impact. 
              If you have an idea you'd like to discuss, I'd love to hear about it.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <motion.span 
                className="px-4 py-2 bg-emerald-500/20 text-emerald-600 text-sm font-semibold rounded-full border border-emerald-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-emerald-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Freelance Available
                </span>
              </motion.span>
              
              <motion.span 
                className="px-4 py-2 bg-teal-500/20 text-teal-600 text-sm font-semibold rounded-full border border-teal-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="flex items-center gap-2">
                  <Star className="w-3 h-3" />
                  Open to Opportunities
                </span>
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.03, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="text-center p-4 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30">
            <div className="text-2xl font-bold text-purple-500 mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          
          <div className="text-center p-4 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/30">
            <div className="text-2xl font-bold text-pink-500 mb-1">24h</div>
            <div className="text-sm text-muted-foreground">Response</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}