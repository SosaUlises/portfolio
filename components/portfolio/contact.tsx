"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"

const links = [
  {
    label: "Descargar CV",
    href: "/cv-sosa-ulises.pdf",
    icon: FileText,
    variant: "primary" as const,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sosaulises",
    icon: Linkedin,
    variant: "secondary" as const,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/SosaUlises",
    icon: Github,
    variant: "secondary" as const,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:sosa10ulises@gmail.com",
    icon: Mail,
    variant: "secondary" as const,
    external: false,
  },
]

export function Contact() {
  return (
    <ScrollReveal className="mt-24 pb-24">
      <Separator className="mb-12" />

      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Contacto
      </h2>

      <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
        Si querés charlar por una oportunidad laboral, proyecto o simplemente conectar,
        estoy disponible. Respondo rápido por LinkedIn o email.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        {links.map((link) => {
          const Icon = link.icon
          const isPrimary = link.variant === "primary"

          return (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={[
                "group inline-flex items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                "hover:-translate-y-[1px] hover:shadow-sm",
                isPrimary
                  ? "border-primary/30 bg-primary/10 text-primary hover:bg-primary/15"
                  : "border-border bg-muted/20 text-foreground hover:border-primary/35 hover:bg-muted/30",
              ].join(" ")}
            >
              <Icon
                className={[
                  "h-4 w-4 transition-colors",
                  isPrimary ? "text-primary" : "text-muted-foreground group-hover:text-primary",
                ].join(" ")}
              />

              <span>{link.label}</span>

              {isPrimary && (
                <ArrowRight className="ml-0.5 h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
              )}
            </a>
          )
        })}
      </div>

      <p className="mt-16 text-xs text-muted-foreground/60">
        {"Sosa Ulises Ezequiel \u00A9 2026"}
      </p>
    </ScrollReveal>
  )
}
