'use client';

import * as React from 'react';

import { BlurFade } from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { Spotlight } from '@/components/spotlight';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from '@/data/resume';

type HeroSectionProps = {
  blurFadeDelay: number;
};

export default function HeroSection({ blurFadeDelay }: HeroSectionProps) {
  return (
    <section id="hero">
      <Spotlight />
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={blurFadeDelay}
              className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
              yOffset={8}
              text={`I'm ${DATA.name.split(' ')[0]}`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={blurFadeDelay}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={blurFadeDelay}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
