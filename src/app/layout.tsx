import { Geist } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

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
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: `${DATA.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Full Stack Developer`,
      },
    ],
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
  twitter: {
    title: `${DATA.name}`,
    description: DATA.description,
    card: 'summary_large_image',
    creator: '@asyarbre',
    images: [`${DATA.url}/og-image.jpg`],
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
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: DATA.name,
              url: DATA.url,
              description: DATA.description,
              image: `${DATA.url}${DATA.avatarUrl}`,
              sameAs: [
                DATA.contact.social.GitHub.url,
                DATA.contact.social.LinkedIn.url,
              ],
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jakarta',
                addressCountry: 'ID',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NowPlaying />
          {children}
          <Navbar />
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
