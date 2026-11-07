"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/#inicio", label: "Inicio", id: "inicio" },
  { href: "/#sobre-mi", label: "Sobre mí", id: "sobre-mi" },
  { href: "/#experiencia", label: "Experiencia", id: "experiencia" },
  { href: "/#proyectos", label: "Proyectos", id: "proyectos" },
  { href: "/#tech-stack", label: "Tecnologías", id: "tech-stack" },
  { href: "/#educacion", label: "Educación", id: "educacion" },
  { href: "/#contacto", label: "Contacto", id: "contacto" },
] as const

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = React.useState<string>(sectionIds[0] ?? "inicio")
  const pathname = usePathname()

  React.useEffect(() => {
    if (pathname !== "/") {
      setActive("")
      return
    }

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
        threshold: [0.15, 0.3, 0.5],
        rootMargin: "-20% 0px -60% 0px",
      }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds, pathname])

  return active
}

export function Navbar() {
  const active = useActiveSection(navItems.map((i) => i.id))
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div
        className={[
          "w-full transition-all duration-300",
          scrolled
            ? "border-b border-border/70 bg-background/85 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          {/* Logo / Monogram */}
          <Link
            href="/#inicio"
            aria-label="Ir al inicio de Ulises Sosa"
            className="group flex items-center gap-1.5 font-mono text-sm font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          >
            <span>US</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:scale-125" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md"
          >
            {navItems.map(({ href, label, id }) => {
              const isActive = active === id
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "rounded-full px-3.5 py-1 text-xs font-medium transition-all duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isActive
                      ? "bg-primary/15 text-primary font-semibold"
                      : "text-text-muted hover:text-foreground hover:bg-secondary/70",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="inline-flex md:hidden items-center justify-center rounded-lg border border-border bg-surface/70 p-2 text-text-secondary hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="md:hidden border-b border-border bg-background-elevated/95 px-6 py-4 backdrop-blur-xl shadow-lg"
        >
          <nav className="flex flex-col space-y-1">
            {navItems.map(({ href, label, id }) => {
              const isActive = active === id
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-text-secondary hover:bg-surface hover:text-foreground",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{label}</span>
                  {isActive ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  ) : null}
                </Link>
              )
            })}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
