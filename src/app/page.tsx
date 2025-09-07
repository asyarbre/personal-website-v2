import { DATA } from '@/data/resume';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.description,
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
    title: `${DATA.name} - Full Stack Developer`,
    description: DATA.description,
    images: [`/opengraph-image.png`],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                I&apos;m {DATA.name.split(' ')[0]}
              </h1>
              <p className="max-w-[600px] md:text-xl">
                A student who aspires to be a software engineer interested in
                full-stack development
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <h2 className="text-xl font-bold">About</h2>
        <p className="text-muted-foreground">{DATA.summary}</p>
      </section>
    </main>
  );
}
