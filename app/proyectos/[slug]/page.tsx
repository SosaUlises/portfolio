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
          <h2 className="text-sm font-semibold text-foreground">Lo más relevante</h2>
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
        {"liveUrl" in project && (project as any).liveUrl ? (
          <Button asChild className="gap-2">
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
          <Button asChild variant="secondary" className="gap-2">
            <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Swagger / Docs
            </a>
          </Button>
        ) : null}

        {"apiUrl" in project && (project as any).apiUrl ? (
          <Button asChild variant="secondary" className="gap-2">
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
          <Button asChild variant="outline" className="gap-2">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Repositorio
            </a>
          </Button>
        ) : null}
      </section>
    </main>
  )
}
