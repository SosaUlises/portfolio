import { Hero } from "@/components/portfolio/hero"
import { Summary } from "@/components/portfolio/summary"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { TechStack } from "@/components/portfolio/tech-stack"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Page() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12 sm:py-16 space-y-20 sm:space-y-28">
      <section id="inicio" className="scroll-mt-28">
        <Hero />
      </section>

      <section id="sobre-mi" className="scroll-mt-28">
        <ScrollReveal>
          <Summary />
        </ScrollReveal>
      </section>

      <section id="experiencia" className="scroll-mt-28">
        <ScrollReveal staggerMs={70}>
          <Experience />
        </ScrollReveal>
      </section>

      <section id="proyectos" className="scroll-mt-28">
        <ScrollReveal staggerMs={70}>
          <Projects />
        </ScrollReveal>
      </section>

      <section id="tech-stack" className="scroll-mt-28">
        <ScrollReveal staggerMs={60}>
          <TechStack />
        </ScrollReveal>
      </section>

      <section id="educacion" className="scroll-mt-28">
        <ScrollReveal staggerMs={80}>
          <Education />
        </ScrollReveal>
      </section>

      <section id="contacto" className="scroll-mt-28">
        <Contact />
      </section>
    </main>
  )
}
