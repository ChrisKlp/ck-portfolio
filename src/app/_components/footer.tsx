import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo-crisklp.svg?url'
import contactData, { type FooterButton } from '@/data/contact'
import SectionHeader from './section-header'

export default function Footer() {
  return (
    <div className="relative">
      <div className="bg-footer-gradient absolute bottom-0 z-[-1] h-[1200px] w-full opacity-75 md:bottom-[200px]" />
      <div className="bg-grid absolute bottom-0 z-[-1] h-[1200px] w-full opacity-75" />
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
    </div>
  )
}

function FooterButton({ href, name, Icon }: FooterButton) {
  return (
    <Link
      href={href}
      passHref={true}
      target="_blank"
      className="group relative grid place-items-center gap-2 overflow-hidden rounded-lg bg-white/5 p-5"
    >
      <div className="absolute inset-0 z-[-1] translate-y-[100%] bg-primary transition-transform duration-300 group-hover:translate-y-0" />
      <Icon className="h-8 w-8 transition-colors duration-300 group-hover:fill-black" />
      <span className="text-xs text-white  transition-colors duration-300 group-hover:text-black">
        {name}
      </span>
    </Link>
  )
}
