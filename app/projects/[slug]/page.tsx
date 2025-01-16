import React from 'react'
import Link from 'next/link'
import { projects } from '@/app/data/portfolio'
import { notFound } from 'next/navigation'
import MediaDisplay from '@/app/components/MediaDisplay'

type Props = {
  params: {
    slug: string
  }
}

// Add this function to generate static paths
export async function generateStaticParams() {
  return projects
    .filter(project => !project.isPrivate)  // Only generate pages for non-private projects
    .map((project) => ({
      slug: project.slug,
    }))
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.link === params.slug || p.slug === params.slug)
  
  if (!project) {
    notFound()
  }

  const getMediaSrc = (num: number) => {
    const bases = [
      `/images/${params.slug}/${num}`,
      `/videos/${params.slug}/${num}`
    ]
    return `${bases[0]}.png`
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 max-w-[1200px]">
      {/* Left Column - Text Content */}
      <div className="flex-1 space-y-8">
        <Link 
          href="/" 
          className="text-sm hover:underline"
        >
          ← Back to projects
        </Link>
        
        <div className="space-y-8">
          {/* Title Section */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{project.company}</h1>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Role</h2>
              <p className="text-sm">{project.title}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Duration</h2>
              <p className="text-sm">{project.duration || 'Duration not specified'}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Company</h2>
              <p className="text-sm">{project.company}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Scope</h2>
              <p className="text-sm">{project.type}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Contributions</h2>
              <p className="text-sm">{project.contributions}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Media */}
      <div className="flex-1 space-y-6">
        {[1, 2, 3, 4].map((num) => (
          <MediaDisplay
            key={num}
            src={getMediaSrc(num)}
            alt={`${project.company} project media ${num}`}
          />
        ))}
      </div>
    </div>
  )
} 