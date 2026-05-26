import type { ComponentType, SVGProps } from "react";
import { Route } from "lucide-react";
import {
  SiDocker,
  SiDotnet,
  SiFlask,
  SiGit,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type SkillItem = { name: string; Icon: IconComponent };

export type SkillGroup = {
  title: string;
  num: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens",
    num: "04.1",
    items: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Python", Icon: SiPython },
      { name: "C#", Icon: SiSharp },
    ],
  },
  {
    title: "Front-end",
    num: "04.2",
    items: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "TanStack Start", Icon: Route },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    title: "Back-end",
    num: "04.3",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "Flask", Icon: SiFlask },
      { name: "ASP.NET Core", Icon: SiDotnet },
    ],
  },
  {
    title: "Dados & Ferramentas",
    num: "04.4",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Docker", Icon: SiDocker },
      { name: "Git", Icon: SiGit },
    ],
  },
];
