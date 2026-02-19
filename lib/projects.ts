export interface Project {
  slug: string
  title: string
  summary: string       
  description: string    
  tags: string[]
  repoUrl?: string
  docsUrl?: string
  liveUrl?: string
  apiUrl?: string
  highlights?: string[]
  imageUrl?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    slug: "gym-api",
    title: "Sosa Gym API",
    summary:
      "API REST en .NET 8 con Clean Architecture + CQRS, JWT por roles, PostgreSQL (Neon) e integración OpenAI para rutinas.",
    description:
      "API REST desarrollada en .NET 8 para la gestión integral de un gimnasio, con enfoque en arquitectura limpia, seguridad por roles y modelado de dominio real. Implementa Clean Architecture + CQRS, autenticación con Identity + JWT y persistencia en PostgreSQL (Neon). Incluye integración con OpenAI para generación inteligente de rutinas como extensión desacoplada del dominio.",
    tags: [".NET 8", "Clean Architecture", "CQRS", "JWT", "PostgreSQL", "Swagger", "OpenAI", "Identity"],
    repoUrl: "https://github.com/SosaUlises/GymAPI",
    docsUrl: "https://gymapi-yln2.onrender.com/index.html",
    imageUrl: "/sosagym.PNG",
    imageAlt: "Swagger UI - Sosa Gym API",
    highlights: [
      "Clean Architecture + CQRS para separar dominio, casos de uso y persistencia, facilitando mantenimiento y escalabilidad.",
      "Seguridad con ASP.NET Core Identity + JWT y autorización por roles (Administrador / Entrenador / Cliente) en endpoints protegidos.",
      "Modelo de negocio real: rutinas jerárquicas (Rutina → Días → Ejercicios) con asignación/desasignación a clientes.",
      "Gestión de cuotas por período con estados (Pendiente/Pagada/Vencida), vencimiento automático y validación de acceso según estado.",
      "Control de acceso por DNI con verificación de cliente + cuota y bloqueo automático si está vencida.",
      "Módulo IA (preview) integrado con OpenAI para generar rutinas personalizadas con respuesta estricta en JSON, alineada al dominio.",
      "Calidad de código: FluentValidation, AutoMapper y manejo global de excepciones; documentación en Swagger (Render).",
    ],
  },
  {
    slug: "veting",
    title: "VetIng",
    summary:
      "Web app (MVC) para veterinarias: turnos, historia clínica, pagos Mercado Pago, RBAC/auditoría y deploy en Render + PostgreSQL (Neon).",
    description:
      "Plataforma web integral para la gestión clínica y administrativa de una veterinaria moderna. Construida con ASP.NET Core MVC en arquitectura por capas (Controller–Service–Repository), simulacion de pagos online (Mercado Pago) y una API externa gubernamental. Despliegue cloud en Render con PostgreSQL (Neon). Enfocada en seguridad, trazabilidad y toma de decisiones basada en datos.",
    tags: ["ASP.NET Core", "MVC", "EF Core", "PostgreSQL", "Identity", "RBAC", "Auditoría", "Reportes"],
    repoUrl: "https://github.com/SosaUlises/SistemaVetIng",
    liveUrl: "https://sistemaveting-dcpx.onrender.com/",
    apiUrl: "https://perrospeligrososapi.onrender.com/swagger/index.html",
    imageUrl: "/veting.PNG",
    imageAlt: "VetIng - pantalla principal",
    highlights: [
      "Plataforma integral (web app + APIs) para operación clínica y administrativa: turnos, historias clínicas, pagos, reportes y auditoría.",
      "ASP.NET Core MVC en capas (Controllers sin lógica, Services con reglas e integraciones, Repositories con EF Core).",
      "Seguridad robusta: ASP.NET Core Identity + RBAC (roles/permisos) y recuperación de contraseña por email (SMTP).",
      "Infraestructura cloud: Render + PostgreSQL en Neon; versión productiva lista (DB migrada/poblada, sin setup local).",
      "Integraciones externas: Simulación de pagos online con Mercado Pago. API “Perros Peligrosos” protegida por API Key.",
      "Auditoría y trazabilidad con registro de eventos para control y seguimiento de acciones del sistema.",
      "Testing con xUnit (unitario e integración) y aplicación de patrones de diseño (Repository/Service, Observer, Decorator, Memento, Composite y Singleton).",
    ],
  },
]
