import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './_components/header'
import Footer from './_components/footer'
import meta from '@/data/meta.json'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  icons: [{ rel: 'icon', url: '/favicon.png' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
