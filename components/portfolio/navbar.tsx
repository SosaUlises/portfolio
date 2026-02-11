import Link from "next/link"
import { Home, User, Briefcase, Mail } from "lucide-react"

const items = [
  { href: "#inicio", label: "Inicio", Icon: Home },
  { href: "#sobre-mi", label: "Sobre mí", Icon: User },
  { href: "#proyectos", label: "Proyectos", Icon: Briefcase },
  { href: "#contacto", label: "Contacto", Icon: Mail },
] as const

export function Navbar() {
  return (
    <div className="pointer-events-none sticky top-6 z-50 flex justify-center px-6">
      <nav className="pointer-events-auto w-full max-w-5xl">
        <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-border/70 bg-background/60 p-1 shadow-sm backdrop-blur">
          {items.map(({ href, label, Icon }, idx) => (
            <Link
              key={href}
              href={href}
              className={[
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
                "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                idx === 0 ? "bg-muted/60 text-foreground" : "",
              ].join(" ")}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
