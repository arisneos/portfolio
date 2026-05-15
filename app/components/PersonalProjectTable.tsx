'use client'
import React, { useState } from 'react'
import { PersonalProject } from '@/app/data/portfolio'
import ContactDialog from './ContactDialog'
import { useRouter } from 'next/navigation'

export default function PersonalProjectTable({ projects }: { projects: PersonalProject[] }): React.ReactElement {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const router = useRouter()

  const handleRowClick = (project: PersonalProject) => {
    if (project.isPrivate) {
      setSelectedProject(project.title)
    } else {
      router.push(`/personal-projects/${project.slug}`)
    }
  }

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 pr-8 text-left font-normal w-[25%] text-sm text-gray-500">Title</th>
              <th className="py-2 pr-8 text-left font-normal w-[15%] text-sm text-gray-500">Type</th>
              <th className="py-2 pr-8 text-left font-normal w-[15%] text-sm text-gray-500">Status</th>
              <th className="py-2 text-left font-normal w-[35%] text-sm text-gray-500">Description</th>
              <th className="py-2 pl-8 text-right font-normal w-[10%]"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              const isPrivate = project.isPrivate
              return (
                <tr
                  key={project.slug}
                  onClick={() => handleRowClick(project)}
                  className={`
                    group cursor-pointer
                    ${!isPrivate ? 'hover:bg-gray-50 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200' : ''}
                  `}
                >
                  <td className={`py-3 pr-8 text-sm font-medium ${isPrivate ? 'text-gray-400' : 'text-black'}`}>{project.title}</td>
                  <td className={`py-3 pr-8 text-sm ${isPrivate ? 'text-gray-400' : 'text-gray-700'}`}>{project.type}</td>
                  <td className="py-3 pr-8 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      isPrivate
                        ? 'bg-gray-100 text-gray-500'
                        : project.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className={`py-3 text-sm ${isPrivate ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</td>
                  <td className="py-3 pl-8 text-right whitespace-nowrap">
                    {isPrivate ? (
                      <span className="text-sm text-gray-400 hover:text-gray-600 transition-colors ml-auto inline-block">
                        Upon Request
                      </span>
                    ) : (
                      <span className="text-sm text-black group-hover:underline underline-offset-4 ml-auto inline-block">
                        View Project
                      </span>
                    )}
                  </td>
                </tr>
              )
            })}
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
