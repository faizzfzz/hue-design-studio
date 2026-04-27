import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🚀 High-Converting Websites for Brands | Scalable Web Design & Development',
  description:
    "We design and develop websites that captivate, convert, and scale seamlessly with your business growth. Trusted by leading brands, we offer custom, high-performance web solutions. Schedule a call today!",
  openGraph: {
    title: '🚀 High-Converting Websites for Brands | Scalable Web Design & Development',
    description:
      "We design and develop websites that captivate, convert, and scale seamlessly with your business growth. Trusted by leading brands, we offer custom, high-performance web solutions. Schedule a call today!",
    images: [
      {
        url: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67e3be64d25049a3f2ca410c_og%20img.avif',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚀 High-Converting Websites for Brands | Scalable Web Design & Development',
    description:
      "We design and develop websites that captivate, convert, and scale seamlessly with your business growth. Trusted by leading brands, we offer custom, high-performance web solutions. Schedule a call today!",
    images: [
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67e3be64d25049a3f2ca410c_og%20img.avif',
    ],
  },
  icons: {
    icon: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67e397e6ea9119d670424092_Group%201171275806.png',
    apple:
      'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67e397e73913f09afc33a464_Group%201171275807.png',
  },
  alternates: {
    canonical: 'https://huedesign.studio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
