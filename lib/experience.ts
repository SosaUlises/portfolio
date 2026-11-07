export interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  modality?: string
  isUpcoming?: boolean
  description: string
  tags: string[]
  highlights: string[]
  liveUrl?: string
  repoUrl?: string
}

export const experiences: ExperienceItem[] = [
  {
    company: "Avalian",
    role: "Pasante de Soporte e Infraestructura IT",
    period: "Ingreso: 10 de noviembre de 2026",
    location: "Rosario, Santa Fe, Argentina",
    modality: "Pasantía",
    isUpcoming: true,
    description:
      "Incorporación programada al área de Soporte e Infraestructura IT, con participación en procesos de asistencia técnica a usuarios, gestión de incidentes y mantenimiento de puestos de trabajo e infraestructura de sistemas.",
    tags: [
      "Soporte IT",
      "Infraestructura",
      "Hardware",
      "Diagnóstico de Incidentes",
      "Redes & Conectividad",
      "Sistemas Operativos Windows",
    ],
    highlights: [
      "Asistencia técnica y soporte a usuarios internos frente a incidencias de hardware y software.",
      "Diagnóstico, configuración y mantenimiento de puestos de trabajo y periféricos informáticos.",
      "Colaboración en la atención y seguimiento de tickets de soporte y conectividad de red.",
    ],
  },
  {
    company: "Blossom Institute",
    role: "Backend Developer (Freelance)",
    period: "2026",
    location: "Rosario, Santa Fe, Argentina",
    modality: "Freelance",
    isUpcoming: false,
    description:
      "Desarrollo del backend para una plataforma de gestión académica. Implementación de APIs REST en ASP.NET Core (.NET 8), aplicación de Clean Architecture y CQRS, modelado relacional en PostgreSQL y configuración de seguridad con Identity y JWT.",
    tags: [
      ".NET 8",
      "ASP.NET Core",
      "Clean Architecture",
      "CQRS",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "Entity Framework Core",
    ],
    highlights: [
      "Diseño e implementación de endpoints REST para la administración de cursos, comisiones, asistencia y entregas de tareas.",
      "Arquitectura modular basada en Clean Architecture y CQRS para separar la lógica de dominio de la infraestructura.",
      "Autenticación y autorización mediante ASP.NET Core Identity y JWT con permisos diferenciados por roles.",
      "Modelado y persistencia relacional con PostgreSQL y Entity Framework Core.",
      "Documentación interactiva de la API con Swagger UI para testing y exploración de endpoints.",
    ],
    liveUrl: "https://blossom-demo.onrender.com/index.html",
    repoUrl: "https://github.com/SosaUlises/blossom-institute-api",
  },
]
