import Image from 'next/image'

const STEPS = [
  {
    title: 'Discovery Call',
    desc: 'We start by understanding your vision, goals, and requirements.',
    cta: true,
  },
  {
    title: 'Ideation & Design',
    desc: 'We create wireframes and design mockups that align with your brand identity.',
    cta: false,
  },
  {
    title: 'Development',
    desc: 'We bring designs to life, ensuring a seamless and scalable web experience.',
    cta: false,
  },
  {
    title: 'Final Launch',
    desc: 'We test, refine, and deploy a website that is optimized for performance.',
    cta: false,
  },
]

export default function ProcessSection() {
  return (
    <section id="process-x" className="section-padding bg-[#0b011d]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="heading-h2 mb-4">Our Process</h2>
          <p className="para max-w-2xl">
            We prioritize collaboration and clear communication to understand your needs fully.
            Our efficient process ensures timely, high-quality results that align with your
            vision and goals.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? 'process-step-highlighted flex flex-col sm:flex-row sm:items-center justify-between gap-6'
                  : 'process-step flex flex-col sm:flex-row sm:items-center justify-between gap-6'
              }
            >
              <div className="flex gap-5 items-start">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Image
                    src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ac6db02c32c5e67688f085_Group%201000006449.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h3 className="heading-h3 mb-1 text-white">{step.title}</h3>
                  <p className="para text-sm">{step.desc}</p>
                </div>
              </div>

              {step.cta && (
                <a
                  href="https://calendly.com/talkwithfaiz/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button-yellow flex-shrink-0 w-fit"
                >
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
