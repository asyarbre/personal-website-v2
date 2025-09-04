'use client';

import Link from 'next/link';
import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ExperienceItemProps = {
  company: string;
  href: string;
  location: string | undefined;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  responsibilities: string[];
};

export default function ExperienceItem({
  company,
  href,
  location,
  title,
  logoUrl,
  start,
  end,
  responsibilities,
}: ExperienceItemProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="flex flex-wrap items-center gap-1.5">
            <Link
              href={href}
              target="_blank"
              className="inline-flex items-center gap-1.5 relative group"
            >
              <Avatar className="border size-6 m-auto bg-muted-background dark:bg-foreground">
                <AvatarImage
                  src={logoUrl}
                  alt={company}
                  className="object-contain bg-background"
                />
                <AvatarFallback>{company[0]}</AvatarFallback>
              </Avatar>
              <p className="text-sm text-accent-foreground/80 font-medium relative">
                {company}
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-current origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </p>
            </Link>
            {location && (
              <span className="text-sm text-muted-foreground">
                - {location}
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground uppercase tracking-wide">
          {start} - {end}
        </p>
      </div>
      <ul className="list-disc ml-4 mt-2">
        {responsibilities.map((responsibility, index) => (
          <li
            key={index}
            className="text-sm text-muted-foreground pl-1.5 marker:text-muted-foreground"
          >
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}
