import { JSX } from 'react';
import { FaJava } from 'react-icons/fa6';
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGo,
  SiGooglecloud,
  SiGooglegemini,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // Languages
  JavaScript: <SiJavascript size={iconSize} color="#F7DF1E" />, // yellow-500
  TypeScript: <SiTypescript size={iconSize} color="#60A5FA" />, // blue-400
  Go: <SiGo size={iconSize} color="#60A5FA" />, // blue-400
  PHP: <SiPhp size={iconSize} color="#60A5FA" />, // blue-400
  Java: <FaJava size={iconSize} color="#60A5FA" />, // blue-400

  // Frontend Frameworks
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} color="#0EA5E9" />, // sky-500
  'Vue.js': <SiVuedotjs size={iconSize} color="#4FC08D" />, // green-500
  'Vite.js': <SiVite size={iconSize} color="#3B82F6" />, // blue-500

  // Frontend Library
  'shadcn/ui': <SiShadcnui size={iconSize} />,
  TailwindCSS: <SiTailwindcss size={iconSize} color="#67E8F9" />, // cyan-300
  CSS: <SiCss3 size={iconSize} color="#93C5FD" />, // blue-300

  // Backend
  Express: <SiExpress size={iconSize} />,
  'Nest.js': <SiNestjs size={iconSize} color="#DC2626" />, // red-600
  Prisma: <SiPrisma size={iconSize} color="#10B981" />, // emerald-500
  Supabase: <SiSupabase size={iconSize} color="#22C55E" />, // green-500
  Laravel: <SiLaravel size={iconSize} color="#DC2626" />, // red-600

  // Others
  'Node.js': <SiNodedotjs size={iconSize} color="#16A34A" />, // green-600
  Nginx: <SiNginx size={iconSize} color="#22C55E" />, // green-500
  Docker: <SiDocker size={iconSize} color="#93C5FD" />, // blue-300
  Gemini: <SiGooglegemini size={iconSize} />,
  Linux: <SiLinux size={iconSize} />,
  Figma: <SiFigma size={iconSize} />,
  'Google Cloud': <SiGooglecloud size={iconSize} color="#4285F4" />,
};
