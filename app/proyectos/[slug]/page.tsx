import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/components/portfolio/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

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
    title: `${project.title} | Sosa Ulises Ezequiel`,
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
    <main className="mx-auto max-w-xl px-6 py-24 lg:px-0">
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="mb-12 h-8 px-0 text-primary hover:text-primary hover:bg-transparent"
      >
        <Link href="/">
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

      <div className="mt-16 rounded-lg border border-dashed border-border px-6 py-12 text-center">
        <p className="text-sm text-muted-foreground">
          Contenido detallado del proyecto proximamente.
        </p>
      </div>
    </main>
  )
}
