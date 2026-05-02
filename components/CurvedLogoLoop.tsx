'use client'

import { useRef, useEffect } from 'react'

const BASE = 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/'

const LOGOS = [
  { src: BASE + '67c56f5c656db6ac40bbab42_Group%201171275816.avif', alt: 'Client 1' },
  { src: BASE + '67c56fe24fcf89b38f955bdb_Group%201171275812.avif', alt: 'Client 2' },
  { src: BASE + '67c56fd6d2d3c9b602e35cd6_Group%201171275823.avif', alt: 'Client 3' },
  { src: BASE + '67c56fc254db9bb2d4c3f73b_Group%201171275822.avif', alt: 'Client 4' },
  { src: BASE + '67c56f65d866fa4fb8177152_Group%201171275813.avif', alt: 'Client 5' },
  { src: BASE + '67c56f5c19fd248b2c8ea7f5_Group%201171275818.avif', alt: 'Client 6' },
  { src: BASE + '67c56f5f8c014fb2833897ea_Group%201171275821.avif', alt: 'Client 7' },
  { src: BASE + '67c56f5cb4de1911f9b57ba7_Group%201171275819.avif', alt: 'Client 8' },
  { src: BASE + '67c56f5c76f3082f69489c59_Group%201171275814.avif', alt: 'Client 9' },
  { src: BASE + '67c56f5cca21d031b660fa7b_Group%201171275820.avif', alt: 'Client 10' },
  { src: BASE + '67c56f5cc31de9c7b37120a8_Group%201171275817.avif', alt: 'Client 11' },
  { src: BASE + '67c56f5c5fae5215f4e58f0b_Group%201171275815.avif', alt: 'Client 12' },
]

const LOGO_W = 110
const LOGO_H = 38

interface Props {
  speed?: number
  curveAmount?: number
  interactive?: boolean
}

export default function CurvedLogoLoop({ speed = 1.2, curveAmount = 220, interactive = true }: Props) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const imageRefs = useRef<(SVGImageElement | null)[]>([])
  const offsetRef = useRef(0)
  const dragRef = useRef(false)
  const lastXRef = useRef(0)
  const velRef = useRef(0)
  const dirRef = useRef<'left' | 'right'>('left')

  const pathD = `M-200,75 Q720,${75 + curveAmount} 1640,75`

  useEffect(() => {
    const pathEl = pathRef.current
    const svgEl = svgRef.current
    if (!pathEl || !svgEl) return

    let frameId: number
    let animating = false

    const tryInit = () => {
      const pathLen = pathEl.getTotalLength()

      // Wait until the browser has computed the path geometry
      if (pathLen === 0) {
        frameId = requestAnimationFrame(tryInit)
        return
      }

      const n = LOGOS.length
      const spacing = pathLen / n

      const animate = () => {
        if (!dragRef.current) {
          const delta = dirRef.current === 'right' ? speed : -speed
          offsetRef.current = ((offsetRef.current + delta) % pathLen + pathLen) % pathLen
        }

        imageRefs.current.forEach((el, i) => {
          if (!el) return
          const dist = ((i * spacing + offsetRef.current) % pathLen + pathLen) % pathLen
          const pt = pathEl.getPointAtLength(dist)
          el.setAttribute('x', String(pt.x - LOGO_W / 2))
          el.setAttribute('y', String(pt.y - LOGO_H / 2))
        })

        // Reveal SVG only after first positions are set
        if (!animating) {
          svgEl.style.visibility = 'visible'
          animating = true
        }

        frameId = requestAnimationFrame(animate)
      }

      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(tryInit)
    return () => cancelAnimationFrame(frameId)
  }, [speed, curveAmount])

  const onPointerDown = (e: React.PointerEvent) => {
    if (!interactive) return
    dragRef.current = true
    lastXRef.current = e.clientX
    velRef.current = 0
    ;(e.currentTarget as Element).setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!interactive || !dragRef.current || !pathRef.current) return
    const dx = e.clientX - lastXRef.current
    lastXRef.current = e.clientX
    velRef.current = dx
    const pathLen = pathRef.current.getTotalLength()
    offsetRef.current = ((offsetRef.current + dx * 2.5) % pathLen + pathLen) % pathLen
  }

  const onPointerUp = () => {
    if (!interactive) return
    dragRef.current = false
    dirRef.current = velRef.current > 0 ? 'right' : 'left'
  }

  return (
    <div
      className="w-full overflow-hidden select-none"
      style={{ cursor: interactive ? 'grab' : 'default' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1440 150"
        className="w-full block"
        style={{ aspectRatio: '1440 / 150', userSelect: 'none', visibility: 'hidden' }}
      >
        <defs>
          <linearGradient id="logo-fade-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="black" stopOpacity="0" />
            <stop offset="7%"   stopColor="black" stopOpacity="1" />
            <stop offset="93%"  stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </linearGradient>
          <mask id="logo-fade-mask">
            <rect x="0" y="0" width="1440" height="150" fill="url(#logo-fade-grad)" />
          </mask>
        </defs>

        {/* Path lives outside defs so the browser computes its geometry */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="none"
          style={{ pointerEvents: 'none' }}
        />

        <g mask="url(#logo-fade-mask)">
          {LOGOS.map((logo, i) => (
            <image
              key={i}
              ref={(el) => { imageRefs.current[i] = el as SVGImageElement | null }}
              href={logo.src}
              width={LOGO_W}
              height={LOGO_H}
              preserveAspectRatio="xMidYMid meet"
              style={{ opacity: 0.75 }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
