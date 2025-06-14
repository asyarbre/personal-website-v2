'use client';

import * as React from 'react';

import { BlurFade } from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume';

type AboutSectionProps = {
  blurFadeDelay: number;
};

export default function AboutSection({ blurFadeDelay }: AboutSectionProps) {
  return (
    <section id="about">
      <BlurFade delay={blurFadeDelay * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={blurFadeDelay * 4}>
        <p className="prose max-w-full text-pretty text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </p>
      </BlurFade>
    </section>
  );
}
