import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Layers, CheckCircle2, Lightbulb, Wrench } from "lucide-react"
import { EntrenateCaseStudy } from "@/components/portfolio/project-detail/entrenate-case-study"
import { BlossomCaseStudy } from "@/components/portfolio/project-detail/blossom-case-study"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return { title: "Proyecto no encontrado" }

  const url = `https://portfolio-sosaulises.vercel.app/proyectos/${project.slug}`
  const description = project.summary ?? project.description
  const image = project.imageUrl ?? "/og-image.png"

  return {
    title: project.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} — Caso de estudio | Ulises Sosa`,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: project.imageAlt ?? `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Caso de estudio | Ulises Sosa`,
      description,
      images: [image],
    },
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

  if (project.slug === "entrenate") {
    return <EntrenateCaseStudy project={project} />
  }

  if (project.slug === "blossom-institute") {
    return <BlossomCaseStudy project={project} />
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      {/* Back button */}
      <Link
        href="/#proyectos"
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-hover hero-enter-fade focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
        Volver a proyectos
      </Link>

      {/* Main Card */}
      <article className="card p-6 sm:p-10 hero-enter">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {project.category}
          </span>
          {project.status ? (
            <span
              className={[
                "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                project.status === "En desarrollo"
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                  : "border-border bg-secondary text-muted-foreground",
              ].join(" ")}
            >
              {project.status}
            </span>
          ) : null}
        </div>

        {/* Title */}
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {project.title}
        </h1>

        {/* Role */}
        {project.role ? (
          <p className="mt-2 text-sm font-medium text-text-muted">
            <span className="text-foreground font-semibold">Rol:</span> {project.role}
          </p>
        ) : null}

        {/* Image Preview or Fallback */}
        <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/60 bg-background-elevated">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.imageAlt ?? project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
              <div className="rounded-2xl border border-border bg-surface p-4 text-primary shadow-sm">
                <Layers className="h-8 w-8" />
              </div>
              <p className="mt-4 text-lg font-bold text-foreground">
                {project.title}
              </p>
              <p className="mt-1 text-xs font-mono text-text-muted">
                {project.category} · {project.status ?? "Software Project"}
              </p>
              <p className="mt-3 text-xs text-muted-foreground max-w-sm">
                Capturas de interfaz en proceso de actualización según el despliegue más reciente.
              </p>
            </div>
          )}
        </div>

        {/* Description / Summary */}
        <div className="mt-8 space-y-4 text-base leading-relaxed text-text-secondary">
          <p>{project.description}</p>
        </div>

        {/* Tags */}
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

        {/* Challenge & Solution */}
        {project.challenge || project.solution ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {project.challenge ? (
              <div className="rounded-xl border border-border/70 bg-surface/50 p-6">
                <h2 className="flex items-center gap-2 text-sm font-bold tracking-wide text-foreground">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  Problema y Objetivo
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {project.challenge}
                </p>
              </div>
            ) : null}

            {project.solution ? (
              <div className="rounded-xl border border-border/70 bg-surface/50 p-6">
                <h2 className="flex items-center gap-2 text-sm font-bold tracking-wide text-foreground">
                  <Wrench className="h-4 w-4 text-primary" />
                  Solución Desarrollada
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {project.solution}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Architecture Details */}
        {project.architecture ? (
          <div className="mt-8 rounded-xl border border-border/70 bg-surface/40 p-6">
            <h2 className="text-sm font-bold tracking-wide text-foreground">
              Arquitectura y Decisiones Técnicas
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {project.architecture}
            </p>
          </div>
        ) : null}

        {/* Key Features */}
        {project.features && project.features.length > 0 ? (
          <section className="mt-8 rounded-xl border border-border/70 bg-surface/40 p-6">
            <h2 className="text-sm font-bold tracking-wide text-foreground">
              Funcionalidades Principales Implementadas
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-text-secondary">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Highlights fallback */}
        {!project.features && project.highlights && project.highlights.length > 0 ? (
          <section className="mt-8 rounded-xl border border-border/70 bg-surface/40 p-6">
            <h2 className="text-sm font-bold tracking-wide text-foreground">
              Aspectos Destacados
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-text-secondary">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Learnings */}
        {project.learnings && project.learnings.length > 0 ? (
          <section className="mt-8 rounded-xl border border-border/70 bg-surface/30 p-6">
            <h2 className="text-sm font-bold tracking-wide text-foreground">
              Aprendizajes y Estado Actual
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-muted">
              {project.learnings.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary font-bold">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Action Buttons */}
        <section className="mt-10 flex flex-wrap gap-3 border-t border-border/60 pt-6">
          {project.liveUrl ? (
            <Button asChild className="gap-2 transition-transform hover:scale-[1.02]">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Acceder a la Aplicación (Demo)
              </a>
            </Button>
          ) : null}

          {project.docsUrl ? (
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
                Documentación / Swagger
              </a>
            </Button>
          ) : null}

          {project.apiUrl ? (
            <Button
              asChild
              variant="secondary"
              className="gap-2 transition-transform hover:scale-[1.02]"
            >
              <a
                href={project.apiUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                API Backend
              </a>
            </Button>
          ) : null}

          {project.frontendRepoUrl ? (
            <Button
              asChild
              variant="outline"
              className="gap-2 transition-transform hover:scale-[1.02]"
            >
              <a
                href={project.frontendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Repositorio Frontend
              </a>
            </Button>
          ) : null}

          {project.backendRepoUrl ? (
            <Button
              asChild
              variant="outline"
              className="gap-2 transition-transform hover:scale-[1.02]"
            >
              <a
                href={project.backendRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Repositorio Backend
              </a>
            </Button>
          ) : project.repoUrl ? (
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
                Repositorio en GitHub
              </a>
            </Button>
          ) : null}
        </section>
      </article>
    </main>
  )
}
