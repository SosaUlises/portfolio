export interface EducationItem {
  period: string
  title: string
  institution: string
  description: string
  status?: "Completed" | "In Progress"
}

export const education: EducationItem[] = [
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
