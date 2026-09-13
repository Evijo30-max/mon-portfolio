'use client'

import { motion } from 'motion/react'
import { TESTIMONIALS } from '@/lib/data'

export function Testimonials() {
  return (
    <section className="relative border-y border-border bg-charcoal-2">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
        <div className="mb-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-phosphor">
          <span className="text-amber">//</span> retours
        </div>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="font-display text-6xl leading-none text-phosphor/40">&ldquo;</span>
              <blockquote className="mt-2 text-lg leading-relaxed text-offwhite">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-condensed text-lg uppercase tracking-wide text-offwhite">
                  {t.author}
                </div>
                <div className="font-mono text-xs text-muted">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
