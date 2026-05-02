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
    role: 'Marketing Manager',
    avatar: BASE + '67dbcc788f177489162937f8_1741244641672.avif',
    logo: BASE + '67c56f5cca21d031b660fa7b_Group%201171275820.avif',
    text: "Hue Design Studio has been a fantastic partner in enhancing our website. They understand SaaS website needs and deliver with precision, making our collaboration smooth and productive.",
  },
  {
    name: 'Ritwika Chowdhury',
    role: 'Founder',
    avatar: BASE + '67dbcc781195859db32bd0a3_1741495987360.avif',
    logo: BASE + '67c56fe24fcf89b38f955bdb_Group%201171275812.avif',
    text: "Hue Design Studio revamped our website with strategic updates and a fast-loading, visually stunning site. Their custom solutions were tailored perfectly to our needs.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#0b011d] relative overflow-hidden">
      <div className="blob-animate is-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="highlight-text mb-3">Client Stories</p>
          <h2 className="heading-h2 mb-4">Words of Appreciation</h2>
          <p className="para max-w-xl mx-auto">
            Trusted by startups and scale-ups alike. Here&apos;s what our clients say about working with us.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card-new flex flex-col gap-5 p-8 relative overflow-hidden group"
            >
              {/* Subtle purple glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(126,61,255,0.08) 0%, transparent 70%)' }}
              />

              {/* Big quote mark */}
              <div
                className="text-8xl leading-none font-serif select-none -mt-3 -ml-1"
                style={{ color: 'rgba(126,61,255,0.25)' }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 -mt-4">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-yellow-400 text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="para text-sm leading-relaxed flex-1 relative z-10">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10 relative z-10">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-500/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white text-sm font-montserrat leading-tight">{t.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/40 text-xs">{t.role} @</span>
                    <Image
                      src={t.logo}
                      alt="Company"
                      width={56}
                      height={18}
                      className="h-[18px] w-auto opacity-70"
                    />
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
