import type { Metadata } from 'next'
import { NotFoundHero } from '@/components/sections/not-found-hero'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'Oops! The page you are looking for could not be found.',
}

export default function NotFound() {
  return <NotFoundHero />
}