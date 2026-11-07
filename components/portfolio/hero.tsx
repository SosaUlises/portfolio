import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, FileText, MapPin } from "lucide-react"

export function Hero() {
  return (
    <div className="pt-6 pb-12 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Personal Presentation & CTAs */}
        <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
          {/* Eyebrow */}
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
            ANALISTA EN SISTEMAS · SOFTWARE DEVELOPMENT
          </p>

          {/* Name */}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Ulises Sosa<span className="text-primary">.</span>
          </h1>

          {/* Professional Headline */}
          <p className="mt-3 text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-text-secondary">
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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

        {/* Right Column: Editorial Photograph */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="group relative w-56 sm:w-64 lg:w-72 xl:w-80">
            {/* Subtle frame container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/80 bg-surface p-2 shadow-2xl transition-all duration-300 group-hover:border-primary/40">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-background-elevated">
                <Image
                  src="/uliphoto.jpg"
                  alt="Fotografía profesional de Ulises Sosa"
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                  priority
                />
              </div>
            </div>

            {/* Subtle decorative framing accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-primary/20 opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-primary/40"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
