import React from 'react'
import Link from 'next/link'
import { research } from '@/app/data/portfolio'
import { notFound } from 'next/navigation'
import MediaDisplay from '@/app/components/MediaDisplay'

type Props = {
  params: {
    slug: string
  }
}

export default function ResearchPage({ params }: Props) {
  const researchItem = research.find(r => r.link === `#${params.slug}`)
  
  if (!researchItem) {
    notFound()
  }

  const getMediaSrc = (num: number) => {
    const bases = [
      `/images/research/${params.slug}/${num}`,
      `/documents/research/${params.slug}/${num}`
    ]
    const extensions = ['.pdf', '.png', '.jpg']
    
    return `${bases[0]}.png` // Default fallback
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 max-w-[1200px]">
      {/* Left Column - Text Content */}
      <div className="flex-1 space-y-8">
        <Link href="/" className="text-sm hover:underline">← Back to research</Link>
        
        <div className="space-y-8">
          {/* Title Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{researchItem.title}</h1>
          </div>

          {/* Research Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Type</h2>
              <p className="text-sm">{researchItem.type}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Institution</h2>
              <p className="text-sm">{researchItem.institution}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Abstract</h2>
              <p className="text-sm">{researchItem.abstract || 'Abstract coming soon...'}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Key Findings</h2>
              <p className="text-sm">{researchItem.keyFindings || 'Key findings coming soon...'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Media */}
      <div className="flex-1 space-y-6">
        {[1, 2, 3].map((num) => (
          <MediaDisplay
            key={num}
            src={getMediaSrc(num)}
            alt={`${researchItem.title} research media ${num}`}
          />
        ))}
      </div>
    </div>
  )
} 