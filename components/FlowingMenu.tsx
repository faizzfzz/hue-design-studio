'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './FlowingMenu.css'

export interface FlowingMenuItem {
  link: string
  text: string
  image: string
  marqueeBg?: string
  marqueeFg?: string
}

interface FlowingMenuProps {
  items?: FlowingMenuItem[]
  speed?: number
  textColor?: string
  bgColor?: string
  marqueeBgColor?: string
  marqueeTextColor?: string
  borderColor?: string
}

export default function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#000000',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#000000',
  borderColor = 'rgba(255,255,255,0.1)',
}: FlowingMenuProps) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            link={item.link}
            text={item.text}
            image={item.image}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={item.marqueeBg ?? marqueeBgColor}
            marqueeTextColor={item.marqueeFg ?? marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  )
}

interface MenuItemProps {
  link: string
  text: string
  image: string
  speed: number
  textColor: string
  marqueeBgColor: string
  marqueeTextColor: string
  borderColor: string
}

function MenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
}: MenuItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const marqueeInnerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<gsap.core.Tween | null>(null)
  const [reps, setReps] = useState(4)

  const animDefaults = { duration: 0.6, ease: 'expo' }

  const distSq = (x: number, y: number, x2: number, y2: number) => {
    const dx = x - x2; const dy = y - y2
    return dx * dx + dy * dy
  }
  const closestEdge = (mx: number, my: number, w: number, h: number) =>
    distSq(mx, my, w / 2, 0) < distSq(mx, my, w / 2, h) ? 'top' : 'bottom'

  useEffect(() => {
    const calc = () => {
      if (!marqueeInnerRef.current) return
      const part = marqueeInnerRef.current.querySelector('.marquee__part') as HTMLElement
      if (!part) return
      const needed = Math.ceil(window.innerWidth / part.offsetWidth) + 2
      setReps(Math.max(4, needed))
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [text, image])

  useEffect(() => {
    const setup = () => {
      if (!marqueeInnerRef.current) return
      const part = marqueeInnerRef.current.querySelector('.marquee__part') as HTMLElement
      if (!part || part.offsetWidth === 0) return
      if (animRef.current) animRef.current.kill()
      animRef.current = gsap.to(marqueeInnerRef.current, {
        x: -part.offsetWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      })
    }
    const t = setTimeout(setup, 50)
    return () => { clearTimeout(t); if (animRef.current) animRef.current.kill() }
  }, [text, image, reps, speed])

  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const r = itemRef.current.getBoundingClientRect()
    const edge = closestEdge(e.clientX - r.left, e.clientY - r.top, r.width, r.height)

    // Open overflow BEFORE animation so images can float outside the row
    itemRef.current.style.overflow = 'visible'
    itemRef.current.style.zIndex = '10'

    gsap
      .timeline({ defaults: animDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
  }

  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const r = itemRef.current.getBoundingClientRect()
    const edge = closestEdge(e.clientX - r.left, e.clientY - r.top, r.width, r.height)

    const item = itemRef.current
    gsap
      .timeline({
        defaults: animDefaults,
        onComplete: () => {
          // Restore clip after marquee has fully exited
          item.style.overflow = 'hidden'
          item.style.zIndex = ''
        },
      })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
  }

  return (
    <div className="menu__item" ref={itemRef} style={{ borderColor }}>
      <a
        className="menu__item-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{ color: textColor }}
      >
        {text}
      </a>
      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {[...Array(reps)].map((_, idx) => (
              <div className="marquee__part" key={idx} style={{ color: marqueeTextColor }}>
                <span>{text}</span>
                <div
                  className="marquee__img"
                  style={{ backgroundImage: 'url(' + image + ')' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
