import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, FileText, MapPin } from "lucide-react"

export function Hero() {
  return (
    <div>
      {/* ------------------------------------------------------------------ */}
      {/* Mobile Layout (< 768px)                                            */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex min-h-[calc(100dvh-4.5rem)] flex-col justify-between pt-3 pb-4 md:hidden text-left">
        {/* Upper & Middle Content */}
        <div className="space-y-5">
          {/* Upper Block: Identity & Circular Photo */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Eyebrow */}
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                HOLA, SOY
              </p>

              {/* Name */}
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Ulises Sosa<span className="text-primary">.</span>
              </h1>

              {/* Professional Headline (split naturally) */}
              <div className="mt-1 text-sm font-medium leading-tight text-text-secondary">
                <p>Analista en Sistemas</p>
                <p className="text-text-muted">Desarrollador de Software</p>
              </div>
            </div>

            {/* Right: Circular Photo (96–112px) */}
            <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28 overflow-hidden rounded-full border border-border/80 shadow-md">
              <Image
                src="/uliphoto.jpg"
                alt="Fotografía de Ulises Sosa"
                fill
                className="object-cover object-center"
                sizes="112px"
                priority
              />
            </div>
          </div>

          {/* Content: Description, Location & Actions */}
          <div className="space-y-4">
            {/* Brief Description */}
            <p className="text-[15px] sm:text-base leading-relaxed text-text-secondary">
              Soy Analista en Sistemas y estudiante avanzado de Ingeniería en Sistemas. Desarrollo soluciones backend y full stack, con interés en la arquitectura de software, la tecnología y el aprendizaje continuo.
            </p>

            {/* Location */}
            <p className="flex items-center gap-1.5 text-xs text-text-muted">
              <MapPin className="h-3.5 w-3.5 text-primary/80" aria-hidden="true" />
              <span>Rosario, Santa Fe, Argentina</span>
            </p>

            {/* Actions */}
            <div className="space-y-3 pt-1">
              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="default"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary-hover font-medium shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <Link href="/#proyectos">
                    Ver proyectos
                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  size="default"
                  className="gap-2 border border-border/80 bg-surface text-text-primary hover:bg-surface-hover hover:border-primary/40 transition-transform hover:-translate-y-0.5"
                >
                  <a
                    href="/CV_SosaUlises.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Descargar CV
                  </a>
                </Button>
              </div>

              {/* Social CTAs: Discrete GitHub & LinkedIn */}
              <div className="flex items-center gap-2 pt-0.5">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1.5 rounded-lg border-border/80 bg-surface/60 px-3 text-xs text-text-secondary hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="Perfil de LinkedIn de Ulises Sosa"
                >
                  <a
                    href="https://linkedin.com/in/sosaulises"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1.5 rounded-lg border-border/80 bg-surface/60 px-3 text-xs text-text-secondary hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="Perfil de GitHub de Ulises Sosa"
                >
                  <a
                    href="https://github.com/SosaUlises"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Subtle Scroll Indicator */}
        <div className="pt-4 pb-1">
          <a
            href="/#sobre-mi"
            aria-label="Deslizar a la sección Sobre mí"
            className="group inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-foreground transition-colors"
          >
            <span>Deslizá para explorar</span>
            <ArrowDown
              className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce motion-reduce:animate-none"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Desktop Layout (>= 768px)                                          */}
      {/* ------------------------------------------------------------------ */}
      <div className="hidden md:grid md:grid-cols-12 md:items-center md:gap-10 lg:gap-12 md:py-12 lg:py-16">
        {/* Left Column: Personal Presentation & CTAs */}
        <div className="flex flex-col items-start text-left md:col-span-7 lg:col-span-7">
          {/* Eyebrow */}
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
            ANALISTA EN SISTEMAS · SOFTWARE DEVELOPMENT
          </p>

          {/* Name */}
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-foreground lg:text-7xl">
            Ulises Sosa<span className="text-primary">.</span>
          </h1>

          {/* Professional Headline */}
          <p className="mt-3 text-xl font-medium tracking-tight text-text-secondary sm:text-2xl lg:text-3xl">
            Analista en Sistemas <span className="text-border">|</span> Desarrollador de Software
          </p>

          {/* Summary / Lead */}
          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-text-secondary">
            Soy Analista en Sistemas y estudiante avanzado de Ingeniería en Sistemas. Desarrollo soluciones backend y full stack, con interés en la arquitectura de software, la tecnología y el aprendizaje continuo.
          </p>

          {/* Location */}
          <p className="mt-4 flex items-center gap-1.5 text-xs text-text-muted">
            <MapPin className="h-3.5 w-3.5 text-primary/80" aria-hidden="true" />
            <span>Rosario, Santa Fe, Argentina</span>
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary-hover font-medium shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Link href="/#proyectos">
                Ver proyectos
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>

            {/* Secondary CTA: CV */}
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="gap-2 border border-border/80 bg-surface text-text-primary hover:bg-surface-hover hover:border-primary/40 transition-transform hover:-translate-y-0.5"
            >
              <a
                href="/CV_SosaUlises.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Descargar CV
              </a>
            </Button>

            {/* Social CTAs */}
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-lg border-border/80 bg-surface/60 text-text-secondary hover:text-foreground hover:border-primary/50 transition-colors"
                aria-label="Perfil de LinkedIn de Ulises Sosa"
              >
                <a
                  href="https://linkedin.com/in/sosaulises"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-lg border-border/80 bg-surface/60 text-text-secondary hover:text-foreground hover:border-primary/50 transition-colors"
                aria-label="Perfil de GitHub de Ulises Sosa"
              >
                <a
                  href="https://github.com/SosaUlises"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Circular Photograph (240–280px) */}
        <div className="flex justify-center md:col-span-5 md:justify-end">
          <div className="relative h-60 w-60 sm:h-64 sm:w-64 lg:h-72 lg:w-72 shrink-0 overflow-hidden rounded-full border border-border/80 shadow-xl">
            <Image
              src="/uliphoto.jpg"
              alt="Fotografía profesional de Ulises Sosa"
              fill
              className="object-cover object-center transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 1024px) 256px, 288px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
