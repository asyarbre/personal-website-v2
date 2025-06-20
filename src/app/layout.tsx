import { Geist } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import FooterSection from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import NowPlaying from '@/components/now-playing';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <NowPlaying />
          {children}
          <Navbar />
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
