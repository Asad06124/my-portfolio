import type { Metadata } from 'next'
import { TeamHero } from '@/components/sections/team-hero'
import { TeamGrid } from '@/components/sections/team-grid'
import { TeamValues } from '@/components/sections/team-valus'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet our elite team of developers, designers, and digital marketing experts who bring your ideas to life.',
}

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamGrid />
      <TeamValues />
    </>
  )
}