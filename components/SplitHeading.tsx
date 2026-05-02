'use client'

import { useEffect, useRef, useState, ElementType } from 'react'

interface Props {
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  children: string
}

export default function SplitHeading({ as: Tag = 'h2', className = '', children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const words = children.split(' ')

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em', verticalAlign: 'bottom' }}>
          <span
            style={{
              display: 'inline-block',
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              opacity: visible ? 1 : 0,
              transition: `transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s, opacity 0.45s ease ${i * 0.07}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
