'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

interface LogoItem {
  src: string
  alt: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  hoverSpeed?: number
  scaleOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
}

export default function LogoLoop({
  logos,
  speed = 80,
  direction = 'left',
  logoHeight = 80,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#000000',
  ariaLabel = 'Logo loop',
}: LogoLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)
  const isHoveredRef = useRef(false)
  const currentSpeedRef = useRef(speed)
  const [trackWidth, setTrackWidth] = useState(0)

  // Duplicate logos for seamless loop
  const repeated = [...logos, ...logos, ...logos]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Measure the width of one set of logos (1/3 of total since we tripled)
    const measure = () => {
      const totalWidth = track.scrollWidth / 3
      setTrackWidth(totalWidth)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [logos, gap, logoHeight])

  useEffect(() => {
    if (trackWidth === 0) return

    const track = trackRef.current
    if (!track) return

    const tick = (time: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time
      const delta = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time

      // Ease speed toward target
      const targetSpeed = isHoveredRef.current ? hoverSpeed : speed
      currentSpeedRef.current += (targetSpeed - currentSpeedRef.current) * Math.min(delta * 8, 1)

      const move = currentSpeedRef.current * delta
      if (direction === 'left') {
        offsetRef.current -= move
      } else {
        offsetRef.current += move
      }

      // Reset offset to loop seamlessly
      if (direction === 'left' && offsetRef.current <= -trackWidth) {
        offsetRef.current += trackWidth
      } else if (direction === 'right' && offsetRef.current >= 0) {
        offsetRef.current -= trackWidth
      }

      track.style.transform = `translateX(${offsetRef.current}px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    // Start at correct initial offset for right direction
    if (direction === 'right') {
      offsetRef.current = -trackWidth
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      lastTimeRef.current = null
    }
  }, [trackWidth, speed, direction, hoverSpeed])

  const handleMouseEnter = () => { isHoveredRef.current = true }
  const handleMouseLeave = () => { isHoveredRef.current = false }

  return (
    <div
      className="logo-loop-wrapper"
      aria-label={ariaLabel}
      style={
        fadeOut
          ? {
              maskImage: `linear-gradient(to right, transparent 0%, ${fadeOutColor === 'transparent' ? 'transparent' : 'black'} 6%, ${fadeOutColor === 'transparent' ? 'transparent' : 'black'} 94%, transparent 100%)`,
              WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)`,
              overflow: 'hidden',
            }
          : { overflow: 'hidden' }
      }
    >
      <div
        ref={trackRef}
        className="logo-loop-track"
        style={{ gap: `${gap}px` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {repeated.map((logo, i) => (
          <div
            key={i}
            className="logo-loop-item"
            style={{
              transition: scaleOnHover ? 'transform 0.3s ease' : undefined,
            }}
            onMouseEnter={scaleOnHover ? (e) => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.1)' } : undefined}
            onMouseLeave={scaleOnHover ? (e) => { (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)' } : undefined}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={280}
              height={logoHeight}
              className="w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{
                height: `${logoHeight}px`,
                mixBlendMode: 'luminosity',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
