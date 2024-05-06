import logos from '@/assets/logos.svg?url'
import Image from 'next/image'

export default function LogosSeparator() {
  return (
    <div className="c-container flex justify-center py-10 opacity-50">
      <Image
        src={logos as string}
        alt="logos"
        width={523}
        height={66}
        className="[width:_clamp(350px,50vw,523px)]"
      />
    </div>
  )
}
