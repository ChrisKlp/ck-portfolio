'use client'

import { cn } from '@/lib/utils'
import data from '@/data/testimonials.json'
import { motion, useMotionValue } from 'framer-motion'
import { useState } from 'react'

const DRAG_BUFFER = 40

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

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
      <MobileTestimonialsWrapper className="md:hidden" />
      {/* <Testimonial {...data[0]} className="md:hidden" /> */}
    </section>
  )
}

export function MobileTestimonialsWrapper({
  className,
}: {
  className?: string
}) {
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const dragX = useMotionValue(0)

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && testimonialIndex < data.length - 1) {
      setTestimonialIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && testimonialIndex > 0) {
      setTestimonialIndex((pv) => pv - 1)
    }
  }

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={onDragEnd}
      style={{
        x: dragX,
      }}
      animate={{
        translateX: `-${testimonialIndex * 100}%`,
      }}
      transition={SPRING_OPTIONS}
      className={cn('flex cursor-grab active:cursor-grabbing', className)}
    >
      {data.map((t, i) => (
        <motion.div
          key={t.content}
          animate={{
            scale: testimonialIndex === i ? 1 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className="w-full shrink-0"
        >
          <Testimonial {...t} />
        </motion.div>
      ))}
    </motion.div>
  )
}

function Testimonial({
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
