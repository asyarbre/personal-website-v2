'use client';

import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa6';

import { Icons } from '@/components/icons';

const links = [
  {
    href: 'https://github.com/asyarbre',
    icon: <Icons.github className="size-4" />,
  },
  {
    href: 'https://www.linkedin.com/in/asyari1',
    icon: <Icons.linkedin className="size-4" />,
  },
  {
    href: 'https://www.instagram.com/asyarbre',
    icon: <FaInstagram className="size-4" />,
  },
  {
    href: 'mailto:asyari818@gmail.com',
    icon: <Icons.email className="size-4" />,
  },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-border bg-background py-2 dark:bg-transparent mb-10 md:mb-0">
      <span className="text-muted-foreground block text-center text-sm">
        © {new Date().getFullYear()} Asya&apos;ri, All rights reserved
      </span>
      <div className="flex flex-wrap justify-center gap-6 text-sm mt-4">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            target="_blank"
            className="text-muted-foreground hover:text-primary"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
