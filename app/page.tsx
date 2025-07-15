import type { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { ServicesGrid } from '@/components/sections/services-grid'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { TeamGrid } from '@/components/sections/team-grid'
import { ContactCTA } from '@/components/sections/contact-cta'

export const metadata: Metadata = {
  title: 'Home | Asad',
  description: 'Welcome to the personal portfolio of Asad – Full-stack developer for web, mobile, and enterprise solutions. Explore my portfolio, services, and team.',
  icons: {
    icon: "/favicon.ico",        
    shortcut: "/favicon.ico",    
    apple: "/favicon.png",    
  },
  openGraph: {
    title: 'Home | Asad',
    description: 'Welcome to the personal portfolio of Asad – Full-stack developer for web, mobile, and enterprise solutions. Explore my portfolio, services, and team.',
    url: 'https://Asadthedev.com',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Asad - Full-Stack Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Asad',
    description: 'Welcome to the personal portfolio of Asad – Full-stack developer for web, mobile, and enterprise solutions.',
    images: ['/favicon.png'],
    creator: '@asadthedev'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <ServicesGrid />
      <FeaturedProjects />
      <TeamGrid />
      <ContactCTA />
    </div>
  )
}