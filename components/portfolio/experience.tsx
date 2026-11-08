import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { experiences } from "@/lib/experience"

export function Experience() {
  return (
    <div className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 lg:gap-16 items-start">
        {/* Left Column: Eyebrow + Section Title (~35-40%) */}
        <div className="md:col-span-5 lg:col-span-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
            02 / EXPERIENCIA PROFESIONAL
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-foreground leading-tight lg:leading-[1.2]">
            Mi experiencia en tecnología.
          </h2>
        </div>

        {/* Right Column: Experience Items List (~60-65%) */}
        <div className="md:col-span-7 lg:col-span-7 space-y-10 sm:space-y-12">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Isotipo Container (56px mobile / 64px desktop) */}
                {exp.logoUrl ? (
                  <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-border/70 bg-[#161B22] p-2 sm:p-2.5 shadow-sm">
                    <Image
                      src={exp.logoUrl}
                      alt={exp.logoAlt || "Isotipo de Avalian"}
                      width={838}
                      height={673}
                      className="h-auto max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                ) : null}

                {/* Company, Role & Meta */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                      {exp.company}
                    </h3>
                  </div>

                  <p className="mt-1 text-[15px] sm:text-base font-medium text-primary">
                    {exp.role}
                  </p>

                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted font-mono">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary/70 shrink-0" />
                      <span>{exp.period}</span>
                    </span>
                    {exp.location ? (
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-muted-foreground/70 shrink-0" />
                        <span>{exp.location}</span>
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Editorial Description */}
              <p className="text-[15px] sm:text-base lg:text-[17px] leading-[1.7] text-text-secondary text-left">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
