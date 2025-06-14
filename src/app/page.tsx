import AboutSection from '@/components/about-section';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection blurFadeDelay={BLUR_FADE_DELAY} />
      <AboutSection blurFadeDelay={BLUR_FADE_DELAY} />
      <SkillsSection blurFadeDelay={BLUR_FADE_DELAY} />
      <ProjectsSection blurFadeDelay={BLUR_FADE_DELAY} />
    </main>
  );
}
