"use client"

import * as React from "react"

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  staggerMs?: number // 0 = sin stagger
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function ScrollReveal({
  children,
  className = "",
  as: Tag = "div",
  staggerMs = 0,
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    if (prefersReducedMotion()) {
      setInView(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as any}
      className={[
        "reveal",
        inView ? "reveal--in" : "",
        staggerMs > 0 ? "reveal--stagger" : "",
        className,
      ].join(" ")}
      style={
        staggerMs > 0
          ? ({ ["--reveal-stagger" as any]: `${staggerMs}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  )
}
