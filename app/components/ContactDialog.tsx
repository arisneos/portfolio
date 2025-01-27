'use client'
import React from 'react'
import Link from 'next/link'

type Props = {
  isOpen: boolean
  onClose: () => void
  projectName: string
}

export default function ContactDialog({ isOpen, onClose, projectName }: Props) {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Let's chat!</h2>
          <p className="text-base text-gray-600">
            I'd love to share more about my experience with {projectName}. While the specific details 
            are under NDA, I can discuss the challenges, approaches, and learnings from this project.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="https://calendly.com/arisneos/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-black text-white text-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Schedule a 30-min chat
          </Link>
          
          <button
            onClick={onClose}
            className="block w-full text-gray-600 text-center py-3 px-4 hover:text-gray-800 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
} 