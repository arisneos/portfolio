'use client'
import React from 'react'
import { PersonalProject } from '@/app/data/portfolio'
import { useRouter } from 'next/navigation'

export default function PersonalProjectTable({ projects }: { projects: PersonalProject[] }): React.ReactElement {
  const router = useRouter()

  const handleRowClick = (project: PersonalProject) => {
    router.push(`/personal-projects/${project.slug}`)
  }

  return (
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
          {projects.map((project) => (
            <tr 
              key={project.slug} 
              onClick={() => handleRowClick(project)}
              className="hover:bg-gray-50 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <td className="py-3 pr-8 text-sm">{project.title}</td>
              <td className="py-3 pr-8 text-sm">{project.type}</td>
              <td className="py-3 pr-8 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.status}
                </span>
              </td>
              <td className="py-3 text-sm">{project.description}</td>
              <td className="py-3 pl-8 text-right whitespace-nowrap">
                <span className="text-sm group-hover:underline underline-offset-4 ml-auto inline-block">
                  View Project
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 