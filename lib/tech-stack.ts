export interface TechCategory {
  title: string
  color: string
  dot: string
  badge: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    title: "Backend",
    color: "text-blue-300",
    dot: "bg-blue-400",
    badge:
      "border-blue-500/25 bg-blue-500/10 text-blue-200 hover:bg-blue-500/15",
    items: ["C#", ".NET", "ASP.NET Core", "REST APIs"],
  },
  {
    title: "Arquitectura & Patrones",
    color: "text-violet-300",
    dot: "bg-violet-400",
    badge:
      "border-violet-500/25 bg-violet-500/10 text-violet-200 hover:bg-violet-500/15",
    items: ["Clean Architecture", "CQRS", "Repository", "Service Layer", "MVC"],
  },
  {
    title: "Seguridad",
    color: "text-emerald-300",
    dot: "bg-emerald-400",
    badge:
      "border-emerald-500/25 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/15",
    items: ["ASP.NET Identity", "JWT", "RBAC"],
  },
  {
    title: "Base de Datos",
    color: "text-amber-300",
    dot: "bg-amber-400",
    badge:
      "border-amber-500/25 bg-amber-500/10 text-amber-200 hover:bg-amber-500/15",
    items: ["Entity Framework Core", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Integraciones & Cloud",
    color: "text-cyan-300",
    dot: "bg-cyan-400",
    badge:
      "border-cyan-500/25 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/15",
    items: ["OpenAI API", "Swagger", "Git", "Render", "Neon"],
  },
]
