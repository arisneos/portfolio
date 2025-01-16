import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/app/data/portfolio'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.link === `#${params.slug}`)
  
  if (!project) {
    notFound()
  }

  const ImageWithFallback = ({ num }: { num: number }) => {
    return (
      <div key={num} className="relative aspect-video bg-gray-100 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-gray-500">Image coming soon</p>
        </div>
        {/* We'll attempt to load the image, if it fails the placeholder will show */}
        <Image
          src={`/images/${params.slug}/${num}.png`}
          alt={`${project.company} project image ${num}`}
          fill
          className="object-cover rounded-lg"
          onError={(e: any) => {
            // Try JPG if PNG fails
            e.target.src = `/images/${params.slug}/${num}.jpg`
          }}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 max-w-[1200px]">
      {/* Left Column - Text Content */}
      <div className="flex-1 space-y-6">
        <Link href="/" className="text-sm hover:underline">← Back to projects</Link>
        
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{project.company}</h1>
          <p className="text-sm text-gray-600">{project.title}</p>
          <p className="text-sm">{project.type}</p>
          
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Overview</h2>
            <p className="text-sm leading-relaxed">
              {project.contributions}
            </p>
            {/* Additional content will go here */}
          </div>
        </div>
      </div>

      {/* Right Column - Images */}
      <div className="flex-1 space-y-6">
        {[1, 2, 3, 4].map((num) => (
          <ImageWithFallback key={num} num={num} />
        ))}
      </div>
    </div>
  )
} 