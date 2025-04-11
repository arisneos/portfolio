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
    // Special case for WeatherXM Pro project - first media is Storylane embed
    if (params.slug === 'weatherxm' && num === 1) {
      return {
        type: 'storylane' as const,
        src: '', // Not needed for Storylane
        storylaneUrl: 'https://app.storylane.io/demo/0cw0heips3i0?embed=inline'
      }
    }

    // Special case for Genesis project - first media is YouTube video
    if (params.slug === 'Genesis' && num === 1 && project.youtubeVideoId) {
      // Extract YouTube ID from URL
      const youtubeId = project.youtubeVideoId.split('/').pop()?.replace('youtu.be/', '')
      return {
        type: 'youtube' as const,
        src: '', // Not needed for YouTube
        youtubeId
      }
    }

    // For all other projects, return the image path with basePath consideration
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
    const slug = params.slug.toLowerCase() // Ensure case-insensitive matching
    
    // Try different extensions
    const extensions = ['.jpeg', '.jpg', '.png']
    const imagePath = `${basePath}/images/${slug}/${num}`
    
    return {
      type: 'image' as const,
      src: `${imagePath}${extensions[0]}`, // Default to first extension
      fallbackSrcs: extensions.slice(1).map(ext => `${imagePath}${ext}`), // Rest as fallbacks
      youtubeId: undefined
    }
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
            {(project.links?.length ?? 0) > 0 && (
              <div className="flex gap-4">
                {project.links?.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-gray-500 hover:text-gray-800 hover:underline transition-colors"
                  >
                    {link.label} ↗
                  </Link>
                ))}
              </div>
            )}
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
        {[1, 2, 3, 4].map((num) => {
          const media = getMediaSrc(num)
          return (
            <MediaDisplay
              key={num}
              {...media}
              alt={`${project.company} project media ${num}`}
            />
          )
        })}
      </div>
    </div>
  )
} 