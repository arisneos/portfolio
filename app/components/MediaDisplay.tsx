'use client'
import React from 'react'
import Image from 'next/image'

type MediaProps = {
  src: string
  alt: string
  type?: 'image' | 'youtube'
  youtubeId?: string
}

export default function MediaDisplay({ src, alt, type = 'image', youtubeId }: MediaProps) {
  const [error, setError] = React.useState(false)

  if (error) {
    return (
      <div className="relative aspect-video bg-gray-100 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-gray-500">Media coming soon</p>
        </div>
      </div>
    )
  }

  if (type === 'youtube' && youtubeId) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <div className="relative aspect-video bg-gray-100 rounded-lg">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg"
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={src.includes('1.jpg')}
      />
    </div>
  )
} 