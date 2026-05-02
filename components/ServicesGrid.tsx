import Image from 'next/image'

const BASE = 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/'

const SERVICES = [
  {
    title: 'Custom, Responsive-First Design',
    desc: 'Every pixel crafted for desktop, tablet, and mobile. We build sites that look stunning and feel native on every screen.',
    span: 'col-span-1 md:col-span-2',
    images: {
      ipad: BASE + '67ac786b291dde73a721da9e_679726c38c0e8c47861551e8_Group%2051%201.avif',
      phone: BASE + '67ac788ebb3dd367d14ab2e6_679726c38c0e8c47861551f9_Group%2054%201.avif',
      desktop: BASE + '67ac78b65c74ebe1e376b8df_679726c38c0e8c47861551ef_Group%2055%201.avif',
    },
    accent: 'green',
  },
  {
    title: 'Seriously Secure',
    desc: 'Enterprise-grade security built in — from SSL to sanitized inputs and hardened configs.',
    span: 'col-span-1',
    icon: BASE + '67ac78f09c9a93e810fe432b_679726c38c0e8c4786155209_lock%201.avif',
    accent: 'purple',
  },
  {
    title: 'Lightning-Fast Load Times',
    desc: 'Optimised assets, lazy loading, and edge delivery ensure sub-2s first paints.',
    span: 'col-span-1',
    icon: BASE + '67ac79c3c6ca576ba0c25fc9_679726c38c0e8c47861551d9_Vector%202%201.avif',
    accent: 'purple',
  },
  {
    title: 'Seamless Integrations',
    desc: 'HubSpot, Calendly, WhatsApp, GTM — we wire up any third-party tool your business needs.',
    span: 'col-span-1',
    icon: BASE + '67ac7af5753caf3ac2113b60_679726c38c0e8c47861551f8_Group%2031%201.avif',
    accent: 'purple',
  },
  {
    title: 'SEO-Driven Architecture',
    desc: 'Structured data, Core Web Vitals, and semantic HTML — built to rank from day one.',
    span: 'col-span-1',
    icon: BASE + '67ac7acdc5a448da717f98a5_679726c38c0e8c47861551ec_Group%2032%201.avif',
    accent: 'purple',
  },
  {
    title: 'Powerful CMS',
    desc: 'Edit content with ease. We set up headless CMS or Webflow CMS so your team stays in control.',
    span: 'col-span-1',
    icon: BASE + '67ac7de018fa127c3b522de3_679726c38c0e8c47861551df_cms%201.avif',
    accent: 'purple',
  },
  {
    title: 'Capable. Diligent. Experienced.',
    desc: '5+ years, 20+ projects, zero compromises. We bring senior-level craft to every engagement.',
    span: 'col-span-1 md:col-span-2',
    icon: BASE + '67ac7bde9ea7d8e7f6e3c0b7_679726c38c0e8c4786155202_Group%2036%201.avif',
    accent: 'green',
    stats: [
      { value: '5+', label: 'Years Experience' },
      { value: '20+', label: 'Projects Shipped' },
      { value: '100%', label: 'On-time Delivery' },
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section id="why-us-x" className="section-padding bg-[#0b011d] relative overflow-hidden">
      <div className="blob-animate is5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <p className="highlight-text mb-3">What we do</p>
          <h2 className="heading-h2 mb-4">Services We Offer</h2>
          <p className="para max-w-lg">
            A full suite of digital solutions — from design to deployment — to bring your vision to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`${s.span} service-card group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between min-h-[240px] ${
                s.accent === 'green' ? 'grid-card-green' : 'grid-card-purple'
              } grid-card`}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: s.accent === 'green'
                    ? 'radial-gradient(ellipse at top right, rgba(79,245,67,0.07) 0%, transparent 70%)'
                    : 'radial-gradient(ellipse at top right, rgba(126,61,255,0.08) 0%, transparent 70%)',
                }}
              />

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white font-montserrat leading-tight mb-3">
                  {s.title}
                </h3>
                <p className="para text-sm leading-relaxed max-w-sm">
                  {s.desc}
                </p>
              </div>

              {/* Stats for last card */}
              {s.stats && (
                <div className="relative z-10 flex gap-8 mt-8 pt-6 border-t border-white/10">
                  {s.stats.map((stat, si) => (
                    <div key={si}>
                      <div className="text-2xl font-bold text-white font-montserrat">{stat.value}</div>
                      <div className="text-white/50 text-xs mt-0.5 font-poppins">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Decorative image for first card */}
              {i === 0 && s.images && (
                <div className="absolute right-0 bottom-0 w-1/2 h-full pointer-events-none z-0 opacity-60">
                  <Image
                    src={s.images.desktop}
                    alt="Desktop mockup"
                    fill
                    className="object-contain object-right-bottom"
                    sizes="33vw"
                  />
                </div>
              )}

              {/* Icon for small cards */}
              {s.icon && !s.stats && (
                <div className="absolute right-4 bottom-4 w-20 h-20 opacity-30 pointer-events-none z-0">
                  <Image
                    src={s.icon}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              )}

              {/* Planet icon for last card */}
              {s.icon && s.stats && (
                <div className="absolute right-6 top-6 w-28 h-28 opacity-20 pointer-events-none z-0">
                  <Image
                    src={s.icon}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Why Us strip */}
        <div className="mt-20 pt-16 border-t border-white/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '🚀', title: 'Quality-Driven', desc: 'Precision, creativity, and high-impact execution on every project.' },
              { emoji: '🤝', title: 'In-House Feel', desc: "We embed with your team and align fully with your goals." },
              { emoji: '📢', title: 'Transparent', desc: 'Clear updates at every stage — no surprises, ever.' },
              { emoji: '⚡', title: 'On-Time Delivery', desc: 'We ship on schedule without cutting corners on quality.' },
            ].map((card, i) => (
              <div key={i} className="why-card flex flex-col gap-3">
                <div className="text-3xl">{card.emoji}</div>
                <h3 className="text-white font-bold font-montserrat text-base">{card.title}</h3>
                <p className="para text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
