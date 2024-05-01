import Image from 'next/image'
import Link from 'next/link'
import LinkIcon from '@/assets/link.svg'
import { cn } from '@/lib/utils'

const data: Project[] = [
  {
    name: 'BeFit - Diet and fitness tracker',
    shortDescription: 'frontend/backend',
    imageSrc: '/assets/preview.jpg',
    tools: [
      'React',
      'Vite',
      'ChakraUI',
      'Redux',
      'Node.js',
      'Express',
      'JWT',
      'MongoDB',
    ],
    links: {
      frontend: 'https://github.com/ChrisKlp/beFit-frontend',
      backend: 'https://github.com/ChrisKlp/beFit-backend',
      live: 'https://be-fit-frontend.vercel.app/',
    },
  },
]

type Project = {
  name: string
  shortDescription: string
  imageSrc: string
  tools: string[]
  links: Record<string, string>
}

export default function Projects() {
  const newData = [...Array(6).keys()].map(() => ({ ...data[0] }))
  return (
    <section className="c-container grid gap-8 py-8 md:grid-cols-2">
      {newData.map((p, i) => (
        <Project key={`${p.name}-${i}`} {...p} />
      ))}
    </section>
  )
}

function Project({ name, shortDescription, imageSrc, tools, links }: Project) {
  return (
    <article className="grid gap-4 rounded-xl bg-white/10 p-4 pb-6">
      <div className="relative h-[220px] overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <header>
        <p className="text-sm uppercase opacity-60">{shortDescription}</p>
        <h3 className="text-xl font-semibold">{name}</h3>
      </header>
      <div className="grid gap-6">
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Tool key={tool} name={tool} />
          ))}
        </div>
        <div className="flex gap-2">
          {Object.entries(links).map(([name, value]) => (
            <Button key={name} href={value}>
              {name}
            </Button>
          ))}
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
      ? 'bg-secondary hover:bg-secondary-dark text-white'
      : 'bg-primary hover:bg-primary-highlighted'
  return (
    <Link
      href={href}
      passHref={true}
      className={cn(
        'flex items-center justify-between rounded-full p-1 px-3 text-xs font-semibold capitalize text-black transition-colors',
        color,
      )}
    >
      {children}
      <LinkIcon className="ml-1 hidden h-4 w-4 md:block" />
    </Link>
  )
}
