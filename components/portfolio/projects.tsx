import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { reveal } from "@/lib/motion"

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const entrenate = featuredProjects.find((p) => p.slug === "entrenate")
  const blossom = featuredProjects.find((p) => p.slug === "blossom-institute")

  return (
    <div className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
      {/* Section Header */}
      <div className="flex flex-col" {...reveal()}>
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
          03 / PROYECTOS DESTACADOS
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-foreground leading-tight lg:leading-[1.2]">
          Software que construyo.
        </h2>
        <p className="mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
          Una selección de proyectos donde aplico mis conocimientos para desarrollar soluciones tecnológicas a necesidades reales.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mt-12 sm:mt-16">
        {/* Project 01 — Entrenate */}
        {entrenate ? (
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Frame (7 cols desktop) */}
            <div className="lg:col-span-7" {...reveal({ variant: "media" })}>
              <div className="group relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-[#141923] via-[#0F131A] to-[#0A0D13] shadow-xl transition-[border-color,box-shadow] duration-300 ease-out hover:border-primary/40 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] flex flex-col justify-between">
                {/* Mockup Window Header */}
                <div className="z-10 flex items-center justify-between border-b border-border/60 bg-[#121620]/90 px-4 py-2.5 backdrop-blur">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  </div>
                  <span className="font-mono text-[11px] text-text-muted/80">
                    entrenate-three.vercel.app/login
                  </span>
                  <div className="w-8" />
                </div>

                {/* Real Screenshot Preview */}
                <div className="relative flex-1 w-full h-full overflow-hidden bg-[#0e0e0e]">
                  {entrenate.imageUrl ? (
                    <Image
                      src={entrenate.imageUrl}
                      alt={entrenate.imageAlt || "Pantalla de inicio de sesión - Entrenate"}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      priority
                    />
                  ) : null}
                  {/* Subtle dark gradient overlay at bottom */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0A0D13] via-[#0A0D13]/60 to-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Content (5 cols desktop) */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              {/* Index & Badges */}
              <div className="flex flex-wrap items-center gap-2.5" {...reveal({ delay: 1 })}>
                <span className="font-mono text-xs font-bold text-primary tracking-wider">
                  01
                </span>
                <span className="font-mono text-xs text-text-muted">/</span>
                <span className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider">
                  {entrenate.category}
                </span>
                {entrenate.status ? (
                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-300">
                    {entrenate.status}
                  </span>
                ) : null}
              </div>

              {/* Title & Type */}
              <div {...reveal({ delay: 2 })}>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {entrenate.title}
                </h3>
                {entrenate.type ? (
                  <p className="mt-1 font-mono text-xs text-text-muted">
                    {entrenate.type}
                  </p>
                ) : null}
              </div>

              {/* Description */}
              <p
                className="text-[15px] sm:text-base leading-[1.7] text-text-secondary text-left"
                {...reveal({ delay: 3 })}
              >
                {entrenate.summary}
              </p>

              {/* Technologies (Max 4-5) */}
              <div className="space-y-2 pt-1" {...reveal({ delay: 4 })}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                  Tecnologías principales:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {entrenate.primaryTags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/70 bg-surface/80 px-2.5 py-1 font-mono text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3" {...reveal({ delay: 5 })}>
                <Button
                  asChild
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm"
                >
                  <Link
                    href={`/proyectos/${entrenate.slug}`}
                    className="inline-flex items-center gap-1.5 font-medium"
                  >
                    <span>Ver caso de estudio</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                {entrenate.liveUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border"
                  >
                    <a
                      href={entrenate.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-primary" />
                      <span>Demo</span>
                    </a>
                  </Button>
                ) : null}

                {entrenate.repoUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border"
                  >
                    <a
                      href={entrenate.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </article>
        ) : null}

        {/* Subtle Horizontal Divider between Projects (64-80px spacing on mobile) */}
        <div
          className="border-t border-border/60 my-16 sm:my-20 lg:my-24"
          aria-hidden="true"
          {...reveal({ variant: "rule" })}
        />

        {/* Project 02 — Blossom Institute (Alternating layout on desktop) */}
        {blossom ? (
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Frame (7 cols desktop, placed on right via lg:order-2) */}
            <div className="lg:col-span-7 lg:order-2" {...reveal({ variant: "media", delayLg: 2 })}>
              <div className="group relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-[#141923] via-[#0F131A] to-[#0A0D13] shadow-xl transition-[border-color,box-shadow] duration-300 ease-out hover:border-primary/40 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] flex flex-col justify-between">
                {/* Mockup Window Header */}
                <div className="z-10 flex items-center justify-between border-b border-border/60 bg-[#121620]/90 px-4 py-2.5 backdrop-blur">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  </div>
                  <span className="font-mono text-[11px] text-text-muted/80">
                    blossom-institute.vercel.app/login
                  </span>
                  <div className="w-8" />
                </div>

                {/* Real Screenshot Preview of Blossom Institute Frontend */}
                <div className="relative flex-1 w-full h-full overflow-hidden bg-white">
                  {blossom.imageUrl ? (
                    <Image
                      src={blossom.imageUrl}
                      alt={blossom.imageAlt || "Pantalla de inicio de sesión - Blossom Institute"}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  ) : null}
                  {/* Subtle dark gradient overlay at bottom */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0A0D13] via-[#0A0D13]/60 to-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Content (5 cols desktop, placed on left via lg:order-1) */}
            <div className="lg:col-span-5 lg:order-1 flex flex-col space-y-5">
              {/* Index & Badges */}
              <div className="flex flex-wrap items-center gap-2.5" {...reveal({ delay: 1, delayLg: 0 })}>
                <span className="font-mono text-xs font-bold text-primary tracking-wider">
                  02
                </span>
                <span className="font-mono text-xs text-text-muted">/</span>
                <span className="font-mono text-xs font-semibold text-text-muted uppercase tracking-wider">
                  {blossom.category}
                </span>
                {blossom.status ? (
                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-300">
                    {blossom.status}
                  </span>
                ) : null}
              </div>

              {/* Title & Type */}
              <div {...reveal({ delay: 2, delayLg: 1 })}>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  {blossom.title}
                </h3>
                {blossom.type ? (
                  <p className="mt-1 font-mono text-xs text-text-muted">
                    {blossom.type}
                  </p>
                ) : null}
              </div>

              {/* Description */}
              <p
                className="text-[15px] sm:text-base leading-[1.7] text-text-secondary text-left"
                {...reveal({ delay: 3, delayLg: 2 })}
              >
                {blossom.summary}
              </p>

              {/* Technologies (Max 4-5) */}
              <div className="space-y-2 pt-1" {...reveal({ delay: 4, delayLg: 3 })}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                  Tecnologías principales:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {blossom.primaryTags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/70 bg-surface/80 px-2.5 py-1 font-mono text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3" {...reveal({ delay: 5, delayLg: 4 })}>
                <Button
                  asChild
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm"
                >
                  <Link
                    href={`/proyectos/${blossom.slug}`}
                    className="inline-flex items-center gap-1.5 font-medium"
                  >
                    <span>Ver caso de estudio</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                {blossom.liveUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border"
                  >
                    <a
                      href={blossom.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-primary" />
                      <span>Demo</span>
                    </a>
                  </Button>
                ) : null}

                {blossom.frontendRepoUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border"
                  >
                    <a
                      href={blossom.frontendRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Frontend</span>
                    </a>
                  </Button>
                ) : null}

                {blossom.backendRepoUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border"
                  >
                    <a
                      href={blossom.backendRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Backend</span>
                    </a>
                  </Button>
                ) : null}

                {blossom.docsUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border"
                  >
                    <a
                      href={blossom.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-primary" />
                      <span>Swagger</span>
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </article>
        ) : null}
      </div>
    </div>
  )
}
