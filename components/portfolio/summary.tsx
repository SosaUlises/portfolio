import { Separator } from "@/components/ui/separator"
import { SectionShell } from "@/components/portfolio/section-shell"

export function Summary() {
  return (
    <div>
      <Separator className="mb-12" />
      <SectionShell glow>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Sobre mí
        </h2>

        <div className="mt-5 space-y-4 text-base leading-relaxed text-text-secondary">
          <p>
            Soy Analista en Sistemas Informáticos y actualmente curso los últimos años de Ingeniería en Sistemas en la Universidad Abierta Interamericana (UAI Rosario). Mi enfoque combina fundamentos sólidos de ingeniería, análisis de procesos y construcción de software mantenible, con especial interés en la arquitectura y en comprender cómo funcionan los sistemas en su totalidad.
          </p>

          <p>
            He desarrollado soluciones full stack y APIs backend utilizando principalmente C#, .NET, PostgreSQL, Next.js, React y TypeScript. Me motiva diseñar arquitecturas desacopladas, modelar bases de datos relacionales con criterio de negocio e implementar interfaces web claras y funcionales.
          </p>

          <p>
            Antes de incorporarme formalmente al sector tecnológico, trabajé durante aproximadamente seis años en comercios familiares dedicados a la venta de calzado. Esa etapa fue clave para desarrollar habilidades interpersonales, coordinación de equipos, atención al cliente y resolución pragmática de problemas. Entre otras responsabilidades, participé activamente en la implementación y configuración del software de gestión Dux en cinco locales comerciales, encargándome de la capacitación y acompañamiento de los usuarios para optimizar la operatoria diaria.
          </p>
        </div>
      </SectionShell>
    </div>
  )
}
