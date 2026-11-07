import { SectionShell } from "@/components/portfolio/section-shell"
import { education } from "@/lib/education"

export function Education() {
  return (
    <SectionShell>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Educación
      </h2>

      <div className="mt-10 reveal-stagger space-y-4">
        {education.map((item) => (
          <div key={item.title} className="card card-hover card-shine relative flex gap-5 p-6 sm:p-7">
            <div className="relative mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary ring-4 ring-primary/20" />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
                <span className="text-xs text-muted-foreground/60">•</span>
                <span className="text-xs text-muted-foreground">
                  {item.institution}
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>

                {item.status === "Completado" && (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-emerald-400">
                    Completado
                  </span>
                )}

                {item.status === "En curso" && (
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-primary">
                    En curso
                  </span>
                )}

                {item.status === "Formación continua" && (
                  <span className="rounded-full border border-border bg-secondary/80 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-text-muted">
                    Formación continua
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
