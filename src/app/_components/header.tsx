import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import logo from '@/assets/logo-crisklp.svg?url'
import contactData from '@/data/contact'

export default function Header() {
  return (
    <header className="c-container grid max-w-[1440px] grid-cols-[1fr_auto] items-center gap-5 py-6 md:grid-cols-[1fr_repeat(3,auto)] lg:gap-8">
      <Link href="/" replace={true}>
        <Image
          src={logo as string}
          alt="logo"
          width={60}
          height={60}
          className="h-auto w-14 min-w-10"
        />
      </Link>
      {contactData.links.map((item, i, arr) => (
        <Link
          key={item.name}
          href={item.href}
          passHref={true}
          target="_blank"
          className={cn('headerLink', i < arr.length - 1 && 'hidden md:block')}
        >
          <item.Icon className="h-auto w-7" />
        </Link>
      ))}
    </header>
  )
}
