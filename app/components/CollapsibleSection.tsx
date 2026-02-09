'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    title: string
    content: string
}

export default function CollapsibleSection({ title, content }: Props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left group"
            >
                <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 group-hover:text-gray-700 transition-colors">
                    {title}
                </h2>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 pb-2">
                            <div
                                className="text-sm text-gray-600 whitespace-pre-line leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: content || 'Coming soon...' }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
