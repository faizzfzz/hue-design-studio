﻿'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import NavbarFloating from '@/components/NavbarFloating'
import Footer from '@/components/Footer'
import LogoLoop from '@/components/LogoLoop'
import SplitHeading from '@/components/SplitHeading'
import FadeUp from '@/components/FadeUp'

const Beams = dynamic(() => import('@/components/Beams'), { ssr: false })

const BASE = 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/'

// â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const PROJECTS = [
  {
    image: '/images/project-veris.avif',
    image2: BASE + '67da5113017310b7c54705b1_Frame%202147223292.avif',
    title: 'Veris',
    borderColor: '#7DD3FC',
    gradient: 'linear-gradient(145deg, #7DD3FC, #000)',
    url: 'https://www.getveris.com/',
  },
  {
    image: '/images/project-futurense.avif',
    image2: BASE + '67da52576655dc248a94ef49_Frame%202147223294.avif',
    title: 'Futurense',
    borderColor: '#7C3AED',
    gradient: 'linear-gradient(210deg, #7C3AED, #000)',
    url: 'https://futurense.com/',
  },
  {
    image: '/images/project-zoconut.avif',
    image2: BASE + '67da52baf341559e0fb3ccf9_Frame%202147223296.avif',
    title: 'Zoconut',
    borderColor: '#F97316',
    gradient: 'linear-gradient(225deg, #F97316, #000)',
    url: 'https://www.zoconut.com/',
  },
  {
    image: '/images/project-onepercentclub.avif',
    image2: BASE + '67da530e525c24160128f45c_Frame%202147223298.avif',
    title: '1% Club',
    borderColor: '#EAB308',
    gradient: 'linear-gradient(165deg, #EAB308, #000)',
    url: 'https://www.onepercentclub.io/',
  },
  {
    image: '/images/project-unscript.avif',
    image2: BASE + '67da537b58342fe236bf613e_Frame%202147223302.avif',
    title: 'Unscript',
    borderColor: '#6366F1',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #000 100%)',
    url: 'https://www.unscript.ai/',
  },
  {
    image: '/images/project-joindevops.avif',
    image2: BASE + '67da537d017310b7c5494918_Frame%202147223300.avif',
    title: 'Joindevops',
    borderColor: '#C084FC',
    gradient: 'linear-gradient(195deg, #C084FC, #000)',
    url: 'https://www.joindevops.com/',
  },
]

const TESTIMONIALS = [
  {
    name: 'Noor Islam',
    role: 'Head of Design',
    location: 'UK',
    avatar: BASE + '67dbd8fd8db6988b7be761fa_Group%201000002854.avif',
    logo: BASE + '67c56f5c656db6ac40bbab42_Group%201171275816.avif',
    text: "Working with Faiz has been an absolute pleasure. His expertise in web development and design is exceptional. He consistently meets deadlines, communicates effectively, and brings innovative solutions to the table.",
  },
  {
    name: 'Steffy Emmanuel',
    role: 'Marketing Manager',
    location: 'US',
    avatar: BASE + '67dbcc788f177489162937f8_1741244641672.avif',
    logo: BASE + '67c56f5cca21d031b660fa7b_Group%201171275820.avif',
    text: "Hue Design Studio has been a fantastic partner in enhancing our website. They understand SaaS website needs and deliver with precision, making our collaboration smooth and productive.",
  },
  {
    name: 'Ritwika Chowdhury',
    role: 'Founder',
    location: 'AU',
    avatar: BASE + '67dbcc781195859db32bd0a3_1741495987360.avif',
    logo: BASE + '67c56fe24fcf89b38f955bdb_Group%201171275812.avif',
    text: "Hue revamped our website with a fast-loading, visually stunning result. Custom solutions tailored perfectly to our needs. Delivered ahead of schedule â€” exactly what we needed.",
  },
]

const CLIENT_LOGOS = [
  { src: BASE + '67c56f5c656db6ac40bbab42_Group%201171275816.avif', alt: 'Client 1' },
  { src: BASE + '67c56fe24fcf89b38f955bdb_Group%201171275812.avif', alt: 'Client 2' },
  { src: BASE + '67c56fd6d2d3c9b602e35cd6_Group%201171275823.avif', alt: 'Client 3' },
  { src: BASE + '67c56fc254db9bb2d4c3f73b_Group%201171275822.avif', alt: 'Client 4' },
  { src: BASE + '67c56f65d866fa4fb8177152_Group%201171275813.avif', alt: 'Client 5' },
  { src: BASE + '67c56f5c19fd248b2c8ea7f5_Group%201171275818.avif', alt: 'Client 6' },
  { src: BASE + '67c56f5f8c014fb2833897ea_Group%201171275821.avif', alt: 'Client 7' },
  { src: BASE + '67c56f5cb4de1911f9b57ba7_Group%201171275819.avif', alt: 'Client 8' },
]

const FAQ_ITEMS = [
  {
    q: 'Do you work with agencies as a white-label partner?',
    a: "Yes â€” this is my primary offering. I work as a silent Webflow dev under your brand. Your client never knows I exist. I'm happy to sign an NDA before we start.",
  },
  {
    q: "What's your typical turnaround time?",
    a: "A single landing page takes 5â€“7 days. A full website (5â€“8 pages + CMS) takes 3â€“4 weeks. Because I'm in India, I'm often building while you sleep â€” which means faster progress.",
  },
  {
    q: 'How do you handle revisions?',
    a: 'Every project includes 2 rounds of revisions after the first build. I share Loom walkthrough videos at each stage so feedback is clear and quick.',
  },
  {
    q: 'Do you need designs, or do you design too?',
    a: "I can work both ways. If you have Figma designs, I'll build pixel-perfect. If you need design too, I handle the full Webflow design + build from scratch.",
  },
  {
    q: "What's your payment structure?",
    a: '50% upfront to kick off, 50% on final delivery. For retainers, it\'s a flat monthly fee billed at the start of each month.',
  },
  {
    q: 'Are you available to communicate in my timezone?',
    a: "I overlap with US mornings and UK afternoons for calls. Day-to-day async via Slack or email. I send Loom updates so you're always in the loop without scheduling calls.",
  },
  {
    q: 'Have you signed NDAs before?',
    a: "Yes, regularly. White-label work requires confidentiality and I take that seriously. Send me your NDA and I'll sign before anything starts.",
  },
]

// â”€â”€â”€ COMPONENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4"
      style={{ color: '#0062ff' }}>
      {children}
    </p>
  )
}

function HeroNew() {
  const [email, setEmail] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) window.location.href = `/success?email=${encodeURIComponent(email)}`
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">

      {/* Beams background */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={4}
          beamHeight={20}
          beamNumber={13}
          lightColor="#78acff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={10}
        />
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #000000 100%)' }} />

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-36 pb-16 px-6 max-w-5xl mx-auto w-full text-center">
        {/* Tag */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
            style={{ borderColor: 'rgba(0,98,255,0.3)', color: '#79aaf7', background: 'rgba(0,98,255,0.08)' }}>
            ðŸŒ White-Label Webflow Partner Â· India
          </span>
        </div>

        {/* Headline */}
        <h1 className="heading-h1 mb-6 max-w-4xl mx-auto">
          Pixel-Perfect Webflow Builds for Agencies That Can&apos;t Slow Down
        </h1>

        {/* Sub-headline */}
        <p className="para text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          I partner with US, UK &amp; AU agencies as their silent Webflow dev.
          Clean builds, Loom updates, on-time delivery â€” while you sleep.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/work-links" target="_blank" className="base-button text-base px-8">
            See My Work â†’
          </Link>
          <a href="https://calendly.com/talkwithfaiz/30min" target="_blank" rel="noopener noreferrer"
            className="base-button-yellow">
            ðŸ“… Book a Free Call
          </a>
        </div>

        {/* Social proof line */}
        <p className="para text-sm text-white/50">
          Trusted by 20+ brands across the US, UK &amp; Australia
        </p>

        {/* Logo scroll */}
        <div className="mt-16 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-6 text-center">
            Worked with teams at
          </p>
          <LogoLoop
            logos={CLIENT_LOGOS}
            speed={80}
            direction="left"
            logoHeight={100}
            gap={0}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Worked with teams at"
          />
        </div>
      </div>
    </section>
  )
}

function PainSection() {
  const pains = [
    { icon: 'ðŸ“‹', text: 'Your Webflow projects are piling up â€” but you have no dedicated dev.' },
    { icon: 'ðŸ’¸', text: "Local devs cost too much. Junior ones make a mess you have to fix." },
    { icon: 'ðŸ‘»', text: 'Freelancers miss deadlines or vanish mid-project.' },
    { icon: 'ðŸ”', text: "You need someone who just gets it, stays invisible, and delivers clean." },
  ]

  return (
    <section className="section-padding dot-bg relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <SectionTag>For Agency Owners</SectionTag>
          <SplitHeading as="h2" className="heading-h2 mb-4">Sound familiar?</SplitHeading>
          <p className="para max-w-xl mx-auto">
            If you run a web agency and any of these hit close to home â€” read on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pains.map((p, i) => (
            <div key={i} className="grid-card p-7 flex gap-5 items-start">
              <span className="text-3xl flex-shrink-0">{p.icon}</span>
              <p className="para text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="para text-base">
            <span className="text-white font-semibold">That&apos;s exactly why agencies work with me.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

function ServicesNew() {
  const services = [
    {
      icon: 'ðŸ¤',
      title: 'White-Label Webflow Builds',
      desc: 'Full Webflow sites built cleanly under your brand. I stay invisible â€” your client never knows I exist. NDA-ready from day one.',
      tag: 'For Agencies',
      span: 'md:col-span-2',
    },
    {
      icon: 'ðŸš€',
      title: 'SaaS Landing Pages',
      desc: 'High-converting landing pages for growth-stage startups. CMS-ready, fast-loading, and built to rank.',
      tag: 'For Startups',
      span: '',
    },
    {
      icon: 'ðŸ”§',
      title: 'Webflow CMS & Retainers',
      desc: 'Ongoing dev support for agencies and founders. Updates, new pages, fixes â€” handled while you focus on clients.',
      tag: 'Ongoing Support',
      span: '',
    },
  ]

  return (
    <section className="section-padding dot-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <FadeUp><SectionTag>What I Do</SectionTag></FadeUp>
          <SplitHeading as="h2" className="heading-h2 mb-4">Here&apos;s how I help</SplitHeading>
          <FadeUp delay={0.1}><p className="para max-w-lg">Three focused services. Each one designed to solve a specific problem.</p></FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className={`${s.span} grid-card grid-card-purple service-card group relative rounded-2xl p-8 flex flex-col gap-5 min-h-[220px]`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(0,98,255,0.07) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(0,98,255,0.1)', color: '#79aaf7' }}>{s.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="para text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessNew() {
  const steps = [
    { n: '01', title: 'Discovery Call', desc: '30 minutes. We talk about your project, timeline, and goals. No commitment needed.' },
    { n: '02', title: 'Proposal & Kickoff', desc: 'Clear scope doc, delivery timeline, and 50% deposit to get started.' },
    { n: '03', title: 'Build & Review', desc: 'I build in sprints and share Loom walkthrough videos. You give feedback, I refine.' },
    { n: '04', title: 'Deliver & Support', desc: 'Final Loom handoff, full transfer, and 7 days of support after launch.' },
  ]

  return (
    <section id="process-x" className="section-padding dot-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionTag>How We Work</SectionTag>
          <SplitHeading as="h2" className="heading-h2 mb-4">How we work together</SplitHeading>
          <p className="para max-w-2xl">
            No surprises. No chasing updates. Just a clean, async-friendly process from first call to final launch.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-6 ${i === 0 ? 'process-step-highlighted' : 'process-step'}`}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ background: 'rgba(0,98,255,0.12)', color: '#79aaf7', border: '1px solid rgba(0,98,255,0.25)' }}>
                {step.n}
              </div>
              <div className="flex-1">
                <h3 className="heading-h3 text-white mb-1">{step.title}</h3>
                <p className="para text-sm">{step.desc}</p>
              </div>
              {i === 0 && (
                <a href="https://calendly.com/talkwithfaiz/30min" target="_blank" rel="noopener noreferrer"
                  className="base-button-yellow flex-shrink-0 w-fit">
                  Book a discovery call
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioNew() {
  const [activeProject, setActiveProject] = useState(null as null | number)

  return (
    <section id="projects-x" className="section-padding dot-bg">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <FadeUp><SectionTag>Recent Work</SectionTag></FadeUp>
          <SplitHeading as="h2" className="heading-h2 mb-3">Projects I&apos;ve shipped</SplitHeading>
          <FadeUp delay={0.1}><p className="para max-w-md">Real sites. Real clients. Real results.</p></FadeUp>
        </div>

        {/* Desktop hover list */}
        <div className="hidden md:block portfolio-list">
          {PROJECTS.map((project, i) => {
            const active = activeProject === i
            const faded = activeProject !== null && !active
            return (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-row"
                onMouseEnter={() => setActiveProject(i)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <span className="portfolio-row-num"
                  style={{ color: active ? project.borderColor : faded ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.25)' }}>
                  0{i + 1}
                </span>

                <span className="portfolio-row-title"
                  style={{ color: active ? project.borderColor : faded ? 'rgba(255,255,255,0.15)' : '#fff' }}>
                  {project.title}
                </span>

                <div className="portfolio-row-preview"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active
                      ? 'translateY(-50%) translateX(0px) scale(1)'
                      : 'translateY(-50%) translateX(18px) scale(0.95)',
                  }}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="280px" />
                  <div className="absolute inset-0 opacity-25 pointer-events-none"
                    style={{ background: project.gradient }} />
                </div>

                <span className="portfolio-row-arrow"
                  style={{
                    color: active ? project.borderColor : faded ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.25)',
                    transform: active ? 'translate(4px,-4px)' : 'translate(0,0)',
                  }}>
                  &#x2197;
                </span>
              </a>
            )
          })}
        </div>

        {/* Mobile card grid */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-mobile-card"
              style={{ borderColor: project.borderColor + '28' }}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 60%)' }} />
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: project.borderColor }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <h3 className="text-white font-bold text-xl leading-none">{project.title}</h3>
                <span className="text-base" style={{ color: project.borderColor }}>&#x2197;</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <FadeUp>
            <Link href="https://linktr.ee/faizzfz" target="_blank" rel="noopener noreferrer"
              className="base-button px-8">
              See All Projects &#x2192;
            </Link>
          </FadeUp>
        </div>

      </div>
    </section>
  )
}

function WhyMeSection() {
  const reasons = [
    { icon: 'ðŸŒ', title: 'India Timezone Advantage', desc: 'I build while US, UK & AU clients sleep. Projects move faster without extra calls.' },
    { icon: 'ðŸ”’', title: 'White-Label Ready', desc: 'Silent partner by default. I sign NDAs, stay invisible, and your client never sees my name.' },
    { icon: 'ðŸŽ¬', title: 'Async-Friendly', desc: 'Loom updates at every stage. Slack-ready. No micromanagement, no unnecessary calls.' },
    { icon: 'âœ‚ï¸', title: 'Clean, Handoff-Ready Code', desc: 'No spaghetti builds. Your team or your client can jump in and take over anytime.' },
    { icon: 'â±ï¸', title: 'On-Time, Every Time', desc: '100% of projects delivered on schedule. Deadline is a commitment, not a suggestion.' },
    { icon: 'ðŸ’¬', title: 'Direct Communication', desc: 'No middlemen. You talk directly to the person building. Fast responses, clear updates.' },
  ]

  return (
    <section id="why-us-x" className="section-padding dot-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-14">
          <SectionTag>Why Me</SectionTag>
          <SplitHeading as="h2" className="heading-h2 mb-4">Why agencies choose me</SplitHeading>
          <p className="para max-w-lg">
            Over any other freelancer or agency â€” here&apos;s what makes the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div key={i} className="why-card flex flex-col gap-4">
              <span className="text-3xl">{r.icon}</span>
              <h3 className="text-white font-bold text-base">{r.title}</h3>
              <p className="para text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsNew() {
  return (
    <section className="section-padding dot-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <SectionTag>Client Stories</SectionTag>
          <SplitHeading as="h2" className="heading-h2 mb-4">What clients say</SplitHeading>
          <p className="para max-w-xl mx-auto">
            From agency owners to startup founders â€” here&apos;s what working with me looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card-new flex flex-col gap-5 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(0,98,255,0.08) 0%, transparent 70%)' }} />

              <div className="flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-yellow-400 text-base">â˜…</span>
                ))}
              </div>

              <p className="para text-sm leading-relaxed flex-1 relative z-10">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/10 relative z-10">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-blue-500/20">
                  <Image src={t.avatar} alt={t.name} width={44} height={44}
                    className="object-cover w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white text-sm leading-tight">{t.name}</p>
                    <span className="text-white/30 text-xs">Â· {t.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/40 text-xs">{t.role} @</span>
                    <Image src={t.logo} alt="Company" width={56} height={18}
                      className="h-[18px] w-auto opacity-70" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'From $500',
      desc: 'Single landing page, fully responsive, CMS-ready.',
      features: ['1-page Webflow build', 'Mobile-optimised', 'Basic SEO setup', 'Loom walkthrough on delivery', '7-day support'],
      cta: 'Get a Quote',
      highlight: false,
    },
    {
      name: 'Growth',
      price: 'From $1,200',
      desc: 'Full website for SaaS startups and growing brands.',
      features: ['5â€“8 pages + CMS', 'Animations & interactions', 'Full SEO setup', '2 revision rounds', '7-day support', 'Loom handoff video'],
      cta: 'Get a Quote',
      highlight: true,
    },
    {
      name: 'Agency Partner',
      price: "Let's talk",
      desc: 'Monthly retainer for agencies who need a reliable dev partner.',
      features: ['White-label builds', 'NDA included', 'Slack / async comms', 'Flexible scope', 'Priority turnaround'],
      cta: 'Book a Call',
      highlight: false,
    },
  ]

  return (
    <section className="section-padding dot-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionTag>Investment</SectionTag>
          <SplitHeading as="h2" className="heading-h2 mb-4">Simple, transparent pricing</SplitHeading>
          <p className="para max-w-xl mx-auto">
            All projects include responsive design, Loom walkthroughs, and a clean handoff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`relative rounded-2xl p-8 flex flex-col gap-6 ${plan.highlight ? '' : 'grid-card'}`}
              style={plan.highlight ? {
                background: 'linear-gradient(135deg, rgba(0,98,255,0.12) 0%, rgba(0,98,255,0.04) 100%)',
                border: '1px solid rgba(0,98,255,0.35)',
                borderRadius: '16px',
              } : {}}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold px-4 py-1.5 rounded-full"
                    style={{ background: '#0062ff', color: '#fff' }}>Most Popular</span>
                </div>
              )}
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">{plan.name}</p>
                <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                <p className="para text-sm">{plan.desc}</p>
              </div>
              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-sm text-white/70">
                    <span style={{ color: '#0062ff' }}>âœ“</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/talkwithfaiz/30min" target="_blank" rel="noopener noreferrer"
                className={plan.highlight ? 'base-button justify-center text-center' : 'base-button-yellow justify-center text-center'}>
                {plan.cta} â†’
              </a>
            </div>
          ))}
        </div>

        <p className="text-center para text-xs text-white/40 mt-8">
          Not sure which fits? Book a free call â€” I&apos;ll tell you exactly what you need.
        </p>
      </div>
    </section>
  )
}

function FAQNew() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="FAQ-x" className="section-padding dot-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <SectionTag>FAQs</SectionTag>
          <SplitHeading as="h2" className="heading-h2 mb-4">Frequently Asked Questions</SplitHeading>
          <p className="para">Every question agency owners ask before reaching out â€” answered.</p>
        </div>

        <div className="flex flex-col">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-b border-white/10 last:border-0">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={openIndex === i}>
                <p className="font-semibold text-white group-hover:text-blue-300 transition-colors text-base pr-4">
                  {item.q}
                </p>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300"
                  style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  <Image src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d86c353a52e11b22c160f0_add.svg"
                    alt="" width={16} height={16} />
                </div>
              </button>
              <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: openIndex === i ? '300px' : '0px' }}>
                <p className="para text-sm pb-5 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="form" className="section-padding dot-bg relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Availability badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
            style={{ borderColor: 'rgba(0,98,255,0.3)', color: '#79aaf7', background: 'rgba(0,98,255,0.08)' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            Available for new projects
          </span>
        </div>

        <SectionTag>Ready to Start?</SectionTag>
        <SplitHeading as="h2" className="heading-h2 mb-5">Let&apos;s build something great</SplitHeading>
        <p className="para text-lg mb-4 max-w-xl mx-auto">
          I&apos;m currently accepting new agency partners and project inquiries.
        </p>
        <p className="para text-sm text-white/40 mb-10">
          No commitment. Just a conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://calendly.com/talkwithfaiz/30min" target="_blank" rel="noopener noreferrer"
            className="base-button text-base px-10 justify-center">
            ðŸ“… Book a Free Call
          </a>
          <a href="https://api.whatsapp.com/send?phone=918882690600" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white/80 text-sm font-semibold hover:border-white/40 hover:text-white transition-all">
            ðŸ’¬ WhatsApp Me
          </a>
        </div>

        <p className="para text-xs text-white/30 mt-8">
          Trusted by agencies and startups across the US, UK &amp; Australia.
        </p>
      </div>
    </section>
  )
}

// â”€â”€â”€ PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function UpdatedHomePage() {
  return (
    <main className="bg-[#000000] text-white overflow-x-hidden">
      <NavbarFloating />
      <HeroNew />
      <PainSection />
      <ServicesNew />
      <ProcessNew />
      <PortfolioNew />
      <WhyMeSection />
      <TestimonialsNew />
      <PricingSection />
      <FAQNew />
      <FinalCTA />
      <Footer />
    </main>
  )
}

