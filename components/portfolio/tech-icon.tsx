import React from "react"

interface TechIconProps {
  name: string
  className?: string
}

export function TechIcon({ name, className = "h-4 w-4" }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "")

  switch (normalized) {
    case "csharp":
    case "c":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <rect width="24" height="24" rx="4" fill="#68217A" />
          <path
            d="M11 8.5a3.5 3.5 0 0 0-3.5 3.5v0a3.5 3.5 0 0 0 3.5 3.5 3.4 3.4 0 0 0 2.5-1l-1-1a2 2 0 0 1-1.5.6 2.1 2.1 0 0 1-2.1-2.1v0a2.1 2.1 0 0 1 2.1-2.1 2 2 0 0 1 1.5.6l1-1a3.4 3.4 0 0 0-2.5-1zm3.8 3.5h1.2v-1.5h.8v1.5h1.2v.8H18v1.4h1.2v.8H18V16h-.8v-1.5H16V16h-.8v-1.5h-1.2v-.8h1.2v-1.4h-1.2v-.8zm2 0v1.4h1.4V12h-1.4z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case "dotnet":
    case "net":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <rect width="24" height="24" rx="4" fill="#512BD4" />
          <circle cx="5.5" cy="16" r="1.2" fill="#FFFFFF" />
          <path
            d="M8.5 8h1.8l3.7 6.2V8h1.6v8h-1.8L10.1 9.8V16H8.5V8zm8.5 0h4.2v1.5h-2.6v1.7h2.4v1.5h-2.4V16H17V8z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case "aspnetcore":
    case "aspnet":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <rect width="24" height="24" rx="4" fill="#1C2949" stroke="#512BD4" strokeWidth="1.5" />
          <path
            d="M12 4.5l6.5 3.5v5c0 4-3 7-6.5 8-3.5-1-6.5-4-6.5-8V8L12 4.5z"
            fill="#512BD4"
            fillOpacity="0.4"
            stroke="#648DFF"
            strokeWidth="1.2"
          />
          <path
            d="M9.5 13.5l2-2.5 1.5 1.5 2.5-3"
            stroke="#FFFFFF"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case "entityframework":
    case "entityframeworkcore":
    case "efcore":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <rect width="24" height="24" rx="4" fill="#111624" stroke="#68217A" strokeWidth="1.5" />
          <ellipse cx="12" cy="7" rx="6" ry="2.2" stroke="#B5BFCD" strokeWidth="1.2" fill="#68217A" fillOpacity="0.3" />
          <path d="M6 7v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V7" stroke="#B5BFCD" strokeWidth="1.2" />
          <path d="M6 11v4c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V11" stroke="#B5BFCD" strokeWidth="1.2" />
          <path d="M12 10l2 2-2 2" stroke="#648DFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case "typescript":
    case "ts":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path
            d="M11.5 10.5h-5V9h12v1.5h-5V20H11.5V10.5zM15.5 16.5c.8.6 1.8 1 2.8 1 1 0 1.6-.4 1.6-1.1 0-.7-.5-1.1-1.7-1.5l-.8-.3c-1.8-.6-2.9-1.5-2.9-3.2 0-2 1.6-3.4 3.9-3.4 1.2 0 2.2.3 3 .8l-.6 1.4c-.7-.4-1.5-.7-2.4-.7-1.2 0-1.8.5-1.8 1.2 0 .6.5 1 1.6 1.4l.8.3c2 .7 3 1.6 3 3.3 0 2.1-1.6 3.4-4.1 3.4-1.3 0-2.5-.4-3.4-1l.7-1.3z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case "react":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      )

    case "nextjs":
    case "next":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1.2" />
          <path
            d="M8.5 7.5v9M15.5 7.5v5.5M8.5 7.5l7.5 9.2"
            stroke="#FFFFFF"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case "tailwindcss":
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <path
            d="M12 6c-3.3 0-5.3 1.7-6.2 5 1.2-1.7 2.7-2.3 4.3-1.9.9.2 1.6.9 2.4 1.7 1.2 1.2 2.6 2.7 5.7 2.7 3.3 0 5.3-1.7 6.2-5-1.2 1.7-2.7 2.3-4.3 1.9-.9-.2-1.6-.9-2.4-1.7C16.5 7.5 15.1 6 12 6zM5.8 13.5c-3.3 0-5.3 1.7-6.2 5 1.2-1.7 2.7-2.3 4.3-1.9.9.2 1.6.9 2.4 1.7 1.2 1.2 2.6 2.7 5.7 2.7 3.3 0 5.3-1.7 6.2-5-1.2 1.7-2.7 2.3-4.3 1.9-.9-.2-1.6-.9-2.4-1.7-1.2-1.2-2.6-2.7-5.7-2.7z"
            fill="#38BDF8"
          />
        </svg>
      )

    case "html":
    case "html5":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v15.7l5.2-1.6 1.2-14.1H12z" fill="#EF652A" />
          <path
            d="M7.5 7.5h9l-.2 2.2H12v2.2h4l-.4 4.5-3.6 1-3.6-1-.2-2.5h2.2l.1 1.3 1.5.4 1.5-.4.2-2.1H7.2L7.5 7.5z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case "css":
    case "css3":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v15.7l5.2-1.6 1.2-14.1H12z" fill="#33A9DC" />
          <path
            d="M7.5 7.5h9l-.2 2.2H12v2.2h4l-.4 4.5-3.6 1-3.6-1-.2-2.5h2.2l.1 1.3 1.5.4 1.5-.4.2-2.1H7.2L7.5 7.5z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case "postgresql":
    case "postgres":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2z"
            fill="#1E2A38"
            stroke="#336791"
            strokeWidth="1.2"
          />
          <path
            d="M8.5 15.5c-.8-1.5-.5-3.5.5-4.5 1-1 2.5-.5 3 .5s1.5 2 2.5 1.5c1-.5.8-2 0-3s-2.5-1.5-4-1c-2 .7-3 3-2 6.5zm7-2c.5-1 .5-2 0-3-.5-1-1.5-1-2-.5"
            stroke="#336791"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="10" r="1" fill="#648DFF" />
        </svg>
      )

    case "sqlserver":
    case "mssql":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <rect width="24" height="24" rx="4" fill="#1F1517" stroke="#CC292B" strokeWidth="1.2" />
          <ellipse cx="12" cy="7" rx="6" ry="2.2" stroke="#EE3524" strokeWidth="1.2" fill="#CC292B" fillOpacity="0.4" />
          <path d="M6 7v4.5c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V7" stroke="#EE3524" strokeWidth="1.2" />
          <path d="M6 11.5V16c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2v-4.5" stroke="#EE3524" strokeWidth="1.2" />
          <circle cx="16" cy="15" r="1" fill="#FFFFFF" />
        </svg>
      )

    case "git":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <path
            d="M21.6 10.9L13.1 2.4a2.5 2.5 0 0 0-3.5 0L7.2 4.7l2.3 2.3a1.8 1.8 0 0 1 2.3 2.3l2.2 2.2a1.8 1.8 0 1 1-1.1 1l-2-2v4.8a1.8 1.8 0 1 1-1.5 0V9.9a1.8 1.8 0 0 1-1-2.4L6.1 5.3 2.4 9a2.5 2.5 0 0 0 0 3.5l8.5 8.5a2.5 2.5 0 0 0 3.5 0l7.2-7.2a2.5 2.5 0 0 0 0-3.5z"
            fill="#F05032"
          />
        </svg>
      )

    case "github":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <path d="M12 3.5L22.5 20.5H1.5L12 3.5Z" fill="#FFFFFF" />
        </svg>
      )

    case "render":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <rect width="24" height="24" rx="4" fill="#0E1E1C" stroke="#46E3B7" strokeWidth="1.2" />
          <path
            d="M7 6h5a3.5 3.5 0 0 1 3.5 3.5c0 1.5-1 2.8-2.3 3.3l2.8 4.7h-2.5l-2.5-4.5H9.5V17.5H7V6zm2.5 4.5h2.5a1.5 1.5 0 0 0 0-3H9.5v3z"
            fill="#46E3B7"
          />
        </svg>
      )

    case "neon":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <rect width="24" height="24" rx="4" fill="#0A1C16" stroke="#00E599" strokeWidth="1.2" />
          <path
            d="M8 17V7l8 10V7"
            stroke="#00E599"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case "swagger":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <circle cx="12" cy="12" r="10" fill="#85EA2D" />
          <path
            d="M8.5 10c0-1.5 1-2.5 2.5-2.5v1.5c-.7 0-1 .4-1 1v1c0 .8-.5 1.3-1.2 1.5.7.2 1.2.7 1.2 1.5v1c0 .6.3 1 1 1V16.5c-1.5 0-2.5-1-2.5-2.5v-1c0-.5-.4-.9-.8-1 .4-.1.8-.5.8-1v-1zm7 0c0-1.5-1-2.5-2.5-2.5v1.5c.7 0 1 .4 1 1v1c0 .8.5 1.3 1.2 1.5-.7.2-1.2.7-1.2 1.5v1c0 .6-.3 1-1 1V16.5c1.5 0 2.5-1 2.5-2.5v-1c0-.5.4-.9.8-1-.4-.1-.8-.5-.8-1v-1z"
            fill="#000000"
          />
        </svg>
      )

    case "postman":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path
            d="M17.5 7.5L6.5 12l4 1.5 5-4.5-3.5 5 5 1.5 0-7.5z"
            fill="#FFFFFF"
          />
        </svg>
      )

    case "windows":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
          <path d="M3 5.5l7-1v6.5H3V5.5zm8-1.2l9.5-1.3v8H11V4.3zM3 13h7v6.5l-7-1V13zm8 0h9.5v8L11 19.7V13z" fill="#00A4EF" />
        </svg>
      )

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeLinecap="round" />
        </svg>
      )
  }
}
