import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo-crisklp.svg?url'
import contactData, { type FooterButton } from '@/data/contact'
import SectionHeader from './section-header'

export default function Footer() {
  return (
    <footer id="contact-section" className="mt-4">
      <div className="c-container grid justify-items-center">
        <SectionHeader
          title={contactData.title}
          description={contactData.description}
        />
        <div className="mb-12 mt-2 grid w-full max-w-[700px] grid-cols-3 gap-6 md:mb-20 md:mt-4">
          {contactData.links.map(({ name, href, Icon }) => (
            <FooterButton key={name} name={name} href={href} Icon={Icon} />
          ))}
        </div>
      </div>
      <div className="h-20">
        <div className="h-[1px] w-full bg-white opacity-10" />
        <div className="flex h-full items-center justify-center gap-2">
          <Image src={logo as string} alt="logo" width={18} height={18} />
          <span className="text-sm opacity-40">
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
      className="group grid place-items-center gap-2 rounded-lg bg-white/5 p-5 transition-colors hover:bg-primary"
    >
      <Icon className="h-8 w-8 transition-colors group-hover:fill-black" />
      <span className="text-xs text-white  transition-colors group-hover:text-black">
        {name}
      </span>
    </Link>
  )
}
