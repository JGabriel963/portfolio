export type SkillGroup = {
  title: string;
  num: string;
  items: { name: string; icon: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    num: "04.1",
    items: [
      { name: "Next.js", icon: "N" },
      { name: "React", icon: "R" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "TW" },
    ],
  },
  {
    title: "Back-end",
    num: "04.2",
    items: [
      { name: "Node.js", icon: "N" },
      { name: "NestJS", icon: "Ne" },
      { name: "Prisma", icon: "Pr" },
      { name: "PostgreSQL", icon: "PG" },
    ],
  },
  {
    title: "Ferramentas & Infra",
    num: "04.3",
    items: [
      { name: "Git", icon: "Gt" },
      { name: "Docker", icon: "Dk" },
      { name: "Vitest", icon: "Vt" },
      { name: "REST APIs", icon: "{ }" },
    ],
  },
];
