'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FEATURED_PROJECTS = [
  {
    name: 'Quick Reply | Whatsapp Automation for Business',
    href: 'https://www.quickreply.ai/',
    logo: 'https://www.google.com/s2/favicons?domain=quickreply.ai&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Unscript AI | Create AI Videos, Virtual Influencers',
    href: 'https://www.unscript.ai/',
    logo: 'https://www.google.com/s2/favicons?domain=unscript.ai&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Assembly | Employee Engagement & Recognition',
    href: 'https://joinassembly.com/',
    logo: 'https://www.google.com/s2/favicons?domain=joinassembly.com&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Veris - Workplace Management SaaS',
    href: 'https://www.getveris.com/',
    logo: 'https://www.google.com/s2/favicons?domain=getveris.com&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Zoconut - Nutrition Business Management',
    href: 'https://www.zoconut.com/',
    logo: 'https://www.google.com/s2/favicons?domain=zoconut.com&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Futurense | Godfather of Talent',
    href: 'https://futurense.com/',
    logo: 'https://www.google.com/s2/favicons?domain=futurense.com&sz=64',
    logoBg: 'white',
  },
  {
    name: 'EYLO',
    href: 'https://www.eylo.ai/',
    logo: 'https://www.google.com/s2/favicons?domain=eylo.ai&sz=64',
    logoBg: 'white',
  },
]

const MORE_PROJECTS = [
  {
    name: 'Meritshot',
    href: 'https://meritshot.com/',
    logo: 'https://www.google.com/s2/favicons?domain=meritshot.com&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Eliya',
    href: 'https://go.eliya.io/',
    logo: 'https://www.google.com/s2/favicons?domain=eliya.io&sz=64',
    logoBg: 'white',
  },
  {
    name: 'RevvGrowth',
    href: 'https://www.revvgrowth.com/',
    logo: 'https://www.google.com/s2/favicons?domain=revvgrowth.com&sz=64',
    logoBg: 'white',
  },
  {
    name: 'onepercent',
    href: 'https://www.onepercentclub.io/',
    logo: 'https://www.google.com/s2/favicons?domain=onepercentclub.io&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Stamp Burgers',
    href: 'https://www.stampburgers.ch/',
    logo: 'https://www.google.com/s2/favicons?domain=stampburgers.ch&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Trade pro Elite',
    href: 'https://trade-pro-elite.webflow.io/',
    logo: 'https://www.google.com/s2/favicons?domain=trade-pro-elite.webflow.io&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Cloudeagle',
    href: 'https://cloudeagleai.webflow.io/',
    logo: 'https://www.google.com/s2/favicons?domain=cloudeagle.ai&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Weingut Kastanienbaum',
    href: 'https://www.weingut-kastanienbaum.ch/',
    logo: 'https://www.google.com/s2/favicons?domain=weingut-kastanienbaum.ch&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Growth stone',
    href: 'https://growth-stone.webflow.io/',
    logo: 'https://www.google.com/s2/favicons?domain=growth-stone.webflow.io&sz=64',
    logoBg: 'white',
  },
  {
    name: 'Reda.one',
    href: 'https://www.reda.one/',
    logo: 'https://www.google.com/s2/favicons?domain=reda.one&sz=64',
    logoBg: 'white',
  },
  {
    name: 'JoinDevops',
    href: 'https://www.joindevops.com/',
    logo: 'https://www.google.com/s2/favicons?domain=joindevops.com&sz=64',
    logoBg: 'white',
  },
]

function ProjectLink({ name, href, logo }: { name: string; href: string; logo: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-pill group flex items-center gap-4 w-full px-4 py-3 rounded-full bg-white text-[#0b011d] font-semibold text-sm md:text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_0_2px_#4d65ff]"
      style={{
        border: '1.5px solid transparent',
        backgroundImage:
          'linear-gradient(white, white), linear-gradient(135deg, #4d65ff 0%, #7e3dff 50%, #4d65ff 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={name} width={28} height={28} className="object-contain" />
      </span>
      <span className="flex-1 text-left">{name}</span>
      <svg className="flex-shrink-0 opacity-30 group-hover:opacity-60 transition-opacity" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
    </a>
  )
}

export default function WorkLinksPage() {
  const [showMore, setShowMore] = useState(false)

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #0d1a3a 0%, #060b1a 60%, #0b011d 100%)' }}
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 items-start">

        {/* Left — Profile card */}
        <div
          className="w-full md:w-64 flex-shrink-0 rounded-3xl p-6 flex flex-col items-center gap-4 text-center sticky top-8"
          style={{
            background: 'linear-gradient(160deg, #111827 0%, #0d1230 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Logo */}
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg">
            <Image
              src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d3791068ab514bd16e4514_Hue%2520Logo.svg"
              alt="Hue Design Studio"
              width={80}
              height={80}
              className="object-contain p-1"
            />
          </div>

          <div>
            <h1 className="text-white font-bold text-lg leading-tight">Hue Design Studio</h1>
            <div className="flex items-center justify-center gap-1 mt-1">
              <span className="text-gray-400 text-xs">Certified</span>
              <Image
                src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ac3af1ffceaa0540cf0fe3/webflow-logo.svg"
                alt="Webflow"
                width={56}
                height={14}
                onError={() => {}}
                className="hidden"
              />
              <span className="text-[#4353ff] font-bold text-xs">Webflow</span>
              <span className="text-gray-400 text-xs">Partner</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Person */}
          <div className="flex items-center gap-3 w-full">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-700">
              <Image
                src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ac3af1ffceaa0540cf0fe3/faiz-photo.jpg"
                alt="Faizz Ahmed"
                width={40}
                height={40}
                className="object-cover"
                onError={() => {}}
              />
            </div>
            <span className="text-white font-semibold text-sm flex-1 text-left">Faizz Ahmed</span>
            <a
              href="https://www.linkedin.com/in/faizzfz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#0077b5] flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* CTA buttons */}
          <a
            href="https://api.whatsapp.com/send?phone=918882690600"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
          >
            <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Connect on Whatsapp
          </a>

          <Link
            href="/success"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #4353ff, #7e3dff)' }}
          >
            <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Schedule a Free Call
          </Link>
        </div>

        {/* Right — Project links */}
        <div className="flex-1 flex flex-col gap-3">
          {FEATURED_PROJECTS.map((p) => (
            <ProjectLink key={p.href} {...p} />
          ))}

          {/* Show More toggle */}
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="self-center mt-2 px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm hover:text-white hover:border-white/40 transition-all"
            >
              Show More...
            </button>
          ) : (
            MORE_PROJECTS.map((p) => (
              <ProjectLink key={p.href} {...p} />
            ))
          )}
        </div>
      </div>
    </main>
  )
}
