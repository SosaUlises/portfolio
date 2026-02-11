"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"

const technologies = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Clean Architecture",
  "CQRS",
  "EF Core",
  "PostgreSQL",
  "SQL Server",
  "MongoDB",
  "ASP.NET Identity",
  "JWT",
  "FluentValidation",
  "AutoMapper",
  "Git",
  "Swagger",
  "Postman",
  "Docker",
]

export function TechStack() {
  return (
    <ScrollReveal className="mt-20">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Tech Stack
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs font-normal text-secondary-foreground"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </ScrollReveal>
  )
}
