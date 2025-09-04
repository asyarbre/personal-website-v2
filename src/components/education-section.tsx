'use client';

import * as React from 'react';

import { EducationCard } from '@/components/education-card';
import { BlurFade } from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';

type EducationSectionProps = {
  blurFadeDelay: number;
};

export default function EducationSection({
  blurFadeDelay,
}: EducationSectionProps) {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={blurFadeDelay * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.school}
            delay={blurFadeDelay * 8 + id * 0.05}
          >
            <EducationCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
