export interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  modality?: string
  description: string
  logoUrl?: string
  logoAlt?: string
  tags?: string[]
  highlights?: string[]
  liveUrl?: string
  repoUrl?: string
}

export const experiences: ExperienceItem[] = [
  {
    company: "Avalian",
    role: "Pasante de Soporte e Infraestructura IT",
    period: "Nov. 2026 — Actualidad",
    location: "Rosario, Santa Fe, Argentina",
    modality: "Pasantía",
    description:
      "Formo parte del área de Soporte e Infraestructura IT de Avalian, donde participo en tareas de asistencia técnica a usuarios, gestión de incidentes y mantenimiento de equipos informáticos, colaborando con el funcionamiento de los sistemas y servicios tecnológicos de la organización.",
    logoUrl: "/avalian-icon.png",
    logoAlt: "Isotipo de Avalian",
  },
]
