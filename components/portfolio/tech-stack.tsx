import { SectionShell } from "@/components/portfolio/section-shell"
import { techStack } from "@/lib/tech-stack"

export function TechStack() {
  return (
    <SectionShell>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Stack Tecnológico
      </h2>
      <p className="mt-1 text-sm text-text-muted">
        Tecnologías, lenguajes y herramientas aplicadas en proyectos reales y formación continua.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 reveal-stagger">
        {techStack.map((section) => {
          const isFull = section.title === "Soporte e Infraestructura"

          return (
            <div
              key={section.title}
              className={[
                "card card-hover card-shine",
                "p-6 sm:p-7",
                isFull ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <h3 className="text-base font-semibold tracking-wide text-foreground">
                    {section.title}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {section.items.map((tech) => (
                    <span
                      key={tech}
                      className="chip chip-hover border-border/80 bg-secondary/80 font-mono text-xs text-secondary-foreground hover:border-primary/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionShell>
  )
}
