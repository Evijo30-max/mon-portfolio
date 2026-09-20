'use client'

import { motion } from 'motion/react'
import { SERVICES } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Services() {
  return (
    <section className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-40">
      <SectionHeading index="07" label="Comment je peux aider" title="Services" />

      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative flex flex-col bg-charcoal p-8 transition-colors duration-500 hover:bg-charcoal-2 md:p-10"
          >
            <span className="font-mono text-xs text-amber">{service.id}</span>
            <h3 className="mt-6 font-display text-3xl uppercase tracking-tight text-offwhite transition-colors duration-300 group-hover:text-phosphor md:text-4xl">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">{service.text}</p>
            <ul className="mt-8 space-y-3 border-t border-border pt-6">
              {service.points.map((p) => (
                <li key={p} className="flex items-center gap-3 font-mono text-sm text-offwhite/80">
                  <span className="text-phosphor">→</span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
