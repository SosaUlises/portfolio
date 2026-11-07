export interface Project {
  slug: string
  title: string
  category: string
  status?: string
  featured: boolean
  summary: string
  description: string
  role?: string
  tags: string[]
  highlights?: string[]
  challenge?: string
  solution?: string
  architecture?: string
  features?: string[]
  learnings?: string[]
  repoUrl?: string
  docsUrl?: string
  liveUrl?: string
  apiUrl?: string
  imageUrl?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    slug: "entrenate",
    title: "Entrenate",
    category: "Aplicación Full Stack",
    status: "En desarrollo",
    featured: true,
    summary:
      "Plataforma web de entrenamiento físico orientada a brindar una experiencia personalizada, con frontend en Next.js y backend en ASP.NET Core (.NET 9) sobre PostgreSQL.",
    description:
      "Entrenate es una plataforma de entrenamiento físico orientada a ofrecer una experiencia personalizada, adaptada a los objetivos, características y disponibilidad de cada usuario. Es un proyecto propio que desarrollo utilizando una arquitectura moderna con frontend y backend desacoplados, autenticación segura mediante JWT y despliegue cloud independiente.",
    role: "Diseño y desarrollo integral: frontend, backend API, modelado relacional y despliegue cloud.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      ".NET 9",
      "PostgreSQL",
      "Entity Framework Core",
      "JWT",
      "MediatR",
      "FluentValidation",
      "Vercel",
      "Render",
    ],
    liveUrl: "https://entrenate-three.vercel.app/login",
    apiUrl: "https://entrenate.onrender.com",
    challenge:
      "Construir una plataforma escalable que resuelva el registro, autenticación segura y personalización del perfil de entrenamiento de cada usuario (objetivos, nivel de experiencia, días disponibles, preferencias y equipamiento), manteniendo una separación clara entre la interfaz web y la lógica de dominio.",
    solution:
      "Se estructuró una solución desacoplada con cliente web en Next.js (desplegado en Vercel) y una API REST en ASP.NET Core .NET 9 (desplegada en Render) conectada a PostgreSQL en Neon. Se implementó un flujo guiado de onboarding para recopilar las preferencias del usuario y persistirlas de manera estructurada para futuras planificaciones.",
    architecture:
      "Frontend desarrollado con Next.js y Tailwind CSS para una interfaz reactiva y accesible. Backend implementado con ASP.NET Core aplicando el patrón CQRS mediante MediatR, validación estricta de comandos con FluentValidation, autenticación con ASP.NET Core Identity + JWT y persistencia mediante Entity Framework Core.",
    features: [
      "Registro de usuarios e inicio de sesión seguro con tokens JWT.",
      "Recuperación y cambio de contraseña.",
      "Flujo de onboarding guiado para configuración de perfil físico (objetivos, experiencia, días, equipamiento y preferencias).",
      "Persistencia, consulta y actualización del perfil en base de datos PostgreSQL.",
      "API REST modular con validación centralizada de entradas.",
      "Despliegues automatizados de frontend (Vercel) y backend (Render).",
      "Visión futura: personalización inteligente de planes de entrenamiento adaptados a la progresión del usuario.",
    ],
    learnings: [
      "Coordinación de despliegues y políticas CORS entre frontend en Vercel y backend en Render.",
      "Manejo de estado de autenticación y persistencia de tokens seguros en el cliente Next.js.",
      "Diseño de modelos de datos flexibles orientados a la evolución hacia módulos de rutinas personalizadas.",
    ],
    highlights: [
      "Arquitectura moderna full stack con frontend en Next.js y backend en .NET 9 desacoplados.",
      "Autenticación robusta con ASP.NET Core Identity y JWT.",
      "Onboarding completo para personalización de objetivos y equipamiento.",
      "Patrón CQRS con MediatR y validaciones con FluentValidation.",
      "Persistencia relacional con Entity Framework Core y PostgreSQL en Neon.",
    ],
  },

  {
    slug: "blossom-institute",
    title: "Blossom Institute API",
    category: "Backend API / Gestión Académica",
    status: "Producción",
    featured: true,
    summary:
      "API REST para la gestión académica institucional (cursos, alumnos, tareas, asistencias y reportes) construida con .NET 8, Clean Architecture y CQRS.",
    description:
      "Backend API desarrollada para la gestión académica centralizada de un instituto educativo. Proporciona servicios para administración de cursos, matrículas, seguimiento de asistencia, asignación de tareas con entregas y reportes académicos, con enfoque en arquitectura limpia, robustez y separación estricta de responsabilidades.",
    role: "Diseño de arquitectura backend, desarrollo de APIs REST, modelado relacional y documentación interactiva.",
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
    repoUrl: "https://github.com/SosaUlises/blossom-institute-api",
    docsUrl: "https://blossom-demo.onrender.com/index.html",
    imageUrl: "/blossomimg.PNG",
    imageAlt: "Swagger UI - Blossom Institute API",
    challenge:
      "Centralizar y ordenar los procesos académicos del instituto, permitiendo a administradores, profesores y estudiantes gestionar comisiones, clases, asistencias, entregas de trabajos y calificaciones desde un sistema seguro y confiable.",
    solution:
      "Se diseñó una API REST bajo los principios de Clean Architecture y CQRS, separando el dominio y los casos de uso de la infraestructura y los controladores. Se implementó autenticación con ASP.NET Core Identity y JWT con roles (Admin, Profesor, Alumno) y persistencia en PostgreSQL.",
    architecture:
      "Clean Architecture estructurada en capas de Dominio, Aplicación, Infraestructura y API. Desacoplamiento de lecturas y escrituras mediante CQRS, persistencia con Entity Framework Core sobre PostgreSQL y documentación pública en Swagger.",
    features: [
      "Gestión de cursos, clases, matrículas y comisiones.",
      "Control de asistencia por clase con estados de presencia.",
      "Módulo de tareas con entregas de alumnos, retroalimentación docente y calificaciones.",
      "Seguridad mediante ASP.NET Core Identity y JWT con control de acceso basado en roles.",
      "Arquitectura preparada para generación de reportes académicos.",
      "Entorno demo disponible públicamente con Swagger para exploración de endpoints.",
    ],
    learnings: [
      "Modelado de reglas de dominio ricas adaptadas a dinámicas académicas reales.",
      "Estandarización de respuestas de API y manejo centralizado de excepciones.",
      "Estrategias de control de acceso granular por roles para resguardar la privacidad de los alumnos.",
    ],
    highlights: [
      "Clean Architecture + CQRS para separar dominio, casos de uso e infraestructura.",
      "Autenticación y autorización con ASP.NET Core Identity + JWT por roles.",
      "Modelo académico completo: cursos, clases, matrículas, entregas y asistencia.",
      "Persistencia con PostgreSQL y Entity Framework Core.",
      "Documentación interactiva disponible en Swagger UI con entorno de prueba.",
    ],
  },

  {
    slug: "gym-api",
    title: "Sosa Gym API",
    category: "Backend API",
    status: "Completado",
    featured: false,
    summary:
      "API REST en .NET 8 con Clean Architecture + CQRS, JWT por roles, PostgreSQL (Neon) e integración OpenAI para rutinas.",
    description:
      "API REST desarrollada en .NET 8 para la gestión integral de un gimnasio, con enfoque en arquitectura limpia, seguridad por roles y modelado de dominio real. Implementa Clean Architecture + CQRS, autenticación con Identity + JWT y persistencia en PostgreSQL (Neon).",
    tags: [".NET 8", "Clean Architecture", "CQRS", "JWT", "PostgreSQL", "Swagger", "Identity"],
    repoUrl: "https://github.com/SosaUlises/GymAPI",
    docsUrl: "https://gymapi-yln2.onrender.com/index.html",
    imageUrl: "/sosagym.PNG",
    imageAlt: "Swagger UI - Sosa Gym API",
    highlights: [
      "Clean Architecture + CQRS para separar dominio, casos de uso y persistencia.",
      "Seguridad con ASP.NET Core Identity + JWT y autorización por roles.",
      "Gestión de cuotas con vencimiento automático y control de acceso por DNI.",
    ],
  },

  {
    slug: "veting",
    title: "VetIng",
    category: "Web App MVC",
    status: "Completado",
    featured: false,
    summary:
      "Web app (MVC) para veterinarias: turnos, historia clínica, pagos Mercado Pago, RBAC/auditoría y deploy en Render + PostgreSQL (Neon).",
    description:
      "Plataforma web para la gestión clínica y administrativa de una veterinaria. Construida con ASP.NET Core MVC en capas (Controller–Service–Repository), integración de pagos y base de datos PostgreSQL.",
    tags: ["ASP.NET Core", "MVC", "EF Core", "PostgreSQL", "Identity", "RBAC"],
    repoUrl: "https://github.com/SosaUlises/SistemaVetIng",
    liveUrl: "https://sistemaveting-dcpx.onrender.com/",
    imageUrl: "/veting.PNG",
    imageAlt: "VetIng - pantalla principal",
    highlights: [
      "Operación clínica y administrativa: turnos, historias clínicas y auditoría.",
      "ASP.NET Core MVC estructurado por capas y patrones de diseño.",
      "Seguridad con ASP.NET Core Identity + RBAC.",
    ],
  },
]
