'use client'
import React from 'react'
import Image from 'next/image'

type MediaProps = {
  src: string
  alt: string
  type?: 'image' | 'video' | 'gif'
}

export default function MediaDisplay({ src, alt, type = 'image' }: MediaProps) {
  const [error, setError] = React.useState(false)
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm')
  const isGif = src.endsWith('.gif')

  if (error) {
    return (
      <div className="relative aspect-video bg-gray-100 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-gray-500">Media coming soon</p>
        </div>
      </div>
    )
  }

  if (isVideo) {
    return (
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          controls
          loop
          muted
          onError={() => setError(true)}
        >
          <source src={src} type={`video/${src.split('.').pop()}`} />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  return (
    <div className="relative aspect-video bg-gray-100 rounded-lg">
      <Image
        src={src.startsWith('/') ? `./portfolio${src}` : src}
        alt={alt}
        fill
        className="object-cover rounded-lg"
        onError={() => setError(true)}
      />
    </div>
  )
} 