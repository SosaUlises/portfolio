"use client"

import * as React from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, MessageCircle, Copy, Check } from "lucide-react"

const EMAIL = "sosa10ulises@gmail.com"
const WHATSAPP_PHONE = "5493412765611"
const WHATSAPP_TEXT = "Hola Ulises, vi tu portfolio y me gustaría contactarte."

function whatsappLink() {
  const text = encodeURIComponent(WHATSAPP_TEXT)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
}

function CardShell({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-border/60",
        "bg-background/35 backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
        "transition",
        className,
      ].join(" ")}
    >
      {/* soft noise + vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(1200px circle at 50% 0%, rgba(255,255,255,0.04), transparent 55%), radial-gradient(900px circle at 100% 20%, rgba(255,255,255,0.03), transparent 55%)",
        }}
      />
      {children}
    </div>
  )
}

export function Contact() {
  const [copied, setCopied] = React.useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      const el = document.createElement("textarea")
      el.value = EMAIL
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    }
  }

  return (
    <ScrollReveal className="mt-24 pb-24" as="section">
      <Separator className="mb-12" />
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Contacto
      </h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Left big card */}
        <div className="lg:col-span-2">
          <CardShell className="p-8">
            {/* subtle primary glow (small + dark, not a big blue wash) */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-28 left-10 h-64 w-64 rounded-full bg-[hsl(var(--primary))] opacity-[0.10] blur-[80px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 right-10 h-72 w-72 rounded-full bg-[hsl(var(--primary))] opacity-[0.06] blur-[90px]"
            />

            <div className="relative">
              <h3 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                ¿Creamos algo <span className="text-primary">único</span> juntos?
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Estoy disponible para nuevos proyectos. Si buscás backend sólido
                en .NET, código limpio y foco en arquitectura, hablemos.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
                    "bg-foreground text-background",
                    "transition hover:opacity-90 active:scale-[0.99]",
                  ].join(" ")}
                >
                  <Mail className="h-4 w-4" />
                  Enviar correo
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
                    "border border-border/60 bg-background/30 text-foreground",
                    "transition hover:border-primary/30 hover:bg-muted/10 active:scale-[0.99]",
                  ].join(" ")}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      {EMAIL}
                    </>
                  )}
                </button>
              </div>
            </div>
          </CardShell>
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-4">
          <a
            href="https://linkedin.com/in/sosaulises"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <CardShell className="p-5 hover:-translate-y-0.5 hover:border-primary/25">
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Perfil
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    LinkedIn
                  </p>
                </div>
                <Linkedin className="mt-1 h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </CardShell>
          </a>

          <a
            href="https://github.com/SosaUlises"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <CardShell className="p-5 hover:-translate-y-0.5 hover:border-primary/25">
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Código
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    GitHub
                  </p>
                </div>
                <Github className="mt-1 h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </CardShell>
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <CardShell className="p-5 hover:-translate-y-0.5 hover:border-primary/25">
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Chat rápido
                  </p>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    WhatsApp
                  </p>
                </div>
                <MessageCircle className="mt-1 h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </CardShell>
          </a>
        </div>
      </div>

      <p className="mt-14 text-xs text-muted-foreground/60">
        {"Sosa Ulises Ezequiel \u00A9 2026"}
      </p>
    </ScrollReveal>
  )
}
