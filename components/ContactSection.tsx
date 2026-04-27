'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      // Replace with your real form endpoint or server action
      await new Promise((resolve) => setTimeout(resolve, 800))
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-padding bg-[#0b011d] relative overflow-hidden">
      {/* blob */}
      <div className="blob-animate for-cta pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="contact-bg-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Text */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="mb-6">
                <Image
                  src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ac53a9ee4038402986999b_paper-plane%20(1)%201.svg"
                  alt="Paper plane"
                  width={48}
                  height={48}
                  className="mb-5 opacity-90"
                />
                <h2 className="heading-h2 mb-4">
                  Let&apos;s Discuss Something Cool Together
                </h2>
                <p className="para">
                  Scalable UI Design &amp; Website development. Let&apos;s build something
                  great.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div id="form" className="p-10 md:p-14 relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                  <div className="text-5xl">✅</div>
                  <h3 className="heading-h3 text-white">
                    Thank you! Your form has been successfully submitted.
                  </h3>
                  <p className="para">
                    We&apos;ve received your details and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white/80 font-montserrat mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Luke Graham"
                      maxLength={256}
                      value={form.name}
                      onChange={handleChange}
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white/80 font-montserrat mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="founder@SaaS.ai"
                      maxLength={256}
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white/80 font-montserrat mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Hey, I want my website to be revamped and ..."
                      maxLength={5000}
                      value={form.message}
                      onChange={handleChange}
                      className="form-field"
                      rows={4}
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-300 text-sm">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="base-button w-full justify-center py-4 text-base disabled:opacity-60"
                  >
                    {loading ? 'Please wait...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
