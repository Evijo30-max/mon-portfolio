'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-40">
      <SectionHeading index="01" label="Qui suis-je" title="À propos" />

      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div ref={ref} className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
              <Image
                src="/portraitMe.jpeg"
                alt="Portrait de l'étudiant ingénieur télécom et développeur"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-phosphor">
              [ Eric Evina M. ]
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center md:col-span-7">
          <Reveal>
            <p className="text-2xl font-light leading-snug text-offwhite md:text-4xl">
              Je suis un élève ingénieur en télécommunications (Informatique des Réseaux), passionné par tout ce qui
              transporte l&apos;information — des <span className="text-phosphor">protocoles réseau</span> aux{' '}
              <span className="text-amber">interfaces web</span>.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl leading-relaxed text-muted">
              Le jour, je conçois des topologies, j&apos;automatise des équipements et je
              plonge dans les couches OSI. La nuit, j&apos;écris du code : des outils, des
              dashboards, des expériences. Ma conviction : un bon ingénieur réseau qui sait
              coder est imbattable.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4">
            {[
              { k: '19', v: 'ans' },
              { k: '8', v: 'projets' },
              { k: '2', v: 'certifications' },
              { k: '∞', v: 'curiosité' },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 0.08}>
                <div>
                  <div className="font-display text-4xl text-offwhite md:text-5xl">{s.k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    {s.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
