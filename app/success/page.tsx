'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SuccessContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''

  // Cal.com embed URL with prefilled email
  const calUrl = email
    ? `https://cal.id/faiz/connect-with-founder?email=${encodeURIComponent(email)}&layout=month_view`
    : 'https://cal.id/faiz/connect-with-founder?layout=month_view'

  return (
    <div className="min-h-screen bg-[#0b011d] text-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Image
              src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67d3791068ab514bd16e4514_Hue%20Logo.svg"
              alt="Hue Design Studio"
              width={100}
              height={36}
              className="h-9 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-start px-6 pt-12 pb-16">
        <div className="max-w-4xl w-full">
          {/* Text */}
          <div className="text-center mb-8">
            <p
              className="text-white/50 font-montserrat font-semibold text-sm tracking-widest uppercase mb-3"
              style={{ opacity: 0.6 }}
            >
              Almost there
            </p>
            <h1 className="heading-h2 text-white">Last step: book your slot!</h1>
            {email && (
              <p className="para mt-2 text-sm">
                We&apos;ll pre-fill your email:{' '}
                <span className="text-green-accent font-semibold">{email}</span>
              </p>
            )}
          </div>

          {/* Cal.com inline embed */}
          <div
            className="rounded-2xl overflow-hidden border border-white/10"
            style={{ minHeight: '600px' }}
          >
            <iframe
              src={calUrl}
              width="100%"
              height="700"
              frameBorder="0"
              title="Book a call"
              className="w-full"
              style={{ background: 'transparent' }}
            />
          </div>

          {/* Fallback link */}
          <div className="text-center mt-6">
            <p className="para text-sm">
              Having trouble?{' '}
              <a
                href="https://calendly.com/talkwithfaiz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Book via Calendly instead
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0b011d] flex items-center justify-center">
          <div className="text-white/50 font-poppins">Loading...</div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
