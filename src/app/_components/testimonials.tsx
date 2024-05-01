import React from 'react'

const data = [
  {
    content:
      'Krzysztof has the ability to easily learn new things. His ambition and thirst for knowledge drive him to continually seek growth and development. He performs his work with commitment and attention to detail, looking for the best solutions. Furthermore, his excellent communication skills enhance collaboration and make working with Krzysztof a genuine pleasure. Moreover, Krzysztof is not only a skilled developer but also a friendly colleague who actively contributes to a positive team atmosphere. I wish to have the opportunity to collaborate with him on future projects.',
    author: 'Anna Licznierowska',
    occupation: 'Principal Software Engineer',
    company: 'Intive',
  },
]

export default function Testimonials() {
  return (
    <section className="c-container py-8">
      {data.map((t) => (
        <Testimonial key={t.content} {...t} />
      ))}
    </section>
  )
}

function Testimonial({
  content,
  author,
  occupation,
  company,
}: (typeof data)[0]) {
  return (
    <div className="grid rounded-xl bg-white/10 p-6">
      <p className="mb-6 line-clamp-6 text-xs">{content}</p>
      <p className="text-xs">{company}</p>
      <p className="text-xs font-bold">{author}</p>
      <p className="text-xs text-primary">{occupation}</p>
    </div>
  )
}
