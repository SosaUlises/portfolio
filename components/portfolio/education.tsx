import { Calendar, Award } from "lucide-react"
import { education, EducationStatus } from "@/lib/education"
import { InstitutionLogo } from "@/components/portfolio/institution-logo"

function StatusPill({ status }: { status: EducationStatus }) {
  switch (status) {
    case "En curso":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 font-mono text-[10.5px] sm:text-[11px] font-medium text-primary shrink-0 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          En curso
        </span>
      )
    case "Completado":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10.5px] sm:text-[11px] font-medium text-emerald-400 shrink-0 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Completado
        </span>
      )
    case "Formación continua":
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-[#141924] px-2 py-0.5 font-mono text-[10.5px] sm:text-[11px] font-medium text-text-muted shrink-0 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60" aria-hidden="true" />
          Formación continua
        </span>
      )
  }
}

export function Education() {
  return (
    <div className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 lg:gap-16 items-start">
        {/* Left Column: Eyebrow + Section Title + Subtitle (~35-40%) */}
        <div className="md:col-span-5 lg:col-span-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
            05 / EDUCACIÓN
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-foreground leading-tight lg:leading-[1.2]">
            Formación académica y continua.
          </h2>
          <p className="mt-3 text-[15px] sm:text-base text-text-secondary leading-relaxed max-w-md">
            Estudios universitarios en ingeniería y desarrollo de software, complementados con aprendizaje continuo y certificación de idiomas.
          </p>
        </div>

        {/* Right Column: Editorial Timeline (~60-65%) */}
        <div className="md:col-span-7 lg:col-span-7">
          <div className="relative space-y-10 sm:space-y-12 lg:space-y-14 before:absolute before:left-7 sm:before:left-8 before:top-7 sm:before:top-8 before:bottom-7 sm:before:bottom-8 before:w-px before:-translate-x-1/2 before:bg-[#323B4C]">
            {education.map((item) => (
              <article key={item.id} className="relative flex items-start gap-4 sm:gap-5">
                {/* Institutional Logo Container (Timeline Node: 56px mobile / 64px desktop) */}
                <div className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-border/70 bg-[#161B22] p-2 sm:p-2.5 shadow-sm transition-all duration-300 hover:border-border">
                  <InstitutionLogo name={item.logo} className="h-auto max-h-full w-auto max-w-full object-contain" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1 pt-0.5 sm:pt-1">
                  {/* Title & Status Pill */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                    <h3 className="text-base sm:text-lg lg:text-[19px] font-bold tracking-tight text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <StatusPill status={item.status} />
                  </div>

                  {/* Institution, Period & Metadata */}
                  <div className="mt-2 sm:mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-text-muted">
                    <span className="font-medium text-text-secondary/90">
                      {item.institution}
                    </span>
                    <span className="text-border/60" aria-hidden="true">•</span>
                    <span className="inline-flex items-center gap-1.5 text-text-muted">
                      <Calendar className="h-3.5 w-3.5 text-text-muted/80 shrink-0" aria-hidden="true" />
                      <span>{item.period}</span>
                    </span>
                    {item.extraRef && (
                      <>
                        <span className="text-border/60" aria-hidden="true">•</span>
                        <span className="inline-flex items-center gap-1 text-text-muted font-medium">
                          <Award className="h-3.5 w-3.5 text-primary/70 shrink-0" aria-hidden="true" />
                          <span>{item.extraRef}</span>
                        </span>
                      </>
                    )}
                  </div>

                  {/* Editorial Description */}
                  <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15px] leading-relaxed text-text-secondary text-left">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
