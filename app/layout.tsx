import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { BackgroundElements } from '@/components/ui/background-elements'
import { ThemeProvider } from '@/components/ui/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: {
    default: 'DevStudio Pro | Full-Stack Development Team',
    template: '%s | DevStudio Pro'
  },
  description: 'Elite development team specializing in web, mobile, and enterprise solutions. UI/UX design, full-stack development, mobile apps, and digital marketing.',
  keywords: ['development team', 'full stack', 'mobile apps', 'UI/UX design', 'web development', 'software company', 'digital marketing'],
  authors: [{ name: 'DevStudio Pro Team', url: 'https://devstudio.pro' }],
  creator: 'DevStudio Pro',
  metadataBase: new URL('https://devstudio.pro'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devstudio.pro',
    title: 'DevStudio Pro | Elite Development Team',
    description: 'Elite development team specializing in web, mobile, and enterprise solutions. UI/UX design, full-stack development, mobile apps, and digital marketing.',
    siteName: 'DevStudio Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevStudio Pro - Elite Development Team'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevStudio Pro | Elite Development Team',
    description: 'Elite development team specializing in web, mobile, and enterprise solutions.',
    images: ['/og-image.jpg'],
    creator: '@devstudiopro'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider
          defaultTheme="dark"
          storageKey="devstudio-theme"
        >
          <BackgroundElements />
          <div className="relative z-10 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 px-4 py-4 md:px-8 md:py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}