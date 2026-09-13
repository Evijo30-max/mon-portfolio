'use client'

import { ScrambleText } from './scramble-text'
import { Reveal } from './reveal'

export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string
  label: string
  title: string
}) {
  return (
    <div className="mb-12 md:mb-20">
      <Reveal>
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-phosphor">
          <span className="text-amber">{index}</span>
          <span className="h-px w-8 bg-phosphor/50" />
          <span className="text-muted">{label}</span>
        </div>
      </Reveal>
      <ScrambleText
        as="h2"
        text={title}
        className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-offwhite sm:text-5xl md:text-7xl"
      />
    </div>
  )
}
