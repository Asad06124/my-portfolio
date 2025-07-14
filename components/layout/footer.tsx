import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/asad06124',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/theasadsahir',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/theasadsahir',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:asadbalqani@gmail.com',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Asad Ullah. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors focus-ring rounded-lg p-2"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}