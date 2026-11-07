"use client"

import * as React from "react"

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  staggerMs?: number
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function ScrollReveal({
  children,
  className = "",
  staggerMs = 0,
  style,
  ...rest
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
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

  const customStyle: React.CSSProperties = {
    ...style,
    ...(staggerMs > 0
      ? ({ ["--reveal-stagger"]: `${staggerMs}ms` } as React.CSSProperties)
      : {}),
  }

  return (
    <div
      ref={ref}
      className={[
        "reveal",
        inView ? "reveal--in" : "",
        staggerMs > 0 ? "reveal--stagger" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={customStyle}
      {...rest}
    >
      {children}
    </div>
  )
}
