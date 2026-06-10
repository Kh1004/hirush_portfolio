import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Hirushautomation – Automation Engineering Solutions',
  description: 'Expert electrical and control engineering design, PLC programming, HMI/SCADA development, and online training for industrial automation.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushauto7640.builtwithrocket.new'
  },
  openGraph: {
    title: 'Hirushautomation – Automation Solutions',
    description: 'Design, freelance, and training for electrical control engineering and PLC programming.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushauto7640.builtwithrocket.new',
    type: 'website',
    images: [
    {
      url: '/assets/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Hirushautomation engineering solutions for PLC programming and electrical control design'
    }]

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hirushautomation – Automation Solutions',
    description: 'Design, freelance, and training for electrical control engineering and PLC programming.',
    images: ['/assets/images/og-image.png']
  },
  icons: {
    icon: [
    { url: '/favicon.ico', type: 'image/x-icon' }]

  }
};

export default function RootLayout({
  children

}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Coda:wght@400;800&display=swap" rel="stylesheet" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hirushautomation',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushauto7640.builtwithrocket.new',
              logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13a747c68-1769707086868.png",
              description: 'Expert electrical and control engineering design, PLC programming, HMI/SCADA development, and online training.',
              sameAs: []
            })
          }} />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Hirushautomation – Automation Engineering Solutions',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushauto7640.builtwithrocket.new',
              description: 'Expert electrical and control engineering design, PLC programming, HMI/SCADA development, and online training for industrial automation.'
            })
          }} />

        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Hirushautomation Engineering Services',
              description: 'Professional automation engineering solutions including PLC programming, electrical design, and SCADA development.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushauto7640.builtwithrocket.new',
              applicationCategory: 'BusinessApplication',
              offers: {
                '@type': 'Offer',
                priceCurrency: 'USD',
                price: '0'
              }
            })
          }} />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fhirushauto7640back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body suppressHydrationWarning className="bg-white">
        {children}
      </body>
    </html>);

}