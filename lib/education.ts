export interface EducationItem {
  period: string
  title: string
  institution: string
  description: string
  status?: "Completado" | "En curso" | "Formación continua"
}

export const education: EducationItem[] = [
  {
    period: "Abr 2023 — Actualidad",
    title: "Ingeniería en Sistemas Informáticos",
    institution: "UAI Rosario",
    description:
      "Carrera universitaria en curso con foco en análisis, diseño y desarrollo de sistemas, arquitectura de software y gestión de proyectos de ingeniería.",
    status: "En curso",
  },
  {
    period: "Abr 2023 — Dic 2025",
    title: "Analista en Sistemas Informáticos",
    institution: "UAI Rosario",
    description:
      "Título intermedio completado. Formación en desarrollo de software, modelado de bases de datos, fundamentos de arquitectura y buenas prácticas de ingeniería.",
    status: "Completado",
  },
  {
    period: "Actualidad",
    title: "Inglés Upper Intermediate (B2)",
    institution: "Instituto Blossom (modalidad online) · Certificación EF SET",
    description:
      "Formación continua con clases semanales. Nivel B2 certificado; lectura y análisis fluido de documentación técnica en inglés, redacción clara y competencia intermedia en listening y speaking.",
    status: "Formación continua",
  },
]
