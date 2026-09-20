'use client'

import { motion } from 'motion/react'
import { LAB_ITEMS } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Lab() {
  return (
    <section id="lab" className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-40">
      <SectionHeading index="06" label="Expérimentations" title="Le Lab" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LAB_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            data-cursor="wip"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-charcoal-2 p-6"
          >
            <div className="absolute inset-0 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.12] bg-grid" />
            <div className="flex h-full flex-col justify-between">
              <span className="w-fit rounded-full border border-phosphor/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-phosphor">
                {item.tag}
              </span>
              <div>
                <h3 className="font-condensed text-2xl font-medium uppercase tracking-wide text-offwhite transition-colors duration-300 group-hover:text-phosphor">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </div>
            <motion.div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-phosphor/10 blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut' }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
