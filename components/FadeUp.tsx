'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

export default function FadeUp({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = 'translateY(0)'
          el.style.opacity = '1'
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: 'translateY(28px)',
        opacity: 0,
        transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
