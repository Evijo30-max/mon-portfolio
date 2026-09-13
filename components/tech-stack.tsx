'use client'

import { motion } from 'motion/react'
import { TECH_STACK } from '@/lib/data'

export function TechStack() {
  return (
    <section className="relative mx-auto max-w-[1600px] px-6 pb-24 md:px-12 md:pb-40">
      <div className="overflow-hidden rounded-lg border border-border bg-charcoal-2">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-amber" />
          <span className="h-3 w-3 rounded-full bg-phosphor" />
          <span className="ml-3 font-mono text-xs text-muted">reso@homelab: ~/stack</span>
        </div>
        <div className="space-y-3 p-5 font-mono text-sm md:p-8">
          {TECH_STACK.map((line, i) => (
            <motion.div
              key={line.cmd}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-phosphor">➜</span>
                <span className="text-amber">~</span>
                <span className="text-offwhite">{line.cmd}</span>
              </div>
              <div className="pl-6 text-muted">{line.out}</div>
            </motion.div>
          ))}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-phosphor">➜</span>
            <span className="text-amber">~</span>
            <span className="inline-block h-4 w-2.5 animate-pulse bg-phosphor" />
          </div>
        </div>
      </div>
    </section>
  )
}
