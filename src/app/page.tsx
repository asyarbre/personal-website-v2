import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { BlurFade } from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import Skill from '@/components/skills';
import { Spotlight } from '@/components/spotlight';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from '@/data/resume';

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <Spotlight />
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                yOffset={8}
                text={`I'm ${DATA.name.split(' ')[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="prose max-w-full text-pretty text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <Skill />
        </BlurFade>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Featured Projects</h2>
            <Link
              href={'/projects'}
              className="flex items-center text-muted-foreground/80 hover:text-muted-foreground"
            >
              <p className="font-medium text-sm ">see more projects</p>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-4">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              {project.isFeatured && (
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              )}
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
