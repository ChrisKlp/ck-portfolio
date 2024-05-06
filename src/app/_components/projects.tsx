import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@/assets/link.svg'
import { cn } from '@/lib/utils'
import data from '@/data/projects.json'

type Project = {
  name: string
  shortDescription: string
  imageSrc: string
  tools: string[]
  links: Record<string, string | undefined> & { live: string }
}

export default function Projects() {
  return (
    <div className="relative">
      <div className="bg-projects-gradient absolute z-[-1] h-full w-full" />
      <section className="c-container grid max-w-[960px] gap-8 py-8 md:grid-cols-2 lg:gap-16">
        {data.map((p, i) => (
          <Project key={`${p.name}-${i}`} {...p} />
        ))}
      </section>
    </div>
  )
}

function Project({ name, shortDescription, imageSrc, tools, links }: Project) {
  return (
    <article className="flex flex-col gap-4 rounded-xl bg-white/5 p-4 pb-6">
      <Link
        href={links.live}
        passHref={true}
        target="_blank"
        className="relative h-[220px] overflow-hidden rounded-lg lg:h-[280px]"
      >
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="100%"
          className="object-cover transition-transform duration-300 hover:scale-[1.08]"
        />
      </Link>
      <header>
        <p className="text-sm uppercase opacity-60 lg:my-1">
          {shortDescription}
        </p>
        <h3 className="text-xl font-semibold">{name}</h3>
      </header>
      <div className="grid flex-1 grid-rows-[1fr_auto] items-start gap-6">
        <div className="flex flex-wrap gap-2 lg:mb-6">
          {tools.map((tool) => (
            <Tool key={tool} name={tool} />
          ))}
        </div>
        <div className="flex gap-2 lg:gap-3">
          {Object.entries(links).map(([name, value]) => {
            if (!value) return null
            return (
              <Button key={name} href={value}>
                {name}
              </Button>
            )
          })}
        </div>
      </div>
    </article>
  )
}

function Tool({ name }: { name: string }) {
  return (
    <p className="grid place-items-center rounded-full bg-white/5 p-1 px-3 text-xs text-white/75">
      {name}
    </p>
  )
}

function Button({ href, children }: { href: string; children: string }) {
  const color =
    children === 'live'
      ? 'bg-primary hover:bg-primary-highlighted'
      : 'bg-slate-200 hover:bg-slate-100'
  return (
    <Link
      href={href}
      passHref={true}
      target="_blank"
      className={cn(
        'flex items-center justify-between rounded-full p-1 px-3 text-xs font-semibold capitalize text-black transition-colors lg:p-2 lg:px-4',
        color,
      )}
    >
      {children}
      <LinkIcon className="ml-1 hidden h-4 w-4 md:block" />
    </Link>
  )
}
