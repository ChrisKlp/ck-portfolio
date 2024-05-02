import React from 'react'
import SectionHeader from './section-header'
import data from '@/data/about.json'

export default function About() {
  return (
    <section className="c-container my-8 lg:my-12 xl:my-20">
      <SectionHeader title={data.title} description={data.description} />
      <div className="grid w-full grid-cols-2 justify-items-center gap-4 md:grid-cols-3 md:gap-6 md:py-6 lg:gap-12 lg:py-14 xl:grid-cols-4">
        {data.skills.map((skill) => (
          <p
            key={skill}
            className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl"
          >
            {skill}
          </p>
        ))}
      </div>
    </section>
  )
}
