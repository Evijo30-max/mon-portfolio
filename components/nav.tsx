'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NAV_LINKS } from '@/lib/data'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] mix-blend-difference">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-12">
          <a
            href="#top"
            data-cursor="top"
            className="font-display text-xl uppercase tracking-tight text-white"
          >
            RESO<span className="text-phosphor">.</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            data-cursor={open ? 'close' : 'menu'}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <span className="hidden sm:inline">{open ? 'Fermer' : 'Menu'}</span>
            <span className="relative flex h-4 w-7 flex-col justify-between">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-full bg-white"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[2px] w-full bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-full bg-white"
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] flex flex-col justify-center bg-charcoal-2 bg-grid px-6 md:px-12"
          >
            <ul className="mx-auto w-full max-w-[1600px]">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href} className="border-t border-border last:border-b">
                  <a
                    href={link.href}
                    data-cursor="open"
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-6 py-4 md:py-6"
                  >
                    <motion.span
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="font-mono text-xs text-phosphor"
                    >
                      {link.index}
                    </motion.span>
                    <span className="overflow-hidden">
                      <motion.span
                        initial={{ y: '110%' }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="block font-display text-5xl uppercase leading-none tracking-tight text-offwhite transition-colors duration-300 group-hover:text-phosphor md:text-8xl"
                      >
                        {link.label}
                      </motion.span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
