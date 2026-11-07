import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, FileText, MapPin } from "lucide-react"
import { ScrollIndicator } from "@/components/portfolio/scroll-indicator"

export function Hero() {
  return (
    <div className="flex min-h-[calc(100dvh-4rem)] flex-col justify-between">
      {/* ------------------------------------------------------------------ */}
      {/* Zone 1: Flexible Top Space                                         */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex-1 min-h-[1.5rem] sm:min-h-[2rem]" aria-hidden="true" />

      {/* ------------------------------------------------------------------ */}
      {/* Zone 2: Main Content (Vertically Centered in Available Viewport)   */}
      {/* ------------------------------------------------------------------ */}
      <div className="w-full shrink-0 my-auto py-2">
        {/* ================================================================ */}
        {/* Mobile Layout (< 768px): Classic Centered Vertical Composition   */}
        {/* ================================================================ */}
        <div className="flex flex-col items-center text-center md:hidden">
          {/* 1. Circular Photograph (180–210px) */}
          <div className="relative h-[190px] w-[190px] sm:h-[210px] sm:w-[210px] shrink-0 overflow-hidden rounded-full border border-border/80 shadow-lg">
            <Image
              src="/uliphoto.jpg"
              alt="Fotografía de Ulises Sosa"
              fill
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 768px) 420px, 500px"
              priority
            />
          </div>

          {/* 2. Dominant Name (38–42px) */}
          <h1 className="mt-6 text-[38px] sm:text-[42px] leading-tight font-extrabold tracking-tight text-foreground">
            Ulises Sosa<span className="text-primary">.</span>
          </h1>

          {/* 3. Professional Headline & Education */}
          <div className="mt-2.5 space-y-1">
            <div className="text-base sm:text-lg font-medium leading-snug text-text-secondary">
              <p>Analista en Sistemas</p>
              <p className="text-text-muted">Desarrollador de Software</p>
            </div>
            <p className="text-xs sm:text-sm text-text-muted/90 font-normal">
              Estudiante de Ingeniería en Sistemas
            </p>
          </div>

          {/* 4. Discrete Location */}
          <p className="mt-3.5 flex items-center justify-center gap-1.5 text-xs text-text-muted">
            <MapPin className="h-3.5 w-3.5 text-primary/80" aria-hidden="true" />
            <span>Rosario, Santa Fe, Argentina</span>
          </p>

          {/* 5. Primary & Secondary Actions */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
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

          {/* 6. Secondary Social Links */}
          <div className="mt-3.5 flex items-center justify-center gap-2">
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

        {/* ================================================================ */}
        {/* Desktop Layout (>= 768px): Approved Two-Column Editorial Grid    */}
        {/* ================================================================ */}
        <div className="hidden md:grid md:grid-cols-12 md:items-center md:gap-10 lg:gap-12">
          {/* Left Column: Personal Presentation & CTAs */}
          <div className="flex flex-col items-start text-left md:col-span-7 lg:col-span-7">
            {/* Name */}
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground lg:text-7xl">
              Ulises Sosa<span className="text-primary">.</span>
            </h1>

            {/* Professional Headline */}
            <p className="mt-3 text-xl font-medium tracking-tight text-text-secondary sm:text-2xl lg:text-3xl">
              Analista en Sistemas <span className="text-border">|</span> Desarrollador de Software
            </p>

            {/* Summary / Lead (Kept exclusively on desktop) */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-text-secondary">
              Soy Analista en Sistemas y estudiante avanzado de Ingeniería en Sistemas. Desarrollo aplicaciones full stack, con especial interés en la arquitectura de software, la resolución de problemas y la creación de soluciones tecnológicas.
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

          {/* Right Column: Circular Photograph (230–250px) */}
          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="relative h-[235px] w-[235px] lg:h-[250px] lg:w-[250px] shrink-0 overflow-hidden rounded-full border border-border/80 shadow-lg">
              <Image
                src="/uliphoto.jpg"
                alt="Fotografía profesional de Ulises Sosa"
                fill
                quality={90}
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 1024px) 470px, 500px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Zone 3: Bottom Zone with Dynamic Scroll Indicator                  */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex flex-1 min-h-[2.5rem] sm:min-h-[3.5rem] items-end justify-center pb-4 sm:pb-6">
        <ScrollIndicator targetHref="/#sobre-mi" />
      </div>
    </div>
  )
}
