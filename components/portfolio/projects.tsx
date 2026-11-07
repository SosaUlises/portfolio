import Image from "next/image"
import Link from "next/link"
import { SectionShell } from "@/components/portfolio/section-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Github, Layers } from "lucide-react"
import { projects } from "@/lib/projects"

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <SectionShell>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Proyectos Destacados
          </h2>
          <p className="mt-1 text-sm text-text-muted">
            Selección de desarrollos principales con foco en arquitectura, calidad de código y soluciones reales.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 reveal-stagger">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className={[
              "card card-hover card-shine group flex flex-col overflow-hidden rounded-2xl",
              "border border-border/60 bg-card/40",
              "transition hover:border-primary/30 hover:bg-card/70",
            ].join(" ")}
          >
            {/* Preview Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-elevated">
              {project.imageUrl ? (
                <>
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt ?? project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
                  />
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  <div className="rounded-xl border border-border/80 bg-surface/80 p-3.5 text-primary shadow-sm">
                    <Layers className="h-6 w-6" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {project.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {project.category}
                  </p>
                </div>
              )}

              {/* Status & Category badges overlay */}
              <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-foreground/90 backdrop-blur">
                  {project.category}
                </span>

                {project.status === "En desarrollo" ? (
                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-300 backdrop-blur">
                    En desarrollo
                  </span>
                ) : null}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 7).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-md border border-border/60 bg-secondary/60 font-mono text-xs font-normal text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 7 ? (
                    <span className="text-[11px] font-mono text-muted-foreground self-center px-1">
                      +{project.tags.length - 7}
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-border/40 pt-4">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="inline-flex items-center gap-1.5"
                  >
                    <span>Ver caso de estudio</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>

                {project.liveUrl ? (
                  <Button asChild variant="secondary" size="sm" className="h-8 gap-1.5">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </a>
                  </Button>
                ) : null}

                {project.docsUrl ? (
                  <Button asChild variant="secondary" size="sm" className="h-8 gap-1.5">
                    <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5" />
                      Swagger
                    </a>
                  </Button>
                ) : null}

                {project.repoUrl ? (
                  <Button asChild variant="outline" size="sm" className="h-8 gap-1.5">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      Repositorio
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
