'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { SKILLS } from '@/lib/data'
import { SectionHeading } from './section-heading'

const GROUP_LABEL: Record<string, string> = {
  network: 'Réseaux',
  code: 'Développement',
  systems: 'Outils & Systèmes',
}

const GROUP_COLOR: Record<string, string> = {
  network: '#00e68c',
  code: '#ffb020',
  systems: '#f2f2ed',
}

export function SkillsMatrix() {
  const [hovered, setHovered] = useState<string | null>(null)

  const active = hovered ? SKILLS.find((s) => s.id === hovered) : null
  const isLit = (id: string) => {
    if (!active) return true
    return active.id === id || active.related.includes(id)
  }

  return (
    <section id="skills" className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-40">
      <SectionHeading index="02" label="Ce que je maîtrise" title="Compétences" />

      <div className="mb-10 flex flex-wrap gap-6">
        {Object.entries(GROUP_LABEL).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: GROUP_COLOR[key] }} />
            <span className="text-muted">{label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill, i) => {
          const lit = isLit(skill.id)
          const color = GROUP_COLOR[skill.group]
          return (
            <motion.button
              key={skill.id}
              data-cursor="link"
              onMouseEnter={() => setHovered(skill.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(skill.id)}
              onBlur={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
              className="group relative rounded-full border px-5 py-3 font-mono text-sm uppercase tracking-wide transition-all duration-300"
              style={{
                borderColor: lit ? color : 'rgba(242,242,237,0.12)',
                color: lit ? (active && active.id === skill.id ? '#0a0a0b' : color) : 'rgba(242,242,237,0.25)',
                background: active && active.id === skill.id ? color : 'transparent',
                boxShadow: active && active.id === skill.id ? `0 0 30px ${color}55` : 'none',
              }}
            >
              {skill.label}
            </motion.button>
          )
        })}
      </div>

      <div className="mt-10 h-6 font-mono text-sm text-muted">
        {active ? (
          <span>
            <span className="text-phosphor">&gt;</span> {active.label} — connecté à{' '}
            <span className="text-offwhite">{active.related.length}</span> compétences
          </span>
        ) : (
          <span className="text-muted/60">
            <span className="text-phosphor">&gt;</span> survole une compétence pour voir ses connexions
          </span>
        )}
      </div>
    </section>
  )
}
