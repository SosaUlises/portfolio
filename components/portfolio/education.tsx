"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const education = [
  {
    period: "Abril 2023 — Actualidad",
    title: "Ingenieria en Sistemas Informaticos",
    institution: "UAI Rosario",
    description:
      "Carrera en curso orientada al diseno, desarrollo y gestion de sistemas de informacion complejos.",
  },
  {
    period: "Abril 2023 — Diciembre 2025",
    title: "Analista en Sistemas Informaticos",
    institution: "UAI Rosario",
    description:
      "Titulo obtenido. Formacion en desarrollo de software, bases de datos, arquitectura de sistemas y metodologias agiles.",
  },
  {
    period: "Certificado",
    title: "Ingles Upper Intermediate (B2)",
    institution: "EF SET Certificate | Instituto Blossom (online)",
    description:
      "Nivel B2 certificado, con capacidad de lectura tecnica, comunicacion escrita y comprension de documentacion en ingles.",
  },
]

export function Education() {
  return (
    <ScrollReveal className="mt-20">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Educacion
      </h2>
      <div className="mt-6">
        {education.map((item, index) => (
          <div key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
            {/* Timeline line */}
            {index < education.length - 1 && (
              <div className="absolute left-[4px] top-3 h-full w-px bg-border" />
            )}
            {/* Timeline dot */}
            <div className="relative mt-1.5 h-[9px] w-[9px] shrink-0 rounded-full bg-primary" />
            <div className="min-w-0">
              <span className="font-mono text-xs text-muted-foreground">
                {item.period}
              </span>
              <h3 className="mt-1.5 text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{item.institution}</p>
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
