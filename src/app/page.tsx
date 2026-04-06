'use client'

import { Navbar, Footer, AnimatedBackground } from '@/components'
import {
  Hero,
  About,
  Experience,
  Education,
  Skills,
  Certifications,
  Projects,
  Languages,
  Contact,
} from '@/sections'
import { useScrollSpy } from '@/hooks/useScrollSpy'

export default function Home() {
  useScrollSpy()

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Languages />
        <Contact />
      </div>
      
      <Footer />
    </main>
  )
}
