import { Hero } from '@/components/sections/hero'
import { ServicesGrid } from '@/components/sections/services-grid'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { TeamGrid } from '@/components/sections/team-grid'
import { ContactCTA } from '@/components/sections/contact-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedProjects />
      <TeamGrid />
      <ContactCTA />
    </>
  )
}