'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Project } from '@/app/data/portfolio'
import ContactDialog from './ContactDialog'

export default function ProjectTable({ projects }: { projects: Project[] }): React.ReactElement {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 text-left font-normal w-1/5 md:w-[18%] text-sm">Company</th>
              <th className="py-4 text-left font-normal w-1/5 md:w-[18%] text-sm">Title</th>
              <th className="py-4 text-left font-normal w-1/5 md:w-[18%] text-sm">Project Type</th>
              <th className="py-4 text-left font-normal w-2/5 md:w-[36%] text-sm">Contributions</th>
              <th className="py-4 text-left font-normal w-[10%]"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.company} className={`border-b border-gray-200 ${index === projects.length - 1 ? 'border-b-0' : ''}`}>
                <td className="py-6 text-sm">{project.company}</td>
                <td className="py-6 text-sm">{project.title}</td>
                <td className="py-6 text-sm">{project.type}</td>
                <td className="py-6 text-sm">{project.contributions}</td>
                <td className="py-6 text-right">
                  {project.isPrivate ? (
                    <button
                      onClick={() => setSelectedProject(project.company)}
                      className="text-sm text-gray-500 hover:text-gray-800 hover:underline underline-offset-4 transition-colors"
                    >
                      Upon Request
                    </button>
                  ) : (
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-sm hover:underline underline-offset-4"
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