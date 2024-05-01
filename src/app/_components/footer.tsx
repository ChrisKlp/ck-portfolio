import logo from '@/assets/logo-crisklp.svg?url'
import GithubLogo from '@/assets/github.svg'
import LinkedInLogo from '@/assets/linkedin.svg'
import MailLogo from '@/assets/mail.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact-section" className="mt-8">
      <div className="h-[1px] w-full bg-white opacity-10" />
      <div className="c-container py-8 ">
        <div className="flex items-center justify-center gap-10">
          <Link
            href="https://github.com/ChrisKlp"
            passHref={true}
            target="_blank"
            className="headerLink"
          >
            <GithubLogo className="h-auto w-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/krzysztof-klepadło"
            passHref={true}
            target="_blank"
            className="headerLink"
          >
            <LinkedInLogo className="h-auto w-8" />
          </Link>
          <Link
            href="mailto:klepadlo.krzysztof@gmail.com"
            passHref={true}
            className="headerLink"
          >
            <MailLogo className="h-auto w-8" />
          </Link>
        </div>
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
