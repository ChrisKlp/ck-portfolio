import logos from '@/assets/logos.svg?url'
import Image from 'next/image'

export default function LogosSeparator() {
  return (
    <div className="c-container flex justify-center py-10 opacity-75">
      <Image
        src={logos as string}
        alt="logos"
        width={523}
        height={66}
        className="w-[350px]"
      />
    </div>
  )
}
