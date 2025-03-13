'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className={`${isHomePage ? 'py-16' : 'py-8'} container mx-auto px-4`}>
      <div className="space-y-6 max-w-[640px]">
        <h1 className="text-xl font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Aris Neos
          </Link>
        </h1>
        {isHomePage && (
          <>
            <p className="text-sm text-gray-600 leading-relaxed">
            I am a Product Designer with a strong foundation in Front-End Development.
            With over twelve years of experience, I have led cross-functional teams to build intuitive,
            data-driven solutions for e-commerce, enterprise B2B SaaS, and startups.
            I bridge the gap between design, business, and engineering—turning insights
            into scalable products. Occasionally, I still like to code.
            </p>
            <div>
              <Link 
                href="mailto:arisneos@gmail.com" 
                className="text-sm hover:underline underline-offset-4"
              >
                email
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header 