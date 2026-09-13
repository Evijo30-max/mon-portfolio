'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { TIMELINE } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="timeline" className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-40">
      <SectionHeading index="04" label="Le chemin parcouru" title="Parcours" />

      <div ref={ref} className="relative pl-8 md:pl-0">
        {/* center line */}
        <div className="absolute left-[3px] top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ height }}
            className="w-full bg-gradient-to-b from-phosphor to-amber shadow-[0_0_12px_#00e68c]"
          />
        </div>

        <div className="space-y-16 md:space-y-0">
          {TIMELINE.map((item, i) => {
            const left = i % 2 === 0
            return (
              <div
                key={item.year}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                  left ? '' : 'md:[&>*:first-child]:col-start-2'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`md:py-16 ${left ? 'md:text-right' : 'md:col-start-2'}`}
                >
                  <div className="font-display text-5xl text-phosphor/90 md:text-6xl">
                    {item.year}
                  </div>
                  <h3 className="mt-2 font-condensed text-xl font-medium uppercase tracking-wide text-offwhite">
                    {item.title}
                  </h3>
                  <div className="mt-1 font-mono text-xs uppercase tracking-widest text-amber">
                    {item.place}
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted md:ml-auto">
                    {item.text}
                  </p>
                </motion.div>

                {/* node */}
                <span className="absolute left-[-2px] top-1 h-3 w-3 rounded-full border-2 border-phosphor bg-charcoal md:left-1/2 md:top-16 md:-translate-x-1/2" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
