import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-[100dvh] px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
       <Avatar className="h-56 w-56 ring-1 ring-border shadow-md">
        <AvatarImage
          src="/uliphoto.jpg"
          alt="Sosa Ulises"
          className="object-cover"
        />
        <AvatarFallback className="bg-muted text-muted-foreground">SUE</AvatarFallback>
      </Avatar>


        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Disponible para nuevos proyectos
        </div>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight leading-none sm:text-6xl lg:text-7xl">
          Sosa Ulises
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Desarrollador Backend .NET
        </p>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          Analista en Sistemas · Estudiante de Ingeniería en Sistemas
        </p>

        <p className="mt-6 text-xs text-muted-foreground">
          Ricardone, Santa Fe, Argentina
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <Button asChild>
            <a href="/cv-sosa-ulises.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              CV
            </a>
          </Button>

          <Button variant="secondary" asChild>
            <a href="https://github.com/SosaUlises" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>

          <Button variant="secondary" asChild>
            <a href="https://linkedin.com/in/sosaulises" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
