'use client'

import { useState } from 'react'
import LogoLoop from '@/components/LogoLoop'

export default function HeroSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      window.location.href = `/success?email=${encodeURIComponent(email)}`
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0b011d]">
      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-32 pb-12 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-12 items-center text-center">
          {/* Headline */}
          <div className="flex flex-col items-center">
            <h1 className="heading-h1 mb-6">
              <span className="hidden md:inline">🚀</span> Building Websites
            </h1>
            <div className="max-w-[750px]">
              <p className="para text-lg leading-relaxed">
                <strong className="text-white">—</strong> that boost your brand&apos;s credibility, build trust, drive leads, and{' '}
                <span style={{ color: '#0062ff' }} className="font-semibold">
                  turn visitors into paying customers.
                </span>
              </p>
            </div>
          </div>

          {/* CTA Form & Buttons */}
          <div className="flex flex-col gap-5 w-full max-w-[480px] items-center">
            {/* Email form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="((?!@(gmail.com|yahoo.com|hotmail.com)).)*"
                title="Please use work email"
                className="form-field flex-1 rounded-full px-5"
              />
              <button type="submit" className="base-button whitespace-nowrap">
                Book a free call
              </button>
            </form>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="https://calendly.com/talkwithfaiz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="base-button-yellow"
              >
                📅 Schedule a Call
              </a>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-20 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <h2 className="text-lg font-semibold text-white/70 mb-8 tracking-wide px-6 text-center">
            Trusted by Leading Brands
          </h2>
          <LogoLoop
            logos={CLIENT_LOGOS}
            speed={80}
            direction="left"
            logoHeight={100}
            gap={40}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#0b011d"
            ariaLabel="Trusted brands"
          />
        </div>
      </div>
    </section>
  )
}

const CLIENT_LOGOS = [
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f5c656db6ac40bbab42_Group%201171275816.avif',
    alt: 'Client logo 1',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56fe24fcf89b38f955bdb_Group%201171275812.avif',
    alt: 'Client logo 2',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56fd6d2d3c9b602e35cd6_Group%201171275823.avif',
    alt: 'Client logo 3',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56fc254db9bb2d4c3f73b_Group%201171275822.avif',
    alt: 'Client logo 4',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f65d866fa4fb8177152_Group%201171275813.avif',
    alt: 'Client logo 5',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f5c19fd248b2c8ea7f5_Group%201171275818.avif',
    alt: 'Client logo 6',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f5f8c014fb2833897ea_Group%201171275821.avif',
    alt: 'Client logo 7',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f5cb4de1911f9b57ba7_Group%201171275819.avif',
    alt: 'Client logo 8',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f5c76f3082f69489c59_Group%201171275814.avif',
    alt: 'Client logo 9',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f5cca21d031b660fa7b_Group%201171275820.avif',
    alt: 'Client logo 10',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f5cc31de9c7b37120a8_Group%201171275817.avif',
    alt: 'Client logo 11',
  },
  {
    src: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67c56f5c5fae5215f4e58f0b_Group%201171275815.avif',
    alt: 'Client logo 12',
  },
]

