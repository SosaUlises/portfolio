import { Server, Monitor, Database, Cloud, Wrench } from "lucide-react"
import { coreTechBlocks, supportKnowledge } from "@/lib/tech-stack"
import { TechIcon } from "@/components/portfolio/tech-icon"

const blockIconMap = {
  Server,
  Monitor,
  Database,
  Cloud,
}

export function TechStack() {
  return (
    <div className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
      {/* Section Header */}
      <div className="flex flex-col">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
          04 / TECNOLOGÍAS Y HERRAMIENTAS
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-foreground leading-tight lg:leading-[1.2]">
          Las tecnologías detrás de lo que construyo.
        </h2>
        <p className="mt-3 text-[15px] sm:text-base text-text-secondary max-w-2xl leading-relaxed">
          Tecnologías y herramientas con las que diseño, desarrollo y despliego aplicaciones Full Stack.
        </p>
      </div>

      {/* Main Core Groups (Open 2-Column Grid on Desktop, NO outer cards) */}
      <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-8 sm:gap-y-10 lg:gap-y-12 items-start">
        {coreTechBlocks.map((block) => {
          const Icon = blockIconMap[block.iconName]

          return (
            <div key={block.id} className="flex flex-col">
              {/* Category Header: Icon + Title */}
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                <h3 className="text-base sm:text-[17px] font-bold text-foreground tracking-tight">
                  {block.title}
                </h3>
              </div>

              {/* Tech Chips with Logos */}
              <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-2 sm:gap-2.5">
                {block.items.map((item) => (
                  <div
                    key={item.name}
                    className="inline-flex items-center gap-2.5 rounded-lg border border-border/50 bg-[#11151F]/90 px-3 py-2 text-[13px] sm:text-sm font-medium text-foreground/90 transition-colors duration-150 hover:border-border/80 hover:bg-[#151A26] hover:text-foreground"
                  >
                    <div className="flex h-5 w-5 sm:h-[22px] sm:w-[22px] shrink-0 items-center justify-center">
                      <TechIcon name={item.icon} className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                    </div>
                    <span className="leading-none whitespace-nowrap">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Secondary Tier: Soporte e Infraestructura (Discrete editorial strip, NO cards, NO chips) */}
      <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/40">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <Wrench className="h-3.5 w-3.5 text-text-muted" aria-hidden="true" />
            <h3 className="text-sm sm:text-[15px] font-semibold text-foreground/90">
              Soporte e Infraestructura:
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-text-secondary leading-relaxed">
            {supportKnowledge.join("\u00A0· ")}
          </p>
        </div>
      </div>
    </div>
  )
}
