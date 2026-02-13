"use client"

import * as React from "react"
import Link from "next/link"
import { Home, User, Briefcase, Mail } from "lucide-react"

const items = [
  { href: "#inicio", label: "Inicio", Icon: Home, id: "inicio" },
  { href: "#sobre-mi", label: "Sobre mí", Icon: User, id: "sobre-mi" },
  { href: "#proyectos", label: "Proyectos", Icon: Briefcase, id: "proyectos" },
  { href: "#contacto", label: "Contacto", Icon: Mail, id: "contacto" },
] as const

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = React.useState(sectionIds[0] ?? "inicio")

  React.useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

        if (visible?.target?.id) setActive(visible.target.id)
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-15% 0px -65% 0px",
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}

export function Navbar() {
  const active = useActiveSection(items.map((i) => i.id))
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="pointer-events-none sticky top-5 z-50 flex justify-center px-6">
      <nav className="pointer-events-auto w-full max-w-5xl">
        <div
          className={[
            "mx-auto flex w-fit items-center gap-1 rounded-full border p-1 backdrop-blur",
            "bg-background/55",
            scrolled ? "border-border/70 shadow-sm" : "border-border/50",
          ].join(" ")}
        >
          {items.map(({ href, label, Icon, id }) => {
            const isActive = active === id
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  isActive
                    ? "bg-muted/60 text-foreground"
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
