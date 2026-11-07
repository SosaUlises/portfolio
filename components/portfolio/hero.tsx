import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"

export function Hero() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <Avatar className="group relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full ring-1 ring-border/70 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-primary/25 hover:shadow-[0_18px_55px_rgba(0,0,0,0.55)]">
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
            alt="Ulises Sosa"
            className="h-full w-full object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.035]"
          />
          <AvatarFallback className="bg-muted text-muted-foreground text-xl">
            US
          </AvatarFallback>
        </Avatar>

        <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-3.5 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Analista en Sistemas · Estudiante de Ingeniería en Sistemas
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight leading-none sm:text-6xl lg:text-7xl">
          Ulises Sosa
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-semibold text-primary">
          Analista en Sistemas | Desarrollador de Software
        </p>

        <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-text-secondary">
          Soy Analista en Sistemas y estudiante avanzado de Ingeniería en Sistemas. Desarrollo soluciones backend y full stack, con interés en la arquitectura de software, la tecnología y el aprendizaje continuo.
        </p>

        <p className="mt-3 text-xs text-text-muted">
          Rosario, Santa Fe, Argentina
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
    </div>
  )
}
