'use client';

import * as React from 'react';

import { BlurFade } from '@/components/magicui/blur-fade';
import Skill from '@/components/skills';

type SkillsSectionProps = {
  blurFadeDelay: number;
};

export default function SkillsSection({ blurFadeDelay }: SkillsSectionProps) {
  return (
    <section id="skills">
      <BlurFade delay={blurFadeDelay * 5}>
        <h2 className="text-xl font-bold">Skills</h2>
      </BlurFade>
      <BlurFade delay={blurFadeDelay * 6}>
        <Skill />
      </BlurFade>
    </section>
  );
}
