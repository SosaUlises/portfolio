import { SectionShell } from "@/components/portfolio/section-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, MapPin } from "lucide-react"
import { experiences } from "@/lib/experience"

export function Experience() {
  return (
    <SectionShell glow>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Experiencia Profesional
      </h2>

      <div className="mt-8 flex flex-col gap-6 reveal-stagger">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className="card card-hover card-shine p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    {exp.modality ? (
                      <span className="rounded-md border border-border bg-secondary/80 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                        {exp.modality}
                      </span>
                    ) : null}
                    {exp.isUpcoming ? (
                      <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                        Próxima incorporación
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-1 text-base font-medium text-primary">
                    {exp.role}
                  </p>

                  {exp.location ? (
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </p>
                  ) : null}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground shrink-0">
                  <Calendar className="h-3.5 w-3.5 text-primary/70" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-text-secondary">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-md border border-border/80 bg-secondary/50 font-mono text-xs font-normal text-secondary-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {exp.highlights && exp.highlights.length > 0 ? (
                <ul className="space-y-2 text-sm leading-6 text-muted-foreground pt-1">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {exp.liveUrl || exp.repoUrl ? (
                <div className="flex flex-wrap gap-3 pt-2">
                  {exp.liveUrl ? (
                    <Button
                      asChild
                      size="sm"
                      className="gap-2 transition-transform hover:scale-[1.02]"
                    >
                      <a href={exp.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo / Swagger
                      </a>
                    </Button>
                  ) : null}

                  {exp.repoUrl ? (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="gap-2 transition-transform hover:scale-[1.02]"
                    >
                      <a href={exp.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Repositorio
                      </a>
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
