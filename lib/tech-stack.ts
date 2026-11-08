export interface TechItem {
  name: string
  icon: string
}

export interface TechBlock {
  id: string
  title: string
  iconName: "Server" | "Monitor" | "Database" | "Cloud"
  items: TechItem[]
}

export const coreTechBlocks: TechBlock[] = [
  {
    id: "backend",
    title: "Backend y Arquitectura",
    iconName: "Server",
    items: [
      { name: "C#", icon: "csharp" },
      { name: ".NET", icon: "dotnet" },
      { name: "ASP.NET Core", icon: "aspnetcore" },
      { name: "Entity Framework Core", icon: "entityframework" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    iconName: "Monitor",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    id: "databases",
    title: "Bases de datos",
    iconName: "Database",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQL Server", icon: "sqlserver" },
    ],
  },
  {
    id: "tools-cloud",
    title: "Herramientas y Cloud",
    iconName: "Cloud",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
      { name: "Neon", icon: "neon" },
      { name: "Swagger", icon: "swagger" },
      { name: "Postman", icon: "postman" },
    ],
  },
]

export const supportKnowledge: string[] = [
  "Hardware",
  "Windows",
  "Redes y conectividad",
  "Diagnóstico técnico",
  "Resolución de incidencias",
]
