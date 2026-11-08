import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Laptop,
  Server,
  Database,
  Activity,
  Compass,
  Zap,
  Brain,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react"
import { Project } from "@/lib/projects"
import { Button } from "@/components/ui/button"

interface EntrenateCaseStudyProps {
  project: Project
}

export function EntrenateCaseStudy({ project }: EntrenateCaseStudyProps) {
  return (
    <article className="mx-auto max-w-[1200px] px-6 py-12 sm:py-16 md:py-20 text-left">
      {/* 1. Back Navigation */}
      <nav aria-label="Navegación de retorno" className="mb-8 sm:mb-12">
        <Link
          href="/#proyectos"
          className="group inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Volver a proyectos</span>
        </Link>
      </nav>

      {/* 2. Hero Editorial */}
      <header>
        {/* Eyebrows */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-xs">
          <span className="font-semibold uppercase tracking-wider text-primary">
            01 / CASO DE ESTUDIO
          </span>
          <span className="text-text-muted" aria-hidden="true">
            ·
          </span>
          <span className="text-text-muted uppercase tracking-wider">
            APLICACIÓN FULL STACK · EN DESARROLLO
          </span>
        </div>

        {/* Title & Subtitle group */}
        <div className="mt-4 sm:mt-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Entrenate<span className="text-primary">.</span>
          </h1>

          <p className="mt-3 sm:mt-3.5 text-lg sm:text-2xl font-semibold tracking-tight text-foreground/90 max-w-3xl leading-snug">
            Entrenamiento personalizado, basado en datos y decisiones explicables.
          </p>
        </div>

        {/* Introductory Description (Exact Approved Copy) */}
        <div className="mt-6 sm:mt-6 space-y-4 text-[15px] sm:text-lg leading-[1.7] sm:leading-[1.75] text-text-secondary max-w-3xl">
          <p>
            Entrenate es una plataforma de entrenamiento personalizado que integra
            planificación, seguimiento y adaptación en una única experiencia.
          </p>
          <p>
            Su principal diferencial es Entrenate Coach, un sistema orientado a
            analizar el rendimiento, planificar rutinas y adaptar entrenamientos a
            las necesidades de cada usuario.
          </p>
        </div>

        {/* Metadata Strip & Actions group */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border/60 max-w-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                Mi Rol
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Creador del producto · Desarrollo Full Stack · Arquitectura de Software
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                Estado
              </p>
              <div className="mt-1 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-sm font-medium text-amber-300">
                  En desarrollo
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Fits side-by-side in mobile when width permits, wraps safely */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {project.liveUrl ? (
              <Button
                asChild
                size="default"
                className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm transition-all text-xs sm:text-sm h-9 sm:h-10 px-3.5 sm:px-4"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 font-medium"
                >
                  <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>Acceder a la Demo</span>
                </a>
              </Button>
            ) : null}

            {project.repoUrl ? (
              <Button
                asChild
                variant="outline"
                size="default"
                className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border text-xs sm:text-sm h-9 sm:h-10 px-3.5 sm:px-4"
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 font-mono"
                >
                  <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>Repositorio en GitHub</span>
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        {/* Protagonist Image inside Browser Window Frame */}
        <div className="mt-6 sm:mt-8">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-border/70 bg-[#0F131A] shadow-2xl transition-all duration-300 hover:border-primary/40">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-border/60 bg-[#121620]/90 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
              </div>
              <span className="font-mono text-xs text-text-muted">
                entrenate-three.vercel.app/login
              </span>
              <div className="w-8" />
            </div>

            {/* Real Screenshot */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0e0e0e]">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt || "Pantalla de inicio de sesión de Entrenate"}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* 4 Main Blocks Flow */}
      <div className="mt-16 sm:mt-28 space-y-16 sm:space-y-28">

        {/* 01 / EL PRODUCTO */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                01 / EL PRODUCTO
              </p>
              <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
                Más que registrar entrenamientos.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-[15px] sm:text-base leading-[1.7] sm:leading-[1.75] text-text-secondary">
              <p>
                Planificar un entrenamiento implica organizar objetivos, registrar
                resultados, analizar el progreso y adaptar las sesiones a las
                condiciones de cada persona.
              </p>
              <p>
                Entrenate reúne estos procesos en una única plataforma, permitiendo
                construir una experiencia de entrenamiento estructurada, personalizada
                y orientada a la evolución del usuario.
              </p>
            </div>
          </div>

          {/* Product Journey / Conceptual Flow */}
          <div className="mt-10 sm:mt-12">
            <div className="rounded-2xl border border-border/70 bg-surface/30 p-5 sm:p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted mb-6">
                Recorrido del producto
              </p>

              {/* Desktop Stepper (Preserved horizontal layout) */}
              <div className="hidden md:grid md:grid-cols-5 gap-3 relative">
                {[
                  {
                    step: "01",
                    name: "Perfil",
                    desc: "Objetivos, disponibilidad y nivel",
                  },
                  {
                    step: "02",
                    name: "Planificación",
                    desc: "Rutinas y selección de ejercicios",
                  },
                  {
                    step: "03",
                    name: "Entrenamiento",
                    desc: "Ejecución de la sesión guiada",
                  },
                  {
                    step: "04",
                    name: "Seguimiento",
                    desc: "Registro inmutable de cargas y RPE",
                  },
                  {
                    step: "05",
                    name: "Adaptación",
                    desc: "Ajuste contextual ante fatiga",
                  },
                ].map((item, index, arr) => (
                  <div
                    key={item.step}
                    className="flex flex-col justify-between rounded-xl border border-border/60 bg-surface/60 p-4 transition-colors hover:border-primary/40 relative"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary">
                          {item.step}
                        </span>
                        {index < arr.length - 1 && (
                          <span className="text-text-muted text-xs font-mono">→</span>
                        )}
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-foreground">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Stepper: Compact Vertical Process Line */}
              <div className="md:hidden relative pl-6">
                {/* Thin vertical line in border color running from first dot to last dot */}
                <div
                  className="absolute left-[7px] top-2 bottom-2 w-px bg-border/80"
                  aria-hidden="true"
                />

                <div className="space-y-5">
                  {[
                    {
                      step: "01",
                      name: "Perfil",
                      desc: "Objetivos, disponibilidad y nivel.",
                    },
                    {
                      step: "02",
                      name: "Planificación",
                      desc: "Rutinas y selección de ejercicios.",
                    },
                    {
                      step: "03",
                      name: "Entrenamiento",
                      desc: "Ejecución de la sesión guiada.",
                    },
                    {
                      step: "04",
                      name: "Seguimiento",
                      desc: "Registro de cargas y esfuerzo percibido.",
                    },
                    {
                      step: "05",
                      name: "Adaptación",
                      desc: "Ajustes contextuales según las condiciones del día.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="relative flex items-start gap-3">
                      {/* Small circular indicator positioned exactly on the vertical line */}
                      <span
                        className="absolute -left-[23px] top-1.5 h-3.5 w-3.5 rounded-full border border-primary/50 bg-background flex items-center justify-center ring-4 ring-surface/40"
                        aria-hidden="true"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>

                      {/* Content */}
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-[11px] font-bold text-primary">
                            {item.step}
                          </span>
                          <h3 className="text-sm font-bold text-foreground">
                            {item.name}
                          </h3>
                        </div>
                        <p className="mt-0.5 text-xs text-text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 02 / ARQUITECTURA Y DESARROLLO */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
          <div className="flex flex-col">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              02 / ARQUITECTURA
            </p>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
              Una base diseñada para evolucionar.
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              Estructura desacoplada en tres capas principales que separa la
              interfaz de usuario, los servicios de aplicación y la persistencia de datos.
            </p>
          </div>

          {/* Architectural Diagram */}
          <div className="mt-8 sm:mt-10 rounded-2xl border border-border/70 bg-surface/40 p-5 sm:p-8">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6">
              
              {/* Tier 1: Frontend */}
              <div className="flex-1 rounded-xl border border-border/80 bg-surface/70 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                  <Laptop className="h-4 w-4" />
                  <span>Frontend</span>
                </div>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  Next.js & React
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-text-secondary">TypeScript</span>
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-text-secondary">Tailwind CSS</span>
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-primary/90">Vercel</span>
                </div>
              </div>

              {/* Connector 1 */}
              <div className="flex items-center justify-center py-1 lg:py-0 text-text-muted">
                <div className="flex lg:flex-col items-center gap-1.5 font-mono text-[11px] text-text-muted">
                  <span className="text-xs">REST / HTTPS</span>
                  <span className="text-primary hidden lg:inline">→</span>
                  <span className="text-primary lg:hidden">↓</span>
                </div>
              </div>

              {/* Tier 2: Backend + External Integrations */}
              <div className="flex-[1.4] rounded-xl border border-primary/40 bg-surface/90 p-4 sm:p-5 relative shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                    <Server className="h-4 w-4" />
                    <span>Backend API</span>
                  </div>
                  <span className="rounded bg-primary/10 border border-primary/30 px-2 py-0.5 font-mono text-[11px] text-primary">
                    Render
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  ASP.NET Core (.NET 9)
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-text-secondary">API REST</span>
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-text-secondary">Clean Architecture</span>
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-text-secondary">CQRS · MediatR</span>
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-text-secondary">FluentValidation</span>
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-text-secondary">Identity & JWT</span>
                </div>

                {/* External Integrations (Attached to Backend, not a sequential layer) */}
                <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono text-[11px] text-text-muted">Integraciones externas:</span>
                  <span className="rounded-full border border-border/80 bg-background/60 px-2 py-0.5 font-mono text-[11px] text-text-secondary">
                    Groq (IA Conversacional)
                  </span>
                  <span className="rounded-full border border-border/80 bg-background/60 px-2 py-0.5 font-mono text-[11px] text-text-secondary">
                    Brevo (Email)
                  </span>
                </div>
              </div>

              {/* Connector 2 */}
              <div className="flex items-center justify-center py-1 lg:py-0 text-text-muted">
                <div className="flex lg:flex-col items-center gap-1.5 font-mono text-[11px] text-text-muted">
                  <span className="text-xs">EF Core</span>
                  <span className="text-primary hidden lg:inline">→</span>
                  <span className="text-primary lg:hidden">↓</span>
                </div>
              </div>

              {/* Tier 3: Persistence */}
              <div className="flex-1 rounded-xl border border-border/80 bg-surface/70 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                  <Database className="h-4 w-4" />
                  <span>Persistencia</span>
                </div>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  PostgreSQL
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-text-secondary">Entity Framework Core</span>
                  <span className="rounded bg-background-elevated px-2 py-0.5 text-primary/90">Neon Serverless</span>
                </div>
              </div>

            </div>
          </div>

          {/* 3 Technical Decisions (Editorial Numbered Layout with Dividers) */}
          <div className="mt-10 sm:mt-12 border-t border-border/60 pt-6 sm:pt-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted mb-5 sm:mb-6">
              Criterios de ingeniería
            </p>

            <div className="divide-y divide-border/60">
              {/* Decision 01 */}
              <div className="py-5 sm:py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start">
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-primary">01</span>
                  <h3 className="text-base font-bold text-foreground">
                    Separación de responsabilidades
                  </h3>
                </div>
                <div className="md:col-span-8 text-sm leading-relaxed text-text-secondary">
                  Clean Architecture y CQRS desacoplan la lógica de dominio de los detalles de infraestructura y presentación. Esto permite organizar cada caso de uso de manera aislada, facilitando las pruebas unitarias y permitiendo evolucionar la API sin comprometer el núcleo del sistema.
                </div>
              </div>

              {/* Decision 02 */}
              <div className="py-5 sm:py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start">
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-primary">02</span>
                  <h3 className="text-base font-bold text-foreground">
                    Integridad del historial
                  </h3>
                </div>
                <div className="md:col-span-8 text-sm leading-relaxed text-text-secondary">
                  Las sesiones completadas se registran como instancias independientes e inmutables. De este modo, cualquier ajuste posterior en las rutinas maestras o en el catálogo de ejercicios no altera los registros históricos de volumen, cargas y esfuerzo ya ejecutados.
                </div>
              </div>

              {/* Decision 03 */}
              <div className="py-5 sm:py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start">
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-primary">03</span>
                  <h3 className="text-base font-bold text-foreground">
                    Validación y control de cambios
                  </h3>
                </div>
                <div className="md:col-span-8 text-sm leading-relaxed text-text-secondary">
                  Las operaciones sensibles se protegen mediante validaciones automáticas con FluentValidation y reglas de dominio antes de impactar el almacenamiento. En procesos de adaptación o replanificación, el sistema exige confirmación explícita del usuario para mantenerlo siempre en control.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / ENTRENATE COACH */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
          <div className="flex flex-col">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              03 / ENTRENATE COACH
            </p>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
              Inteligencia aplicada al entrenamiento.
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              Entrenate Coach combina motores de decisión basados en reglas con inteligencia artificial conversacional para analizar el rendimiento, proponer entrenamientos y adaptar sesiones de forma explicable.
            </p>
          </div>

          {/* Principle Box */}
          <div className="mt-6 sm:mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-primary/40 bg-primary/10 p-2.5 text-primary shrink-0 hidden sm:flex">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                  Principio arquitectónico
                </p>
                <blockquote className="mt-2 text-base sm:text-lg font-medium text-foreground leading-relaxed">
                  “Las decisiones de entrenamiento se generan mediante motores determinísticos. La inteligencia artificial conversacional permite explicar esas decisiones y facilitar la interacción, sin reemplazar las reglas de negocio ni el control del usuario.”
                </blockquote>
              </div>
            </div>
          </div>

          {/* 3 Core Modules */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Module 1: Progress Coach */}
            <div className="rounded-xl border border-border/70 bg-surface/50 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Progress Coach
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Analiza los entrenamientos registrados y genera recomendaciones de progresión basadas en el rendimiento y el esfuerzo percibido.
                </p>
              </div>
            </div>

            {/* Module 2: Routine Planner */}
            <div className="rounded-xl border border-border/70 bg-surface/50 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Routine Planner
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Genera propuestas de rutinas teniendo en cuenta los objetivos, la experiencia, la disponibilidad y el equipamiento del usuario.
                </p>
              </div>
            </div>

            {/* Module 3: Adaptive Training */}
            <div className="rounded-xl border border-border/70 bg-surface/50 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Adaptive Training
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Propone ajustes contextuales para una sesión según las condiciones del día, preservando la planificación original.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / EVOLUCIÓN */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16 pb-8">
          <div className="flex flex-col">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              04 / EVOLUCIÓN
            </p>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
              Un producto en desarrollo continuo.
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              Entrenate continúa evolucionando mediante nuevas funcionalidades, mejoras de experiencia y validaciones técnicas.
            </p>
          </div>

          {/* 3 Lightweight Columns with Vertical Dividers */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-border/60 rounded-2xl border border-border/70 bg-surface/30 p-5 sm:p-8">
            
            {/* Category 1: Implementado */}
            <div className="md:pr-8 space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                <span>Implementado</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Base consolidada
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-text-secondary pt-1">
                <li>• Autenticación con JWT, ASP.NET Core Identity y PostgreSQL.</li>
                <li>• Flujo de perfil, catálogo de ejercicios y registro de rutinas.</li>
                <li>• Motores determinísticos de análisis y adaptación en el repositorio.</li>
              </ul>
            </div>

            {/* Category 2: En validación */}
            <div className="md:px-8 space-y-3 pt-5 md:pt-0 border-t md:border-t-0 border-border/60">
              <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-semibold uppercase tracking-wider">
                <Clock className="h-4 w-4" />
                <span>En validación</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Pruebas e integración
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-text-secondary pt-1">
                <li>• Pruebas de integración entre frontend y servicios de backend.</li>
                <li>• Refinamiento de la experiencia de usuario en ajustes contextuales.</li>
                <li>• Despliegue operativo y validación de latencia en servicios cloud.</li>
              </ul>
            </div>

            {/* Category 3: Próximos pasos */}
            <div className="md:pl-8 space-y-3 pt-5 md:pt-0 border-t md:border-t-0 border-border/60">
              <div className="flex items-center gap-2 text-text-muted font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Próximos pasos</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Próximas mejoras
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-text-secondary pt-1">
                <li>• Analítica avanzada de tendencias y sobrecarga acumulada.</li>
                <li>• Modo offline para registro de entrenamientos sin conexión.</li>
                <li>• Expansión del catálogo y alternativas biomecánicas.</li>
              </ul>
            </div>

          </div>
        </section>

      </div>

      {/* Footer Navigation Back to Projects */}
      <footer className="mt-16 pt-10 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/#proyectos"
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Volver al catálogo de proyectos</span>
        </Link>
        <Link
          href="/proyectos/blossom-institute"
          className="group inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-foreground transition-colors font-mono text-xs"
        >
          <span>Siguiente proyecto: Blossom Institute</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </footer>
    </article>
  )
}
