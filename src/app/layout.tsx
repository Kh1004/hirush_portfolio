import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Coda } from 'next/font/google';
import '../styles/index.css';
import '../styles/tailwind.css';

const coda = Coda({
  weight: ['400', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-coda',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushautomation.com'),
  title: 'Hirush Automation – Electrical, Control & Automation Engineering Solutions',
  description: 'Hirush Automation Pte Ltd — Expert electrical, control, and automation engineering solutions. PLC programming, HMI/SCADA design, control panel fabrication, and online training. Singapore & Sri Lanka.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushautomation.com'
  },
  openGraph: {
    title: 'Hirush Automation – Automation Solutions',
    description: 'Expert electrical, control, and automation engineering. PLC programming, HMI/SCADA design, control panel fabrication, and training by Hirush Automation Pte Ltd.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushautomation.com',
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
    title: 'Hirush Automation – Automation Solutions',
    description: 'Expert electrical, control, and automation engineering solutions by Hirush Automation Pte Ltd.',
    images: ['/assets/images/og-image.png']
  },
  icons: {
    icon: [
      { url: '/assets/images/logo.png', type: 'image/png' }]

  }
};

export default function RootLayout({
  children

}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={coda.variable} style={{ scrollBehavior: 'smooth' }}>
      <head>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hirush Automation',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushautomation.com',
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
              name: 'Hirush Automation – Electrical, Control & Automation Engineering Solutions',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushautomation.com',
              description: 'Expert electrical, control, and automation engineering solutions. PLC programming, HMI/SCADA design, control panel fabrication, and online training.'
            })
          }} />

        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Hirush Automation Engineering Services',
              description: 'Professional automation engineering solutions including PLC programming, HMI/SCADA design, control panel fabrication, and electrical design.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hirushautomation.com',
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