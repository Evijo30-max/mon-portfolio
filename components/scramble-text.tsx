'use client'

import { useEffect, useRef, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________ABCDEF0123456789'

export function ScrambleText({
  text,
  className,
  as: Tag = 'span',
}: {
  text: string
  className?: string
  as?: 'span' | 'h2' | 'h3' | 'p'
}) {
  const ref = useRef<HTMLElement>(null)
  const [output, setOutput] = useState(text)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)

    let frame = 0
    let raf = 0
    function run() {
      const total = 22
      function tick() {
        let out = ''
        let done = 0
        for (let i = 0; i < text.length; i++) {
          const revealAt = i * (total / text.length) * 0.6
          if (frame >= revealAt + 8 || text[i] === ' ') {
            out += text[i]
            done++
          } else if (frame >= revealAt) {
            out += CHARS[Math.floor(Math.random() * CHARS.length)]
          } else {
            out += ' '
          }
        }
        setOutput(out)
        frame++
        if (done < text.length) {
          raf = requestAnimationFrame(tick)
        } else {
          setOutput(text)
        }
      }
      tick()
    }

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [text])

  return (
    <Tag ref={ref as never} className={className}>
      {output}
    </Tag>
  )
}
