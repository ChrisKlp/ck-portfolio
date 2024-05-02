import { cn } from '@/lib/utils'
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

const newData = [...Array(3).keys()].map(() => ({ ...data[0] }))

export default function Testimonials() {
  return (
    <section className="c-container py-12 lg:pb-20 xl:pb-32">
      <div className="hidden md:flex md:gap-4">
        {newData.map((t) => (
          <Testimonial key={t.content} {...t} />
        ))}
      </div>
      <Testimonial {...data[0]} className="md:hidden" />
    </section>
  )
}

function Testimonial({
  content,
  author,
  occupation,
  company,
  className,
}: (typeof data)[0] & { className?: string }) {
  return (
    <div className={cn('grid rounded-xl bg-white/5 p-6', className)}>
      <p className="mb-6 line-clamp-6 text-xs md:text-sm">{content}</p>
      <p className="text-xs">{company}</p>
      <p className="text-xs font-bold text-primary">{author}</p>
      <p className="text-xs">{occupation}</p>
    </div>
  )
}
