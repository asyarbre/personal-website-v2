import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { BlurFade } from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { DATA } from '@/data/resume';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web development projects including React, Next.js, and full-stack applications.',
  openGraph: {
    title: `Projects | ${DATA.name}`,
    description:
      'Explore my portfolio of web development projects including React, Next.js, and full-stack applications.',
    url: `${DATA.url}/projects`,
    images: [
      {
        url: `${DATA.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Projects | ${DATA.name}`,
      },
    ],
  },
  twitter: {
    title: `Projects | ${DATA.name}`,
    description:
      'Explore my portfolio of web development projects including React, Next.js, and full-stack applications.',
    images: [`${DATA.url}/og-image.jpg`],
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-4 max-w-2xl mx-auto py-12 sm:py-24 px-6">
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full hover:-translate-x-1 hover:bg-primary/5"
        >
          <Link href="/">
            <ChevronLeft className="text-muted-foreground hover:text-white transition-all duration-200" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-xl md:text-2xl font-medium">Projects</h1>
      </div>
      <section id="projects">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-4">
          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={0.04 * 12 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
