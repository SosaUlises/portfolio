export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  highlights?: string[]
  docsUrl?: string
  liveUrl?: string
  apiUrl?: string
}

export const projects: Project[] = [
  {
    slug: "gym-api",
    title: "Sosa Gym API",
    description:
  "API REST desarrollada en .NET 8 para la gestión integral de un gimnasio, con enfoque en arquitectura limpia, seguridad por roles y modelado de dominio real. Implementa Clean Architecture + CQRS, autenticación con Identity + JWT y persistencia en PostgreSQL (Neon). Incluye integración con OpenAI para generación inteligente de rutinas como extensión desacoplada del dominio.",
    tags: [".NET 8", "Clean Architecture", "CQRS", "JWT", "PostgreSQL", "Swagger"],
    repoUrl: "https://github.com/SosaUlises/GymAPI",
    docsUrl: "https://gymapi-yln2.onrender.com/index.html",
   highlights: [
      "Clean Architecture + CQRS para separar dominio, casos de uso y persistencia, facilitando mantenimiento y escalabilidad.",
      "Seguridad con ASP.NET Core Identity + JWT y autorización por roles (Administrador / Entrenador / Cliente) en endpoints protegidos.",
      "Modelo de negocio real: rutinas jerárquicas (Rutina → Días → Ejercicios) con asignación/desasignación a clientes.",
      "Gestión de cuotas por período con estados (Pendiente/Pagada/Vencida), vencimiento automático y validación de acceso según estado.",
      "Control de acceso por DNI con verificación de cliente + cuota y bloqueo automático si está vencida.",
      "Módulo IA (preview) integrado con OpenAI para generar rutinas personalizadas con respuesta estricta en JSON, alineada al dominio.",
      "Calidad de código: FluentValidation, AutoMapper y manejo global de excepciones; documentación en Swagger (Render).",
    ]
  },
  {
    slug: "veting",
    title: "VetIng",
    description:
  "Plataforma web integral para la gestión clínica y administrativa de una veterinaria moderna. Construida con ASP.NET Core MVC en arquitectura por capas (Controller–Service–Repository), integra pagos online (Mercado Pago), API externa gubernamental simulada y despliegue cloud en Render con PostgreSQL (Neon). Enfocada en seguridad, trazabilidad y toma de decisiones basada en datos.",
    tags: ["ASP.NET Core", "MVC", "EF Core", "SQL Server", "Identity", "Razor Pages"],
    repoUrl: "https://github.com/SosaUlises/SistemaVetIng",
    liveUrl: "https://sistemaveting-dcpx.onrender.com/",
    apiUrl: "https://perrospeligrososapi.onrender.com/swagger/index.html",
    highlights: [
  "Plataforma integral (web app + APIs) para operación clínica y administrativa: turnos, historias clínicas, pagos, reportes y auditoría.",
  "ASP.NET Core MVC en capas (Controllers sin lógica, Services con reglas e integraciones, Repositories con EF Core).",
  "Seguridad robusta: ASP.NET Core Identity + RBAC (roles/permisos) y recuperación de contraseña por email (SMTP).",
  "Infraestructura cloud: Render + PostgreSQL en Neon; versión productiva lista (DB migrada/poblada, sin setup local).",
  "Integraciones externas: Mercado Pago (pagos online) + API “Perros Peligrosos” protegida por API Key.",
  "Auditoría y trazabilidad con registro de eventos para control y seguimiento de acciones del sistema.",
  "Testing con xUnit (unitario e integración) y aplicación de patrones de diseño (Repository/Service, Observer, Decorator, Memento, Composite y Singleton).",
],
  },
]



