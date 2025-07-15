import type { Metadata } from 'next'
import { TeamHero } from '@/components/sections/team-hero'
import { TeamGrid } from '@/components/sections/team-grid'
import { TeamValues } from '@/components/sections/team-valus'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the team members collaborating with Asad on web, mobile, and digital projects.',
}

export default function TeamPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <TeamHero />
      <TeamGrid />
      <TeamValues />
    </div>
  )
}