import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return { title: "Proyecto no encontrado" }

  return {
    title: `${project.title} | Sosa Ulises`,
    description: project.description,
  }
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      
      {/* Back button */}
      <Link
        href="/#proyectos"
        className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-primary/90 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        Volver al portfolio
      </Link>

      {/* Main Card */}
      <div className="card card-hover card-shine p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
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

        {/* Highlights */}
        {project.highlights?.length ? (
          <section className="mt-12 rounded-xl border border-border/40 bg-background/30 p-6">
            <h2 className="text-sm font-semibold tracking-wide text-foreground">
              Lo más relevante
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Action Buttons */}
        <section className="mt-10 flex flex-wrap gap-3">
          {"liveUrl" in project && (project as any).liveUrl ? (
            <Button asChild className="gap-2 transition-transform hover:scale-[1.02]">
              <a
                href={(project as any).liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Demo Web
              </a>
            </Button>
          ) : null}

          {"docsUrl" in project && project.docsUrl ? (
            <Button
              asChild
              variant="secondary"
              className="gap-2 transition-transform hover:scale-[1.02]"
            >
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Swagger / Docs
              </a>
            </Button>
          ) : null}

          {"apiUrl" in project && (project as any).apiUrl ? (
            <Button
              asChild
              variant="secondary"
              className="gap-2 transition-transform hover:scale-[1.02]"
            >
              <a
                href={(project as any).apiUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                API Externa
              </a>
            </Button>
          ) : null}

          {project.repoUrl ? (
            <Button
              asChild
              variant="outline"
              className="gap-2 transition-transform hover:scale-[1.02]"
            >
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Repositorio
              </a>
            </Button>
          ) : null}
        </section>
      </div>
    </main>
  )
}
