'use client'

import { motion } from 'motion/react'
import { SOCIALS } from '@/lib/data'
import { Magnetic } from './magnetic'
import { ScrambleText } from './scramble-text'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-grid px-6 py-28 md:px-12 md:py-44"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-phosphor/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-4 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-phosphor">
          <span className="h-2 w-2 animate-pulse rounded-full bg-phosphor" />
          Connexion établie
        </div>

        <div className="text-center">
          <ScrambleText
            as="h2"
            text="TRAVAILLONS"
            className="block font-display text-[clamp(3rem,13vw,12rem)] uppercase leading-[0.85] tracking-tight text-offwhite"
          />
          <span className="block font-display text-[clamp(3rem,13vw,12rem)] uppercase leading-[0.85] tracking-tight text-stroke-phosphor">
            ENSEMBLE
          </span>
        </div>

        <div className="mt-14 flex flex-col items-center gap-8">
          <Magnetic strength={0.5}>
            <a
              href="mailto:evijoevijo371@gmail.com"
              data-cursor="envoyer"
              className="group relative flex items-center gap-3 rounded-full bg-phosphor px-10 py-5 font-mono text-sm uppercase tracking-widest text-charcoal transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(0,230,140,0.5)]"
            >
              evijoevijo371@gmail.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                data-cursor="ouvrir"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-full border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-300 hover:border-phosphor hover:text-phosphor"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
