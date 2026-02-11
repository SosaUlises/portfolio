import { Hero } from "@/components/portfolio/hero"
import { Summary } from "@/components/portfolio/summary"
import { TechStack } from "@/components/portfolio/tech-stack"
import { Projects } from "@/components/portfolio/projects"
import { Education } from "@/components/portfolio/education"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-6 lg:px-0">
      <Hero />
      <Summary />
      <TechStack />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </main>
  )
}
