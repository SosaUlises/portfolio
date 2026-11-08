export interface Project {
  slug: string
  title: string
  category: string
  type?: string
  status?: string
  featured: boolean
  summary: string
  description: string
  role?: string
  tags: string[]
  primaryTags?: string[]
  highlights?: string[]
  challenge?: string
  solution?: string
  architecture?: string
  features?: string[]
  learnings?: string[]
  repoUrl?: string
  frontendRepoUrl?: string
  backendRepoUrl?: string
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
    type: "Proyecto personal",
    status: "En desarrollo",
    featured: true,
    summary:
      "Plataforma web de entrenamiento personalizado que adapta la experiencia a los objetivos y disponibilidad de cada usuario. Desarrollada con Next.js, TypeScript, .NET y PostgreSQL, integra autenticación, gestión de perfiles y Clean Architecture, con una visión de evolución hacia la planificación inteligente mediante IA.",
    description:
      "Entrenate es una plataforma web de entrenamiento personalizado, desarrollada para adaptar la experiencia a los objetivos, el nivel y la disponibilidad de cada usuario. Construida con Next.js, TypeScript, .NET y PostgreSQL, incorpora autenticación segura, gestión de perfiles y un backend basado en Clean Architecture. Su arquitectura está preparada para evolucionar hacia la planificación inteligente de rutinas y recomendaciones personalizadas mediante inteligencia artificial.",
    role: "Diseño y desarrollo integral: frontend, backend API, modelado relacional y despliegue cloud.",
    primaryTags: [
      "Next.js",
      "TypeScript",
      "ASP.NET Core / .NET 9",
      "PostgreSQL",
      "Clean Architecture",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      ".NET 9",
      "Clean Architecture",
      "PostgreSQL",
      "Entity Framework Core",
      "JWT",
      "MediatR",
      "FluentValidation",
      "Vercel",
      "Render",
    ],
    repoUrl: "https://github.com/SosaUlises/entrenate",
    liveUrl: "https://entrenate-three.vercel.app/login",
    apiUrl: "https://entrenate.onrender.com",
    imageUrl: "/entrenate-preview.png",
    imageAlt: "Pantalla de inicio de sesión - Entrenate",
    challenge:
      "Construir una plataforma escalable que resuelva el registro, autenticación segura y personalización del perfil de entrenamiento de cada usuario (objetivos, nivel de experiencia, días disponibles, preferencias y equipamiento), manteniendo una separación clara entre la interfaz web y la lógica de dominio.",
    solution:
      "Se estructuró una solución desacoplada con cliente web en Next.js (desplegado en Vercel) y una API REST en ASP.NET Core .NET 9 (desplegada en Render) conectada a PostgreSQL en Neon. Se implementó un flujo guiado de onboarding para recopilar las preferencias del usuario y persistirlas de manera estructurada para futuras planificaciones.",
    architecture:
      "Frontend desarrollado con Next.js y Tailwind CSS para una interfaz reactiva y accesible. Backend implementado con ASP.NET Core aplicando el patrón CQRS mediante MediatR, validación estricta de comandos con FluentValidation, autenticación con ASP.NET Core Identity + JWT y persistencia mediante Entity Framework Core sobre Clean Architecture.",
    features: [
      "Registro de usuarios e inicio de sesión seguro con tokens JWT.",
      "Recuperación y cambio de contraseña.",
      "Flujo de onboarding guiado para configuración de perfil físico (objetivos, experiencia, días, equipamiento y preferencias).",
      "Persistencia, consulta y actualización del perfil en base de datos PostgreSQL.",
      "API REST modular con validación centralizada de entradas.",
      "Despliegues automatizados de frontend (Vercel) y backend (Render).",
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
    title: "Blossom Institute",
    category: "Aplicación Full Stack",
    type: "Proyecto independiente",
    status: "En desarrollo",
    featured: true,
    summary:
      "Blossom Institute es una plataforma web de gestión académica en desarrollo, orientada a centralizar la administración de cursos, estudiantes, asistencia y actividades. Combina un frontend desarrollado con Next.js y TypeScript con una API REST en .NET y PostgreSQL, siguiendo principios de Clean Architecture y CQRS para mantener una estructura modular y escalable.",
    description:
      "Blossom Institute es una plataforma web de gestión académica en desarrollo, orientada a centralizar la administración institucional de cursos, comisiones, estudiantes, seguimiento de asistencia y asignación de tareas con entregas. Combina un frontend desarrollado con Next.js y TypeScript con una API REST en ASP.NET Core (.NET 8) y PostgreSQL, siguiendo principios de Clean Architecture y CQRS para mantener una estructura modular y escalable.",
    role: "Diseño de arquitectura, desarrollo integral de frontend y backend API, modelado relacional y documentación interactiva.",
    primaryTags: [
      "Next.js",
      "TypeScript",
      ".NET 8",
      "PostgreSQL",
      "Clean Architecture",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      ".NET 8",
      "ASP.NET Core",
      "PostgreSQL",
      "Clean Architecture",
      "CQRS",
      "Tailwind CSS",
      "JWT",
      "Swagger",
      "Entity Framework Core",
    ],
    liveUrl: "https://blossom-institute.vercel.app/login",
    frontendRepoUrl: "https://github.com/SosaUlises/blossom-institute-front",
    backendRepoUrl: "https://github.com/SosaUlises/blossom-institute-api",
    repoUrl: "https://github.com/SosaUlises/blossom-institute-api",
    docsUrl: "https://blossom-demo.onrender.com/index.html",
    imageUrl: "/blossom-preview.jpg",
    imageAlt: "Pantalla de inicio de sesión - Blossom Institute",
    challenge:
      "Centralizar y ordenar los procesos académicos institucionales, permitiendo a administradores, profesores y estudiantes gestionar comisiones, clases, asistencias y entregas de trabajos desde un sistema unificado, seguro y modular.",
    solution:
      "Se estructuró una plataforma full stack integrando una interfaz web en Next.js con una API REST en ASP.NET Core diseñada con Clean Architecture y CQRS, separando el dominio y los casos de uso de la infraestructura. Se implementó autenticación con ASP.NET Core Identity y JWT con permisos por roles y persistencia en PostgreSQL.",
    architecture:
      "Frontend en Next.js desacoplado del backend. API estructurada en capas de Dominio, Aplicación, Infraestructura y API siguiendo Clean Architecture y CQRS. Persistencia mediante Entity Framework Core sobre PostgreSQL y documentación pública en Swagger UI.",
    features: [
      "Gestión de cursos, clases, matrículas y comisiones.",
      "Control de asistencia por clase con estados de presencia.",
      "Módulo de tareas con entregas de alumnos, retroalimentación docente y calificaciones.",
      "Seguridad mediante ASP.NET Core Identity y JWT con control de acceso basado en roles.",
      "Entorno demo disponible públicamente con Swagger para exploración interactiva de endpoints.",
    ],
    learnings: [
      "Diseño de arquitectura limpia y desacoplamiento estricto entre frontend y backend.",
      "Modelado de reglas de dominio adaptadas a dinámicas académicas reales.",
      "Estandarización de respuestas de API, manejo centralizado de excepciones y documentación viva.",
    ],
    highlights: [
      "Arquitectura Full Stack con Next.js en frontend y .NET 8 en backend.",
      "Clean Architecture + CQRS para separar dominio, casos de uso e infraestructura.",
      "Autenticación y autorización con ASP.NET Core Identity + JWT por roles.",
      "Modelo académico completo: cursos, clases, matrículas, entregas y asistencia.",
      "Persistencia relacional con PostgreSQL y Entity Framework Core.",
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
