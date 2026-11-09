"use client"

import * as React from "react"
import { Mail, Copy, Check, Linkedin, Github, MessageCircle } from "lucide-react"
import { reveal } from "@/lib/motion"

const EMAIL = "sosa10ulises@gmail.com"
const WHATSAPP_PHONE = "5493412765611"
const WHATSAPP_TEXT = "Hola Ulises, vi tu portfolio y me gustaría contactarte."

function whatsappLink() {
  const text = encodeURIComponent(WHATSAPP_TEXT)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
}

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sosaulises",
    icon: Linkedin,
    label: "Perfil de LinkedIn de Ulises Sosa",
  },
  {
    name: "GitHub",
    href: "https://github.com/SosaUlises",
    icon: Github,
    label: "Perfil de GitHub de Ulises Sosa",
  },
  {
    name: "WhatsApp",
    href: whatsappLink(),
    icon: MessageCircle,
    label: "Conversar por WhatsApp con Ulises Sosa",
  },
]

export function Contact() {
  const [copied, setCopied] = React.useState(false)
  const [copyError, setCopyError] = React.useState(false)
  const timerRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [])

  async function copyEmail() {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
    }

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
        setCopied(true)
        setCopyError(false)
        timerRef.current = window.setTimeout(() => setCopied(false), 2000)
        return
      }
      throw new Error("Clipboard API not available")
    } catch {
      // Fallback robusto sin dependencias externas
      try {
        const el = document.createElement("textarea")
        el.value = EMAIL
        el.setAttribute("readonly", "")
        el.style.position = "absolute"
        el.style.left = "-9999px"
        document.body.appendChild(el)
        el.select()
        const successful = document.execCommand("copy")
        document.body.removeChild(el)
        if (successful) {
          setCopied(true)
          setCopyError(false)
          timerRef.current = window.setTimeout(() => setCopied(false), 2000)
        } else {
          setCopyError(true)
          timerRef.current = window.setTimeout(() => setCopyError(false), 2500)
        }
      } catch {
        setCopyError(true)
        timerRef.current = window.setTimeout(() => setCopyError(false), 2500)
      }
    }
  }

  return (
    <div className="border-t border-border/60 pt-10 sm:pt-14 lg:pt-16">
      {/* Eyebrow */}
      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted" {...reveal()}>
        06 / CONTACTO
      </p>

      {/* Dominant Editorial Heading */}
      <h2
        className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-foreground leading-tight lg:leading-[1.2]"
        {...reveal({ delay: 1 })}
      >
        ¿Construimos algo juntos<span className="text-primary">?</span>
      </h2>

      {/* Description */}
      <p
        className="mt-4 max-w-2xl text-[15px] sm:text-base lg:text-[17px] text-text-secondary leading-relaxed"
        {...reveal({ delay: 2 })}
      >
        Estoy abierto a conectar con profesionales, compartir ideas y participar en proyectos donde pueda aportar mis conocimientos en desarrollo de software.
      </p>

      {/* Primary Actions (Email CTAs) */}
      <div className="mt-8 flex flex-wrap items-center gap-3" {...reveal({ delay: 3 })}>
        <a
          href={`mailto:${EMAIL}`}
          title={EMAIL}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-150 hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>Enviar correo</span>
        </a>

        <button
          type="button"
          onClick={copyEmail}
          title={EMAIL}
          aria-label={copied ? "Correo copiado al portapapeles" : "Copiar dirección de correo al portapapeles"}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/80 bg-surface px-4 py-2.5 text-sm font-medium text-text-primary transition-all duration-150 hover:border-primary/40 hover:bg-surface/80 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span className="text-emerald-400 font-semibold" aria-live="polite">
                ¡Copiado!
              </span>
            </>
          ) : copyError ? (
            <>
              <Copy className="h-4 w-4 text-text-muted" aria-hidden="true" />
              <span className="text-rose-400" aria-live="polite">
                Error al copiar
              </span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-text-muted" aria-hidden="true" />
              <span>Copiar correo</span>
            </>
          )}
        </button>
      </div>

      {/* Subtle Horizontal Divider */}
      <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-border/40" {...reveal({ delay: 4 })}>
        {/* Secondary Professional Links Navigation */}
        <nav
          aria-label="Perfiles profesionales y canales alternativos"
          className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3"
        >
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm py-1"
              >
                <Icon
                  className="h-4 w-4 text-text-muted transition-colors duration-150 group-hover:text-primary"
                  aria-hidden="true"
                />
                <span className="font-medium">{link.name}</span>
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
