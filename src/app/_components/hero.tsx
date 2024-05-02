import Link from 'next/link'

export default function Hero() {
  return (
    <section>
      <div className="c-container grid items-center justify-items-center gap-2 py-16 lg:py-24">
        <p className="[font-size:_clamp(1.25rem,2.5vw,1.875rem)]">
          Hello, I am a
        </p>
        <h1 className="grid text-center font-bold leading-[1] [font-size:_clamp(3.5rem,8vw,7rem)]">
          <span>Frontend</span>
          <span>Developer</span>
        </h1>
        <p className="mt-4 max-w-[480px] text-center text-sm opacity-60 md:max-w-[550px] md:text-base lg:max-w-[620px] lg:text-lg">
          Hi. My name is Christopher Klepadlo and I am a frontend developer, UI
          designer and a BrightScript developer living in Poland.
        </p>
        <Link
          href="#contact-section"
          className="mt-10 rounded-full bg-primary p-3 px-8 font-bold text-black transition-colors hover:bg-primary-highlighted lg:p-4 lg:px-10"
        >
          Contact me
        </Link>
      </div>
    </section>
  )
}
