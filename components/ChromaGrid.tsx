'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './ChromaGrid.css'

export interface ChromaItem {
  image: string
  image2?: string
  title: string
  subtitle?: string
  handle?: string
  location?: string
  borderColor?: string
  gradient?: string
  url?: string
}

interface ChromaGridProps {
  items?: ChromaItem[]
  className?: string
  radius?: number
  columns?: number
  rows?: number
  damping?: number
  fadeOut?: number
  ease?: string
}

export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
}: ChromaGridProps) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const fadeRef = useRef<HTMLDivElement>(null)
  const setX = useRef<((v: number) => void) | null>(null)
  const setY = useRef<((v: number) => void) | null>(null)
  const pos = useRef({ x: 0, y: 0 })

  const data = items?.length ? items : []

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    setX.current = gsap.quickSetter(el, '--x', 'px') as (v: number) => void
    setY.current = gsap.quickSetter(el, '--y', 'px') as (v: number) => void
    const { width, height } = el.getBoundingClientRect()
    pos.current = { x: width / 2, y: height / 2 }
    setX.current(pos.current.x)
    setY.current(pos.current.y)
  }, [])

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x)
        setY.current?.(pos.current.y)
      },
      overwrite: true,
    })
  }

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = rootRef.current!.getBoundingClientRect()
    moveTo(e.clientX - r.left, e.clientY - r.top)
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true })
  }

  const handleLeave = () => {
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true })
  }

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--cols': columns,
          '--rows': rows,
        } as React.CSSProperties
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={
            {
              '--card-border': c.borderColor || 'transparent',
              '--card-gradient': c.gradient,
              cursor: c.url ? 'pointer' : 'default',
            } as React.CSSProperties
          }
        >
          <div className="chroma-img-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          {c.image2 && (
            <div className="chroma-img2-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image2} alt={`${c.title} preview`} loading="lazy" />
            </div>
          )}
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.url && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ddc3236980be3d22017b72_open_in_new_24dp_FFFFFF_FILL0_wght200_GRAD200_opsz24.svg"
                alt="Open"
                width={18}
                height={18}
                className="chroma-open-icon"
              />
            )}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  )
}

export default ChromaGrid
