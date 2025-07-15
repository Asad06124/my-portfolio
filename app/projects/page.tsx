import type { Metadata } from 'next'
import { ProjectsHero } from '@/components/sections/projects-hero'
import { ProjectsGrid } from '@/components/sections/projects-grid'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects, showcasing modern technologies and creative solutions.',
}

export default function ProjectsPage() {
  return (
    <>
      <Script id="projects-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Projects",
          "description": "Explore my portfolio of web development projects, showcasing modern technologies and creative solutions.",
          "url": "https://Asadthedev.com/projects"
        }) }}
      />
      <ProjectsHero />
      <ProjectsGrid />
    </>
  )
}