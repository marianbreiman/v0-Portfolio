import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, Clock, User, Calendar, ArrowUpRight, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import { MetricBadge } from "@/components/metric-badge"
import { PageHero } from "@/components/page-hero"

// ─── Behance projects ─────────────────────────────────────────────────────────
const behanceProjects = [
  {
    id: "125441469",
    title: "Future",
    subtitle: "Prototipo UX/UI",
    url: "https://www.behance.net/gallery/125441469/Future-Prototipo-UxUi",
    embedUrl: "https://www.behance.net/embed/project/125441469?ilo0=1",
  },
  {
    id: "184224897",
    title: "Orbit",
    subtitle: "Landing Web App",
    url: "https://www.behance.net/gallery/184224897/Diseno-para-Orbit-Landing-Web-App",
    embedUrl: "https://www.behance.net/embed/project/184224897?ilo0=1",
  },
  {
    id: "184225635",
    title: "Alleata",
    subtitle: "Challenge UX/UI",
    url: "https://www.behance.net/gallery/184225635/Rediseno-para-alleata",
    embedUrl: "https://www.behance.net/embed/project/184225635?ilo0=1",
  },
  {
    id: "133580041",
    title: "Ualá",
    subtitle: "Rediseño UX/UI",
    url: "https://www.behance.net/gallery/133580041/Rediseno-UXUI-Uala",
    embedUrl: "https://www.behance.net/embed/project/133580041?ilo0=1",
  },
  {
    id: "184223321",
    title: "Consorcio Madrid",
    subtitle: "Propuesta de Diseño",
    url: "https://www.behance.net/gallery/184223321/Propuesta-para-el-Consorcio-de-Transportes-de-Madrid",
    embedUrl: "https://www.behance.net/embed/project/184223321?ilo0=1",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-24">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Portfolio"
        titleBefore="Mis"
        titleGradient="proyectos"
        description="No muestro solo pantallas finales. Muestro el razonamiento, las decisiones y el proceso detrás de cada solución."
        orbSide="right"
      />

      {/* ══════════════════════════════════════════════════════
          BEHANCE — iframes (caratula nativa de Behance)
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
                  Ver perfil <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {behanceProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 70}>
                <div className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/25">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {/* iframe visual — sin pointer events para evitar scroll interno */}
                    <iframe
                      src={project.embedUrl}
                      title={project.title}
                      className="absolute inset-0 w-full h-full border-0 pointer-events-none select-none"
                      loading="lazy"
                      tabIndex={-1}
                      allowFullScreen
                      allow="clipboard-write"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />

                    {/* Capa interactiva que cubre toda la card */}
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 flex flex-col justify-end"
                      aria-label={`Ver ${project.title} en Behance`}
                    >
                      {/* Overlay gradiente: siempre en mobile, hover en desktop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-opacity duration-400 opacity-100 md:opacity-0 md:group-hover:opacity-100" />

                      {/* Contenido desktop (sube en hover) */}
                      <div className="relative hidden md:flex flex-col gap-2.5 p-5 transition-all duration-300 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-white font-bold text-base leading-tight drop-shadow-sm">
                          {project.title}
                        </p>
                        <span className="self-start inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/18 backdrop-blur-sm border border-white/28 rounded-full px-3.5 py-1.5">
                          Ver en Behance <ExternalLink className="h-3 w-3" />
                        </span>
                      </div>

                      {/* Contenido mobile (siempre visible) */}
                      <div className="relative flex md:hidden items-center justify-between gap-2 px-4 py-3">
                        <p className="text-white font-bold text-sm leading-tight truncate drop-shadow-sm">
                          {project.title}
                        </p>
                        <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold text-white/90">
                          Behance <ExternalLink className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CASOS DE ESTUDIO
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
                        style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--secondary)/0.12))" }}
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

    </div>
  )
}
