import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Heart, RefreshCw, Lightbulb, Zap, Palette, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const VALUES = [
  {
    icon: Heart,
    title: "Empatía",
    description: "Escucho antes de proponer. Entender al usuario no es un paso del proceso, es el punto de partida.",
  },
  {
    icon: Lightbulb,
    title: "Claridad",
    description: "Prefiero lo simple bien pensado a lo complejo mal justificado. Diseño para que se entienda.",
  },
  {
    icon: RefreshCw,
    title: "Iteración",
    description: "Nada queda perfecto en el primer intento. Refino basándome en evidencia, no en opiniones.",
  },
  {
    icon: Zap,
    title: "Funcionalidad",
    description: "Un diseño que no puede implementarse, no sirve. Pienso en viabilidad desde el inicio.",
  },
  {
    icon: Palette,
    title: "Estética con propósito",
    description: "Lo visual no es decoración. Cada decisión gráfica tiene una función en la experiencia.",
  },
]

const EXPERIENCE = [
  {
    period: "Ene. 2023 – Presente",
    role: "Product Designer",
    company: "Multitravel.com",
    description:
      "Lidero el diseño de soluciones para la industria de viajes, alineando objetivos de negocio con necesidades reales de usuarios. Optimización del funnel de conversión, diseño de experiencias móviles y escritorio, e implementación de features como filtros avanzados, checkout y cupones.",
  },
  {
    period: "Jul. 2020 – Ene. 2022",
    role: "UX/UI Designer",
    company: "Tutenlabs",
    description:
      "Diseñé plataformas internas para gestión de operaciones. Colaboré con equipos de desarrollo en sprints ágiles, definiendo flujos complejos, wireframes y prototipos funcionales.",
  },
  {
    period: "Mar. 2022 – Ago. 2022",
    role: "UX/UI Design Tutor (Avanzado)",
    company: "Coderhouse",
    description:
      "Guié a estudiantes en la creación de proyectos reales, reforzando conceptos de accesibilidad, arquitectura de información, research y diseño visual.",
  },
  {
    period: "Sept. 2021 – Abr. 2022",
    role: "Junior UX/UI Designer",
    company: "Orbit",
    description:
      "Trabajé en el rediseño de sitios corporativos con foco en mobile-first y accesibilidad. Participé en testeo de usabilidad y definiciones visuales.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Ambient bg */}
        <div
          className="orb w-[500px] h-[500px] -right-24 -top-24 opacity-60"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.15) 0%, transparent 70%)" }}
        />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <ScrollAnimation>
              <div className="space-y-7">
                <div>
                  <p className="chip mb-4">Sobre mí</p>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Sobre <span className="gradient-text">Mariano</span>
                  </h1>
                </div>

                <p className="text-xl leading-relaxed text-foreground/80">
                  Product Designer especializado en experiencias web y mobile. Trabajo donde se cruzan
                  la investigación, la estrategia y el diseño visual para construir productos que
                  tienen sentido.
                </p>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Me formé en Diseño Industrial (Universidad de Palermo) y me especialicé en UX/UI
                    a través de la práctica real. He trabajado en el sector turístico, plataformas SaaS,
                    educación digital y proyectos freelance.
                  </p>
                  <p>
                    Lo que más me importa es entender el problema antes de proponer soluciones.
                    No diseño pantallas: diseño experiencias que resuelven algo concreto para alguien concreto.
                  </p>
                </div>

                <Button asChild className="btn-primary-glow group">
                  <Link href="/projects">
                    Ver mi trabajo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-3xl blur-2xl opacity-25"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.5), hsl(var(--secondary)/0.4))" }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl gradient-border aspect-[4/5]">
                  <Image
                    src="/mariano-casual.jpeg"
                    alt="Mariano Breiman"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                </div>
                <div className="floating-animation absolute -bottom-5 -right-5 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FILOSOFÍA / ENFOQUE
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-muted/20 relative">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
              <p className="chip mx-auto">Mi forma de pensar</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lo que guía mi trabajo</h2>
              <p className="text-muted-foreground leading-relaxed">
                Principios que aplico en cada proyecto, sin importar el contexto o la etapa del producto.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {VALUES.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 70}>
                <div className="project-card p-6 h-full group cursor-default text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold mb-2.5 text-sm">{value.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EXPERIENCIA
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="mb-14">
              <p className="chip mb-3">Trayectoria</p>
              <SectionHeading
                title="Experiencia laboral"
                subtitle="Proyectos reales, equipos reales, problemas reales."
              />
            </div>
          </ScrollAnimation>

          <div className="relative max-w-3xl pl-6">
            <div className="timeline-line" />

            <div className="space-y-12">
              {EXPERIENCE.map((item, index) => (
                <ScrollAnimation key={index} delay={index * 80}>
                  <div className="relative timeline-item pl-6">
                    <div className="timeline-dot" />
                    <div className="project-card p-6 group">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                        <div>
                          <h3 className="text-lg font-bold">{item.role}</h3>
                          <p className="text-primary font-medium text-sm">{item.company}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.period}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EDUCACIÓN
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <ScrollAnimation>
            <div className="mb-14">
              <p className="chip mb-3">Formación</p>
              <SectionHeading title="Educación" subtitle="Fundamentos académicos y especialización continua." />
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <ScrollAnimation>
              <div className="space-y-5">
                {[
                  { institution: "Universidad de Palermo", detail: "Diseñador Industrial · Mar. 2017 – Jun. 2024" },
                  { institution: "Instituto ORT", detail: "Bachiller Técnico en Diseño Industrial · Mar. 2012 – Dic. 2016" },
                ].map((edu, i) => (
                  <div key={i} className="project-card p-6">
                    <h3 className="font-bold mb-1">{edu.institution}</h3>
                    <p className="text-sm text-muted-foreground">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="project-card p-6 h-full">
                <h3 className="font-bold mb-5">Certificaciones Coderhouse</h3>
                <ul className="space-y-3.5">
                  {[
                    "UX/UI Design Certificate (2021)",
                    "UX Research Certificate (2022)",
                    "UX/UI Design Advance Certificate (2022)",
                    "JavaScript Certificate (2023)",
                    "Web Development Certificate (2023)",
                  ].map((cert, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-5 border-t border-border/50">
                  <h4 className="font-semibold mb-3 text-sm">Idiomas</h4>
                  <div className="space-y-3">
                    {[
                      { lang: "Español", level: "Nativo", pct: 100 },
                      { lang: "Inglés", level: "Conversacional", pct: 75 },
                    ].map((l) => (
                      <div key={l.lang}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-medium">{l.lang}</span>
                          <span className="text-muted-foreground">{l.level}</span>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-bar-fill animate-complete" style={{ transform: `scaleX(${l.pct / 100})` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

    </div>
  )
}
