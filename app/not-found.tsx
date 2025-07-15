import type { Metadata } from 'next'
import { NotFoundHero } from '@/components/sections/not-found-hero'
import { ThemeProvider } from '@/components/ui/theme-provider'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'Oops! The page you are looking for could not be found on Asad’s portfolio.',
}

export default function NotFound() {
  return( 
    <ThemeProvider>
  <NotFoundHero />
  </ThemeProvider>
)
}