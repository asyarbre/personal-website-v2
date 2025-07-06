import AboutSection from '@/components/about-section';
import ExperiencesSection from '@/components/experiences-section';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import { DATA } from '@/data/resume';

import type { Metadata } from 'next';

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.description,
  openGraph: {
    title: `${DATA.name} - Full Stack Developer`,
    description: DATA.description,
    url: DATA.url,
    images: [
      {
        url: '/open-graph.png',
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Full Stack Developer`,
      },
    ],
  },
  twitter: {
    title: `${DATA.name} - Full Stack Developer`,
    description: DATA.description,
    images: [`/open-graph.png`],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
      <HeroSection blurFadeDelay={BLUR_FADE_DELAY} />
      <AboutSection blurFadeDelay={BLUR_FADE_DELAY} />
      <SkillsSection blurFadeDelay={BLUR_FADE_DELAY} />
      <ProjectsSection blurFadeDelay={BLUR_FADE_DELAY} />
      <ExperiencesSection blurFadeDelay={BLUR_FADE_DELAY} />
    </main>
  );
}
