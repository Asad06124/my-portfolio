import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/sections/comming-soon'

export const metadata: Metadata = {
  title: 'Blog - Coming Soon',
  description: 'The blog of Asad featuring insights, tutorials, and latest trends in technology is coming soon.',
}

export default function BlogPage() {
  return( <div className="items-center w-full"><ComingSoonSection /></div>)
}