export function Summary() {
  return (
    <div className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 lg:gap-16 items-start">
        {/* Left Column: Eyebrow + Section Title (~35-40%) */}
        <div className="md:col-span-5 lg:col-span-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
            01 / SOBRE MÍ
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-foreground leading-tight lg:leading-[1.2]">
            Tecnología aplicada a problemas reales.
          </h2>
        </div>

        {/* Right Column: Editorial Narrative Paragraphs (~60-65%) */}
        <div className="md:col-span-7 lg:col-span-7 space-y-6 text-[15px] sm:text-base lg:text-[17px] leading-relaxed text-text-secondary text-left">
          <p>
            Soy Analista en Sistemas Informáticos y estudiante avanzado de Ingeniería en Sistemas. Me apasiona el desarrollo de software y la creación de soluciones tecnológicas que respondan a necesidades reales. Tengo experiencia desarrollando aplicaciones full stack con tecnologías como C#, .NET, ASP.NET Core, TypeScript, React, Next.js y PostgreSQL, aplicando principios de arquitectura de software, buenas prácticas de desarrollo y diseño de sistemas escalables y mantenibles.
          </p>
          <p>
            En paralelo a mi formación universitaria, trabajé durante aproximadamente seis años en la gestión de comercios familiares, asumiendo responsabilidades en la coordinación de equipos, organización de procesos y administración operativa. Durante esta etapa también lideré la implementación y configuración de un sistema de gestión en cinco locales comerciales, incluyendo la capacitación del personal y su adaptación a las nuevas herramientas. Esta experiencia me permitió desarrollar una visión integral, combinando conocimientos tecnológicos con habilidades de liderazgo, comunicación y resolución de problemas.
          </p>
        </div>
      </div>
    </div>
  )
}
