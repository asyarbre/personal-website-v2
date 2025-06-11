import { HomeIcon, Pickaxe, User } from 'lucide-react';

import { Icons } from '@/components/icons';

export const DATA = {
  name: "Asya'ri",
  initials: 'AS',
  url: 'https://asyari.web.id',
  location: 'Jakarta, Indonesia',
  locationLink: 'https://www.google.com/maps/place/jakarta',
  description:
    'A student who aspires to be a software engineer interested in full-stack development',
  summary:
    'Passionate and skilled Full Stack Engineer with a strong foundation in a diverse set of technologies. Proficient in front-end development using ReactJS, NextJs. Back-end expertise includes ExpressJs, Laravel, Codeigniter, and database management with MySQL, PostgreSQL and MongoDB. Well-versed in responsive design frameworks such as Bootstrap and TailwindCSS. Additionally, possess Linux server administration skills and Google Cloud Platform.',
  avatarUrl: '/me.jpg',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Python',
    'Go',
    'Postgres',
    'Docker',
    'Kubernetes',
    'Java',
    'C++',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/projects', icon: Pickaxe, label: 'Projects' },
    { href: '/about', icon: User, label: 'About' },
  ],
  contact: {
    email: 'asyari818@gmail.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/asyarbre',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/asyari1',
        icon: Icons.linkedin,

        navbar: true,
      },
      Resume: {
        name: 'Resume',
        url: 'https://bit.ly/cv-asyari',
        icon: Icons.file,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Atomic Finance',
      href: 'https://atomic.finance',
      badges: [],
      location: 'Remote',
      title: 'Bitcoin Protocol Engineer',
      logoUrl: '/atomic.png',
      start: 'May 2021',
      end: 'Oct 2022',
      description:
        'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
    },
    {
      company: 'Shopify',
      badges: [],
      href: 'https://shopify.com',
      location: 'Remote',
      title: 'Software Engineer',
      logoUrl: '/shopify.svg',
      start: 'January 2021',
      end: 'April 2021',
      description:
        'Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.',
    },
    {
      company: 'Nvidia',
      href: 'https://nvidia.com/',
      badges: [],
      location: 'Santa Clara, CA',
      title: 'Software Engineer',
      logoUrl: '/nvidia.png',
      start: 'January 2020',
      end: 'April 2020',
      description:
        'Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.',
    },
    {
      company: 'Splunk',
      href: 'https://splunk.com',
      badges: [],
      location: 'San Jose, CA',
      title: 'Software Engineer',
      logoUrl: '/splunk.svg',
      start: 'January 2019',
      end: 'April 2019',
      description:
        'Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.',
    },
    {
      company: 'Lime',
      href: 'https://li.me/',
      badges: [],
      location: 'San Francisco, CA',
      title: 'Software Engineer',
      logoUrl: '/lime.svg',
      start: 'January 2018',
      end: 'April 2018',
      description:
        'Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.',
    },
    {
      company: 'Mitre Media',
      href: 'https://mitremedia.com/',
      badges: [],
      location: 'Toronto, ON',
      title: 'Software Engineer',
      logoUrl: '/mitremedia.png',
      start: 'May 2017',
      end: 'August 2017',
      description:
        'Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener',
    },
  ],
  education: [
    {
      school: 'Buildspace',
      href: 'https://buildspace.so',
      degree: 's3, s4, sf1, s5',
      logoUrl: '/buildspace.jpg',
      start: '2023',
      end: '2024',
    },
    {
      school: 'University of Waterloo',
      href: 'https://uwaterloo.ca',
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: '/waterloo.png',
      start: '2016',
      end: '2021',
    },
    {
      school: 'Wilfrid Laurier University',
      href: 'https://wlu.ca',
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: '/laurier.png',
      start: '2016',
      end: '2021',
    },
    {
      school: 'International Baccalaureate',
      href: 'https://ibo.org',
      degree: 'IB Diploma',
      logoUrl: '/ib.png',
      start: '2012',
      end: '2016',
    },
  ],
  projects: [
    {
      isFeatured: true,
      title: 'Jajan Jalan REST API',
      href: 'projects/jajanjalan-api',
      description:
        'RESTful API for Jajan Jalan Application. This API is used to manage the data of the Jajan Jalan Application.',
      technologies: ['Express', 'Node.js', 'Prisma', 'MySQL', 'Google Cloud'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/asyarbre/jajanjalan-api',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1725271731/jajanjalan_mlxwu6.png',
    },
    {
      isFeatured: true,
      title: 'Next.js TypeScript Starter',
      href: 'projects/next-ts-starter',
      description:
        'Next.js + Tailwind CSS + Shadcn UI + TypeScript starter and boilerplate packed with useful development features',
      technologies: [
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Shadcn UI',
        'Husky',
        'ESLint',
        'Prettier',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/asyarbre/nextjs-ts-starter',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1725242403/next-starter_qxfjmt.jpg',
    },
    {
      isFeatured: true,
      title: 'Audiobook Application',
      href: 'projects/audiobook-app',
      description: 'Web-based application for listening to audiobooks. ',
      technologies: ['Laravel', 'TailwindCSS', 'Daisyui', 'MySQL'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/asyarbre/audiobook-web',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1725458329/audiobook_jv5ebf.png',
    },
    {
      isFeatured: true,
      title: 'NITA Merchant',
      href: 'projects/nita-merchant',
      description:
        'Dashboard for NITA Merchant. This dashboard is used to manage the data of the NITA Merchant.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'TailwindCSS'],
      links: [
        {
          type: 'Website',
          href: 'https://tolmakassar.com/nita/merchant',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1725605271/nita-merchant-cover_sgbuzb.png',
    },
    {
      isFeatured: false,
      title: 'NITA Admin',
      href: 'projects/nita-admin',
      description:
        'Dashboard for NITA Admin. This dashboard is used to manage the data of the NITA Admin.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'TailwindCSS'],
      links: [
        {
          type: 'Website',
          href: 'https://tolmakassar.com/nita/admin',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1725605259/nita-admin-cover_f1lbbm.png',
    },
    {
      isFeatured: false,
      title: 'Karejo Indonesia',
      href: 'projects/karejo-indonesia',
      description:
        'Web-based application as a solution to monitor employee attendance.',
      technologies: ['Next.js', 'TailwindCSS', 'JavaScript'],
      links: [
        {
          type: 'Website',
          href: 'https://www.karejo.id',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1725369233/karejo_zlcso2.png',
    },
    {
      isFeatured: false,
      title: 'Inventory Application',
      href: 'projects/inventory-app',
      description:
        'web-based application for an inventory of goods at Balai Teknologi Survei Kelautan.',
      technologies: ['Codeigniter', 'Bootstrap', 'PHP', 'MySQL'],
      links: [],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1725607625/inventaris_zyvxho.png',
    },
  ],
} as const;
