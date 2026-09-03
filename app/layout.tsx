import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: { default: 'Public Code Index — Government Open Source Directory', template: '%s — Public Code Index' },
  description: 'Explore government-sponsored open source projects, public-sector policy, coverage, and reusable civic technology.',
  openGraph: {
    title: 'Public code, public value.',
    description: 'Explore government-sponsored open source projects, policy, coverage, and reusable civic technology.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Public Code Index — Government Open Source Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Public code, public value.',
    description: 'Government Open Source Directory',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
