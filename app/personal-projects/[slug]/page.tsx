import React from 'react'
import { notFound } from 'next/navigation'
import { personalProjects } from '@/app/data/portfolio'
import Header from '@/app/components/Header'
import MediaDisplay from '@/app/components/MediaDisplay'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return personalProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default function PersonalProjectPage({ params }: Props) {
  const project = personalProjects.find(p => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }

  const getMediaSrc = (num: number) => {
    // Special case for YouTube video
    if (project.youtubeVideoId && num === 1) {
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
    const imagePath = `${basePath}/images/personal-projects/${slug}/${num}`
    
    return {
      type: 'image' as const,
      src: `${imagePath}${extensions[0]}`, // Default to first extension
      fallbackSrcs: extensions.slice(1).map(ext => `${imagePath}${ext}`), // Rest as fallbacks
      youtubeId: undefined
    }
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.links?.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs ${
                project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </span>
              {project.duration && (
                <span className="px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                  {project.duration}
                </span>
              )}
            </div>
            <p className="text-gray-700 mb-6">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {[1, 2, 3].map((num) => (
              <MediaDisplay 
                key={num}
                {...getMediaSrc(num)}
                alt={`${project.title} screenshot ${num}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {project.challenge && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                <p className="text-gray-700">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p className="text-gray-700">{project.solution}</p>
              </div>
            )}
            {project.impact && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-gray-700">{project.impact}</p>
              </div>
            )}
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm bg-gray-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 