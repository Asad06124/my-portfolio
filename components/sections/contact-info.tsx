'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, MapPin, Clock, Github, Twitter, Linkedin } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'asadbalqani@gmail.com',
    href: 'mailto:asadbalqani@gmail.com',
    action: 'Send Email'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Model Town Lahore Pakistan',
    href: '#',
    action: 'View Map'
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'Usually within 24 hours',
    href: '#',
    action: ''
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/asad06124',
    icon: Github,
    description: 'Follow my code'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/theasadsahir',
    icon: Twitter,
    description: 'Latest updates'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/theasadsahir',
    icon: Linkedin,
    description: 'Professional network'
  }
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <p className="text-muted-foreground mb-8">
          I'm currently available for freelance projects and full-time opportunities. 
          Whether you want to collaborate on a project or just want to say hi, 
          I'd love to hear from you.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-card/50 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <method.icon className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground mb-1">{method.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
              {method.action && method.href !== '#' && (
                <Link
                  href={method.href}
                  className="text-accent hover:text-accent/80 text-sm transition-colors"
                >
                  {method.action}
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow me</h3>
        <div className="grid grid-cols-1 gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-card/50 transition-colors group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <social.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {social.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{social.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-3">Let's collaborate</h3>
        <p className="text-muted-foreground text-sm mb-4">
          I'm passionate about working on projects that make a positive impact. 
          If you have an idea you'd like to discuss, I'd love to hear about it.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
            Freelance Available
          </span>
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
            Open to Opportunities
          </span>
        </div>
      </div>
    </motion.div>
  )
}