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
  ShieldCheck,
  GraduationCap,
  UserCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react"
import { Project } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { reveal, type RevealDelay } from "@/lib/motion"

interface BlossomCaseStudyProps {
  project: Project
}

export function BlossomCaseStudy({ project }: BlossomCaseStudyProps) {
  return (
    <article className="mx-auto max-w-[1200px] px-6 pt-8 pb-12 sm:py-16 md:py-20 text-left">
      {/* 1. Back Navigation */}
      <nav aria-label="Navegación de retorno" className="mb-5 sm:mb-12 hero-enter-fade">
        <Link
          href="/#proyectos"
          className="group inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Volver a proyectos</span>
        </Link>
      </nav>

      {/* 2. Hero Editorial */}
      <header>
        {/* Eyebrows */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-xs hero-enter hero-step-1">
          <span className="font-semibold uppercase tracking-wider text-primary">
            02 / CASO DE ESTUDIO
          </span>
          <span className="text-text-muted" aria-hidden="true">
            ·
          </span>
          <span className="text-text-muted uppercase tracking-wider">
            APLICACIÓN FULL STACK · EN DESARROLLO
          </span>
        </div>

        {/* Title & Subtitle group */}
        <div className="mt-3.5 sm:mt-6 hero-enter hero-step-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Blossom Institute<span className="text-primary">.</span>
          </h1>

          <p className="mt-3 sm:mt-3.5 text-lg sm:text-2xl font-semibold tracking-tight text-foreground/90 max-w-3xl leading-snug">
            Una plataforma académica diseñada para conectar la gestión, la enseñanza y el aprendizaje.
          </p>
        </div>

        {/* Introductory Description (Exact Approved Copy) */}
        <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-[15px] sm:text-lg leading-[1.7] sm:leading-[1.75] text-text-secondary max-w-3xl hero-enter hero-step-3">
          <p>
            Blossom Institute es una plataforma Full Stack de gestión académica que desarrollo para un instituto de inglés, con el objetivo de centralizar cursos, estudiantes, asistencia, actividades y seguimiento del aprendizaje.
          </p>
          <p>
            Su diseño integra las experiencias de administradores, profesores y alumnos, conectando los procesos académicos mediante una misma solución.
          </p>
        </div>

        {/* Metadata Strip & Actions group */}
        <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-border/60 max-w-xl hero-enter hero-step-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                Mi Rol
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Desarrollo Full Stack · Modelado del Dominio · Arquitectura de Software
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

          {/* Action Buttons: Demo, Frontend, Backend */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Button
              asChild
              size="default"
              className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm transition-[transform,background-color] duration-200 hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm h-9 sm:h-10 px-3.5 sm:px-4"
            >
              <a
                href="https://blossom-institute.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 font-medium"
              >
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Acceder a la Demo</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="default"
              className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm h-9 sm:h-10 px-3.5 sm:px-4"
            >
              <a
                href="https://github.com/SosaUlises/blossom-institute-front"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 font-mono"
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Frontend</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="default"
              className="border-border/80 bg-surface/50 text-foreground hover:bg-surface hover:border-border transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm h-9 sm:h-10 px-3.5 sm:px-4"
            >
              <a
                href="https://github.com/SosaUlises/blossom-institute-api"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 font-mono"
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Backend</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Protagonist Image inside Editorial Window Frame */}
        <div className="mt-5 sm:mt-8 hero-enter-media hero-step-5">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-border/70 bg-[#0F131A] shadow-2xl transition-[border-color,box-shadow] duration-300 ease-out [@media(hover:hover)]:hover:border-primary/40 [@media(hover:hover)]:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-border/60 bg-[#121620]/90 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
              </div>
              <span className="font-mono text-xs text-text-muted">
                blossom-institute.vercel.app/login
              </span>
              <div className="w-8" />
            </div>

            {/* Real Screenshot */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0e0e0e]">
              <Image
                src="/blossom-preview.jpg"
                alt="Pantalla de inicio de sesión de Blossom Institute"
                fill
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* 5 Main Blocks Flow */}
      <div className="mt-16 sm:mt-28 space-y-16 sm:space-y-28">

        {/* 01 / EL PRODUCTO */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start" {...reveal()}>
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                01 / EL PRODUCTO
              </p>
              <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
                Una gestión académica conectada.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-[15px] sm:text-base leading-[1.7] sm:leading-[1.75] text-text-secondary">
              <p>
                La gestión académica reúne múltiples procesos que necesitan compartir
                información: cursos, inscripciones, clases, asistencia, tareas, evaluaciones
                y seguimiento de estudiantes.
              </p>
              <p>
                Blossom organiza estos procesos dentro de una misma plataforma, ofreciendo
                una fuente común de información y experiencias adaptadas a las
                responsabilidades de cada usuario.
              </p>
            </div>
          </div>
        </section>

        {/* 02 / EXPERIENCIAS POR ROL */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
          <div className="flex flex-col" {...reveal()}>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              02 / EXPERIENCIAS POR ROL
            </p>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
              Un sistema. Tres formas de trabajar.
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              Un mismo modelo de dominio responde de manera específica a las
              responsabilidades operativas y necesidades pedagógicas de cada perfil.
            </p>
          </div>

          {/* 3 Role Cards (Without redundant footer tags or unnecessary dividers) */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Role 1: Admin */}
            <div
              className="rounded-xl border border-border/70 bg-surface/50 p-5 sm:p-6 flex flex-col justify-between transition-[border-color,background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40 hover:bg-surface/80 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
              {...reveal({ delay: 1 })}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                    01 / ADMIN
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Administrador
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Centraliza la gestión de alumnos, docentes, cursos, matrículas y
                  seguimiento académico, con acceso a reportes e información institucional.
                </p>
              </div>
            </div>

            {/* Role 2: Teacher */}
            <div
              className="rounded-xl border border-border/70 bg-surface/50 p-5 sm:p-6 flex flex-col justify-between transition-[border-color,background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40 hover:bg-surface/80 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
              {...reveal({ delay: 2 })}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                    02 / TEACHER
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Profesor
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Organiza sus cursos y clases, registra asistencia, publica actividades
                  y realiza correcciones y calificaciones.
                </p>
              </div>
            </div>

            {/* Role 3: Student */}
            <div
              className="rounded-xl border border-border/70 bg-surface/50 p-5 sm:p-6 flex flex-col justify-between transition-[border-color,background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40 hover:bg-surface/80 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
              {...reveal({ delay: 3 })}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                    03 / STUDENT
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Alumno
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Consulta sus cursos y actividades, realiza entregas y accede a
                  devoluciones, calificaciones y seguimiento de asistencia.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 03 / ARQUITECTURA FULL STACK */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
          <div className="flex flex-col" {...reveal()}>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              03 / ARQUITECTURA
            </p>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
              Una arquitectura para conectar experiencias.
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              Arquitectura Full Stack que integra una capa BFF mediante Route Handlers de Next.js, centralizando la comunicación con la API y protegiendo el acceso a las credenciales de sesión.
            </p>
          </div>

          {/* Architectural Diagram */}
          <div className="mt-8 sm:mt-10 rounded-2xl border border-border/70 bg-surface/40 p-5 sm:p-8" {...reveal({ delay: 1 })}>
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6">
              
              {/* Tier 1: Frontend UI + BFF */}
              <div
                className="flex-1 rounded-xl border border-border/80 bg-surface/70 p-4 sm:p-5 flex flex-col justify-between transition-[border-color,background-color] duration-200 hover:border-primary/40 hover:bg-surface/90"
                {...reveal({ delay: 1 })}
              >
                <div>
                  <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                    <Laptop className="h-4 w-4" />
                    <span>Frontend & BFF</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-foreground">
                    Next.js 16 & React 19
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
                    <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">TypeScript</span>
                    <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">Tailwind CSS</span>
                    <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">shadcn/ui</span>
                    <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-primary/90">Vercel</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                      <Lock className="h-3.5 w-3.5 text-primary" />
                      <span>BFF integrado (Route Handlers)</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                      Cookie HTTP-only en servidor para resguardar el JWT del JavaScript cliente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector 1 */}
              <div
                className="flex items-center justify-center py-2 lg:py-0 text-text-muted"
                {...reveal({ variant: "connector", delay: 2 })}
              >
                <div className="flex lg:flex-col items-center justify-center gap-1.5 font-mono text-xs text-text-muted">
                  <span>REST / HTTPS</span>
                  <span className="text-primary hidden lg:inline">→</span>
                  <span className="text-primary lg:hidden">↓</span>
                </div>
              </div>

              {/* Tier 2: Backend API */}
              <div
                className="flex-[1.4] rounded-xl border border-primary/40 bg-surface/90 p-4 sm:p-5 relative shadow-sm transition-[border-color,background-color] duration-200 hover:border-primary/60"
                {...reveal({ delay: 3 })}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                    <Server className="h-4 w-4" />
                    <span>Backend API</span>
                  </div>
                  <span className="rounded bg-primary/10 border border-primary/30 px-2 py-0.5 font-mono text-xs text-primary">
                    Render
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold text-foreground">
                  ASP.NET Core (.NET 8)
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
                  <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">API REST</span>
                  <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">Inspirada en Clean Architecture</span>
                  <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">CQRS · Commands & Queries</span>
                  <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">FluentValidation</span>
                  <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">Identity & Roles</span>
                </div>

                {/* External Integrations */}
                <div className="mt-4 pt-3.5 border-t border-border/50">
                  <p className="font-mono text-xs font-medium text-text-muted mb-2">Integraciones externas:</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="rounded-full border border-border/80 bg-background/80 px-2.5 py-1 font-mono text-xs text-text-secondary">
                      Cloudinary (Adjuntos de entregas)
                    </span>
                    <span className="rounded-full border border-border/80 bg-background/80 px-2.5 py-1 font-mono text-xs text-text-secondary">
                      Brevo (Notificaciones email)
                    </span>
                  </div>
                </div>
              </div>

              {/* Connector 2 */}
              <div
                className="flex items-center justify-center py-2 lg:py-0 text-text-muted"
                {...reveal({ variant: "connector", delay: 4 })}
              >
                <div className="flex lg:flex-col items-center justify-center gap-1.5 font-mono text-xs text-text-muted">
                  <span>EF Core</span>
                  <span className="text-primary hidden lg:inline">→</span>
                  <span className="text-primary lg:hidden">↓</span>
                </div>
              </div>

              {/* Tier 3: Persistence */}
              <div
                className="flex-1 rounded-xl border border-border/80 bg-surface/70 p-4 sm:p-5 flex flex-col justify-between transition-[border-color,background-color] duration-200 hover:border-primary/40 hover:bg-surface/90"
                {...reveal({ delay: 5 })}
              >
                <div>
                  <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                    <Database className="h-4 w-4" />
                    <span>Persistencia</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-foreground">
                    PostgreSQL
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-xs">
                    <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-text-secondary">Entity Framework Core</span>
                    <span className="rounded bg-background-elevated border border-border/40 px-2 py-0.5 text-xs text-primary/90">PostgreSQL</span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                    Esquema relacional para cursos, horarios, matrículas, clases, asistencia, tareas y auditoría.
                  </p>
                </div>
              </div>

            </div>

            {/* Architecture Highlights Strip */}
            <div
              className="mt-6 pt-5 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-xs"
              {...reveal({ variant: "fade", delay: 5 })}
            >
              <div className="flex items-start gap-2 text-text-secondary leading-relaxed">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground font-semibold">Seguridad:</strong> Cookie HTTP-only · JWT en servidor · Autorización por roles
                </span>
              </div>
              <a
                href="https://blossom-demo.onrender.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-primary-hover transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 active:translate-y-0 px-3 py-2 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-fit"
              >
                <span>Documentación Swagger</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 04 / INGENIERÍA DEL DOMINIO */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
          <div className="flex flex-col" {...reveal()}>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              04 / INGENIERÍA DEL DOMINIO
            </p>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
              Más allá de las operaciones CRUD.
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              Blossom trasciende la simple carga de datos modelando el ciclo pedagógico completo:
              desde la consigna inicial hasta la trazabilidad de devoluciones y el seguimiento formativo.
            </p>
          </div>

          {/* Academic Lifecycle Stepper / Process Flow */}
          <div className="mt-10 sm:mt-12">
            <div className="rounded-2xl border border-border/70 bg-surface/30 p-5 sm:p-8" {...reveal({ delay: 1 })}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted mb-6">
                Ciclo de tareas y evaluación formativa
              </p>

              {/* Desktop Stepper */}
              <div className="hidden md:grid md:grid-cols-5 gap-3 relative">
                {[
                  {
                    step: "01",
                    name: "Publicación",
                    desc: "El docente crea la tarea y publica la consigna con fechas límite.",
                  },
                  {
                    step: "02",
                    name: "Entrega",
                    desc: "El alumno realiza la actividad y adjunta archivos digitales.",
                  },
                  {
                    step: "03",
                    name: "Revisión",
                    desc: "El docente consulta las entregas individuales y analiza el trabajo.",
                  },
                  {
                    step: "04",
                    name: "Devolución",
                    desc: "Se registra feedback cualitativo, estado y calificación numérica.",
                  },
                  {
                    step: "05",
                    name: "Seguimiento",
                    desc: "La información queda disponible conservando el historial pedagógico.",
                  },
                ].map((item, index, arr) => (
                  <div
                    key={item.step}
                    className="flex flex-col justify-between rounded-xl border border-border/60 bg-surface/60 p-4 transition-[border-color,background-color,transform,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/40 hover:bg-surface/90 [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:shadow-[0_6px_16px_-8px_rgba(0,0,0,0.6)] motion-reduce:transition-colors motion-reduce:hover:translate-y-0 relative"
                    {...reveal({ delay: (index + 1) as RevealDelay })}
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
                <div
                  className="absolute left-[7px] top-2 bottom-2 w-px bg-border/80"
                  aria-hidden="true"
                />

                <div className="space-y-5">
                  {[
                    {
                      step: "01",
                      name: "Publicación",
                      desc: "El docente crea la tarea y publica la consigna.",
                    },
                    {
                      step: "02",
                      name: "Entrega",
                      desc: "El alumno realiza la actividad y adjunta archivos.",
                    },
                    {
                      step: "03",
                      name: "Revisión",
                      desc: "El docente consulta las entregas y analiza el trabajo.",
                    },
                    {
                      step: "04",
                      name: "Devolución",
                      desc: "Se registra feedback, estado y calificación correspondiente.",
                    },
                    {
                      step: "05",
                      name: "Seguimiento",
                      desc: "La información queda disponible conservando el historial.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="relative flex items-start gap-3"
                      {...reveal({ delay: 1 })}
                    >
                      <span
                        className="absolute -left-[23px] top-1.5 h-3.5 w-3.5 rounded-full border border-primary/50 bg-background flex items-center justify-center ring-4 ring-surface/40"
                        aria-hidden="true"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>

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

          {/* 3 Technical Decisions (Numbered with fine dividers) */}
          <div className="mt-10 sm:mt-12 border-t border-border/60 pt-6 sm:pt-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted mb-5 sm:mb-6" {...reveal()}>
              Criterios de ingeniería
            </p>

            <div className="divide-y divide-border/60">
              {/* Decision 01 */}
              <div
                className="py-5 sm:py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start"
                {...reveal({ delay: 1 })}
              >
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-primary">01</span>
                  <h3 className="text-base font-bold text-foreground">
                    Seguridad mediante BFF y autorización
                  </h3>
                </div>
                <div className="md:col-span-8 text-sm leading-relaxed text-text-secondary">
                  Los Route Handlers de Next.js gestionan la comunicación autenticada mediante cookies HTTP-only, mientras que la API valida roles y permisos antes de permitir cada operación protegida.
                </div>
              </div>

              {/* Decision 02 */}
              <div
                className="py-5 sm:py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start"
                {...reveal({ delay: 2 })}
              >
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-primary">02</span>
                  <h3 className="text-base font-bold text-foreground">
                    Reglas académicas centralizadas
                  </h3>
                </div>
                <div className="md:col-span-8 text-sm leading-relaxed text-text-secondary">
                  Las reglas de asistencia, matrículas y seguimiento académico se centralizan en el backend para mantener criterios consistentes entre las experiencias de administradores, profesores y alumnos.
                </div>
              </div>

              {/* Decision 03 */}
              <div
                className="py-5 sm:py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-start"
                {...reveal({ delay: 3 })}
              >
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-primary">03</span>
                  <h3 className="text-base font-bold text-foreground">
                    Historial y trazabilidad de correcciones
                  </h3>
                </div>
                <div className="md:col-span-8 text-sm leading-relaxed text-text-secondary">
                  El modelo separa tareas, entregas y correcciones, permitiendo registrar devoluciones y conservar el historial académico sin perder trazabilidad.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 / EVOLUCIÓN */}
        <section className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16 pb-8">
          <div className="flex flex-col" {...reveal()}>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              05 / EVOLUCIÓN
            </p>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
              Del desarrollo a su futura implementación.
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
              Blossom continúa evolucionando mediante mejoras funcionales, validaciones técnicas y preparación para su futura adopción institucional.
            </p>
          </div>

          {/* 3 Lightweight Columns with Vertical Dividers */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-border/60 rounded-2xl border border-border/70 bg-surface/30 p-5 sm:p-8">
            
            {/* Category 1: Implementado */}
            <div className="md:pr-8 space-y-3" {...reveal({ delay: 1 })}>
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                <span>Implementado</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Base consolidada
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-text-secondary pt-1">
                <li>• Autenticación y autorización por roles.</li>
                <li>• Gestión de cursos, matrículas y asistencia.</li>
                <li>• Tareas, entregas, calificaciones y reportes.</li>
              </ul>
            </div>

            {/* Category 2: En validación */}
            <div className="md:px-8 space-y-3 pt-5 md:pt-0 border-t md:border-t-0 border-border/60" {...reveal({ delay: 2 })}>
              <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-semibold uppercase tracking-wider">
                <Clock className="h-4 w-4" />
                <span>En validación</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Pruebas e integración
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-text-secondary pt-1">
                <li>• Refinamiento de interfaces y experiencia de usuario.</li>
                <li>• Pruebas de integración entre frontend y backend.</li>
                <li>• Validación de recorridos académicos completos.</li>
              </ul>
            </div>

            {/* Category 3: Próximos pasos */}
            <div className="md:pl-8 space-y-3 pt-5 md:pt-0 border-t md:border-t-0 border-border/60" {...reveal({ delay: 3 })}>
              <div className="flex items-center gap-2 text-text-muted font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Próximos pasos</span>
              </div>
              <h3 className="text-base font-bold text-foreground">
                Próximas mejoras
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-text-secondary pt-1">
                <li>• Ampliación de pruebas automatizadas.</li>
                <li>• Preparación y observabilidad para producción.</li>
                <li>• Adaptación de datos y procesos para su futura implementación institucional.</li>
              </ul>
            </div>

          </div>
        </section>

      </div>

      {/* Footer Navigation Back to Projects & Next Project */}
      <footer
        className="mt-16 pt-10 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4"
        {...reveal({ variant: "fade" })}
      >
        <Link
          href="/#proyectos"
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Volver al catálogo de proyectos</span>
        </Link>
        <Link
          href="/proyectos/entrenate"
          className="group inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-foreground transition-colors font-mono text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm py-1"
        >
          <span>Caso de estudio: Entrenate</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </footer>
    </article>
  )
}
