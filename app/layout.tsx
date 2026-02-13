import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Sosa Ulises Ezequiel | Desarrollador Backend .NET",
  description:
    "Desarrollador Backend .NET orientado al diseño e implementación de APIs RESTful, Clean Architecture, CQRS e integración de servicios de IA.",
}

export const viewport: Viewport = {
  themeColor: "#0f0f11",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="relative min-h-screen overflow-x-clip bg-background">
          {/* soft gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-80"
          >
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_0%,hsl(var(--primary)/0.16),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_0%_20%,hsl(var(--primary)/0.10),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_100%_30%,hsl(var(--primary)/0.08),transparent_55%)]" />
          </div>

          {/* subtle top-to-bottom shading */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35"
          />

          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  )
}
