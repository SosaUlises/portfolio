"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionShell } from "@/components/portfolio/section-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const experiences = [
  {
    company: "Blossom Institute",
    role: "Backend Developer (Freelance)",
    period: "2026 — Actualidad",
    description:
      "Desarrollo del backend para una plataforma de gestión académica orientada a institutos o centros educativos. El sistema centraliza cursos, estudiantes, tareas, asistencias, entregas y reportes académicos, con foco en arquitectura limpia, seguridad y escalabilidad.",
    tags: [
      ".NET 8",
      "ASP.NET Core",
      "Clean Architecture",
      "CQRS",
      "PostgreSQL",
      "JWT",
      "Swagger",
    ],
    highlights: [
      "Diseño de APIs REST para gestión académica: cursos, clases, matrículas, tareas, entregas, asistencia y calificaciones.",
      "Arquitectura basada en Clean Architecture + CQRS para separar dominio, casos de uso e infraestructura.",
      "Autenticación y autorización con ASP.NET Core Identity + JWT y control por roles (Admin, Profesor, Alumno).",
      "Persistencia con PostgreSQL y Entity Framework Core.",
      "Soporte para adjuntos, reportes académicos y arquitectura preparada para exportación en Excel/PDF.",
      "Demo pública disponible mediante Swagger UI.",
    ],
    liveUrl: "https://blossom-demo.onrender.com/index.html",
    repoUrl: "https://github.com/SosaUlises/blossom-institute-api",
  },
]

export function Experience() {
  return (
    <ScrollReveal className="mt-20" staggerMs={70}>
      <SectionShell glow>
        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Experiencia
        </h2>

        <div id="experiencia" className="mt-8 flex flex-col gap-6 reveal-stagger">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="card card-hover card-shine p-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-primary">{exp.role}</p>
                  </div>

                  <span className="text-xs font-mono text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-md border border-border bg-secondary font-mono text-xs font-normal text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Button
                    asChild
                    className="gap-2 transition-transform hover:scale-[1.02]"
                  >
                    <a href={exp.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Swagger Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="secondary"
                    className="gap-2 transition-transform hover:scale-[1.02]"
                  >
                    <a href={exp.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Repositorio
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </ScrollReveal>
  )
}