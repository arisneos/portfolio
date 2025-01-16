'use client'
import React from 'react'
import Link from 'next/link'

type Project = {
  company: string
  title: string
  type: string
  contributions: string
  link: string
}

export default function ProjectTable({ projects }: { projects: Project[] }): React.ReactElement {
  return (
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
                <Link 
                  href={project.link}
                  className="text-sm hover:underline underline-offset-4"
                >
                  View Project
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 