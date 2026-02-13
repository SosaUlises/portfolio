"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const stack = [
  {
    title: "Backend",
    color: "text-blue-400",
    badge:
      "bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/15",
    items: ["C#", ".NET 8", "ASP.NET Core", "REST APIs"],
  },
  {
    title: "Arquitectura & Patrones",
    color: "text-violet-400",
    badge:
      "bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/15",
    items: ["Clean Architecture", "CQRS", "Repository", "Service Layer", "MVC"],
  },
  {
    title: "Seguridad",
    color: "text-emerald-400",
    badge:
      "bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/15",
    items: ["ASP.NET Identity", "JWT", "RBAC"],
  },
  {
    title: "Base de Datos",
    color: "text-amber-400",
    badge:
      "bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/15",
    items: ["Entity Framework Core", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Integraciones & Cloud",
    color: "text-cyan-400",
    badge:
      "bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/15",
    items: ["OpenAI API", "Swagger", "Git", "Render", "Neon"],
  },
]

export function TechStack() {
  return (
    <ScrollReveal className="mt-28" staggerMs={60}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Tech Stack
      </h2>

      <div className="mt-12 grid gap-14 md:grid-cols-2 reveal-stagger">
        {stack.map((section) => (
          <div key={section.title} className="space-y-5">
            <h3
              className={`text-sm font-semibold tracking-wide ${section.color}`}
            >
              {section.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {section.items.map((tech) => (
                <span
                  key={tech}
                  className={`rounded-md border px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 hover:scale-[1.03] ${section.badge}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  )
}
