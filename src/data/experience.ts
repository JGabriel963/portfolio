export type ExperienceEntry = {
  period: string;
  type: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    period: "2024 — Presente",
    type: "Full-time · Remoto",
    role: "Desenvolvedor Full-Stack Pleno",
    company: "Studio Lapidar · São Paulo, BR",
    description:
      "Liderança técnica de um produto SaaS em Next.js e NestJS, do design system aos pipelines de deploy. Reduzi o tempo médio de build em 40% e estabeleci a cultura de testes do time.",
    tags: ["Next.js", "NestJS", "Design System", "CI/CD"],
    current: true,
  },
  {
    period: "2023 — 2024",
    type: "Full-time · Híbrido",
    role: "Desenvolvedor Full-Stack Júnior",
    company: "Iter Tecnologia · Campinas, BR",
    description:
      "Construção de features end-to-end em React + Node.js para um produto de logística. Migrei o legado de Express para NestJS em ciclos curtos, sem janelas de manutenção.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    period: "2023",
    type: "Estágio · Presencial",
    role: "Estágio em Desenvolvimento Web",
    company: "Coletivo Vértice · São Paulo, BR",
    description:
      "Primeiros passos profissionais: landing pages, integrações com CMS headless e automações internas. Onde aprendi que a parte mais difícil de um produto raramente é o código.",
    tags: ["HTML/CSS", "JavaScript", "Headless CMS"],
  },
];
