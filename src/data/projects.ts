export type Project = {
  title: string;
  description: string;
  previewLabel: string;
  year: string;
  category: string;
  status: "live" | "open-source" | "coming-soon";
  tags: string[];
  links: { label: string; href: string; primary?: boolean; kind: "demo" | "github" | "npm" | "internal" }[];
};

export const projects: Project[] = [
  {
    title: "Atlas — painel financeiro para PMEs",
    description:
      "Dashboard em tempo real para reconciliação bancária, com importação automática de extratos e relatórios exportáveis.",
    previewLabel: "preview · dashboard",
    year: "2026",
    category: "SaaS · interno",
    status: "live",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    links: [
      { label: "Demo ao vivo", href: "#", primary: true, kind: "demo" },
      { label: "GitHub", href: "#", kind: "github" },
    ],
  },
  {
    title: "Verbena — diário de hábitos minimalista",
    description:
      "App de hábitos com foco em fricção zero: uma interação por dia, sincronização offline-first e exportação de dados completa.",
    previewLabel: "preview · mobile-first",
    year: "2025",
    category: "App público",
    status: "live",
    tags: ["React", "TypeScript", "Tailwind", "SQLite"],
    links: [
      { label: "Demo ao vivo", href: "#", primary: true, kind: "demo" },
      { label: "GitHub", href: "#", kind: "github" },
    ],
  },
  {
    title: "Forge — gerador de scaffolds para APIs REST",
    description:
      "CLI para gerar módulos NestJS prontos: controller, service, DTOs com validação, testes e migrations. Reduz boilerplate em ~70%.",
    previewLabel: "preview · api",
    year: "2025",
    category: "Lib",
    status: "open-source",
    tags: ["Node.js", "TypeScript", "Vitest", "Docker"],
    links: [
      { label: "npm", href: "#", primary: true, kind: "npm" },
      { label: "GitHub", href: "#", kind: "github" },
    ],
  },
  {
    title: "Reservado para o próximo projeto",
    description:
      "Sempre aprendendo algo novo. Este card está reservado para o que vem a seguir — me siga no GitHub para acompanhar.",
    previewLabel: "",
    year: "",
    category: "",
    status: "coming-soon",
    tags: [],
    links: [{ label: "Vamos conversar", href: "#contato", primary: true, kind: "internal" }],
  },
];
