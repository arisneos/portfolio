import React from 'react'
import Header from './components/Header'
import ProjectTable from './components/ProjectTable'
import ResearchTable from './components/ResearchTable'
import PersonalProjectTable from './components/PersonalProjectTable'
import { projects, research, personalProjects } from './data/portfolio'

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <ProjectTable projects={projects} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Personal Projects</h2>
          <PersonalProjectTable projects={personalProjects} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Research</h2>
          <ResearchTable research={research} />
        </section>
      </div>
    </main>
  )
} 