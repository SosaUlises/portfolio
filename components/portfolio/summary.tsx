"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Separator } from "@/components/ui/separator"
import { SectionShell } from "@/components/portfolio/section-shell"

export function Summary() {
  return (
    <ScrollReveal>
      <Separator className="mb-12" />
       <SectionShell glow>
      <h2 id="sobre-mi" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Sobre mi
      </h2>
    <p className="mt-5 text-base leading-7 text-foreground">
  Desarrollador Backend .NET orientado a la construcción de APIs RESTful robustas y mantenibles. Trabajo con arquitectura limpia, separación de responsabilidades y diseño centrado en la lógica de negocio.
</p>

<p className="mt-4 text-base leading-7 text-foreground">
  He desarrollado proyectos aplicando distintos enfoques arquitectónicos según el contexto, incluyendo Clean Architecture y CQRS, así como estructuras MVC con patrones Repository y Service. También he implementado autenticación con JWT e integración de servicios de IA.
</p>

<p className="mt-6 text-base leading-7 text-foreground/80">
  Soy Analista en Sistemas Informáticos y estudiante avanzado de Ingeniería en Sistemas, con interés en construir sistemas escalables, seguros y bien diseñados. Me interesa integrarme a un equipo donde pueda aportar buenas prácticas, asumir responsabilidades reales y continuar creciendo profesionalmente como Backend Developer.
</p>
</SectionShell>
    </ScrollReveal>
  )
}
