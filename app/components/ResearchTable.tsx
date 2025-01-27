'use client'
import React from 'react'
import Link from 'next/link'
import { Research } from '@/app/data/portfolio'

export default function ResearchTable({ research }: { research: Research[] }): React.ReactElement {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-2 text-left font-normal w-2/5 md:w-[45%] text-sm text-gray-500">Title</th>
            <th className="py-2 text-left font-normal w-1/5 md:w-[20%] text-sm text-gray-500">Type</th>
            <th className="py-2 text-left font-normal w-1/5 md:w-[25%] text-sm text-gray-500">Institution</th>
            <th className="py-2 text-left font-normal w-[10%]"></th>
          </tr>
        </thead>
        <tbody>
          {research.map((item) => (
            <tr 
              key={item.title} 
              className="
                group
                hover:bg-gray-50 hover:transform hover:-translate-y-1 hover:shadow-lg 
                transition-all duration-200
                cursor-pointer
              "
            >
              <td className="py-3 text-sm">{item.title}</td>
              <td className="py-3 text-sm">{item.type}</td>
              <td className="py-3 text-sm">{item.institution}</td>
              <td className="py-3 text-right">
                <Link 
                  href={`/research/${item.slug}`}
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