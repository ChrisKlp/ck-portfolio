import { cn } from '@/lib/utils'
import data from '@/data/testimonials.json'

export default function Testimonials() {
  return (
    <section className="c-container py-12 lg:pb-20 xl:pb-32">
      <div className="hidden md:flex md:gap-4">
        {data.map((t) => (
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
  jobPosition,
  company,
  className,
}: (typeof data)[0] & { className?: string }) {
  return (
    <div className={cn('grid rounded-xl bg-white/5 p-6', className)}>
      <p className="mb-6 line-clamp-6 text-xs md:text-sm">{content}</p>
      <p className="text-xs">{company}</p>
      <p className="text-xs font-bold text-primary">{author}</p>
      <p className="text-xs">{jobPosition}</p>
    </div>
  )
}
