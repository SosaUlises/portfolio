"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: "gym-api",
    title: "Sosa Gym API",
    description:
      "Sistema de gestion de gimnasio: clientes, rutinas, ejercicios, cuotas y control de accesos. Integra OpenAI para generacion de rutinas.",
    tags: [".NET 8", "Clean Architecture", "CQRS", "JWT", "PostgreSQL", "Swagger"],
  },
  {
    slug: "veting",
    title: "VetIng",
    description:
      "Sistema de gestion para veterinarias: clientes, mascotas, veterinarios, turnos, pagos con Mercado Pago y reportes.",
    tags: ["ASP.NET Core", "MVC", "EF Core", "SQL Server", "Identity", "Razor Pages"],
  },
]

export function Projects() {
  return (
    <ScrollReveal className="mt-20">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Proyectos
      </h2>

      <div className="mt-6 flex flex-col gap-5">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group flex flex-col gap-4 rounded-lg border border-border p-6 transition-colors hover:border-primary/30"
          >
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md border border-border bg-secondary font-mono text-xs font-normal text-secondary-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="h-8 px-0 text-primary hover:text-primary hover:bg-transparent"
              >
                <Link href={`/proyectos/${project.slug}`}>
                  Ver detalles
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  )
}
