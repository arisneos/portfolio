'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navItems = ['Projects', 'Experience', 'Skills', 'Contact'] as const

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold">Aris Neos</Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex space-x-6"
          >
            {navItems.map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item} className="px-4 py-2">
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium hover:text-blue-600 block transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  )
}

export default Header 