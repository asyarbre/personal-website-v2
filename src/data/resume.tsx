import { HomeIcon, Pickaxe } from 'lucide-react';

import { Icons } from '@/components/icons';

export const DATA = {
  name: "Asya'ri",
  initials: 'AS',
  url: 'https://asyari.web.id',
  location: 'Jakarta, Indonesia',
  locationLink: 'https://www.google.com/maps/place/jakarta',
  description:
    "An online portfolio by Asya'ri. Showcase of my projects, skills, and some information about me.",
  summary:
    'Passionate and skilled Full Stack Engineer with a strong foundation in a diverse set of technologies. Proficient in front-end development using ReactJS, NextJs. Back-end expertise includes ExpressJs, Laravel, Codeigniter, and database management with MySQL, PostgreSQL and MongoDB. Well-versed in responsive design frameworks such as Bootstrap and TailwindCSS. Additionally, possess Linux server administration skills and Google Cloud Platform.',
  avatarUrl: '/me.jpg',
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/projects', icon: Pickaxe, label: 'Projects' },
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
      company: 'Nusantara Infrastructure',
      href: 'https://nusantarainfrastructure.com',
      location: 'Jakarta, Indonesia',
      title: 'Full Stack Developer',
      logoUrl: '/ni-logo.jpeg',
      start: 'Feb 2024',
      end: 'Jun 2024',
      responsibilities: [
        'Develop and maintain NITA Admin, NITA Merchant, and Backend of the NITA App.',
        'Utilized Laravel, Tailwind CSS, and MySQL for full-stack development.',
        'Slicing UI/UX designs into web applications.',
        'Upgraded the Laravel framework from version 9 to 10 and migrated the build tool from Laravel Mix to Vite.js, enhancing build performance and enabling modern development workflows.',
        'Documented the API in Postman to help Flutter developers understand the response.',
        'Fixed the Firebase Cloud Messaging (FCM) notification feature to ensure successful push notifications on the mobile application.',
        'Collaborated with senior IT, UI/UX Team, and Flutter Developer.',
        'Perform testing and troubleshooting to identify and resolve bugs, ensuring system reliability and performance.',
      ],
    },
    {
      company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      href: 'https://bangkit.academy',
      location: '',
      title: 'Cloud Computing Cohort',
      logoUrl: '/bangkit-logo.jpg',
      start: 'Aug 2023',
      end: 'Dec 2023',
      responsibilities: [
        'Learned web development and Google Cloud technology.',
        'Hands-on Google Cloud Computing Foundation labs on Qwiklabs.',
        'Attended various career development classes led by industry professionals.',
        'Create a RESTful API for the capstone project using Express.js, Prisma, MySQL.',
        'Create API Documentation with Postman.',
        'Deployment API on Google Cloud Platform (GCP) with CI/CD',
      ],
    },
    {
      company: 'Politeknik Negeri Media Kreatif',
      href: 'https://polimedia.ac.id',
      location: 'Jakarta, Indonesia',
      title: 'Full Stack Developer',
      logoUrl: '/polimedia-logo.png',
      start: 'Jun 2023',
      end: 'Aug 2023',
      responsibilities: [
        'Develop audiobook platform showcases the final project works of students from the Publishing Study Program at Politeknik Negeri Media Kreatif.',
        'Developed the web application using Laravel, Tailwind CSS, DaisyUI, and MySQL.',
        'This application allows users to read books and listen to book content in audio form.',
      ],
    },
    {
      company: 'Karejo Indonesia',
      href: 'https://www.karejo.id',
      location: 'Jakarta, Indonesia',
      title: 'Front End Developer',
      logoUrl: '/karejo-logo.svg',
      start: 'Sep 2022',
      end: 'Aug 2023',
      responsibilities: [
        'Karejo is a business funded by the Polimedia through Program Mahasiswa Wirausaha (PMW).',
        'Develop Karejo Front Page.',
        'Development with Next.js, TailwindCSS, and Daisy UI.',
        'Slicing UI/UX designs into web applications.',
      ],
    },
    {
      company: 'BRIN',
      href: 'https://brin.go.id',
      location: 'Jakarta, Indonesia',
      title: 'Full Stack Developer',
      logoUrl: '/brin-logo.svg',
      start: 'Nov 2019',
      end: 'Jan 2020',
      responsibilities: [
        'Develop web-based application for an inventory of goods at Balai Teknologi Survei Kelautan.',
        'Develop websites using Codeigniter, Bootstrap, and MySQL, including the ability to add, edit, delete, borrow, and return items.',
        'The application was successfully implemented and widely used by Balai Teknologi Survei Kelautan(also used in Computer Lab, Workshop) to manage their goods inventory.',
      ],
    },
    {
      company: 'Lembaga Administrasi Negara',
      href: 'https://brin.go.id',
      location: 'Jakarta, Indonesia',
      title: 'IT Support',
      logoUrl: '/lan-logo.png',
      start: 'Aug 2019',
      end: 'Oct 2019',
      responsibilities: [
        'Develop a desktop-based satisfaction applications.',
        'Develop desktop-based using Visual Basic and MySQL.',
        'Installing various IT components including access points, computer applications, and other hardware and software systems.',
        'Determine their network requirements, assess their current infrastructure, and plan the deployment of a wireless access point for the company needs.',
      ],
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
  ],
} as const;
