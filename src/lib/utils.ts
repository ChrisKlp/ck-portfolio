import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomBoxesArray(boxesCount: number) {
  return Array.from({ length: 15 }, () =>
    Math.floor(Math.random() * boxesCount),
  )
}
