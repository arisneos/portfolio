'use client'
import React from 'react'
import Link from 'next/link'

type Research = {
  title: string
  type: string
  institution: string
  link: string
}

export default function ResearchTable({ research }: { research: Research[] }): React.ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-4 text-left font-normal w-2/5 md:w-[45%] text-sm">Title</th>
            <th className="py-4 text-left font-normal w-1/5 md:w-[20%] text-sm">Type</th>
            <th className="py-4 text-left font-normal w-1/5 md:w-[25%] text-sm">Institution</th>
            <th className="py-4 text-left font-normal w-[10%]"></th>
          </tr>
        </thead>
        <tbody>
          {research.map((item, index) => (
            <tr key={item.title} className={`border-b border-gray-200 ${index === research.length - 1 ? 'border-b-0' : ''}`}>
              <td className="py-6 text-sm">{item.title}</td>
              <td className="py-6 text-sm">{item.type}</td>
              <td className="py-6 text-sm">{item.institution}</td>
              <td className="py-6 text-right">
                <Link 
                  href={item.link}
                  className="text-sm hover:underline underline-offset-4"
                >
                  View Research
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 