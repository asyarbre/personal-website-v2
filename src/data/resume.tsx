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
    'I am passionate about building efficient and scalable applications, with a strong foundation in diverse technologies. I specialize in front-end development using React.js, Next.js, Vue.js, while also having solid back-end expertise with Nest.js, Express.js, Laravel, and CodeIgniter. Database management with MySQL and MongoDB, as well as responsive design using Bootstrap and TailwindCSS. Additionally, I have hands-on skills in Linux server administration and Google Cloud Platform.',
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
  education: [
    {
      school: 'Politeknik Negeri Media Kreatif',
      href: 'https://polimedia.ac.id',
      degree: "Bachelor's Degree of Multimedia Engineering",
      logoUrl: '/polimedia-logo.png',
      start: '2021',
      end: '2025',
    },
    {
      school: 'SMK Negeri 22 Jakarta',
      href: 'https://smkn22jakarta.sch.id',
      degree: 'Vocational School of Computer and Network Engineering',
      logoUrl: '/smkn-22-logo.png',
      start: '2018',
      end: '2021',
    },
  ],
  work: [
    {
      company: 'Klaster Games',
      href: 'https://klastergames.com',
      location: 'Remote',
      title: 'Front End Developer',
      logoUrl: 'klaster-games-logo.png',
      start: 'Jun 2024',
      end: 'Sep 2024',
      responsibilities: [
        'Developed an admin dashboard interface with 12+ pages like Login, Register, Base Layout, Dashboard, Projects List, Customer Levels (List, Add, Edit), Customer List, Product Categories (List, Add, Edit) using Next.js, React.js, TypeScript, Tailwind CSS, and Shadcn/UI.',
        'Implemented responsive layouts and reusable UI components, ensuring consistency and scalability across all pages.',
        'Optimized performance and accessibility, achieving Lighthouse scores of 80 (Performance), 100 (Accessibility), 100 (Best Practices), and (90/100) SEO.',
      ],
    },
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
        'Average score : 93.9/100 (20 Credits, 922 Hours)',
        'Graduated with Distinction (Top 10% out of 4.520 students from 47.800 applicants)',
        'Learned various aspects of Cloud Computing, including Cloud Computing Fundamentals, Cloud Infrastructure Services (Compute, Storage, Networking), Cloud Platform Services, Cloud Security, DevOps.',
        'Designed and developed a RESTful API for the capstone project using Express.js, Prisma, and MySQL. Deployed to Google Cloud Platform (GCP) with a CI/CD pipeline, ensuring scalability and reliability.',
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
        'Led a 3 member team (2 fullstack developers and 1 designer) to develop an audiobook platform showcasing students final projects from the Publishing Study Program.',
        'Architected the system design, including ERD with 4 core tables and application flow.',
        'Developed and deployed the platform using Laravel, MySQL, Tailwind CSS, and DaisyUI, enabling users to read books and access audio content seamlessly.',
        'Published and integrated 22 audiobooks, improving accessibility of student works and supporting inclusive learning for a wider audience.',
        'Developed responsive web layouts compatible with multiple device screens.',
      ],
    },
    {
      company: 'Karejo Indonesia',
      href: 'https://www.karejo.id',
      location: 'Jakarta, Indonesia',
      title: 'Front End Developer',
      logoUrl: '/karejo-logo.svg',
      start: 'Dec 2022',
      end: 'Aug 2023',
      responsibilities: [
        'Developed the Karejo landing page and core web application using Next.js, Tailwind CSS, and DaisyUI.',
        'Translated UI/UX designs into responsive and fully functional web interfaces.',
        'Optimized performance and accessibility, achieving Lighthouse scores of 89 (Performance), 85 (Accessibility), 96 (Best Practices), and 92 (SEO).',
        'Developed responsive web layouts compatible with multiple device screens.',
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
        'Built and deployed a web-based inventory management system for Balai Teknologi Survei Kelautan using CodeIgniter, Bootstrap, and MySQL.',
        'Implemented core features (add, edit, delete, borrow, return) that streamlined item tracking and reduced manual effort in inventory workflows.',
        'Deployed the system in both the Computer Lab and Workshop, improving efficiency and accuracy in managing 100+ research equipment and goods.',
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
      title: 'Sweet Check App',
      href: 'projects/sweet-check-app',
      description:
        'Sweet Check is a web-based application designed to help users determine the sugar content of sweetened beverages and monitor their daily sugar intake interactively.',
      technologies: [
        'Next.js',
        'TailwindCSS',
        'TypeScript',
        'Shadcn UI',
        'Prisma',
        'PostgreSQL',
        'Google Cloud',
        'Gemini AI',
        'PWA',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://sweetcheck.asyari.web.id',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1752108661/sweet-check_b7zve1.png',
    },
    {
      isFeatured: true,
      title: 'Kirim Now REST API',
      href: 'projects/kirim-now-api',
      description:
        'Kirim Now REST API is a backend system designed for courier and logistics operations. This project was developed to further explore the use of the NestJS framework and modern backend architecture patterns, and showcases enterprise-grade features and integrations.',
      technologies: [
        'Nest.js',
        'PostgreSQL',
        'Prisma ORM',
        'Redis',
        'Xendit',
        'Turf.js',
        'OpenCage',
        'Google Cloud',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/asyarbre/kirim-now-be',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        'https://res.cloudinary.com/asyari/image/upload/v1756994866/kirim-now_bmyamh.jpg',
    },
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
      isFeatured: false,
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
