import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function PageContainer({ children, className = '' }: Props): React.ReactElement {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 ${className}`.trim()}>
      {children}
    </div>
  )
}
