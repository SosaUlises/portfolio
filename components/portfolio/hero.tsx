import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="min-h-[100dvh] px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
        <Avatar className="group relative h-56 w-56 overflow-hidden rounded-full ring-1 ring-border/70 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-primary/25 hover:shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
          {/* soft glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 rounded-full bg-[hsl(var(--primary))] opacity-0 blur-[55px] transition-opacity duration-300 ease-out group-hover:opacity-[0.08]"
          />
          {/* subtle shine */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(500px circle at 30% 0%, rgba(255,255,255,0.10), transparent 45%)",
            }}
          />

          <AvatarImage
            src="/uliphoto.jpg"
            alt="Sosa Ulises"
            className="h-full w-full object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.035]"
          />
          <AvatarFallback className="bg-muted text-muted-foreground text-xl">
            SUE
          </AvatarFallback>
        </Avatar>

        <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/25 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="mt-7 text-5xl font-extrabold tracking-tight leading-none sm:text-6xl lg:text-7xl">
          Sosa Ulises
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-foreground/90">
          Desarrollador Backend .NET
        </p>

        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Analista en Sistemas · Estudiante de Ingeniería en Sistemas
        </p>

        <p className="mt-5 text-xs text-muted-foreground">
          Rosario, Santa Fe, Argentina
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <Button
            asChild
            className="gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          >
            <a
              href="/CV_SosaUlises.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FileText className="h-4 w-4" />
              <span className="sm:hidden">CV</span>
              <span className="hidden sm:inline">Descargar CV</span>
            </a>
          </Button>

          <Button
            variant="secondary"
            asChild
            className="gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.30)]"
          >
            <a
              href="https://github.com/SosaUlises"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>

          <Button
            variant="secondary"
            asChild
            className="gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.30)]"
          >
            <a
              href="https://linkedin.com/in/sosaulises"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
