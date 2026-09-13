'use client'

import { useState } from 'react'
import { Preloader } from '@/components/preloader'
import { CustomCursor } from '@/components/custom-cursor'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { About } from '@/components/about'
import { SkillsMatrix } from '@/components/skills-matrix'
import { TechStack } from '@/components/tech-stack'
import { Projects } from '@/components/projects'
import { GithubStats } from '@/components/github-stats'
import { Timeline } from '@/components/timeline'
import { Lab } from '@/components/lab'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { WritingCerts } from '@/components/writing-certs'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <CustomCursor />
      <SmoothScroll />
      <Nav />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <About />
        <SkillsMatrix />
        <TechStack />
        <Projects />
        <GithubStats />
        <Timeline />
        <Lab />
        <Services />
        <Testimonials />
        <WritingCerts />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
