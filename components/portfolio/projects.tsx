"use client"

import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/projects"
import { SectionShell } from "@/components/portfolio/section-shell"

export function Projects() {
  return (
    <ScrollReveal className="mt-20" staggerMs={70}>
      <SectionShell>
      <h2  className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Proyectos
      </h2>

      <div  id="proyectos" className="mt-6 flex flex-col gap-5 reveal-stagger">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card card-hover card-shine group flex flex-col gap-4 p-6"
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
      </SectionShell>
    </ScrollReveal>
  )
}
