"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const education = [
  {
    period: "Abr 2023 — Actualidad",
    title: "Ingeniería en Sistemas Informáticos",
    institution: "UAI Rosario",
    description:
      "Carrera en curso con foco en análisis, diseño y desarrollo de sistemas, arquitectura de software y gestión de proyectos.",
    status: "In Progress",
  },
  {
    period: "Abr 2023 — Dic 2025",
    title: "Analista en Sistemas Informáticos",
    institution: "UAI Rosario",
    description:
      "Formación en desarrollo de software, bases de datos, fundamentos de arquitectura y buenas prácticas de ingeniería.",
    status: "Completed",
  },
  {
  period: "Actualidad",
  title: "Inglés Upper Intermediate (B2)",
  institution: "Instituto Blossom (modalidad online) · Certificación EF SET",
  description:
    "Formación continua con clases semanales. Nivel B2 certificado; lectura y análisis de documentación técnica, comunicación escrita sólida y competencia intermedia en listening y speaking.",
},
]


export function Education() {
  return (
    <ScrollReveal className="mt-24" staggerMs={80}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Educación
      </h2>

      <div className="mt-10 reveal-stagger">
        {education.map((item, index) => (
          <div key={item.title} className="relative flex gap-6 pb-12 last:pb-0">
            {index < education.length - 1 && (
              <div className="absolute left-[5px] top-3 h-full w-px bg-border/70" />
            )}

            <div className="relative mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full bg-primary ring-4 ring-background" />


            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
                <span className="text-xs text-muted-foreground/60">•</span>
                <span className="text-xs text-muted-foreground">
                  {item.institution}
                </span>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>

                {item.status === "Completed" && (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-emerald-400">
                    Completed
                  </span>
                )}

                {item.status === "In Progress" && (
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-blue-400">
                    In Progress
                  </span>
                )}
              </div>


              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  )
}
