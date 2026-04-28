import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, Clock, User, Calendar, ExternalLink, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import { MetricBadge } from "@/components/metric-badge"

const behanceProjects = [
  {
    id: "125441469",
    title: "Future",
    subtitle: "Prototipo UX/UI",
    description: "Aplicación para orientación vocacional estudiantil",
    url: "https://www.behance.net/gallery/125441469/Future-Prototipo-UxUi",
  },
  {
    id: "184224897",
    title: "Orbit",
    subtitle: "Landing Web App",
    description: "Diseño de landing para Orbit Web App",
    url: "https://www.behance.net/gallery/184224897/Diseno-para-Orbit-Landing-Web-App",
  },
  {
    id: "184225635",
    title: "Alleata",
    subtitle: "Challenge UX/UI",
    description: "Rediseño de plataforma digital",
    url: "https://www.behance.net/gallery/184225635/Rediseno-para-alleata",
  },
  {
    id: "133580041",
    title: "Ualá",
    subtitle: "Rediseño UX/UI",
    description: "Rediseño completo de billetera digital",
    url: "https://www.behance.net/gallery/133580041/Rediseno-UXUI-Uala",
  },
  {
    id: "184223321",
    title: "Consorcio Madrid",
    subtitle: "Propuesta de Diseño",
    description: "Propuesta para el Consorcio de Transportes de Madrid",
    url: "https://www.behance.net/gallery/184223321/Propuesta-para-el-Consorcio-de-Transportes-de-Madrid",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-24">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div
          className="orb w-[500px] h-[500px] -right-24 top-0 opacity-50"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.15) 0%, transparent 70%)" }}
        />
        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl space-y-5">
              <p className="chip">Portfolio</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Mis <span className="gradient-text">proyectos</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                No muestro solo pantallas finales. Muestro el razonamiento, las decisiones y
                el proceso detrás de cada solución.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CASOS DE ESTUDIO DETALLADOS
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="container">
          <ScrollAnimation>
            <div className="mb-14">
              <p className="chip mb-3">Con proceso completo</p>
              <SectionHeading
                title="Casos de estudio"
                subtitle="Investigación, decisiones de diseño y resultados medibles."
              />
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.slug} delay={index * 80}>
                <div className="project-card group">
                  <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_360px] gap-0">
                    <div className="p-8 md:p-10 space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="chip">{project.category}</span>
                          <span className="text-xs text-muted-foreground">{project.year}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{project.duration}</span>
                          <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />{project.role}</span>
                          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{project.year}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>
                      <div className="space-y-5">
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric, idx) => (
                            <MetricBadge key={idx} metric={metric} />
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button asChild size="sm" className="btn-primary-glow group/btn">
                            <Link href={`/projects/${project.slug}`}>
                              Ver caso completo
                              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                          {project.externalUrl && (
                            <Button asChild variant="outline" size="sm" className="btn-primary-glow">
                              <Link href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                                Behance <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="relative min-h-[200px] md:min-h-0 overflow-hidden">
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        style={{ background: `linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--secondary)/0.12))` }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-3">{project.category}</p>
                        <h4 className="text-2xl font-black text-primary/75 leading-tight">
                          {project.title.split(" ").slice(0, 3).join(" ")}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{project.context}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BEHANCE
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-muted/20">
        <div className="container">
          <ScrollAnimation>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
              <div className="space-y-3 max-w-xl">
                <p className="chip">Behance</p>
                <SectionHeading
                  title="Proyectos en Behance"
                  subtitle="Trabajos de diseño UX/UI, branding y experimentación visual."
                />
              </div>
              <Button asChild variant="outline" className="btn-primary-glow shrink-0 self-start sm:self-auto">
                <Link href="https://behance.net/marianbreiman" target="_blank" rel="noopener noreferrer">
                  Ver perfil completo <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {behanceProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 70}>
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="project-card overflow-hidden">
                    {/* iframe embed */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <iframe
                        src={`https://www.behance.net/embed/project/${project.id}?ilo0=1`}
                        className="w-full h-full pointer-events-none"
                        allowFullScreen
                        loading="lazy"
                        frameBorder="0"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title={project.title}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/70 opacity-0 group-hover:opacity-95 transition-all duration-400 flex items-center justify-center p-6">
                        <div className="text-center text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                          <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                          <p className="text-sm opacity-85 mb-1">{project.subtitle}</p>
                          <p className="text-xs opacity-70 mb-5">{project.description}</p>
                          <span className="inline-flex items-center text-sm font-semibold gap-1.5">
                            Ver en Behance <ExternalLink className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="px-5 py-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">{project.title}</p>
                        <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
