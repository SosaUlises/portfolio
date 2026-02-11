export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  highlights?: string[]
  docsUrl?: string

}

export const projects: Project[] = [
  {
    slug: "gym-api",
    title: "Sosa Gym API",
    description:
      "API REST para la gestión integral de un gimnasio, desarrollada con .NET 8 aplicando Clean Architecture y CQRS. Implementa autenticación y autorización con JWT, control de acceso por roles y persistencia en PostgreSQL. Incluye integración con servicios de IA para la generación automatizada de rutinas de entrenamiento.",
    tags: [".NET 8", "Clean Architecture", "CQRS", "JWT", "PostgreSQL", "Swagger"],
    repoUrl: "https://github.com/SosaUlises/GymAPI",
    highlights: [
      "Arquitectura en capas con separación clara entre dominio, aplicación e infraestructura.",
      "CQRS para aislar comandos/queries y mantener casos de uso explícitos.",
      "Autenticación con JWT y control de acceso por roles.",
      "Documentación de endpoints con Swagger/OpenAPI.",
      "Integración de IA para generación automatizada de rutinas (servicio desacoplado).",
    ],
     docsUrl: "https://gymapi-yln2.onrender.com/index.html" 
  },
  {
    slug: "veting",
    title: "VetIng",
    description:
      "Sistema de gestión para veterinarias construido con ASP.NET Core MVC siguiendo el patrón Repository y Service. Permite administrar clientes, mascotas, turnos y pagos (integración con Mercado Pago), con manejo de identidad y autorización mediante ASP.NET Identity y base de datos SQL Server.",
    tags: ["ASP.NET Core", "MVC", "EF Core", "SQL Server", "Identity", "Razor Pages"],
    repoUrl: "https://github.com/SosaUlises/SistemaVetIng",
    highlights: [
      "Arquitectura MVC con capas Repository/Service para aislar acceso a datos y reglas de negocio.",
      "Persistencia con EF Core sobre SQL Server.",
      "Autenticación y autorización con ASP.NET Identity.",
      "Flujo de turnos y gestión de entidades principales (clientes/mascotas/veterinarios).",
      "Integración de pagos (Mercado Pago) como servicio externo.",
    ],
  },
]



