import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: "Proyecto no encontrado" }

  return {
    title: `${project.title} | Sosa Ulises`,
    description: project.description,
  }
}

export default function ProyectoPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="mb-10 h-8 px-0 text-primary hover:text-primary hover:bg-transparent"
      >
        <Link href="/#proyectos">
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
          Volver al portfolio
        </Link>
      </Button>

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

      {project.highlights?.length ? (
        <section className="mt-12 rounded-lg border border-border/70 bg-muted/20 p-6 text-left">
          <h2 className="text-sm font-semibold text-foreground">
            Lo más relevante
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-10 flex flex-wrap gap-2">
        {project.repoUrl ? (
          <Button asChild variant="secondary" className="gap-2">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Repositorio
            </a>
          </Button>
        ) : null}

        {(project as any).docsUrl ? (
          <Button asChild variant="secondary" className="gap-2">
            <a
              href={(project as any).docsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Docs / Swagger
            </a>
          </Button>
        ) : null}
      </section>
    </main>
  )
}
