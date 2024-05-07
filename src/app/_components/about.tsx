'use client'

import SectionHeader from './section-header'
import data from '@/data/about.json'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section className="c-container my-8 lg:my-12 xl:my-20">
      <SectionHeader title={data.title} description={data.description} />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid w-full grid-cols-2 justify-items-center gap-4 md:grid-cols-3 md:gap-6 md:py-6 lg:gap-12 lg:py-14 xl:grid-cols-4"
      >
        {data.skills.map((skill) => (
          <motion.p
            key={skill}
            variants={item}
            className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl"
          >
            {skill}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}
