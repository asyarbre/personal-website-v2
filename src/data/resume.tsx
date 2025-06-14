import { HomeIcon, Pickaxe } from 'lucide-react';

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
        'Slicing UI/UX designs into fully functional and responsive web applications.',
        'Identified and resolved bugs to enhance the performance and stability of web applications. Developed and integrated new features based on user requirements and feedback, continuously improving the overall functionality and user experience.',
        'Upgrade Laravel from version 9 to 10, migrated the build tool from Laravel Mix to Vite.js for improved build performance and modern development capabilities.',
        'Documented the API in Postman to help Flutter developers understand the response.',
        'Collaborated closely with senior IT, UI/UX Team, and Flutter Developer.',
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
        'Create a RESTful API for the capstone project using ExpressJs, Prisma, MySQL and deploy them to Google Cloud Platform using services such as Cloud Build, Artifact Registry, Cloud Run, Cloud SQL, Cloud Storage and implementing CI/CD pipeline.',
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
        'This Audiobook platform contains the final project work of Politeknik Negeri Media Kreatif Publishing Study Program students. This audiobook aims to provide a reading experience for readers to enjoy books without having to read directly.',
        'This audiobook application is available for web applications (audiobook.polimedia.ac.id).',
        'This application allows users to read books and listen to book content in audio form.',
        'Developed a website application using Laravel, TailwindCSS, DaisyUI and MySQL.',
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
        'Karejo is an application to monitor employee attendance in various locations and biometrics for optimal accuracy.',
        'I specialize in crafting sleek user interfaces and transforming them into engaging web applications using Next.js, TailwindCSS, and DaisyUI.',
        'Additionally, I bring my expertise to the mobile realm, where I slice and dice UIs into stunning frontend mobile applications using React Native.',
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
        'Developed a website-based inventory application that effectively manages data related to goods stored incomputer labs, ship equipment warehouses, and offices. (Codeigniter, Bootstrap, MySQL).',
        'I utilize my skills in front-end development, back-end development, and database design to create a seamless user experience that met the needs of the client.',
        'This project involves developing a user-friendly interface that makes it easy for users to navigate the application and  add, edit, delete, borrow, return items from their inventory.',
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
        'Developed a desktop-based satisfaction applications. My expertise in these technologies allows me to create user friendly applications. (Visual Basic, MySQL).',
        'Installed and configured various IT components, including access points, computer applications, and other hardware and software systems.',
        'Assessed company network requirements and current infrastructure to determine the optimal deployment of wireless access points.',
      ],
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
