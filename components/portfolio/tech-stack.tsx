import { SectionShell } from "@/components/portfolio/section-shell"
import { techStack } from "@/lib/tech-stack"

export function TechStack() {
  return (
    <SectionShell>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Tech Stack
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2 reveal-stagger">
        {techStack.map((section) => {
          const isFull = section.title === "Integraciones & Cloud"

            return (
              <div
                key={section.title}
                className={[
                  "card card-hover card-shine",
                  "px-5 py-5 sm:px-6 sm:py-6",
                  isFull ? "md:col-span-2 text-center" : "",
                ].join(" ")}

              >
                <div
                  className={
                    isFull
                      ? "mx-auto max-w-2xl"
                      : ""
                  }
                >
                  <div
                    className={[
                      "flex items-center gap-2",
                      isFull ? "justify-center" : "",
                    ].join(" ")}
                  >
               
                    <h3
                      className={`text-sm font-semibold tracking-wide ${section.color}`}
                    >
                      {section.title}
                    </h3>
                  </div>

                  <div
                    className={[
                      "mt-4 flex flex-wrap gap-2",
                      isFull ? "justify-center" : "",
                    ].join(" ")}
                  >
                    {section.items.map((tech) => (
                      <span
                        key={tech}
                        className={[
                      "chip chip-hover",
                          section.badge,
                        ].join(" ")}
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
