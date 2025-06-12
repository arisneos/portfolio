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

          {/* Icons Section */}
          <div className="space-y-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Product Design</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">UX Strategy</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Data Analysis</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Team Leadership</p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="pt-8 border-t border-gray-200">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Problem Statement</h2>
                  <p className="text-sm text-gray-600">Coming soon...</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Research</h2>
                  <p className="text-sm text-gray-600">Coming soon...</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Solution</h2>
                  <p className="text-sm text-gray-600">Coming soon...</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500">Outcome</h2>
                  <p className="text-sm text-gray-600">Coming soon...</p>
                </div>
              </div>
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