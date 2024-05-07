import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import logo from '@/assets/logo-crisklp.svg?url'
import contactData from '@/data/contact'
import StickyWrapper from './sticky-wrapper'
import GridBackground from './grid-background'

export default function Header() {
  return (
    <header className="relative overflow-x-clip">
      <div className="bg-hero-gradient absolute z-[-1] h-[1500px] w-full" />
      <GridBackground className="opacity-100 lg:opacity-75" />
      <nav className="c-container grid max-w-[1440px] grid-cols-[1fr_auto] items-center gap-5 py-6 md:grid-cols-[1fr_repeat(3,auto)] lg:gap-8">
        <div className="grid justify-items-start">
          <StickyWrapper>
            <Link href="/" replace={true}>
              <Image
                src={logo as string}
                alt="logo"
                width={60}
                height={60}
                className="h-auto w-14 min-w-10"
              />
            </Link>
          </StickyWrapper>
        </div>
        {contactData.links.map((item, i, arr) => (
          <Link
            key={item.name}
            href={item.href}
            passHref={true}
            target="_blank"
            className={cn(
              'headerLink',
              i < arr.length - 1 && 'hidden md:block',
            )}
          >
            <item.Icon className="h-auto w-7" />
          </Link>
        ))}
      </nav>
    </header>
  )
}
