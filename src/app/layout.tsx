import { Geist } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import { Suspense } from 'react';

import FooterSection from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import NowPlaying from '@/components/now-playing';
import { ThemeProvider } from '@/components/theme-provider';
import { DATA } from '@/data/resume';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Software Engineer',
    'Web Development',
    'Jakarta',
    'Indonesia',
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  publisher: DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${DATA.name} - Full Stack Developer`,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Full Stack Developer`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${DATA.name} - Full Stack Developer`,
    description: DATA.description,
    creator: '@asyarbre',
    images: [`/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    yandex: '',
  },
  alternates: {
    canonical: DATA.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense fallback={null}>
            <NowPlaying />
          </Suspense>
          {children}
          <Navbar />
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
