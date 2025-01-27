'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Project } from '@/app/data/portfolio'
import ContactDialog from './ContactDialog'

export default function ProjectTable({ projects }: { projects: Project[] }): React.ReactElement {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 pr-8 text-left font-normal w-[15%] text-sm text-gray-500">Company</th>
              <th className="py-2 pr-8 text-left font-normal w-[20%] text-sm text-gray-500">Title</th>
              <th className="py-2 pr-8 text-left font-normal w-[15%] text-sm text-gray-500">Project Type</th>
              <th className="py-2 text-left font-normal w-[40%] text-sm text-gray-500">Contributions</th>
              <th className="py-2 pl-8 text-right font-normal w-[10%]"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr 
                key={project.company} 
                className={`
                  group
                  ${project.isPrivate ? 'text-gray-500' : ''}
                  ${!project.isPrivate ? 'hover:bg-gray-50 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200' : ''}
                  cursor-pointer
                `}
              >
                <td className="py-3 pr-8 text-sm">{project.company}</td>
                <td className="py-3 pr-8 text-sm">{project.title}</td>
                <td className="py-3 pr-8 text-sm">{project.type}</td>
                <td className="py-3 text-sm">{project.contributions}</td>
                <td className="py-3 pl-8 text-right whitespace-nowrap">
                  {project.isPrivate ? (
                    <button
                      onClick={() => setSelectedProject(project.company)}
                      className="text-sm text-gray-400 hover:text-gray-600 hover:underline underline-offset-4 transition-colors ml-auto inline-block"
                    >
                      Upon Request
                    </button>
                  ) : (
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-sm hover:underline underline-offset-4 ml-auto inline-block"
                    >
                      View Project
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ContactDialog
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        projectName={selectedProject || ''}
      />
    </>
  )
} 