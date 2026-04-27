'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PROJECTS = [
  {
    name: 'Veris',
    image:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5113017310b7c54705b1_Frame%202147223292.avif',
    url: 'https://www.getveris.com/',
  },
  {
    name: 'Futurense',
    image:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da52576655dc248a94ef49_Frame%202147223294.avif',
    url: 'https://futurense.com/',
  },
  {
    name: 'Zoconut',
    image:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da52baf341559e0fb3ccf9_Frame%202147223296.avif',
    url: 'https://www.zoconut.com/',
  },
  {
    name: '1% club',
    image:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da530e525c24160128f45c_Frame%202147223298.avif',
    url: 'https://www.onepercentclub.io/',
  },
  {
    name: 'Unscript',
    image:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da537b58342fe236bf613e_Frame%202147223302.avif',
    url: 'https://www.unscript.ai/',
  },
  {
    name: 'Joindevops',
    image:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da537d017310b7c5494918_Frame%202147223300.avif',
    url: 'https://www.joindevops.com/',
  },
  {
    name: 'Assembly',
    image:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5451546eab36bdfeee52_Frame%202147223304.avif',
    url: 'https://www.joinassembly.com/',
  },
  {
    name: 'Quickreply',
    image:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5452ac80062ccd556c54_Frame%202147223306.avif',
    url: 'https://www.quickreply.ai/new-year-2025',
  },
]

export default function ProjectsSlider() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? PROJECTS.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c === PROJECTS.length - 1 ? 0 : c + 1))
  }, [])

  // Autoplay
  useEffect(() => {
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="projects-x" className="relative section-padding bg-[#0b011d]">
      {/* Blob */}
      <div className="blob-animate is-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="heading-h2 mb-4">Featured Projects</h2>
            <p className="para max-w-md">
              Explore our work that showcases creativity, innovation, and technical excellence.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="text-center">
              <div className="heading-h2 text-white font-bold">5+</div>
              <div className="para text-sm">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="heading-h2 text-white font-bold">20+</div>
              <div className="para text-sm">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="slider-container rounded-2xl overflow-hidden">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {PROJECTS.map((project, i) => (
              <div key={i} className="slider-slide relative aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top select-none"
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
                <div className="project-overlay">
                  <p className="text-white font-bold text-3xl md:text-4xl font-montserrat drop-shadow-lg">
                    {project.name}
                  </p>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website-link w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ddc3236980be3d22017b72_open_in_new_24dp_FFFFFF_FILL0_wght200_GRAD200_opsz24.svg"
                      alt="Open link"
                      width={24}
                      height={24}
                      className="website-link-icon"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <Image
              src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ad99294e168b338b49ed23_arrow_forward_ios%20(1).svg"
              alt="Prev"
              width={20}
              height={20}
              className="opacity-80"
            />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <Image
              src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ad99294e168b338b49ed22_arrow_forward_ios.svg"
              alt="Next"
              width={20}
              height={20}
              className="opacity-80"
            />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-white w-6' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
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
