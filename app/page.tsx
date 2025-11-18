import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Timeline from '@/components/sections/timeline'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import ParticlesBackground from '@/components/background/particles'

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
