"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const skillGroups = [
  {
    category: "Backend & Frameworks",
    items: ["C#", ".NET 8", "ASP.NET Core", "EF Core", "FluentValidation", "AutoMapper"],
  },
  {
    category: "Arquitectura & Patrones",
    items: ["Clean Architecture", "CQRS", "Repository", "Service", "MediatR"],
  },
  {
    category: "Bases de datos",
    items: ["PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    category: "Autenticacion & Seguridad",
    items: ["ASP.NET Core Identity", "JWT", "Roles y permisos"],
  },
  {
    category: "Herramientas & DevOps",
    items: ["Git", "Docker", "Swagger", "Postman"],
  },
  {
    category: "Patrones de diseno",
    items: ["Singleton", "Observer", "Memento", "Decorator", "Composite"],
  },
]

export function Skills() {
  return (
    <ScrollReveal className="mt-20">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Habilidades Tecnicas
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-foreground">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-col gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ScrollReveal>
  )
}
