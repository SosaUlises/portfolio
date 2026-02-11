import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Summary } from "@/components/portfolio/summary"
import { Projects } from "@/components/portfolio/projects"
import { TechStack } from "@/components/portfolio/tech-stack"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div id="inicio">
          <Hero />
        </div>

        <section id="sobre-mi" className="scroll-mt-28">
          <Summary />
        </section>

        <section id="proyectos" className="scroll-mt-28">
          <Projects />
        </section>

        <section id="stack" className="scroll-mt-28">
          <TechStack />
        </section>

        <section id="educacion" className="scroll-mt-28">
          <Education />
        </section>

        <section id="contacto" className="scroll-mt-28">
          <Contact />
        </section>
      </main>
    </>
  )
}
