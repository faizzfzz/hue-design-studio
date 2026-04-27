import Image from 'next/image'

const BASE = 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/'

const SERVICES = [
  {
    title: 'Custom, responsive-first design',
    accentClass: 'grid-card-green',
    images: [
      {
        src: BASE + '67ac79346c35399ca39bd728_Mask%20group.avif',
        alt: 'Responsive design',
        className: 'absolute bottom-0 left-0 right-0 w-full opacity-70',
      },
    ],
    bg: BASE + '67ac7c66fc5754530d0c431d_Rectangle%204172.avif',
    mask: BASE + '67ac77bfe3bed5791451dd4a_grid-mask.avif',
    extraImages: [
      {
        src: BASE + '67ac786b291dde73a721da9e_679726c38c0e8c47861551e8_Group%2051%201.avif',
        alt: 'iPad mockup',
        className: 'absolute bottom-8 left-4 w-1/2 opacity-80',
      },
      {
        src: BASE + '67ac788ebb3dd367d14ab2e6_679726c38c0e8c47861551f9_Group%2054%201.avif',
        alt: 'Phone mockup',
        className: 'absolute bottom-4 right-6 w-1/6',
      },
      {
        src: BASE + '67ac78b65c74ebe1e376b8df_679726c38c0e8c47861551ef_Group%2055%201.avif',
        alt: 'Desktop mockup',
        className: 'absolute bottom-0 right-0 w-2/3 opacity-70',
      },
    ],
  },
  {
    title: 'Seriously Secure',
    accentClass: 'grid-card-purple',
    bg: BASE + '67ac7c66fc5754530d0c431d_Rectangle%204172.avif',
    mask: BASE + '67ac77bfe3bed5791451dd4a_grid-mask.avif',
    extraImages: [
      {
        src: BASE + '67ac78f09c9a93e810fe432b_679726c38c0e8c4786155209_lock%201.avif',
        alt: 'Security lock',
        className: 'absolute inset-0 m-auto w-24 opacity-90',
      },
    ],
    isSecure: true,
  },
  {
    title: 'Lightning-fast load times',
    accentClass: 'grid-card-purple',
    bg: BASE + '67ac77bfe3bed5791451dd83_bg-card.avif',
    mask: BASE + '67ac77bfe3bed5791451dd4a_grid-mask.avif',
    extraImages: [
      {
        src: BASE + '67ac7d415aa5db8114dcd436_679726c38c0e8c47861551dd_Vector%205%201.svg',
        alt: 'Lightning bolt glow',
        className: 'absolute inset-0 m-auto w-32 opacity-0 blur-xl',
      },
      {
        src: BASE + '67ac79c3c6ca576ba0c25fc9_679726c38c0e8c47861551d9_Vector%202%201.avif',
        alt: 'Lightning bolt',
        className: 'absolute inset-0 m-auto w-32 opacity-40',
      },
    ],
  },
  {
    title: 'Seamless third-party integrations',
    accentClass: 'grid-card-purple',
    bg: BASE + '67ac7c66fc5754530d0c431d_Rectangle%204172.avif',
    mask: BASE + '67ac77bfe3bed5791451dd4a_grid-mask.avif',
    extraImages: [
      {
        src: BASE + '67ac7af5753caf3ac2113b60_679726c38c0e8c47861551f8_Group%2031%201.avif',
        alt: 'Integrations',
        className: 'absolute inset-0 m-auto w-3/4 opacity-90',
      },
    ],
  },
  {
    title: 'SEO-driven, scalable architecture',
    accentClass: 'grid-card-purple',
    bg: BASE + '67ac7c66fc5754530d0c431d_Rectangle%204172.avif',
    mask: BASE + '67ac77bfe3bed5791451dd4a_grid-mask.avif',
    extraImages: [
      {
        src: BASE + '67ac7acdc5a448da717f98a5_679726c38c0e8c47861551ec_Group%2032%201.avif',
        alt: 'SEO',
        className: 'absolute inset-0 m-auto w-3/4 opacity-35',
      },
    ],
  },
  {
    title: 'Powerful CMS solutions',
    accentClass: 'grid-card-purple',
    bg: BASE + '67ac7c66fc5754530d0c431d_Rectangle%204172.avif',
    mask: BASE + '67ac77bfe3bed5791451dd4a_grid-mask.avif',
    extraImages: [
      {
        src: BASE + '67ac7de018fa127c3b522de3_679726c38c0e8c47861551df_cms%201.avif',
        alt: 'CMS',
        className: 'absolute inset-0 m-auto w-3/4 opacity-70',
      },
    ],
  },
  {
    title: 'Capable, diligent, experienced.',
    accentClass: 'grid-card-purple',
    bg: BASE + '67ac7c66fc5754530d0c431d_Rectangle%204172.avif',
    mask: BASE + '67ac77bfe3bed5791451dd4a_grid-mask.avif',
    extraImages: [
      {
        src: BASE + '67ac7bde9ea7d8e7f6e3c0b7_679726c38c0e8c4786155202_Group%2036%201.avif',
        alt: 'Planet 1',
        className: 'absolute inset-0 m-auto w-3/4 opacity-60',
      },
      {
        src: BASE + '67ac7c219ea7d8e7f6e3f9a2_679726c38c0e8c478615520e_Group%2039%201.avif',
        alt: 'Stars background',
        className: 'absolute inset-0 w-full h-full object-cover opacity-25',
      },
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section id="why-us-x" className="section-padding bg-[#0b011d]">
      <div className="max-w-7xl mx-auto">
        {/* Services heading */}
        <div className="mb-12">
          <h2 className="heading-h2 mb-4">Services we offer</h2>
          <p className="para max-w-lg">
            We offer a full suite of digital solutions to bring your vision to life.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.1), rgba(255, 255, 255, 0))',
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className={`grid-card ${service.accentClass} relative min-h-[280px] p-7 flex flex-col justify-between overflow-hidden`}
            >
              {/* Background image */}
              {service.bg && (
                <Image
                  src={service.bg}
                  alt=""
                  fill
                  className="object-cover opacity-20 pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
              {/* Mask/gradient overlay */}
              {service.mask && (
                <Image
                  src={service.mask}
                  alt=""
                  fill
                  className="object-cover opacity-40 pointer-events-none z-[1]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}

              {/* Extra decorative images */}
              {service.extraImages?.map((img, j) => (
                <div
                  key={j}
                  className="absolute inset-0 pointer-events-none z-[2] flex items-center justify-center p-4"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain opacity-80"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}

              {/* Title */}
              <div className="relative z-10">
                {service.isSecure ? (
                  <div>
                    <h3 className="text-2xl font-bold text-white font-montserrat">
                      S**iously
                    </h3>
                    <h3 className="text-2xl font-bold text-white font-montserrat">Secu**</h3>
                    <p className="text-white/50 text-sm mt-1 font-poppins">
                      (Seriously Secure)
                    </p>
                  </div>
                ) : (
                  <h3
                    className="text-xl md:text-2xl font-bold text-white font-montserrat leading-tight"
                    dangerouslySetInnerHTML={{ __html: service.title.replace('\n', '<br/>') }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us section */}
        <div className="mt-24">
          <div className="mb-12">
            <h2 className="heading-h2 mb-4">Why Choose Us?</h2>
            <p className="para">Built for Performance, Designed for Growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                emoji: '🚀',
                title: 'Quality-Driven Approach',
                desc: 'We focus on precision, creativity, and high-impact execution to deliver outstanding results.',
              },
              {
                emoji: '🤝',
                title: 'Feels Like an In-House Team',
                desc: "We integrate with your team, aligning with your goals to create a seamless collaboration.",
              },
              {
                emoji: '📢',
                title: 'Transparent Communication',
                desc: 'Expect clear, consistent updates, keeping you in the loop at every stage of the project.',
              },
              {
                emoji: '⚡',
                title: 'Efficient Execution',
                desc: 'We deliver on time without compromising on quality, ensuring a smooth experience from start to finish.',
              },
            ].map((card, i) => (
              <div key={i} className="why-card flex gap-5">
                <div className="text-4xl flex-shrink-0">{card.emoji}</div>
                <div>
                  <h3 className="heading-h3 mb-2 text-xl">{card.title}</h3>
                  <p className="para text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* blob */}
      <div className="blob-animate is5 pointer-events-none" />
    </section>
  )
}
