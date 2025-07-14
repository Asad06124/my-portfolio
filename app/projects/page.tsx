import type { Metadata } from 'next'
import { ProjectsHero } from '@/components/sections/projects-hero'
import { ProjectsGrid } from '@/components/sections/projects-grid'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web development projects, showcasing modern technologies and creative solutions.',
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
    </>
  )
}