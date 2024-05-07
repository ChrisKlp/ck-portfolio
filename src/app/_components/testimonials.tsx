import { cn } from '@/lib/utils'
import data from '@/data/testimonials.json'
import { MobileTestimonials } from './mobile-testimonials'

export default function Testimonials() {
  return (
    <section className="c-container overflow-hidden py-12 lg:pb-20 xl:pb-32">
      <div className="hidden grid-flow-col grid-cols-2 grid-rows-2 md:grid md:gap-4">
        {data.map((t, i) => (
          <Testimonial
            key={t.content}
            {...t}
            className={i > 1 ? 'translate-y-10' : ''}
          />
        ))}
      </div>
      <MobileTestimonials className="md:hidden" />
    </section>
  )
}

export function Testimonial({
  content,
  author,
  jobPosition,
  company,
  className,
}: (typeof data)[0] & {
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex h-[216px] w-full flex-col rounded-xl bg-white/5 p-6 md:h-auto',
        className,
      )}
    >
      <p className="mb-6 line-clamp-6 flex-1 text-xs md:text-sm">{content}</p>
      <p className="text-xs">{company}</p>
      <p className="text-xs font-bold text-primary">{author}</p>
      <p className="text-xs">{jobPosition}</p>
    </div>
  )
}
