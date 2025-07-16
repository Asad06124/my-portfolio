import type { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/services-hero'
import { ServicesGrid } from '@/components/sections/services-grid'
import { ProcessSection } from '@/components/sections/process-section'
import { TechStack } from '@/components/sections/tech-stack'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive digital solutions by Asad, including web development, mobile apps, UI/UX design, and digital marketing services.',
}

export default function ServicesPage() {
  return (
    <div className="items-center w-full">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TechStack />
    </div>
  )
}