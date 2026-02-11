"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Separator } from "@/components/ui/separator"

export function Summary() {
  return (
    <ScrollReveal>
      <Separator className="mb-12" />
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Sobre mi
      </h2>
      <p className="mt-5 text-base leading-7 text-foreground">
        Desarrollador Backend .NET orientado al diseno e implementacion de APIs RESTful, con
        foco en arquitectura limpia, separacion de responsabilidades y logica de negocio.
        Experiencia en proyectos academicos y de portfolio aplicando Clean Architecture,
        CQRS, ASP.NET Core Identity, JWT e integracion de servicios de IA.
      </p>
      <p className="mt-4 text-base leading-7 text-muted-foreground">
        Interes en sistemas escalables, seguros y mantenibles.
      </p>
    </ScrollReveal>
  )
}
