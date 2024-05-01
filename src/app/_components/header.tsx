import logo from '@/assets/logo-crisklp.svg?url'
import GithubLogo from '@/assets/github.svg'
import LinkedInLogo from '@/assets/linkedin.svg'
import MailLogo from '@/assets/mail.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="c-container grid max-w-[1440px] grid-cols-[1fr_auto] items-center gap-5 py-6 md:grid-cols-[1fr_repeat(3,auto)] ">
      <Image
        src={logo as string}
        alt="logo"
        width={60}
        height={60}
        className="h-auto w-14 min-w-10"
      />
      <Link
        href="https://github.com/ChrisKlp"
        passHref={true}
        target="_blank"
        className="headerLink hidden md:block"
      >
        <GithubLogo className="h-auto w-7" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/krzysztof-klepadło"
        passHref={true}
        target="_blank"
        className="headerLink hidden md:block"
      >
        <LinkedInLogo className="h-auto w-7" />
      </Link>
      <Link
        href="mailto:klepadlo.krzysztof@gmail.com"
        passHref={true}
        className="headerLink"
      >
        <MailLogo className="h-auto w-7" />
      </Link>
    </header>
  )
}
