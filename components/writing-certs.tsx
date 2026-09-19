'use client'

import { motion } from 'motion/react'
import { POSTS, CERTS, EDUCATION } from '@/lib/data'
import { Reveal } from './reveal'

export function WritingCerts() {
  return (
    <section className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-40">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Writing */}
        <div>
          <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-phosphor">
            <span className="text-amber">07</span>
            <span className="h-px w-8 bg-phosphor/50" />
            <span className="text-muted">Notes & articles</span>
          </div>
          <div className="border-t border-border">
            {POSTS.map((post, i) => (
              <motion.a
                key={post.title}
                href="#contact"
                data-cursor="lire"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex items-center justify-between gap-4 border-b border-border py-6"
              >
                <div>
                  <h3 className="font-condensed text-xl font-medium uppercase tracking-wide text-offwhite transition-colors group-hover:text-phosphor md:text-2xl">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex gap-4 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <span className="text-amber">{post.tag}</span>
                    <span>{post.date}</span>
                    <span>{post.read}</span>
                  </div>
                </div>
                <span className="text-2xl text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-phosphor">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <div className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Formation
            </div>
            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <Reveal key={edu.school} delay={i * 0.2}>
                  <div className="flex flex-col gap-1 border-l-2 border-phosphor/40 pl-5">
                    <span className="font-mono text-xs text-amber">{edu.period}</span>
                    <h4 className="font-condensed text-lg uppercase tracking-wide text-offwhite">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-muted">{edu.school}</span>
                    <p className="mt-1 text-sm leading-relaxed text-muted/80">{edu.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-phosphor">
            <span className="text-amber">08</span>
            <span className="h-px w-8 bg-phosphor/50" />
            <span className="text-muted">Certifications</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {CERTS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="group flex flex-col justify-between gap-6 rounded-lg border border-border bg-charcoal-2 p-6 transition-colors hover:border-phosphor/40"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-2xl uppercase tracking-tight text-offwhite">
                    {cert.name}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      cert.status === 'Certifié'
                        ? 'bg-phosphor shadow-[0_0_8px_#00e68c]'
                        : cert.status === 'En cours'
                          ? 'bg-amber'
                          : 'bg-muted'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">{cert.org}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest ${
                      cert.status === 'Certifié'
                        ? 'text-phosphor'
                        : cert.status === 'En cours'
                          ? 'text-amber'
                          : 'text-muted'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
