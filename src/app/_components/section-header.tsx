import React from 'react'

type Props = {
  title: string
  description?: string
}

export default function SectionHeader({ title, description }: Props) {
  return (
    <header className="mb-8 grid justify-items-center gap-6 md:mb-12">
      <h2 className="section-headline">{title}</h2>
      <p className="max-w-[700px] text-center opacity-70">{description}</p>
    </header>
  )
}
