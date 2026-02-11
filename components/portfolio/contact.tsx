"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

const links = [
  {
    label: "GitHub",
    href: "https://github.com/SosaUlises",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sosaulises",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:sosa10ulises@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  return (
    <ScrollReveal className="mt-20 pb-24">
      <Separator className="mb-12" />
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Contacto
      </h2>
      <p className="mt-5 text-base leading-7 text-muted-foreground">
        Si quieres conversar sobre un proyecto o simplemente decir hola, estoy disponible.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <link.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-16 text-xs text-muted-foreground/60">
        {"Sosa Ulises Ezequiel \u00A9 2026"}
      </p>
    </ScrollReveal>
  )
}
