"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionShell } from "@/components/portfolio/section-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects"

export function Projects() {
  return (
    <ScrollReveal className="mt-20" staggerMs={70}>
      <SectionShell>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Proyectos
        </h2>

        <div id="proyectos" className="mt-6 grid gap-5 md:grid-cols-2 reveal-stagger">
          {projects.map((project) => (
            <article
              key={project.slug}
              className={[
                "card card-hover card-shine group overflow-hidden rounded-2xl",
                "border border-border/50 bg-background/20",
                "transition hover:border-primary/20 hover:bg-background/25",
              ].join(" ")}
            >
              {/* Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={project.imageUrl ?? "/placeholder.png"}
                  alt={project.imageAlt ?? project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />

                {/* overlay suave para integrar con el fondo */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/0"
                />

                {/* chip opcional arriba */}
                <div className="absolute left-4 top-4 rounded-full border border-border/60 bg-background/35 px-3 py-1 text-[11px] font-semibold tracking-wide text-foreground/90 backdrop-blur">
                  {project.slug === "gym-api" ? "API REST" : "Web App"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 8).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-md border border-border/50 bg-secondary/40 font-mono text-xs font-normal text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="
              h-8 px-0
              text-primary
              hover:bg-transparent
              hover:text-primary
              focus:bg-transparent
              data-[state=open]:bg-transparent
            "
            >
            <Link
              href={`/proyectos/${project.slug}`}
              className="group/link inline-flex items-center"
            >
              <span className="transition-colors duration-200 group-hover/link:text-primary/80">
                Ver detalles
              </span>
              <ArrowRight
                className="
                  ml-1.5 h-3.5 w-3.5
                  transition-transform duration-200
                  group-hover/link:translate-x-0.5
                "
              />
            </Link>
          </Button>

                  {project.liveUrl ? (
                    <Button asChild variant="secondary" size="sm" className="h-8 gap-2">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  ) : null}

                  {project.docsUrl ? (
                    <Button asChild variant="secondary" size="sm" className="h-8 gap-2">
                      <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Swagger
                      </a>
                    </Button>
                  ) : null}

                  {project.repoUrl ? (
                    <Button asChild variant="outline" size="sm" className="h-8 gap-2">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Repo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </ScrollReveal>
  )
}
