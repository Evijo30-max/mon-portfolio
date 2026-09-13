'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: mouse.x, y: mouse.y }
    let raf = 0

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY
      setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
      }
      const el = (e.target as HTMLElement)?.closest?.('[data-cursor]') as HTMLElement | null
      if (el) {
        setActive(true)
        setLabel(el.dataset.cursor || '')
      } else {
        setActive(false)
        setLabel('')
      }
    }

    function loop() {
      ring.x += (mouse.x - ring.x) * 0.18
      ring.y += (mouse.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-phosphor"
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-phosphor/70 transition-[width,height,background-color] duration-200 ease-out"
        style={{
          width: active ? 76 : 34,
          height: active ? 76 : 34,
          marginLeft: active ? -38 : -17,
          marginTop: active ? -38 : -17,
          backgroundColor: active ? 'rgba(0,230,140,0.08)' : 'transparent',
        }}
      >
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-widest text-phosphor">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
