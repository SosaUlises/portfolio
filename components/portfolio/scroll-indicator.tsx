"use client"

import * as React from "react"
import { ArrowDown } from "lucide-react"

export function ScrollIndicator({
  targetHref = "/#sobre-mi",
}: {
  targetHref?: string
}) {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const inicioEl = document.getElementById("inicio")
    if (!inicioEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Visible only when Hero is prominently on screen
        setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.35)
      },
      {
        threshold: [0, 0.15, 0.35, 0.6, 1.0],
        rootMargin: "0px",
      }
    )

    observer.observe(inicioEl)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={[
        "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
      aria-hidden={!isVisible}
    >
      <a
        href={targetHref}
        tabIndex={isVisible ? 0 : -1}
        aria-label="Deslizar a la sección Sobre mí"
        className="group inline-flex items-center gap-2 rounded-sm text-xs font-mono text-text-muted hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span>Deslizá para explorar</span>
        <ArrowDown
          className="h-3.5 w-3.5 text-primary motion-nudge"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}
