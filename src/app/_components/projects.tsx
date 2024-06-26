import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@/assets/link.svg'
import { cn } from '@/lib/utils'
import data from '@/data/projects.json'
import { getGithubLink } from '@/data/contact'

type Project = {
  name: string
  shortDescription: string
  imageSrc: string
  tools: string[]
  links: Record<string, string | undefined> & { live: string }
}

export default function Projects() {
  const githubLink = getGithubLink()
  return (
    <div className="relative">
      <div className="bg-projects-gradient absolute z-[-1] h-full w-full" />
      <section className="c-container grid max-w-[960px] gap-8 py-8 md:grid-cols-2 lg:gap-16">
        {data.map((p, i) => (
          <Project key={`${p.name}-${i}`} {...p} />
        ))}
      </section>
      {githubLink && (
        <Link
          href={githubLink.href}
          passHref={true}
          target="_blank"
          className={
            'group relative mx-auto my-6 mb-24 grid h-14 w-64 place-items-center rounded-full border-2 border-primary'
          }
        >
          <span className="transition-transform duration-200 ease-in-out group-hover:-translate-x-5">
            Check my github
          </span>
          <githubLink.Icon
            className="absolute right-8 scale-0 fill-primary transition-transform duration-200 ease-in-out group-hover:scale-100"
            width={20}
            height={20}
          />
          <span className="absolute inset-0 -z-[1] rounded-full opacity-0 shadow-primary transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
        </Link>
      )}
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
      : 'bg-transparent hover:bg-primary text-primary hover:text-black ring-1 ring-primary'
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
