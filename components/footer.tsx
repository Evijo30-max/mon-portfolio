'use client'

import { useEffect, useState } from 'react'

export function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function update() {
      setTime(
        new Date().toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'Europe/Paris',
        }),
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-border px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="font-display text-2xl uppercase tracking-tight text-offwhite">
          RESO<span className="text-phosphor">.</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          <span>© {new Date().getFullYear()} — Tous droits réservés</span>
          <span className="hidden md:inline text-border">|</span>
          <span>
            Paris <span className="text-phosphor tabular-nums">{time || '--:--:--'}</span>
          </span>
          <span className="hidden md:inline text-border">|</span>
          <span>Construit avec du signal</span>
        </div>
      </div>
    </footer>
  )
}
