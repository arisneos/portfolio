'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PageContainer from './PageContainer'

const Header: React.FC = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className={isHomePage ? 'py-16' : 'py-8'}>
      <PageContainer>
      <div className="space-y-6">
        <h1 className="text-xl font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Aris Neos
          </Link>
        </h1>
        {isHomePage && (
          <>
            <p className="max-w-xl text-sm text-gray-600 leading-relaxed">
              I am UX & Product Design Lead with 10+ years of experience shaping digital experiences across
              enterprise, e-commerce and B2B platforms. I specialize in aligning customer needs, product strategy
              and cross-functional execution to drive engagement, adoption and measurable business impact. <br/>
My work spans UX leadership, research, experimentation and digital transformation — bridging business,
design and engineering teams to turn complex systems into intuitive customer experiences.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="mailto:arisneos@gmail.com"
                className="text-sm hover:underline underline-offset-4"
              >
                email
              </Link>
              <span className="text-sm text-gray-600">|</span>
              <Link
                href="https://www.linkedin.com/in/arisneos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline underline-offset-4"
              >
                Linkedin
              </Link>
            </div>
          </>
        )}
      </div>
      </PageContainer>
    </header>
  )
}

export default Header 