"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionShell } from "@/components/portfolio/section-shell"

const stack = [
  {
    title: "Backend",
    color: "text-blue-300",
    dot: "bg-blue-400",
    badge:
      "border-blue-500/25 bg-blue-500/10 text-blue-200 hover:bg-blue-500/15",
    items: ["C#", ".NET 8", "ASP.NET Core", "REST APIs"],
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

export function TechStack() {
  return (
    <ScrollReveal className="mt-24" staggerMs={60}>
      <SectionShell>
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Tech Stack
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 reveal-stagger">
          {stack.map((section) => {
            const isFull = section.title === "Integraciones & Cloud"

            return (
              <div
                key={section.title}
                className={[
                  "card card-hover card-shine",
                  "px-5 py-5 sm:px-6 sm:py-6",
                  isFull ? "md:col-span-2 text-center" : "",
                ].join(" ")}

              >
                <div
                  className={
                    isFull
                      ? "mx-auto max-w-2xl"
                      : ""
                  }
                >
                  <div
                    className={[
                      "flex items-center gap-2",
                      isFull ? "justify-center" : "",
                    ].join(" ")}
                  >
               
                    <h3
                      className={`text-sm font-semibold tracking-wide ${section.color}`}
                    >
                      {section.title}
                    </h3>
                  </div>

                  <div
                    className={[
                      "mt-4 flex flex-wrap gap-2",
                      isFull ? "justify-center" : "",
                    ].join(" ")}
                  >
                    {section.items.map((tech) => (
                      <span
                        key={tech}
                        className={[
                      "chip chip-hover",
                          section.badge,
                        ].join(" ")}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionShell>
    </ScrollReveal>
  )
}
