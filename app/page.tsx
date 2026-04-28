"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"
import { MetricBadge } from "@/components/metric-badge"

// ─── Hero: staggered entrance hook ────────────────────────────────────────────
function useHeroEntrance() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])
  return ready
}

// ─── Stats counter ─────────────────────────────────────────────────────────────
const STATS = [
  { value: "4+", label: "Años de experiencia" },
  { value: "10+", label: "Proyectos entregados" },
  { value: "3", label: "Sectores de industria" },
]

export default function Home() {
  const ready = useHeroEntrance()

  return (
    <>
      <AnimatedGradientBackground />

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden min-h-[92vh] flex items-center">

        {/* Ambient orbs behind content */}
        <div
          className="orb w-[600px] h-[600px] -left-32 top-0"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.12) 0%, transparent 70%)" }}
        />
        <div
          className="orb orb-secondary w-[500px] h-[500px] -right-24 bottom-0"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.14) 0%, transparent 70%)" }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">

            {/* ── Left: Text ── */}
            <div className="space-y-10">

              {/* Location chip */}
              <div
                className="chip"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.6s 0.1s ease, transform 0.6s 0.1s ease",
                }}
              >
                <MapPin className="h-3 w-3" />
                Palermo, CABA, Argentina
              </div>

              {/* Name + role */}
              <div className="space-y-3 overflow-hidden">
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                  style={{
                    opacity: ready ? 1 : 0,
                    transform: ready ? "translateY(0) skewY(0deg)" : "translateY(48px) skewY(2deg)",
                    transition: "opacity 0.9s 0.2s var(--ease-out-expo), transform 0.9s 0.2s var(--ease-out-expo)",
                  }}
                >
                  <span className="gradient-text">Mariano</span>
                  <br />
                  <span className="gradient-text">Breiman</span>
                </h1>

                <p
                  className="text-xl md:text-2xl font-semibold text-muted-foreground tracking-wide"
                  style={{
                    opacity: ready ? 1 : 0,
                    transform: ready ? "translateY(0)" : "translateY(24px)",
                    transition: "opacity 0.8s 0.42s var(--ease-out-expo), transform 0.8s 0.42s var(--ease-out-expo)",
                  }}
                >
                  Product Designer · UX/UI · Research
                </p>
              </div>

              {/* Value proposition */}
              <p
                className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s 0.58s var(--ease-out-expo), transform 0.8s 0.58s var(--ease-out-expo)",
                }}
              >
                Diseño productos digitales que conectan investigación, estrategia e interfaz
                para transformar problemas complejos en decisiones claras para las personas.
              </p>

              {/* CTA row */}
              <div
                className="flex flex-col sm:flex-row gap-4"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.7s 0.72s var(--ease-out-expo), transform 0.7s 0.72s var(--ease-out-expo)",
                }}
              >
                <Button asChild size="lg" className="group btn-primary-glow text-base px-8 py-6">
                  <Link href="/projects">
                    Ver casos de estudio
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-primary-glow text-base px-8 py-6 bg-transparent">
                  <Link href="/contact">Conversemos</Link>
                </Button>
              </div>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-10 pt-2"
                style={{
                  opacity: ready ? 1 : 0,
                  transition: "opacity 0.7s 0.88s ease",
                }}
              >
                {STATS.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Photo ── */}
            <div
              className="relative"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
                transition: "opacity 1s 0.35s var(--ease-out-expo), transform 1s 0.35s var(--ease-out-expo)",
              }}
            >
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.5), hsl(var(--secondary)/0.4))" }}
              />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl gradient-border aspect-[4/5]">
                <Image
                  src="/mariano-professional.jpeg"
                  alt="Mariano Breiman, Product Designer"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Photo overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>

              {/* Floating accent shapes */}
              <div className="floating-animation absolute -bottom-6 -right-6 w-28 h-28 bg-primary/20 rounded-full blur-2xl" />
              <div
                className="floating-animation absolute -top-6 -left-6 w-20 h-20 bg-secondary/25 rounded-full blur-xl"
                style={{ animationDelay: "-3s" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

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
                <div className="project-card group">
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
                    <div className="relative min-h-[220px] md:min-h-0 overflow-hidden">
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--secondary)/0.12))`,
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/50 mb-3">{project.category}</p>
                        <h4 className="text-2xl font-black text-primary/80 leading-tight">
                          {project.title.split(" ").slice(0, 3).join(" ")}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          {project.context}
                        </p>
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
