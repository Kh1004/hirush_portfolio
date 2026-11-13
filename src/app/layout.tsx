import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Coda } from 'next/font/google';
import '../styles/index.css';
import '../styles/tailwind.css';
import { site, seo } from '@/data/site';

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
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: site.url
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: site.url,
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
    title: seo.twitterTitle,
    description: seo.twitterDescription,
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
              name: site.name,
              url: site.url,
              logo: "https://img.rocket.new/generatedImages/rocket_gen_img_13a747c68-1769707086868.png",
              description: seo.ogDescription,
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
              name: seo.title,
              url: site.url,
              description: seo.description
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
              description: seo.ogDescription,
              url: site.url,
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