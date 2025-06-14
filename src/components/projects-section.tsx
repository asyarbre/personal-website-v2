'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { BlurFade } from '@/components/magicui/blur-fade';
import { ProjectCard } from '@/components/project-card';
import { DATA } from '@/data/resume';

type ProjectsSectionProps = {
  blurFadeDelay: number;
};

export default function ProjectsSection({
  blurFadeDelay,
}: ProjectsSectionProps) {
  return (
    <section id="projects">
      <BlurFade delay={blurFadeDelay * 7}>
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
          <BlurFade key={project.title} delay={blurFadeDelay * 12 + id * 0.05}>
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
  );
}
