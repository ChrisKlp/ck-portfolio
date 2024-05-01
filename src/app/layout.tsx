import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './_components/header'
import Footer from './_components/footer'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Christopher Klepadlo - Frontend Developer',
  description:
    'Personal website of Christopher Klepadlo. Frontend Developer. Roku/BrightScript Developer.',
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
