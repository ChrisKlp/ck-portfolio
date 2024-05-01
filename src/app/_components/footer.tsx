import type { FC, SVGProps } from 'react'
import logo from '@/assets/logo-crisklp.svg?url'
import GithubLogo from '@/assets/github.svg'
import LinkedInLogo from '@/assets/linkedin.svg'
import MailLogo from '@/assets/mail.svg'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from './section-header'

const data: FooterButton[] = [
  {
    name: 'Github',
    href: 'https://github.com/ChrisKlp',
    Icon: GithubLogo,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krzysztof-klepadło',
    Icon: LinkedInLogo,
  },
  {
    name: 'Email',
    href: 'mailto:klepadlo.krzysztof@gmail.com',
    Icon: MailLogo,
  },
]

type FooterButton = {
  name: string
  href: string
  Icon: FC<SVGProps<SVGElement>>
}

export default function Footer() {
  return (
    <footer id="contact-section" className="mt-4">
      <div className="c-container mb-16 grid justify-items-center gap-2">
        <SectionHeader title="Contact" description="You can find me here:" />
        <div className="grid w-full grid-cols-3 gap-6">
          {data.map(({ name, href, Icon }) => (
            <FooterButton key={name} name={name} href={href} Icon={Icon} />
          ))}
        </div>
      </div>
      <div className="my-8">
        <div className="h-[1px] w-full bg-white opacity-10" />
        <div className="mt-8 flex items-center justify-center gap-2">
          <Image src={logo as string} alt="logo" width={18} height={18} />
          <span className="text-sm opacity-60">
            {`Copyright ${new Date().getFullYear()} © Chris Klepadlo`}
          </span>
        </div>
      </div>
    </footer>
  )
}

function FooterButton({ href, name, Icon }: FooterButton) {
  return (
    <Link
      href={href}
      passHref={true}
      target="_blank"
      className="grid place-items-center gap-2 rounded-lg bg-white/5 p-5 text-xs transition-all hover:bg-white/10"
    >
      <Icon className="h-8 w-8" />
      {name}
    </Link>
  )
}
