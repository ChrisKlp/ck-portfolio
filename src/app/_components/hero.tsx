import Link from 'next/link'

export default function Hero() {
  return (
    <section>
      <div className="c-container grid items-center justify-items-center gap-2 py-16">
        <p className="text-xl ">Hello, I am a</p>
        <h1 className="text-center text-[52px] font-bold leading-[1]">
          Frontend Developer
        </h1>
        <p className="mt-4 text-center text-sm opacity-60">
          Hi. My name is Christopher Klepadlo and I am a frontend developer, UI
          designer and a BrightScript developer living in Poland.
        </p>
        <Link
          href="#contact-section"
          className="mt-10 rounded-full bg-primary p-3 px-8 font-bold text-black transition-colors hover:bg-primary-highlighted"
        >
          Contact me
        </Link>
      </div>
    </section>
  )
}
