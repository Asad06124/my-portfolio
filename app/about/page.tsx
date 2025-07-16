import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about-hero'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skils'
import { Philosophy } from '@/components/sections/philosophy'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about my journey as a Full Stack Developer, my philosophy, and the technologies I work with.',
}

export default function AboutPage() {
  return (
    <div className="items-center w-full">
      <Script id="about-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Asad",
          "jobTitle": "Full Stack Developer",
          "url": "https://Asadthedev.com/about",
          "description": "Learn more about my journey as a Full Stack Developer, my philosophy, and the technologies I work with."
        }) }}
      />
      <AboutHero />
      <Experience />
      <Skills />
      <Philosophy />
    </div>
  )
}