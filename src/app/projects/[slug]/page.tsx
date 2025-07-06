import { LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiGithub } from 'react-icons/si';

import { Separator } from '@/components/ui/separator';
import { getBlogProjects, getProject } from '@/data/project';
import { DATA } from '@/data/resume';

import type { Metadata } from 'next';

export async function generateStaticParams() {
  const projects = await getBlogProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = await getProject(slug);

  const { title, summary: description, image } = project.metadata;
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${DATA.url}/blog/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-4 max-w-2xl mx-auto py-12 sm:py-24 px-6">
      <section id="blog">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogProjecting',
              headline: project.metadata.title,
              description: project.metadata.summary,
              image: project.metadata.image
                ? `${DATA.url}${project.metadata.image}`
                : `${DATA.url}/og?title=${project.metadata.title}`,
              url: `${DATA.url}/blog/${project.slug}`,
              author: {
                '@type': 'Person',
                name: DATA.name,
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-3xl leading-tight">
          {project.metadata.title}
        </h1>
        <p className="text-muted-foreground">{project.metadata.summary}</p>
        <div className="flex gap-2 mt-4">
          {project.metadata.github && (
            <Link
              href={project.metadata.github}
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <SiGithub className="w-4 h-4" />
              <span>Repository</span>
            </Link>
          )}
          {project.metadata.link && (
            <Link
              href={project.metadata.link}
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <LinkIcon className="w-4 h-4" />
              <span>Live Demo</span>
            </Link>
          )}
        </div>
        <Separator className="my-4" />
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: project.source }}
        ></article>
      </section>
    </main>
  );
}
