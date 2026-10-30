import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { PageHero } from "@/components/page-hero"
import { CaseCard } from "@/components/case/case-card"
import { CASE_STUDIES, PROCESS_PROJECTS } from "@/lib/case-studies"

export const metadata: Metadata = {
  title: "Casos de estudio | Mariano Breiman",
  description:
    "Casos de producto en Multitravel.com: checkout, medios de pago, búsqueda y backoffice, con números medidos en la base de producción.",
}

// Trabajo previo a Multitravel. Sin métricas: lo que hay está en Behance.
const EARLIER_WORK = [
  { title: "Orbit", detail: "Landing web y app · Cliente", url: "https://www.behance.net/gallery/184224897/Diseno-para-Orbit-Landing-Web-App" },
  { title: "Future", detail: "App de orientación vocacional · Académico", url: "https://www.behance.net/gallery/125441469/Future-Prototipo-UxUi" },
  { title: "Rediseño de Ualá", detail: "Ejercicio de rediseño · Académico", url: "https://www.behance.net/gallery/133580041/Rediseno-UXUI-Uala" },
  { title: "Consorcio de Transportes de Madrid", detail: "Propuesta conceptual · Académico", url: "https://www.behance.net/gallery/184223321/Propuesta-para-el-Consorcio-de-Transportes-de-Madrid" },
  { title: "Alleata", detail: "UX/UI challenge · Académico", url: "https://www.behance.net/gallery/184225635/Rediseno-para-alleata" },
]

export default function ProjectsPage() {
  const [principal, ...others] = CASE_STUDIES
  const measured = others.filter((c) => c.tier === "medido")
  const adoption = others.filter((c) => c.tier === "adopcion")

  return (
    <div className="pt-24">
      <PageHero
        eyebrow="Casos de estudio"
        titleBefore="Trabajo en"
        titleGradient="Multitravel"
        description="Agencia de viajes online argentina: vuelos, hoteles y paquetes en pesos y en dólares. Soy el único diseñador de producto. Cada caso tiene qué hice, qué se midió y qué no dice el número."
        orbSide="right"
      />

      <section className="pb-16 md:pb-24">
        <div className="container space-y-16">
          {/* Caso principal */}
          <ScrollAnimation>
            <CaseCard study={principal} featured />
          </ScrollAnimation>

          {/* Con resultado medido */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Con resultado medido</h2>
              <p className="text-muted-foreground">Antes, después y un número que se movió.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {measured.map((study, i) => (
                <ScrollAnimation key={study.slug} delay={i * 80}>
                  <CaseCard study={study} />
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Adopción y línea de base */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Adopción y línea de base</h2>
              <p className="text-muted-foreground">Casos más cortos. El número muestra uso, no un resultado cerrado.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {adoption.map((study, i) => (
                <ScrollAnimation key={study.slug} delay={i * 80}>
                  <CaseCard study={study} />
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* En proceso */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">En proceso, sin métricas todavía</h2>
              <p className="text-muted-foreground">Proyectos recientes donde lo que muestro es el criterio, no el resultado.</p>
            </div>
            <ul className="divide-y divide-border rounded-2xl border bg-card">
              {PROCESS_PROJECTS.map((p) => (
                <li key={p.title} className="grid gap-2 p-5 md:grid-cols-[1fr_1.4fr_auto] md:gap-8 md:items-baseline">
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.solves}</p>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">{p.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trabajo anterior */}
      <section className="py-16 md:py-20 bg-muted/20 border-t border-border">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="space-y-1 max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight">Antes de Multitravel</h2>
              <p className="text-muted-foreground">
                Un trabajo para cliente y ejercicios de formación. Están en Behance tal como los hice, sin métricas.
              </p>
            </div>
            <Link
              href="https://behance.net/marianbreiman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline shrink-0"
            >
              Perfil de Behance <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EARLIER_WORK.map((w) => (
              <li key={w.title}>
                <Link
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border bg-card p-4 hover:border-primary/30 transition-colors"
                >
                  <span>
                    <span className="block font-medium group-hover:text-primary transition-colors">{w.title}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{w.detail}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
