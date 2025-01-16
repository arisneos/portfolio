'use client'
import React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  fallbackSrc: string
}

export default function ImageWithFallback({ src, alt, fallbackSrc }: Props) {
  const [imgSrc, setImgSrc] = React.useState(src)

  return (
    <div className="relative aspect-video bg-gray-100 rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-sm text-gray-500">Image coming soon</p>
      </div>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover rounded-lg"
        onError={() => {
          setImgSrc(fallbackSrc)
        }}
      />
    </div>
  )
} 