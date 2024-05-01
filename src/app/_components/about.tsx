import React from 'react'

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
    <section className="c-container grid justify-items-center gap-6 py-8">
      <h2 className="text-md font-bold uppercase tracking-[10px] text-primary">
        About
      </h2>
      <p className="text-center opacity-70">
        For over decade, I have been involved in designing and deploying web, as
        well as creating website designs. Recently, I have inspiration in VOD
        apps.
      </p>
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
