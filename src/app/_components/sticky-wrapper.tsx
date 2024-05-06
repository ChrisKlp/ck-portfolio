'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function StickyWrapper({ children, className }: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event

    const rect = event.currentTarget.getBoundingClientRect()

    const x = clientX - (rect.left + rect.width / 2)
    const y = clientY - (rect.top + rect.height / 2)
    setMousePosition({ x, y })
    console.log({ x, y })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setMousePosition({ x: 0, y: 0 })
      }}
      className={className}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.2, 1.2, 1)`
          : 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)',
        transition: 'transform 0.2s ease-out',
      }}
    >
      {children}
    </motion.div>
  )
}
