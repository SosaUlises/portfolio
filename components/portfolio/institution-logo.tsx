import React from "react"
import Image from "next/image"

interface InstitutionLogoProps {
  name: "uai" | "ef-set" | "blossom"
  className?: string
}

export function InstitutionLogo({
  name,
  className = "h-auto max-h-full w-auto max-w-full object-contain",
}: InstitutionLogoProps) {
  if (name === "uai") {
    return (
      <Image
        src="/uai-logo.png"
        alt="Escudo oficial de Universidad Abierta Interamericana (UAI)"
        width={500}
        height={500}
        className={className}
      />
    )
  }

  // EF SET Certification badge (Optimized high-contrast vector)
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Circular EF Brand Accent */}
      <circle
        cx="28"
        cy="21"
        r="16"
        fill="#005088"
        fillOpacity="0.32"
        stroke="#0072CE"
        strokeWidth="1.8"
      />

      {/* EF Bold Lettermark */}
      <text
        x="28"
        y="27"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="17.5"
        letterSpacing="-0.5"
      >
        EF
      </text>

      {/* SET Badge */}
      <rect
        x="10"
        y="39"
        width="36"
        height="14"
        rx="4"
        fill="#00355E"
        stroke="#38BDF8"
        strokeWidth="1.2"
      />
      <text
        x="28"
        y="49.5"
        textAnchor="middle"
        fill="#38BDF8"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
        fontWeight="800"
        fontSize="10"
        letterSpacing="1.2"
      >
        SET
      </text>
    </svg>
  )
}
