import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about-hero'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skils'
import { Philosophy } from '@/components/sections/philosophy'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my journey as a Full Stack Developer, my philosophy, and the technologies I work with.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Experience />
      <Skills />
      <Philosophy />
    </>
  )
}