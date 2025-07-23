import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script';
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
    default: 'Asad Development Team | World-Class Full-Stack Solutions',
    template: 'Asad | %s'
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  description: 'Asad Development Team delivers world-class web, mobile, and enterprise solutions. Experts in UI/UX, full-stack development, digital marketing, and scalable technology for global clients.',
  keywords: [
    'asad development team', 'world class developers', 'full stack', 'mobile apps', 'UI/UX design', 'web development', 'software company', 'digital marketing', 'enterprise solutions', 'startup development', 'agile team',
    'flutter', 'nodejs', 'react', 'nextjs', 'typescript', 'javascript', 'figma', 'adobe xd', 'adobe illustrator', 'adobe photoshop', 'graphic design', 'logo design', 'branding', 'product design', 'user research', 'prototyping',
    'backend development', 'frontend development', 'api development', 'cloud solutions', 'saas', 'pwa', 'responsive design', 'cross-platform', 'mobile app development', 'ios', 'android', 'ecommerce', 'dashboard', 'analytics',
    'team collaboration', 'remote team', 'global development', 'technology consulting', 'custom software', 'automation', 'integration', 'performance optimization', 'seo', 'accessibility', 'lighthouse', 'modern stack', 'creative solutions',
    'ux', 'ui', 'user experience', 'user interface', 'interaction design', 'visual design', 'wireframing', 'mockups', 'design systems', 'branding agency', 'creative agency', 'digital agency', 'innovation', 'scalable apps', 'secure apps',
    'cloud', 'aws', 'azure', 'google cloud', 'docker', 'kubernetes', 'devops', 'testing', 'qa', 'maintenance', 'support', 'consulting', 'project management', 'scrum', 'kanban', 'b2b', 'b2c', 'startup', 'enterprise', 'small business', 'large business',
    'pakistan', 'lahore', 'karachi', 'islamabad', 'rawalpindi', 'multan', 'faisalabad', 'peshawar', 'quetta', 'sialkot', 'gujranwala',
    'asia', 'south asia', 'southeast asia', 'india', 'bangladesh', 'sri lanka', 'nepal', 'malaysia', 'singapore', 'indonesia', 'philippines',
    'middle east', 'uae', 'dubai', 'abu dhabi', 'saudi arabia', 'riyadh', 'jeddah', 'amman', 'jordan', 'qatar', 'doha', 'oman', 'bahrain', 'kuwait', 'turkey',
    'global', 'international', 'remote', 'offshore development', 'outsourcing', 'cross-border', 'worldwide', 'local development', 'lahore software house', 'pakistan dev team', 'lahore dev team', 'asia dev team', 'middle east dev team'
  ],
  authors: [{ name: 'Asad', url: 'https://Asadthedev.com' }],
  creator: 'Asad',
  metadataBase: new URL('https://Asadthedev.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Asadthedev.com',
    title: 'Asad Development Team | World-Class Full-Stack Solutions',
    description: 'Asad Development Team delivers world-class web, mobile, and enterprise solutions. Experts in UI/UX, full-stack development, digital marketing, and scalable technology for global clients.',
    siteName: 'Asad Development Team',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Asad Development Team - World-Class Full-Stack Solutions'
      }
    ],
    emails: ['contact@asadthedev.com'],
    phoneNumbers: ['+1234567890']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asad Development Team | World-Class Full-Stack Solutions',
    description: 'Asad Development Team delivers world-class web, mobile, and enterprise solutions. Experts in UI/UX, full-stack development, digital marketing, and scalable technology for global clients.',
    images: ['/og-image.jpg'],
    creator: '@asadthedev',
    site: '@asadthedev'
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

  // Get the current path for canonical URL
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const canonicalUrl = `https://Asadthedev.com${pathname}`;
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#171717" />
        <meta name="description" content="Asad Development Team delivers world-class web, mobile, and enterprise solutions. Experts in UI/UX, full-stack development, digital marketing, and scalable technology for global clients." />
        <meta name="keywords" content="asad development team, world class developers, full stack, mobile apps, UI/UX design, web development, software company, digital marketing, enterprise solutions, startup development, agile team, flutter, nodejs, react, nextjs, typescript, javascript, figma, backend development, frontend development, api development, cloud solutions, saas, pwa, responsive design, cross-platform, mobile app development, ios, android, ecommerce, dashboard, analytics, team collaboration, remote team, global development, technology consulting, custom software, automation, integration, performance optimization, seo, accessibility, lighthouse, modern stack, creative solutions, ux, ui, user experience, user interface, interaction design, visual design, wireframing, mockups, design systems, branding agency, creative agency, digital agency, innovation, scalable apps, secure apps, cloud, aws, azure, google cloud, docker, kubernetes, devops, testing, qa, maintenance, support, consulting, project management, scrum, kanban, b2b, b2c, startup, enterprise, small business, large business, pakistan, lahore, karachi, islamabad, rawalpindi, multan, faisalabad, peshawar, quetta, sialkot, gujranwala, asia, south asia, southeast asia, india, bangladesh, sri lanka, nepal, malaysia, singapore, indonesia, philippines, middle east, uae, dubai, abu dhabi, saudi arabia, riyadh, jeddah, amman, jordan, qatar, doha, oman, bahrain, kuwait, turkey, global, international, remote, offshore development, outsourcing, cross-border, worldwide, local development, lahore software house, pakistan dev team, lahore dev team, asia dev team, middle east dev team" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Asad Development Team | World-Class Full-Stack Solutions" />
        <meta property="og:description" content="Asad Development Team delivers world-class web, mobile, and enterprise solutions. Experts in UI/UX, full-stack development, digital marketing, and scalable technology for global clients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asadthedev.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:site_name" content="Asad Development Team" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asad Development Team | World-Class Full-Stack Solutions" />
        <meta name="twitter:description" content="Asad Development Team delivers world-class web, mobile, and enterprise solutions. Experts in UI/UX, full-stack development, digital marketing, and scalable technology for global clients." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/jetbrains-mono-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>

      <body className="min-h-screen">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SPV7Q240NT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SPV7Q240NT');
  `}
        </Script>

        <ThemeProvider>
          <BackgroundElements />
          <div className="space-x-2 px-2 relative z-10 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}