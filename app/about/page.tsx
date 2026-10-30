import Image from "next/image"
import { HeroDotBackground } from "@/components/hero-dot-background"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { RunningCarousel } from "@/components/running-carousel"
import { Calendar, ArrowRight, Footprints } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ─── Experiencia ──────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    period: "Abr. 2023 – Presente",
    role: "Product Designer",
    company: "Multitravel.com",
    description:
      "Único diseñador de producto de una agencia de viajes online. Rediseñé el checkout de vuelos y diseñé el pago con tarjeta en dólares, las búsquedas recientes y el sistema de cupones, además de los módulos del backoffice. Mido los cambios en la base de producción.",
  },
  {
    period: "Abr. 2022 – Dic. 2022",
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

// ─── Educación — 7 items individuales ────────────────────────────────────────
// Para editar: modificá los objetos del array EDUCATION.
const EDUCATION = [
  {
    period: "Mar. 2017 – Jun. 2024",
    institution: "Universidad de Palermo",
    degree: "Diseñador Industrial",
    type: "Carrera",
  },
  {
    period: "2023",
    institution: "Coderhouse",
    degree: "Web Development Certificate",
    type: "Certificación",
  },
  {
    period: "2023",
    institution: "Coderhouse",
    degree: "JavaScript Certificate",
    type: "Certificación",
  },
  {
    period: "2022",
    institution: "Coderhouse",
    degree: "UX/UI Design Advance Certificate",
    type: "Certificación",
  },
  {
    period: "2022",
    institution: "Coderhouse",
    degree: "UX Research Certificate",
    type: "Certificación",
  },
  {
    period: "2021",
    institution: "Coderhouse",
    degree: "UX/UI Design Certificate",
    type: "Certificación",
  },
  {
    period: "Mar. 2012 – Dic. 2016",
    institution: "Instituto ORT",
    degree: "Bachiller Técnico en Diseño Industrial",
    type: "Formación técnica",
  },
]

// ─── Stats runner ─────────────────────────────────────────────────────────────
const RUNNER_STATS = [
  { value: "21K",        label: "Media Maratón" },
  { value: "Constancia", label: "Cada semana en movimiento" },
  { value: "Comunidad",  label: "Grupo de running" },
]

function TypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    "Carrera":          "bg-primary/10 text-primary border-primary/20",
    "Certificación":    "bg-secondary/20 text-foreground/80 border-secondary/30",
    "Formación técnica":"bg-muted text-muted-foreground border-border",
  }
  return (
    <span
      className={cn(
        "text-[10px] font-semibold px-2 py-0.5 rounded-full border",
        styles[type] ?? "bg-muted text-muted-foreground border-border",
      )}
    >
      {type}
    </span>
  )
}

export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden hero-animated-bg">
        <div
          className="orb w-[700px] h-[700px] -right-28 -top-20 opacity-70"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.26) 0%, transparent 70%)" }}
        />
        <div
          className="orb orb-secondary w-[560px] h-[560px] -left-24 bottom-0 opacity-55"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.20) 0%, transparent 70%)" }}
        />
        <HeroDotBackground />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="space-y-7">
              <div style={{ animation: "badge-pop 0.55s var(--ease-out-expo) 0.05s both" }}>
                <p className="chip">Sobre mí</p>
              </div>

              <h1
                className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                style={{ animation: "hero-word-in 0.9s var(--ease-out-expo) 0.18s both" }}
              >
                Sobre <span className="gradient-text">Mariano</span>
              </h1>

              <div
                className="h-0.5 w-16 rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                  animation: "line-grow 0.8s var(--ease-out-expo) 0.45s both",
                  transformOrigin: "left center",
                }}
              />

              <div style={{ animation: "slide-in 0.7s ease-out 0.5s both" }} className="space-y-5">
                <p className="text-xl leading-relaxed text-foreground/80">
                  Hace más de 3 años soy el único diseñador de producto de Multitravel.com, una agencia
                  de viajes online argentina. Trabajo entre producto, comercial y desarrollo.
                </p>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Diseño el sitio de venta, de la búsqueda al pago, y los módulos de MultiOps, el
                    backoffice donde comercial y operaciones configuran el sitio. Prototipo funcionando
                    con Lorien, nuestro sistema de diseño, y después mido en la base si el cambio sirvió.
                  </p>
                  <p>
                    Antes diseñé sitios corporativos en Orbit, fui tutor de UX/UI en Coderhouse y diseñé
                    plataformas internas en Tutenlabs. Me formé como Diseñador Industrial en la Universidad de Palermo.
                  </p>
                </div>
                <Button asChild className="btn-primary-glow group">
                  <Link href="/projects">
                    Ver mi trabajo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <div
              className="relative"
              style={{ animation: "slide-in 1s cubic-bezier(0.34,1.56,0.64,1) 0.3s both" }}
            >
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
              <div className="floating-animation absolute -top-4 -left-4 w-16 h-16 bg-secondary/25 rounded-full blur-xl" style={{ animationDelay: "-3s" }} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════════════════
          EXPERIENCIA + EDUCACIÓN — grid 50/50
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 xl:gap-16 items-start">

            {/* ── Experiencia ── */}
            <div>
              <ScrollAnimation>
                <div className="mb-10">
                  <p className="chip mb-3">Trayectoria</p>
                  <SectionHeading
                    title="Experiencia laboral"
                    subtitle="De lo más reciente a lo más antiguo."
                  />
                </div>
              </ScrollAnimation>

              <div className="relative pl-6">
                <div className="timeline-line" />
                <div className="space-y-8">
                  {EXPERIENCE.map((item, index) => (
                    <ScrollAnimation key={index} delay={index * 80}>
                      <div className="relative timeline-item pl-6">
                        <div className="timeline-dot" />
                        <div className="project-card p-5 group">
                          <div className="flex flex-col gap-1 mb-3">
                            <h3 className="text-base font-bold">{item.role}</h3>
                            <p className="text-primary font-medium text-sm">{item.company}</p>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {item.period}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Educación ── */}
            <div>
              <ScrollAnimation>
                <div className="mb-10">
                  <p className="chip mb-3">Formación</p>
                  <SectionHeading
                    title="Educación"
                    subtitle="Fundamentos académicos y especialización continua."
                  />
                </div>
              </ScrollAnimation>

              <div className="relative pl-6">
                <div className="timeline-line" />
                <div className="space-y-5">
                  {EDUCATION.map((item, index) => (
                    <ScrollAnimation key={index} delay={index * 55}>
                      <div className="relative timeline-item pl-6">
                        <div className="timeline-dot" />
                        <div className="project-card p-4 group">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold leading-snug">{item.degree}</p>
                              <p className="text-primary text-xs font-medium mt-0.5">{item.institution}</p>
                            </div>
                            <TypeBadge type={item.type} />
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1.5">
                            <Calendar className="h-2.5 w-2.5" />
                            {item.period}
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          RUNNER — sección personal final
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-muted/20 relative overflow-hidden">
        <div
          className="orb w-[500px] h-[500px] -left-24 top-0 opacity-50"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.10) 0%, transparent 70%)" }}
        />
        <div
          className="orb orb-secondary w-[400px] h-[400px] -right-20 bottom-0 opacity-40"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.12) 0%, transparent 70%)" }}
        />

        <div className="container relative z-10">
          {/* Header: texto + stats */}
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
              <div className="space-y-6">
                <div>
                  <p className="chip mb-4 inline-flex gap-2">
                    <Footprints className="h-3.5 w-3.5" />
                    Fuera del diseño
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    También soy <span className="gradient-text">runner</span>
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  El running se volvió una parte muy importante de mi vida. Me conecta con la
                  disciplina, el esfuerzo sostenido y la superación personal. Y también con una
                  comunidad de amigos y experiencias que me impulsan a seguir creciendo, dentro
                  y fuera del diseño.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                {RUNNER_STATS.map((stat) => (
                  <div key={stat.label} className="project-card px-6 py-5 flex-1 min-w-[140px] text-center">
                    <p className="text-2xl font-black gradient-text mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Carrusel */}
          <ScrollAnimation delay={100}>
            <RunningCarousel />
          </ScrollAnimation>
        </div>
      </section>


    </div>
  )
}
