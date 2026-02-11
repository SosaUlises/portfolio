export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  repoUrl?: string
}

export const projects: Project[] = [
  {
    slug: "gym-api",
    title: "Sosa Gym API",
    description:
      "Sistema de gestión de gimnasio: clientes, rutinas, ejercicios, cuotas y control de accesos. Integra OpenAI para generación de rutinas.",
    tags: [".NET 8", "Clean Architecture", "CQRS", "JWT", "PostgreSQL", "Swagger"],
    repoUrl: "https://github.com/SosaUlises/GymAPI",
  },
  {
    slug: "veting",
    title: "VetIng",
    description:
      "Sistema de gestión para veterinarias: clientes, mascotas, veterinarios, turnos, pagos con Mercado Pago y reportes.",
    tags: ["ASP.NET Core", "MVC", "EF Core", "SQL Server", "Identity", "Razor Pages"],
    repoUrl: "https://github.com/SosaUlises/SistemaVetIng",
  },
]
