export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
  highlights: string[]
  liveUrl?: string
  repoUrl?: string
}

export const experiences: ExperienceItem[] = [
  {
    company: "Blossom Institute",
    role: "Backend Developer (Freelance)",
    period: "2026 — Actualidad",
    description:
      "Desarrollo del backend para una plataforma de gestión académica orientada a institutos o centros educativos. El sistema centraliza cursos, estudiantes, tareas, asistencias, entregas y reportes académicos, con foco en arquitectura limpia, seguridad y escalabilidad.",
    tags: [
      ".NET 8",
      "ASP.NET Core",
      "Clean Architecture",
      "CQRS",
      "PostgreSQL",
      "JWT",
      "Swagger",
    ],
    highlights: [
      "Diseño de APIs REST para gestión académica: cursos, clases, matrículas, tareas, entregas, asistencia y calificaciones.",
      "Arquitectura basada en Clean Architecture + CQRS para separar dominio, casos de uso e infraestructura.",
      "Autenticación y autorización con ASP.NET Core Identity + JWT y control por roles (Admin, Profesor, Alumno).",
      "Persistencia con PostgreSQL y Entity Framework Core.",
      "Soporte para adjuntos, reportes académicos y arquitectura preparada para exportación en Excel/PDF.",
      "Demo pública disponible mediante Swagger UI.",
    ],
    liveUrl: "https://blossom-demo.onrender.com/index.html",
    repoUrl: "https://github.com/SosaUlises/blossom-institute-api",
  },
]
