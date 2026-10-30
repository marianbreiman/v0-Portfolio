"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CaseCard } from "@/components/case/case-card"
import { CareerTimeline } from "@/components/career-timeline"
import { CASE_STUDIES } from "@/lib/case-studies"
import { TESTIMONIALS } from "@/lib/testimonials-data"

// Datos reales. Los de conversión salen de la base de producción de Multitravel (30/10/2026).
const STATS = [
  { value: "1,21% → 1,70%", label: "Checkout → venta, vuelos", when: "Jul–sep vs. sep–oct 2026" },
  { value: "0% → 53%", label: "Ventas con tarjeta en USD", when: "Mayo vs. octubre 2026" },
  { value: "82", label: "Tickets con diseño en Linear", when: "Hasta octubre 2026" },
]

const PROCESS = [
  { title: "Detecto el problema", body: "O me llega de producto o de comercial. Si el problema no está probado, pido medirlo antes de diseñar." },
  { title: "Lo bajo a una definición", body: "Estados, bordes y reglas. Qué pasa cuando no hay lugar, cuando el precio cambió, cuando el usuario abandona." },
  { title: "Prototipo funcionando", body: "En HTML o React, con Lorien, nuestro sistema de diseño. Desarrollo lo toca antes de programar." },
  { title: "Ticket para desarrollo", body: "Partido en piezas chicas para salir por partes, con criterios de aceptación claros." },
  { title: "Vuelvo a medir", body: "Consulto la base y GA4 para ver el antes y el después, y digo qué no explica el número." },
]

const THREADS = [
  {
    title: "Lorien",
    body: "El sistema de diseño de Multitravel. Tiene un sitio de documentación interactivo y una unificación de componentes en curso.",
  },
  {
    title: "MultiOps",
    body: "El backoffice donde comercial y operaciones configuran el sitio. Diseño sus módulos para que no dependan de desarrollo: cupones, asistencia, Más buscados.",
  },
  {
    title: "Agentes con IA",
    body: "OTA Radar: un agente en Python con la API de Claude, Tavily y Notion que releva a la competencia cada semana.",
  },
]

export default function Home() {
  const [principal, ...rest] = CASE_STUDIES
  const featured = rest.filter((c) => c.tier === "medido").slice(0, 2)

  return (
    <>
      <AnimatedGradientBackground />

      <HeroSection stats={STATS} />

      {/* ── Casos ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollAnimation>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-2xl">
                <p className="chip">Casos de estudio</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Trabajo en Multitravel</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Checkout, medios de pago y búsqueda en una agencia de viajes online. Con el número que se movió y lo que
                  ese número no dice.
                </p>
              </div>
              <Button asChild variant="outline" className="self-start sm:self-auto shrink-0">
                <Link href="/projects">
                  Ver los 6 casos <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            <ScrollAnimation>
              <CaseCard study={principal} featured />
            </ScrollAnimation>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((study, i) => (
                <ScrollAnimation key={study.slug} delay={i * 80}>
                  <CaseCard study={study} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Recorrido ── */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-2xl space-y-3 mb-10">
              <p className="chip">Recorrido</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">De dónde vengo</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diseño desde 2020: plataformas internas, sitios corporativos, docencia y, desde 2023, el
                producto de una agencia de viajes online.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={80}>
            <CareerTimeline />
          </ScrollAnimation>
        </div>
      </section>

      {/* ── Cómo trabajo ── */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-2xl space-y-3 mb-12">
              <p className="chip">Cómo trabajo</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Diseño, prototipo y mido</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy el puente entre producto, comercial y desarrollo. Así es mi parte en casi todos los casos.
              </p>
            </div>
          </ScrollAnimation>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <ScrollAnimation key={step.title} delay={i * 60}>
                <li className="h-full rounded-2xl border bg-card p-6">
                  <span className="text-sm font-semibold text-primary tabular-nums">0{i + 1}</span>
                  <h3 className="mt-3 font-bold leading-snug">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </li>
              </ScrollAnimation>
            ))}
          </ol>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {THREADS.map((t) => (
              <div key={t.title} className="border-t-2 border-primary/30 pt-4">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* ── CTA ── */}
      <section className="py-24 md:py-32">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">¿Hablamos?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Estoy abierto a roles de Product Designer, remotos o en Buenos Aires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary-glow px-8 py-6 text-base">
                  <Link href="/contact">Contactarme</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base bg-transparent">
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
