'use client'

import { AnimatePresence, type Variants, motion } from 'framer-motion'
import data from '@/data/hero.json'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function HeroVanishText() {
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
    <div className="grid text-center font-bold leading-[1] [font-size:_clamp(3.5rem,8vw,5.5rem)]">
      <AnimatePresence mode="wait">
        <VanishText
          key={`${data.header[index][0]}-${index}`}
          text={data.header[index][0]}
        />
        <VanishText
          key={`${data.header[index][1]}-${index}`}
          text={data.header[index][1]}
          isSecond={true}
        />
      </AnimatePresence>
    </div>
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
