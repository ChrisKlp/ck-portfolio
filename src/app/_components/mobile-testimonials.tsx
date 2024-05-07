'use client'

import { useState } from 'react'
import { useMotionValue, motion } from 'framer-motion'
import data from '@/data/testimonials.json'
import { cn } from '@/lib/utils'
import { Testimonial } from './testimonials'

const DRAG_BUFFER = 40

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

export function MobileTestimonials({ className }: { className?: string }) {
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
