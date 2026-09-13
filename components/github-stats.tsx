'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { GITHUB_STATS } from '@/lib/data'

function Counter({ value }: { value: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          const duration = 1400
          const start = performance.now()
          function tick(now: number) {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.floor(eased * value))
            if (p < 1) requestAnimationFrame(tick)
            else setDisplay(value)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.6 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString('fr-FR')}
    </span>
  )
}

// deterministic pseudo-random for contribution grid (avoids hydration mismatch)
function level(i: number) {
  const v = (Math.sin(i * 12.9898) * 43758.5453) % 1
  const abs = Math.abs(v)
  if (abs > 0.82) return 4
  if (abs > 0.62) return 3
  if (abs > 0.4) return 2
  if (abs > 0.2) return 1
  return 0
}

const CELL_COLORS = [
  'rgba(242,242,237,0.05)',
  'rgba(0,230,140,0.25)',
  'rgba(0,230,140,0.45)',
  'rgba(0,230,140,0.7)',
  'rgba(0,230,140,1)',
]

export function GithubStats() {
  const cells = Array.from({ length: 7 * 26 }, (_, i) => i)

  return (
    <section className="relative border-y border-border bg-charcoal-2">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-phosphor">
              <span className="text-amber">//</span> activité git
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {GITHUB_STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl text-offwhite md:text-6xl">
                    <Counter value={s.value} />
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
              1 240 contributions cette année
            </div>
            <div className="no-scrollbar overflow-x-auto">
              <div
                className="grid w-max grid-flow-col gap-1"
                style={{ gridTemplateRows: 'repeat(7, minmax(0, 1fr))' }}
              >
                {cells.map((i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 26) * 0.012, duration: 0.3 }}
                    className="h-3 w-3 rounded-[3px] md:h-3.5 md:w-3.5"
                    style={{ background: CELL_COLORS[level(i)] }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end gap-2 font-mono text-[10px] text-muted">
              <span>moins</span>
              {CELL_COLORS.map((c, i) => (
                <span key={i} className="h-3 w-3 rounded-[3px]" style={{ background: c }} />
              ))}
              <span>plus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
