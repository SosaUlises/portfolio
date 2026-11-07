export interface TechCategory {
  title: string
  color?: string
  dot?: string
  badge?: string
  description?: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    title: "Backend",
    color: "text-primary",
    dot: "bg-primary",
    badge: "border-border bg-secondary text-secondary-foreground hover:border-primary/50",
    items: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST APIs",
      "Clean Architecture",
      "CQRS",
      "Entity Framework Core",
      "ASP.NET Identity",
      "JWT",
    ],
  },
  {
    title: "Frontend",
    color: "text-primary",
    dot: "bg-primary",
    badge: "border-border bg-secondary text-secondary-foreground hover:border-primary/50",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Bases de Datos",
    color: "text-primary",
    dot: "bg-primary",
    badge: "border-border bg-secondary text-secondary-foreground hover:border-primary/50",
    items: ["PostgreSQL", "SQL Server", "Neon Cloud DB", "Modelado Relacional"],
  },
  {
    title: "Herramientas & Cloud",
    color: "text-primary",
    dot: "bg-primary",
    badge: "border-border bg-secondary text-secondary-foreground hover:border-primary/50",
    items: ["Git", "GitHub", "Render", "Vercel", "Swagger", "Postman"],
  },
  {
    title: "Soporte e Infraestructura",
    color: "text-primary",
    dot: "bg-primary",
    badge: "border-border bg-secondary text-secondary-foreground hover:border-primary/50",
    items: [
      "Soporte Técnico IT",
      "Diagnóstico de Hardware y Software",
      "Redes & Conectividad",
      "Sistemas Operativos Windows",
      "Resolución de Incidencias",
    ],
  },
]
