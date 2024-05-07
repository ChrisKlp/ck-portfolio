import type { FC, SVGProps } from 'react'
import GithubLogo from '@/assets/github.svg'
import LinkedInLogo from '@/assets/linkedin.svg'
import MailLogo from '@/assets/mail.svg'

export type FooterButton = {
  name: string
  href: string
  Icon: FC<SVGProps<SVGElement>>
}

export const linksData: FooterButton[] = [
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

const contactData = {
  title: 'Contact',
  description: 'You can find me here:',
  links: linksData,
}

export function getGithubLink() {
  return linksData.find((l) => l.name === 'Github')
}

export default contactData
