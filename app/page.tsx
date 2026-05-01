"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { HeroSection } from "@/components/hero-section"
import { BrandCarousel } from "@/components/brand-carousel"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"
import { MetricBadge } from "@/components/metric-badge"
import { BRANDS } from "@/lib/brands-data"
import { TESTIMONIALS } from "@/lib/testimonials-data"

// ─── Stats counter ─────────────────────────────────────────────────────────────
const STATS = [
  { value: "4+", label: "Años de experiencia" },
  { value: "10+", label: "Proyectos entregados" },
  { value: "3", label: "Sectores de industria" },
]

export default function Home() {
  return (
    <>
      <AnimatedGradientBackground />

      {/* ══════════════════════════════════════════════════════
          HERO MEJORADA
      ══════════════════════════════════════════════════════ */}
      <HeroSection stats={STATS} />

      {/* ══════════════════════════════════════════════════════
          PROPUESTA DE VALOR — 4 principios
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <p className="chip mx-auto">Mi enfoque</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Diseño con criterio,<br className="hidden sm:inline" /> no solo con estética
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada decisión tiene un fundamento. Conecto análisis, experiencia de usuario e interfaz
                para construir productos digitales claros, usables y viables.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Entender antes de diseñar",
                description: "Investigo problemas reales, usuarios y contexto para fundamentar cada decisión.",
              },
              {
                number: "02",
                title: "Convertir complejidad en claridad",
                description: "Transformo información densa en interfaces simples y flujos intuitivos.",
              },
              {
                number: "03",
                title: "Diseñar para impacto real",
                description: "Enfoco en objetivos de negocio, métricas medibles y viabilidad técnica.",
              },
              {
                number: "04",
                title: "Documentar para que avance",
                description: "Creo especificaciones claras que permiten el desarrollo y la evolución continua.",
              },
            ].map((card, index) => (
              <ScrollAnimation key={index} delay={index * 80}>
                <div className="project-card p-7 h-full group cursor-default">
                  <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-500 leading-none block mb-5">
                    {card.number}
                  </span>
                  <h3 className="text-base font-bold mb-3 leading-snug">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MARCAS Y PROYECTOS
      ══════════════════════════════════════════════════════ */}
      <BrandCarousel brands={BRANDS} />

      {/* ══════════════════════════════════════════════════════
          TESTIMONIOS
      ══════════════════════════════════════════════════════ */}
      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* ══════════════════════════════════════════════════════
          PROYECTOS DESTACADOS
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container">
          <ScrollAnimation>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div className="space-y-3 max-w-xl">
                <p className="chip">Casos de estudio</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Proyectos destacados
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  No muestro solo pantallas finales. Muestro el razonamiento detrás de cada decisión.
                </p>
              </div>
              <Button asChild variant="outline" className="btn-primary-glow self-start sm:self-auto shrink-0">
                <Link href="/projects">
                  Ver todos <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          <div className="space-y-8">
            {projects.slice(0, 3).map((project, index) => (
              <ScrollAnimation key={project.slug} delay={index * 100}>
                <div className="project-card group hover:shadow-lg transition-all duration-300">
                  <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_360px] gap-0">
                    {/* Content */}
                    <div className="p-8 md:p-10 space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="chip">{project.category}</span>
                          <span className="text-xs text-muted-foreground">{project.year}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {project.role} · {project.duration}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
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
                              Ver caso
                              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
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

                    {/* Visual panel */}
                    <div className="relative min-h-[220px] md:min-h-0 overflow-hidden bg-gradient-to-br from-primary/8 to-secondary/6">
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--secondary)/0.12))`,
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/50 mb-3">
                          {project.category}
                        </p>
                        <h4 className="text-2xl font-black text-primary/80 leading-tight">
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
          ESTE PORTFOLIO — built by me
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 100% 50%, hsl(var(--primary)/0.05), transparent)" }}
        />
        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

              {/* Copy */}
              <div className="space-y-6">
                <span className="chip inline-flex items-center gap-1.5">⚡ Vibe coded</span>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
                  Este portfolio también es{" "}
                  <span className="gradient-text">parte del proyecto</span>
                </h2>

                <div
                  className="h-0.5 w-12 rounded-full"
                  style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
                />

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lo diseñé, desarrollé e iteré como una muestra real de mi forma de trabajar: combinando criterio de diseño, pensamiento de producto y herramientas de IA para construir más rápido, pero con intención.
                </p>

                <p className="text-base text-muted-foreground/80 leading-relaxed">
                  Desde la arquitectura de componentes hasta las animaciones, los casos de estudio y el deploy, este sitio fue pensado, iterado y publicado por mí. Herramientas como Claude, Cursor y Figma Make fueron parte del proceso — no como sustitutos del criterio, sino como extensión para explorar, documentar y construir mejor.
                </p>

                <p className="text-sm italic text-muted-foreground/60">
                  Este sitio es evidencia viva de lo que sé hacer.
                </p>
              </div>

              {/* Tools grid */}
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Stack utilizado</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: "Next.js",      note: "Framework" },
                    { name: "TypeScript",   note: "Tipado" },
                    { name: "Tailwind CSS", note: "Estilos" },
                    { name: "Figma",        note: "Diseño" },
                    { name: "Claude",       note: "IA · docs" },
                    { name: "ChatGPT",      note: "IA · research" },
                    { name: "Cursor",       note: "IA · código" },
                    { name: "Figma Make",   note: "IA · UI" },
                    { name: "Vercel",       note: "Deploy" },
                  ].map(({ name, note }) => (
                    <div
                      key={name}
                      className="group project-card p-3.5 text-center cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                    >
                      <p className="text-xs font-bold text-foreground/80 group-hover:text-primary transition-colors duration-300 leading-snug">
                        {name}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        {/* Ambient bg */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(var(--primary)/0.08), transparent)",
          }}
        />

        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <p className="chip mx-auto">¿Charlamos?</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                ¿Querés conocer mejor<br className="hidden sm:inline" /> cómo trabajo?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estoy disponible para oportunidades, proyectos freelance o simplemente para
                conversar sobre diseño de productos digitales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary-glow px-8 py-6 text-base">
                  <Link href="/contact">Contactarme</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-primary-glow px-8 py-6 text-base bg-transparent">
                  <Link href="https://linkedin.com/in/mariano-breiman" target="_blank" rel="noopener noreferrer">
                    LinkedIn <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

