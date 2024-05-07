'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn, getRandomBoxesArray } from '@/lib/utils'

const boxesCount = 336
const boxesColumns = 24
const boxes = [...Array(boxesCount).keys()]

function AnimatedGrid({ className, ...rest }: { className?: string }) {
  const [highlightedBoxes, setHighlightedBoxes] = useState<number[]>(
    getRandomBoxesArray(boxesCount),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const randomBoxes = getRandomBoxesArray(boxesCount)
      setHighlightedBoxes([...randomBoxes])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        'circle-mask absolute left-1/2 z-[-1] grid -translate-x-1/2 grid-cols-[repeat(24,_1fr)]',
        className,
      )}
      {...rest}
    >
      {boxes.map((_, i) => {
        const isShowing = highlightedBoxes.includes(i)
        const delay = (i % 10) * 0.1
        return (
          <div
            key={i}
            className={cn(
              'relative aspect-square w-[60px] border-white/10',
              i % boxesColumns !== 23 && 'border-r',
              Math.floor(i / boxesColumns) !== 0 && 'border-t',
            )}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isShowing ? 1 : 0,
                transition: {
                  duration: 2,
                  delay: delay,
                },
              }}
              className="h-full w-full bg-white/5"
            />
          </div>
        )
      })}
    </div>
  )
}

const GridBackground = React.memo(AnimatedGrid)

export default GridBackground
