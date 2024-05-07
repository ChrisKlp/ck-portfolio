import Link from 'next/link'
import data from '@/data/hero.json'
import HeroVanishText from './hero-vanish-text'

export default function Hero() {
  return (
    <section>
      <div className="c-container grid items-center justify-items-center gap-2 py-16">
        <p className="[font-size:_clamp(1.25rem,2.5vw,1.6rem)]">{data.title}</p>
        <h1 className="sr-only">{data.header[0].join(' ')}</h1>
        <HeroVanishText />
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
