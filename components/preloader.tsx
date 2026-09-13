'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          setGone(true)
          setTimeout(onDone, 700)
        }, 500)
      }
      setCount(current)
    }, 90)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-charcoal"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="w-[min(560px,80vw)]">
            <svg viewBox="0 0 560 120" className="w-full" aria-hidden="true">
              <motion.path
                d="M0 60 L80 60 L100 20 L130 100 L160 40 L185 80 L210 60 L560 60"
                fill="none"
                stroke="#00e68c"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ pathLength: count / 100, opacity: 1 }}
                transition={{ ease: 'linear', duration: 0.15 }}
                style={{ filter: 'drop-shadow(0 0 6px #00e68c)' }}
              />
            </svg>
            <div className="mt-6 flex items-end justify-between font-mono">
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                signal_acquisition
              </span>
              <span className="font-display text-5xl tabular-nums text-offwhite md:text-7xl">
                {String(count).padStart(3, '0')}
                <span className="text-phosphor">%</span>
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
