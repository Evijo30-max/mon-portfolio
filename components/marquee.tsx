import { MARQUEE_WORDS } from '@/lib/data'

export function Marquee() {
  const row = [...MARQUEE_WORDS, ...MARQUEE_WORDS]
  return (
    <section className="relative border-y border-border bg-charcoal-2 py-6 md:py-8">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-display text-4xl uppercase tracking-tight text-offwhite md:text-6xl">
              {word}
            </span>
            <span className="text-3xl text-phosphor md:text-5xl">—</span>
          </span>
        ))}
      </div>
    </section>
  )
}
