/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, type Variants, motion } from 'framer-motion'
import data from '@/data/hero.json'
import { cn } from '@/lib/utils'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setIndex((index) => (index + 1) % data.header.length)
    }, 4000)

    return () => {
      clearInterval(intervalRef)
    }
  }, [])

  return (
    <section>
      <div className="c-container grid items-center justify-items-center gap-2 py-16 lg:py-24">
        <p className="[font-size:_clamp(1.25rem,2.5vw,1.875rem)]">
          {data.title}
        </p>
        <h1 className="sr-only">{data.header[0].join(' ')}</h1>
        <div className="grid text-center font-bold leading-[1] [font-size:_clamp(3.5rem,8vw,7rem)]">
          <AnimatePresence mode="wait">
            <VanishText
              key={data.header[index][0]}
              text={data.header[index][0]}
            />
            <VanishText
              key={index}
              text={data.header[index][1]}
              isSecond={true}
            />
          </AnimatePresence>
        </div>
        <p className="mb-10 mt-4 max-w-[480px] text-center text-sm opacity-60 md:max-w-[550px] md:text-base lg:max-w-[620px] lg:text-lg">
          {data.description}
        </p>
        <Link
          href="#contact-section"
          className="rounded-full bg-primary p-3 px-8 font-bold text-black transition-colors hover:bg-primary-highlighted lg:p-4 lg:px-10"
        >
          Contact me
        </Link>
      </div>
    </section>
  )
}

const word: Variants = {
  hidden: (isSecond: boolean) => ({
    opacity: 0,
    x: isSecond ? -20 : 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: (isSecond: boolean) => ({
    opacity: 0,
    x: isSecond ? 20 : -20,
  }),
}

function VanishText({
  text,
  isSecond = false,
  className,
}: {
  text: string
  isSecond?: boolean
  className?: string
}) {
  return (
    <motion.span
      variants={word}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{
        delay: isSecond ? 0.3 : 0,
        duration: 0.3,
        ease: 'easeInOut',
      }}
      custom={isSecond}
      className={cn('flex items-center justify-center', className)}
    >
      {text}
    </motion.span>
  )
}
