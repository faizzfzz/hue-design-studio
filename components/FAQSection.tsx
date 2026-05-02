'use client'

import { useState } from 'react'
import Image from 'next/image'

const FAQ_ITEMS = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What types of websites do you build?',
        a: "We craft high-converting, visually stunning marketing websites for small businesses, startups, and e-commerce brands. Whether you need a sleek landing page or a full-scale website, we've got you covered.",
      },
      {
        q: 'What makes your websites different?',
        a: 'We focus on <strong>pixel-perfect design, seamless animations, and conversion-driven layouts</strong>. Plus, we integrate the right tools—like WhatsApp, Calendly, and chatbots—to make your website work smarter for your business.',
        html: true,
      },
      {
        q: 'Can you redesign my existing website or build on my current platform?',
        a: 'Absolutely! If your website feels outdated or isn\'t converting well, we can <strong>revamp it to be modern, fast, and high-converting</strong>. We work with the best platforms—<strong>Webflow, WordPress, Shopify, or custom-built solutions</strong>—depending on what suits your business best.',
        html: true,
      },
    ],
  },
  {
    category: 'Process & Features',
    questions: [
      {
        q: 'How long does it take to build a website?',
        a: 'It depends on your needs! A simple one-pager takes <strong>1-2 weeks</strong>, while a more complex website takes <strong>4-6 weeks</strong>. We balance speed and quality to deliver the best results.',
        html: true,
      },
      {
        q: "What's your process like?",
        a: `Super smooth. Here's how it works:<br/><br/>
<strong>Step 1:</strong> We chat about your business and goals.<br/>
<strong>Step 2:</strong> We design a website that fits your brand.<br/>
<strong>Step 3:</strong> We build, with mobile-optimisation<br/>
<strong>Step 4:</strong> We test, refine, and ensure it's SEO-ready<br/>
<strong>Step 5:</strong> Launch day! 🚀`,
        html: true,
      },
      {
        q: 'Can my website integrate with other tools?',
        a: 'Yes! We can seamlessly integrate <strong>WhatsApp, Calendly, HubSpot, chatbots, Google Tag Manager, and more</strong> to automate and enhance your marketing.',
        html: true,
      },
      {
        q: 'Do you offer A/B testing and analytics?',
        a: 'Absolutely! We can set up <strong>A/B testing, Google Search Console, and Google Tag Manager</strong> so you can track performance, optimize conversions, and make data-driven decisions.',
        html: true,
      },
    ],
  },
  {
    category: 'Support & Maintenance',
    questions: [
      {
        q: 'Can I update my website myself?',
        a: 'Yes! We build user-friendly websites that let you update content easily. Need ongoing support? We also offer maintenance plans.',
      },
    ],
  },
]

function FAQItem({
  q,
  a,
  html,
  defaultOpen,
}: {
  q: string
  a: string
  html?: boolean
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <p className="heading-h4 font-semibold text-white group-hover:text-purple-300 transition-colors text-base md:text-lg pr-4">
          {q}
        </p>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <Image
            src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d86c353a52e11b22c160f0_add.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
      </button>

      <div
        className="faq-answer overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: open ? '600px' : '0px' }}
      >
        {html ? (
          <p
            className="para pb-5 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: a }}
          />
        ) : (
          <p className="para pb-5 leading-relaxed">{a}</p>
        )}
      </div>
    </div>
  )
}

export default function FAQSection() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById('form')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="FAQ-x" className="section-padding bg-[#0b011d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          {/* FAQ list */}
          <div>
            <div className="mb-10">
              <h2 className="heading-h2 mb-3">Frequently Asked Questions</h2>
              <p className="para">
                Have more questions?{' '}
                <a
                  href="#form"
                  className="text-button underline underline-offset-2"
                  onClick={handleAnchorClick}
                >
                  Send us a message here.
                </a>
              </p>
            </div>

            {FAQ_ITEMS.map((cat, ci) => (
              <div key={ci} className={ci > 0 ? 'mt-10' : ''}>
                <p className="highlight-text">{cat.category}</p>
                {cat.questions.map((faq, fi) => (
                  <FAQItem
                    key={fi}
                    q={faq.q}
                    a={faq.a}
                    html={faq.html}
                    defaultOpen={ci === 0 && fi === 0}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* CTA sidebar — sticky */}
          <div className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(126,61,255,0.14) 0%, rgba(0,98,255,0.06) 100%)',
                border: '1px solid rgba(126,61,255,0.25)',
              }}
            >
              {/* glow blob */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(126,61,255,0.3) 0%, transparent 70%)' }}
              />

              <p className="highlight-text mb-4">Ready to start?</p>
              <h3 className="heading-h3 mb-3 relative z-10">Let&apos;s Build Something Great Together</h3>
              <p className="para text-sm mb-8 relative z-10">
                A 30-minute discovery call is all it takes to get your high-performing website in motion.
              </p>

              <div className="flex flex-col gap-3 relative z-10">
                <a
                  href="https://calendly.com/talkwithfaiz/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="base-button-yellow w-full justify-center text-center"
                >
                  📅 Schedule a Free Call
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=918882690600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-white/20 text-white/80 text-sm font-semibold font-montserrat hover:border-white/40 hover:text-white transition-all"
                >
                  💬 WhatsApp us
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <p className="text-white/40 text-xs font-poppins text-center">
                  Trusted by 20+ brands worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
