'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const posRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }

      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const { x, y } = posRef.current
        el.style.background = `
          radial-gradient(180px circle at ${x}px ${y}px,
            rgba(255,255,255,0.055) 0%,
            transparent 80%
          ),
          radial-gradient(500px circle at ${x}px ${y}px,
            rgba(255,255,255,0.022) 0%,
            transparent 70%
          )
        `
        rafRef.current = null
      })
    }

    const onLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      el.style.background = 'none'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 100,
      }}
    />
  )
}
