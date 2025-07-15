import type { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contact-hero'
import { ContactForm } from '@/components/sections/contact-form'
import { ContactInfo } from '@/components/sections/contact-info'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Asad for project collaborations, job opportunities, or just to say hello.',
}

export default function ContactPage() {
  return (<div className="flex flex-col items-center w-full">

      <ContactHero />
      <div className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}