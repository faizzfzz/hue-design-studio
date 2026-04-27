'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const BASE = 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/'

const TESTIMONIALS = [
  {
    name: 'Noor Islam',
    role: 'Head of Design',
    avatar: BASE + '67dbd8fd8db6988b7be761fa_Group%201000002854.avif',
    logo: BASE + '67c56f5c656db6ac40bbab42_Group%201171275816.avif',
    text: "Working with Faiz has been an absolute pleasure. His expertise in web development and design is exceptional. He consistently meets deadlines, communicates effectively, and brings innovative solutions to the table. A true professional!",
  },
  {
    name: 'Steffy Emmanuel',
    role: 'Marketing manager',
    avatar: BASE + '67dbcc788f177489162937f8_1741244641672.avif',
    logo: BASE + '67c56f5cca21d031b660fa7b_Group%201171275820.avif',
    text: "Hue Design Studio has been a fantastic partner in enhancing our website. They understand SaaS website needs and deliver with precision, making our collaboration smooth and productive.",
  },
  {
    name: 'Ritwika Chowdhury',
    role: 'Founder of',
    avatar: BASE + '67dbcc781195859db32bd0a3_1741495987360.avif',
    logo: BASE + '67c56fe24fcf89b38f955bdb_Group%201171275812.avif',
    text: "Hue Design Studio revamped our website with strategic updates and a fast-loading, visually stunning site. Their custom solutions were tailored perfectly to our needs.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="section-padding bg-[#0b011d]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="heading-h2 mb-4">Words of Appreciation</h2>
          <p className="para max-w-2xl">
            We prioritize collaboration and clear communication to understand your needs fully.
            Our efficient process ensures timely, high-quality results that align with your
            vision and goals.
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="min-w-full">
                <div className="testimonial-card max-w-2xl">
                  {/* Author */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-500/30">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white font-montserrat text-lg">{t.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="para text-sm">{t.role}</p>
                        <Image
                          src={t.logo}
                          alt="Company"
                          width={60}
                          height={20}
                          className="h-5 w-auto opacity-80"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="para leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-purple-500 w-6' : 'bg-white/30'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
