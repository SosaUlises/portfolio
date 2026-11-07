import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-medium text-foreground">
            Sosa Ulises Ezequiel
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Analista en Sistemas · Desarrollador de Software · {currentYear}
          </p>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/SosaUlises"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Ulises Sosa"
            className="transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/sosaulises"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Ulises Sosa"
            className="transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:sosa10ulises@gmail.com"
            aria-label="Enviar correo a Ulises Sosa"
            className="transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
