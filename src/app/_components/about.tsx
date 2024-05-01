import React from 'react'
import SectionHeader from './section-header'

const skills = [
  'Javascript',
  'Typescript',
  'React',
  'Next.js',
  'Tailwind',
  'Redux',
  'Node.js',
  'Express',
  'Roku',
  'BrightScript',
  'Figma',
  'Adobe',
]

export default function About() {
  return (
    <section className="c-container py-8">
      <SectionHeader
        title="About"
        description="For over decade, I have been involved in designing and deploying web, as
        well as creating website designs. Recently, I have inspiration in VOD
        apps."
      />
      <div className="grid w-full grid-cols-2 justify-items-center gap-4">
        {skills.map((skill) => (
          <p key={skill} className="text-xl font-bold">
            {skill}
          </p>
        ))}
      </div>
    </section>
  )
}
