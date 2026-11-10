export type EducationStatus = "En curso" | "Completado" | "Formación continua"

export interface EducationItem {
  id: string
  title: string
  institution: string
  extraRef?: string
  period: string
  status: EducationStatus
  description: string
  logo: "uai" | "ef-set"
}

export const education: EducationItem[] = [
  {
    id: "ingenieria",
    title: "Ingeniería en Sistemas Informáticos",
    institution: "UAI Rosario",
    period: "Abr 2023 — Actualidad",
    status: "En curso",
    description:
      "Carrera universitaria en curso con foco en análisis, diseño y desarrollo de sistemas, arquitectura de software y gestión de proyectos de ingeniería.",
    logo: "uai",
  },
  {
    id: "analista",
    title: "Analista en Sistemas Informáticos",
    institution: "UAI Rosario",
    period: "Abr 2023 — Dic 2025",
    status: "Completado",
    description:
      "Título intermedio completado. Formación en desarrollo de software, modelado de bases de datos, fundamentos de arquitectura y buenas prácticas de ingeniería.",
    logo: "uai",
  },
  {
    id: "ingles-b2",
    title: "Inglés Upper Intermediate (B2)",
    institution: "Instituto Blossom (modalidad online)",
    extraRef: "Certificación EF SET",
    period: "Actualidad",
    status: "Formación continua",
    description:
      "Formación continua con clases semanales. Nivel B2 certificado; lectura y análisis fluido de documentación técnica en inglés, redacción clara y competencia intermedia en listening y speaking.",
    logo: "ef-set",
  },
]
