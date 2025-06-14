'use client';

import * as React from 'react';

import ExperienceItem from '@/components/experience-item';
import { BlurFade } from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';

type ExperiencesSectionProps = {
  blurFadeDelay: number;
};

export default function ExperiencesSection({
  blurFadeDelay,
}: ExperiencesSectionProps) {
  return (
    <section id="experiences">
      <BlurFade delay={blurFadeDelay * 3}>
        <h2 className="text-xl font-bold">Experiences</h2>
      </BlurFade>
      <div className="mt-4 space-y-8">
        {DATA.work.map((experience, index) => (
          <BlurFade key={index} delay={blurFadeDelay * (4 + index)}>
            <ExperienceItem
              company={experience.company}
              href={experience.href}
              location={experience.location}
              title={experience.title}
              logoUrl={experience.logoUrl}
              start={experience.start}
              end={experience.end}
              responsibilities={[...experience.responsibilities]}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
