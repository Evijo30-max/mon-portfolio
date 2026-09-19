'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ParticleNetwork } from './particle-network'

const NAME = 'ERIC..EVINA MBAHO'
const ROLE = 'Élève Ingénieur Télécom & Développeur'

function TypeLine({ start }: { start: boolean }) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (!start) return
    let i = 0
    const id = setInterval(() => {
      i++
      setText(ROLE.slice(0, i))
      if (i >= ROLE.length) clearInterval(id)
    }, 45)
    return () => clearInterval(id)
  }, [start])

  return (
    <span className="font-mono text-sm text-offwhite/80 md:text-base">
      {text}
      <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-phosphor" />
    </span>
  )
}

export function Hero({ ready }: { ready: boolean }) {
  const [typed, setTyped] = useState(false)

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden bg-grid pb-10 pt-32"
    >
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 md:px-12">
        <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-phosphor">
          <span className="h-2 w-2 animate-pulse rounded-full bg-phosphor shadow-[0_0_10px_#00e68c]" />
          Portfolio — 2026
        </div>

        <h1 className="font-display text-[clamp(3.5rem,17vw,15rem)] uppercase leading-[0.8] tracking-tight text-offwhite">
          <span className="sr-only">{NAME} — élève ingénieur des travaux de télécommunications & développeur réseaux</span>
          <span aria-hidden="true" className="flex flex-wrap">
            {NAME.split('').map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: '-120%', opacity: 0, rotate: -8 }}
                animate={ready ? { y: 0, opacity: 1, rotate: 0 } : {}}
                transition={{
                  delay: 0.15 + i * 0.09,
                  type: 'spring',
                  stiffness: 320,
                  damping: 12,
                  mass: 0.7,
                }}
                onAnimationComplete={() => {
                  if (i === NAME.length - 1) setTyped(true)
                }}
              >
                <motion.span
                  className="inline-block"
                  animate={
                    ready
                      ? {
                          textShadow: [
                            '0 0 0px rgba(0,230,140,0)',
                            '0 0 45px rgba(0,230,140,0.9)',
                            '0 0 0px rgba(0,230,140,0)',
                          ],
                        }
                      : {}
                  }
                  transition={{ delay: 1 + i * 0.05, duration: 1.2 }}
                >
                  {char}
                </motion.span>
              </motion.span>
            ))}
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <TypeLine start={typed} />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: typed ? 1 : 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xs text-sm leading-relaxed text-muted"
          >
            Je construis des réseaux fiables et des interfaces vivantes. Entre la couche
            physique et l'application, tout est signal.
          </motion.p>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:px-12">
        <span>France · GMT+1</span>
        <a href="#about" data-cursor="scroll" className="flex items-center gap-2 text-offwhite">
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="text-phosphor"
          >
            ↓
          </motion.span>
        </a>
        <span>Disponible pour missions</span>
      </div>
    </section>
  )
}
