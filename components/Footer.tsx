import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-bg pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/">
              <Image
                src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d3791068ab514bd16e4514_Hue%20Logo.svg"
                alt="Hue Design Studio"
                width={100}
                height={36}
                className="h-9 w-auto mb-5"
              />
            </Link>
            <p className="para text-sm leading-relaxed">
              We design and develop websites that captivate, convert, and scale seamlessly with your business growth.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="text-white font-semibold font-montserrat text-sm mb-4 uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Projects', href: '#projects-x' },
                  { label: 'Why Us?', href: '#why-us-x' },
                  { label: 'Process', href: '#process-x' },
                  { label: 'FAQs', href: '#FAQ-x' },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="para text-sm hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold font-montserrat text-sm mb-4 uppercase tracking-wider">
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="https://calendly.com/talkwithfaiz/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="para text-sm hover:text-white transition-colors"
                  >
                    Schedule a Call
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/faizzfz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="para text-sm hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <Link href="/success" className="para text-sm hover:text-white transition-colors">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="para text-xs text-white/40">
            © {new Date().getFullYear()} Hue Design Studio. All rights reserved.
          </p>
          <p className="para text-xs text-white/40">
            High-converting websites for ambitious brands.
          </p>
        </div>
      </div>
    </footer>
  )
}
