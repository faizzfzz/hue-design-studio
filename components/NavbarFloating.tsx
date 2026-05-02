'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Projects', id: 'projects-x' },
  { label: 'Why Me',   id: 'why-us-x'  },
  { label: 'Process',  id: 'process-x' },
  { label: 'FAQs',     id: 'FAQ-x'     },
]

export default function NavbarFloating() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Desktop ─────────────────────────────────────────────── */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center px-8 pt-5 max-w-7xl mx-auto">

        {/* Left: Logo — fades out on scroll, stays in layout for centering */}
        <div
          className="transition-all duration-500 ease-in-out"
          style={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? 'none' : 'auto' }}
        >
          <Link href="/">
            <Image
              src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d3791068ab514bd16e4514_Hue%20Logo.svg"
              alt="Hue Design Studio"
              width={90}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Center: Pill nav */}
        <div
          className="flex items-center rounded-full transition-all duration-500 ease-in-out"
          style={{
            background: scrolled ? 'rgba(11,1,29,0.82)' : 'rgba(255,255,255,0.06)',
            border: scrolled ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.1)',
            backdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
            WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
            padding: scrolled ? '4px 6px' : '4px 6px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.65)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >
              {link.label}
            </button>
          ))}

          {/* CTA slides in when scrolled */}
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxWidth: scrolled ? '180px' : '0px',
              opacity: scrolled ? 1 : 0,
            }}
          >
            <a
              href="https://calendly.com/talkwithfaiz/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold ml-1 mr-1 px-4 py-2 rounded-full transition-colors duration-200"
              style={{
                border: '1px solid rgba(0,98,255,0.45)',
                color: '#79aaf7',
                background: 'rgba(0,98,255,0.1)',
              }}
            >
              Book a Call
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M0 5h7" />
                <path d="M4 1l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: CTA — fades out on scroll, stays in layout for centering */}
        <div
          className="flex justify-end transition-all duration-500 ease-in-out"
          style={{ opacity: scrolled ? 0 : 1, pointerEvents: scrolled ? 'none' : 'auto' }}
        >
          <a
            href="https://calendly.com/talkwithfaiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="base-button-yellow"
          >
            📅 Book a Free Call
          </a>
        </div>
      </div>

      {/* ── Mobile ──────────────────────────────────────────────── */}
      <div
        className="md:hidden flex items-center justify-between px-5 py-4 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(11,1,29,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <Link href="/">
          <Image
            src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d3791068ab514bd16e4514_Hue%20Logo.svg"
            alt="Hue Design Studio"
            width={80}
            height={28}
            className="h-7 w-auto"
          />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          <Image
            src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d2d2d19a2968605db34ae2_menu-outline.svg"
            alt="Menu"
            width={24}
            height={24}
            className="invert"
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-6 pt-2"
          style={{ background: 'rgba(11,1,29,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-base font-medium text-white/70 hover:text-white transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://calendly.com/talkwithfaiz/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="base-button-yellow w-fit mt-2"
            >
              📅 Book a Free Call
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
