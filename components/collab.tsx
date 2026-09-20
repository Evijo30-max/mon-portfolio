'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { COLLAB } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Collab() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="collab" className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-40">
      <SectionHeading index="04" label="Où mon expertise à été sollicité" title="Collaborations" />

      <div className="border-t border-border">
        {COLLAB.map((collab, i) => {
          const isHovered = hovered === collab.id
          return (
            <motion.a
              key={collab.id}
              href="#contact"
              data-cursor="voir"
              onMouseEnter={() => setHovered(collab.id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative flex items-center justify-between gap-6 border-b border-border py-6 md:py-10"
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="font-mono text-xs text-phosphor md:text-sm">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-tight text-offwhite transition-colors duration-300 group-hover:text-phosphor sm:text-5xl md:text-7xl">
                  {collab.title}
                </h3>
              </div>

              <div className="hidden shrink-0 flex-col items-end gap-1 text-right md:flex">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  {collab.category}
                </span>
                <span className="font-mono text-xs text-amber">{collab.year}</span>
              </div>

              {/* floating preview */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="pointer-events-none absolute right-[18%] top-1/2 z-20 hidden aspect-[16/10] w-72 -translate-y-1/2 overflow-hidden rounded-md border border-phosphor/30 shadow-2xl lg:block"
                  >
                    <Image
                      src={collab.image || '/placeholder.svg'}
                      alt={collab.title}
                      fill
                      className="object-cover"
                      sizes="288px"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          )
        })}
      </div>

      {/* mobile tags / description grid */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {COLLAB.map((collab) => (
          <motion.div
            key={collab.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group overflow-hidden rounded-lg border border-border bg-charcoal-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={collab.image || '/placeholder.svg'}
                alt={collab.title}
                fill
                className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-xl uppercase tracking-tight text-offwhite">
                  {collab.title}
                </h4>
                <span className="font-mono text-xs text-amber">{collab.year}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{collab.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {collab.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-phosphor"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
