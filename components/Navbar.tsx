'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  return (
    <div
      id="nav-base"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d3791068ab514bd16e4514_Hue%20Logo.svg"
            alt="Hue Design Studio"
            width={100}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#projects-x" className="nav-link" onClick={(e) => handleAnchorClick(e, 'projects-x')}>
            Projects
          </a>
          <a href="#why-us-x" className="nav-link" onClick={(e) => handleAnchorClick(e, 'why-us-x')}>
            Why us?
          </a>
          <a href="#process-x" className="nav-link" onClick={(e) => handleAnchorClick(e, 'process-x')}>
            Process
          </a>
          <a href="#FAQ-x" className="nav-link" onClick={(e) => handleAnchorClick(e, 'FAQ-x')}>
            FAQs&nbsp;&nbsp;
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/success"
            target="_blank"
            className="base-button"
          >
            <span>Get started</span>
            <Image
              src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ac3fb2b798b8258cb6412f_Img.svg"
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d2d2d19a2968605db34ae2_menu-outline.svg"
            alt="Menu"
            width={28}
            height={28}
            className="invert"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b011d] border-t border-white/10 px-6 pb-6">
          <nav className="flex flex-col gap-5 pt-5">
            <a
              href="#projects-x"
              className="nav-link text-base"
              onClick={(e) => handleAnchorClick(e, 'projects-x')}
            >
              Projects
            </a>
            <a
              href="#why-us-x"
              className="nav-link text-base"
              onClick={(e) => handleAnchorClick(e, 'why-us-x')}
            >
              Why us?
            </a>
            <a
              href="#process-x"
              className="nav-link text-base"
              onClick={(e) => handleAnchorClick(e, 'process-x')}
            >
              Process
            </a>
            <a
              href="#FAQ-x"
              className="nav-link text-base"
              onClick={(e) => handleAnchorClick(e, 'FAQ-x')}
            >
              FAQs
            </a>
            <Link href="/success" target="_blank" className="base-button w-fit mt-2">
              <span>Get started</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
