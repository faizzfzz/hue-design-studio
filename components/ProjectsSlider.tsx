'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PROJECTS = [
  { name: 'Veris', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5113017310b7c54705b1_Frame%202147223292.avif', url: 'https://www.getveris.com/' },
  { name: 'Futurense', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da52576655dc248a94ef49_Frame%202147223294.avif', url: 'https://futurense.com/' },
  { name: 'Zoconut', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da52baf341559e0fb3ccf9_Frame%202147223296.avif', url: 'https://www.zoconut.com/' },
  { name: '1% Club', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da530e525c24160128f45c_Frame%202147223298.avif', url: 'https://www.onepercentclub.io/' },
  { name: 'Unscript', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da537b58342fe236bf613e_Frame%202147223302.avif', url: 'https://www.unscript.ai/' },
  { name: 'Joindevops', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da537d017310b7c5494918_Frame%202147223300.avif', url: 'https://www.joindevops.com/' },
  { name: 'Assembly', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5451546eab36bdfeee52_Frame%202147223304.avif', url: 'https://www.joinassembly.com/' },
  { name: 'Quickreply', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5452ac80062ccd556c54_Frame%202147223306.avif', url: 'https://www.quickreply.ai/new-year-2025' },
]

export default function ProjectsSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const thumbsRef = useRef<HTMLDivElement>(null)

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? PROJECTS.length - 1 : c - 1)), [])
  const next = useCallback(() => setCurrent((c) => (c === PROJECTS.length - 1 ? 0 : c + 1)), [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [next, paused])

  // Scroll active thumb into view
  useEffect(() => {
    const el = thumbsRef.current?.children[current] as HTMLElement
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [current])

  return (
    <section id="projects-x" className="relative section-padding bg-[#0b011d]">
      <div className="blob-animate is-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="highlight-text mb-3">Our Work</p>
            <h2 className="heading-h2 mb-3">Featured Projects</h2>
            <p className="para max-w-md">
              Websites that captivate, convert, and scale — built for leading brands.
            </p>
          </div>
          <div className="flex gap-10 flex-shrink-0">
            <div className="text-center">
              <div className="heading-h2 text-white font-bold">5+</div>
              <div className="para text-xs mt-1">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="heading-h2 text-white font-bold">20+</div>
              <div className="para text-xs mt-1">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Main slide */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: '16 / 7' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top select-none"
                draggable={false}
                sizes="90vw"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(11,1,29,0.85) 0%, rgba(11,1,29,0.1) 50%, transparent 100%)' }}
          />

          {/* Project name + link */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex items-end justify-between">
            <div>
              <p className="text-white/60 text-sm font-poppins mb-1">
                {String(current + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
              </p>
              <p className="text-white font-bold text-4xl md:text-5xl font-montserrat drop-shadow-lg leading-tight">
                {PROJECTS[current].name}
              </p>
            </div>
            <Link
              href={PROJECTS[current].url}
              target="_blank"
              rel="noopener noreferrer"
              className="website-link flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold font-montserrat transition-all hover:scale-105"
            >
              Visit site
              <Image
                src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ddc3236980be3d22017b72_open_in_new_24dp_FFFFFF_FILL0_wght200_GRAD200_opsz24.svg"
                alt=""
                width={16}
                height={16}
                className="website-link-icon"
              />
            </Link>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-white/30"
            aria-label="Previous"
          >
            <Image src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ad99294e168b338b49ed23_arrow_forward_ios%20(1).svg" alt="" width={18} height={18} className="opacity-80" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/40 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-white/30"
            aria-label="Next"
          >
            <Image src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ad99294e168b338b49ed22_arrow_forward_ios.svg" alt="" width={18} height={18} className="opacity-80" />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div
          ref={thumbsRef}
          className="flex gap-3 mt-4 overflow-x-auto pb-1 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROJECTS.map((project, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                i === current
                  ? 'ring-2 ring-purple-500 opacity-100 scale-[1.03]'
                  : 'opacity-40 hover:opacity-70'
              }`}
              style={{ width: 120, height: 68 }}
              aria-label={project.name}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top"
                sizes="120px"
              />
              <div className="absolute inset-0 flex items-end p-1.5">
                <span className="text-white text-[10px] font-semibold font-montserrat drop-shadow leading-none">
                  {project.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* See more */}
        <div className="mt-10 flex justify-center">
          <Link
            href="https://linktr.ee/faizzfz"
            target="_blank"
            rel="noopener noreferrer"
            className="base-button text-base px-8 py-3"
          >
            See more Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
