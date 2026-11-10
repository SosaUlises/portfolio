import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { MotionReveal } from "@/components/motion-reveal"

import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-sosaulises.vercel.app"),
  title: {
    default: "Ulises Sosa | Analista en Sistemas · Desarrollador de Software",
    template: "%s | Ulises Sosa",
  },
  description:
    "Portfolio profesional de Ulises Sosa. Analista en Sistemas Informáticos y estudiante de Ingeniería en Sistemas. Desarrollo de soluciones backend .NET, aplicaciones full stack y soporte IT.",
  keywords: [
    "Ulises Sosa",
    "Desarrollador de Software",
    "Analista en Sistemas",
    "Full Stack",
    "ASP.NET Core",
    ".NET 9",
    "Next.js",
    "TypeScript",
    "React",
    "Clean Architecture",
    "Rosario",
  ],
  authors: [{ name: "Ulises Sosa" }],
  creator: "Ulises Sosa",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://portfolio-sosaulises.vercel.app",
    siteName: "Ulises Sosa - Portfolio Profesional",
    title: "Ulises Sosa | Analista en Sistemas · Desarrollador de Software",
    description:
      "Portfolio profesional de Ulises Sosa. Analista en Sistemas Informáticos y estudiante de Ingeniería en Sistemas. Desarrollo de soluciones backend .NET, aplicaciones full stack y soporte IT.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ulises Sosa - Analista en Sistemas · Desarrollador de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulises Sosa | Analista en Sistemas · Desarrollador de Software",
    description:
      "Portfolio profesional de Ulises Sosa. Analista en Sistemas Informáticos y estudiante de Ingeniería en Sistemas. Desarrollo de soluciones backend .NET, aplicaciones full stack y soporte IT.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#0B0D12",
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
        <MotionReveal />
        <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background">
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

          <Navbar />
          <div className="relative flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
