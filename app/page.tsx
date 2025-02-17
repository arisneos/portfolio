import React from 'react'
import Link from 'next/link'
import ProjectTable from './components/ProjectTable'
import ResearchTable from './components/ResearchTable'
import { projects, research } from './data/portfolio'

export default function Home(): React.ReactElement {
  return (
    <div className="space-y-16 max-w-[1200px]">
      <section className="space-y-6">
        <h1 className="text-xl font-medium text-gray-600">Aris Neos</h1>
        <p className="text-sm text-gray-600 max-w-[640px] leading-relaxed">
          I am a product designer & manager with over twelve years of experience in creating User Experiences 
          and managing teams. I also like to code from time to time. I focus on simple, intuitive interfaces and data-driven solutions 
          for e-commerce, enterprise B2B - SaaS and Startups.
        </p>
        <div>
          <Link 
            href="mailto:arisneos@gmail.com" 
            className="text-sm hover:underline underline-offset-4"
          >
            email
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg text-gray-500">Projects</h2>
        <ProjectTable projects={projects} />
      </section>

      <section className="space-y-6">
        <h2 className="text-lg text-gray-500">Research</h2>
        <ResearchTable research={research} />
      </section>
    </div>
  )
} 