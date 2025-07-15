import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { BackgroundElements } from '@/components/ui/background-elements'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { usePathname } from 'next/navigation'

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
    template: '%s | Asad Development Team'
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
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1" />
        <meta name="language" content="en" />
        <meta name="copyright" content="Asad Development Team © 2024" />
        <meta name="creator" content="Asad Development Team" />
        <meta name="publisher" content="Asad Development Team" />
        <meta name="application-name" content="Asad Development Team" />
        <meta name="apple-mobile-web-app-title" content="Asad Dev Team" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="theme-color" content="#171717" />
        <meta name="msapplication-TileColor" content="#171717" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="yandex" content="index, follow" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="audience" content="all" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
        <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
        <link rel="alternate" href="https://asadthedev.com" hrefLang="en" />
        <link rel="alternate" href="https://asadthedev.com" hrefLang="x-default" />
        <link rel="alternate" href="https://asadthedev.com/pk" hrefLang="ur-PK" />
        <link rel="alternate" href="https://asadthedev.com/asia" hrefLang="en-AS" />
        <link rel="alternate" href="https://asadthedev.com/mideast" hrefLang="en-ME" />
        <link rel="alternate" href="https://asadthedev.com/uae" hrefLang="en-AE" />
        <link rel="alternate" href="https://asadthedev.com/saudi" hrefLang="en-SA" />
        <link rel="alternate" href="https://asadthedev.com/india" hrefLang="en-IN" />
        <link rel="alternate" href="https://asadthedev.com/pakistan" hrefLang="en-PK" />
        <link rel="alternate" href="https://asadthedev.com/lahore" hrefLang="en-LHE" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Asad Development Team",
          "url": "https://asadthedev.com",
          "logo": "/og-image.jpg",
          "founder": {
            "@type": "Person",
            "name": "Asad",
            "url": "https://asadthedev.com/about"
          },
          "contactPoint": [{
            "@type": "ContactPoint",
            "email": "contact@asadthedev.com",
            "telephone": "+1234567890",
            "contactType": "customer support"
          }],
          "sameAs": [
            "https://twitter.com/asadthedev",
            "https://github.com/asad06124",
            "https://linkedin.com/in/theasadsahir"
          ],
          "description": "Asad Development Team delivers world-class web, mobile, and enterprise solutions. Experts in UI/UX, full-stack development, digital marketing, and scalable technology for global clients.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Remote",
            "addressCountry": "Global"
          },
          "serviceArea": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "makesOffer": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Solutions" } }
          ],
          "award": [
            "Top Rated Agency 2024",
            "Best UI/UX Design 2023",
            "Clutch Global Leader 2022"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "120"
          },
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Sarah Thompson" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "reviewBody": "Asad Development Team delivered our project on time with exceptional quality. Highly recommended!"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Michael Chen" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "reviewBody": "Professional, creative, and reliable. The best dev team we've worked with."
            }
          ],
          "areaServed": [
            { "@type": "Country", "name": "Pakistan" },
            { "@type": "City", "name": "Lahore" },
            { "@type": "City", "name": "Karachi" },
            { "@type": "City", "name": "Islamabad" },
            { "@type": "City", "name": "Rawalpindi" },
            { "@type": "City", "name": "Multan" },
            { "@type": "City", "name": "Faisalabad" },
            { "@type": "City", "name": "Peshawar" },
            { "@type": "City", "name": "Quetta" },
            { "@type": "City", "name": "Sialkot" },
            { "@type": "City", "name": "Gujranwala" },
            { "@type": "Continent", "name": "Asia" },
            { "@type": "Country", "name": "India" },
            { "@type": "Country", "name": "Bangladesh" },
            { "@type": "Country", "name": "Sri Lanka" },
            { "@type": "Country", "name": "Nepal" },
            { "@type": "Country", "name": "Malaysia" },
            { "@type": "Country", "name": "Singapore" },
            { "@type": "Country", "name": "Indonesia" },
            { "@type": "Country", "name": "Philippines" },
            { "@type": "Region", "name": "Middle East" },
            { "@type": "Country", "name": "UAE" },
            { "@type": "Country", "name": "Saudi Arabia" },
            { "@type": "Country", "name": "Jordan" },
            { "@type": "Country", "name": "Qatar" },
            { "@type": "Country", "name": "Oman" },
            { "@type": "Country", "name": "Bahrain" },
            { "@type": "Country", "name": "Kuwait" },
            { "@type": "Country", "name": "Turkey" },
            { "@type": "Country", "name": "Global" }
          ]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does Asad Development Team offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer web development, mobile app development, UI/UX design, digital marketing, enterprise solutions, and more."
              }
            },
            {
              "@type": "Question",
              "name": "Which regions do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve clients globally, with a focus on Pakistan, Asia, the Middle East, and international markets."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies do you specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our team specializes in Flutter, Node.js, React, Figma, Adobe, UI/UX, and more."
              }
            },
            {
              "@type": "Question",
              "name": "How can I contact Asad Development Team?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact us via our website contact form or email us at contact@asadthedev.com."
              }
            }
          ]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://asadthedev.com/" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://asadthedev.com/about" },
            { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://asadthedev.com/services" },
            { "@type": "ListItem", "position": 4, "name": "Projects", "item": "https://asadthedev.com/projects" },
            { "@type": "ListItem", "position": 5, "name": "Team", "item": "https://asadthedev.com/team" },
            { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://asadthedev.com/contact" },
            { "@type": "ListItem", "position": 7, "name": "Blog", "item": "https://asadthedev.com/blog" }
          ]
        }) }} />
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
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