import * as React from "react"

export function SectionShell({
  children,
  className = "",
  glow = false,
}: {
  children: React.ReactNode
  className?: string
  glow?: boolean
}) {
  return (
    <section
      className={[
        "relative overflow-hidden rounded-2xl border border-border/60",
        "bg-background/30 backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
        "px-6 py-8 sm:px-8 sm:py-10",
        className,
      ].join(" ")}
    >
      {/* soft texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(1200px circle at 50% 0%, rgba(255,255,255,0.04), transparent 55%), radial-gradient(900px circle at 100% 20%, rgba(255,255,255,0.03), transparent 55%)",
        }}
      />

      {glow ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 left-10 h-64 w-64 rounded-full bg-[hsl(var(--primary))] opacity-[0.10] blur-[80px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 right-10 h-72 w-72 rounded-full bg-[hsl(var(--primary))] opacity-[0.06] blur-[90px]"
          />
        </>
      ) : null}

      <div className="relative">{children}</div>
    </section>
  )
}
