import About from './_components/about'
import Hero from './_components/hero'
import LogosSeparator from './_components/logos-separator'
import Projects from './_components/projects'
import Testimonials from './_components/testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <LogosSeparator />
      <Projects />
      <About />
      <Testimonials />
    </main>
  )
}
