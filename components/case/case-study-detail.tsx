import Link from "next/link"
import { ArrowLeft, ArrowRight, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CaseChart } from "@/components/case/case-chart"
import { CaseImage } from "@/components/case/case-image"
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies"

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10 py-10 border-t border-border">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground pt-1">{label}</h2>
      <div className="min-w-0 space-y-5">{children}</div>
    </section>
  )
}

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const index = CASE_STUDIES.findIndex((c) => c.slug === study.slug)
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length]
  const ready = study.images.filter((i) => !i.pending)
  // En producción las capturas pendientes no se muestran (ver CaseImage).
  const showPending = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"
  const pending = showPending ? study.images.filter((i) => i.pending) : []
  const lead = ready.find((i) => i.device === "desktop")
  const rest = [...ready.filter((i) => i !== lead), ...pending]

  return (
    <article className="pt-28 pb-20">
      <div className="container max-w-5xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Todos los casos
        </Link>

        {/* ── Encabezado ── */}
        <header className="mt-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip">{study.kicker}</span>
            <span className="text-sm text-muted-foreground">Multitravel.com</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">{study.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">{study.summary}</p>

          <dl className="grid gap-4 sm:grid-cols-3 pt-2">
            {[
              ["Rol", study.role],
              ["Período", study.period],
              ["Qué hice", study.scope],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border bg-card p-4">
                <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{k}</dt>
                <dd className="mt-1.5 text-sm font-medium leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* ── Resultado ── */}
        <div className="mt-10 rounded-3xl border bg-primary/[0.04] p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Resultado</p>
          <div className="mt-5 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-4xl md:text-5xl font-bold tracking-tight tabular-nums">{study.headline.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{study.headline.label}</p>
            </div>
            {study.secondary && (
              <div>
                <p className="text-4xl md:text-5xl font-bold tracking-tight tabular-nums">{study.secondary.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{study.secondary.label}</p>
              </div>
            )}
          </div>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-3xl">{study.result}</p>
        </div>

        {lead && <CaseImage image={lead} className="mt-10" />}

        {/* ── Cuerpo ── */}
        <div className="mt-12">
          <Section label="Contexto">
            <ul className="space-y-3 text-base leading-relaxed">
              {study.context.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section label="Objetivo">
            <p className="text-lg leading-relaxed">{study.objective}</p>
          </Section>

          <Section label="Qué se hizo">
            <ol className="divide-y divide-border rounded-2xl border bg-card">
              {study.changes.map((c, i) => (
                <li key={c.title} className="flex gap-4 p-4 text-sm md:text-base leading-relaxed">
                  <span className="text-muted-foreground tabular-nums w-5 shrink-0">{i + 1}</span>
                  <span className="flex-1">{c.title}</span>
                  {c.when && <span className="text-xs text-muted-foreground whitespace-nowrap pt-1">{c.when}</span>}
                </li>
              ))}
            </ol>
            {study.changesNote && <p className="text-sm text-muted-foreground">{study.changesNote}</p>}
          </Section>

          <Section label="Mi parte">
            <div className="space-y-3 text-base leading-relaxed">
              {study.myPart.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="border-l-2 border-primary pl-4 text-base font-medium leading-relaxed">{study.craftLine}</p>
          </Section>

          {study.decisions && study.decisions.length > 0 && (
            <Section label="Decisiones">
              <div className="grid gap-4">
                {study.decisions.map((d) => (
                  <div key={d.title} className="rounded-2xl border bg-card p-5">
                    <h3 className="font-semibold">{d.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{d.body}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          <Section label="Números">
            {study.chart && <CaseChart chart={study.chart} />}
            {study.table && (
              <figure className="space-y-3">
                <figcaption className="font-semibold">{study.table.caption}</figcaption>
                <div className="overflow-x-auto rounded-2xl border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/60">
                      <tr>
                        {study.table.columns.map((c) => (
                          <th key={c} className="text-left font-medium text-muted-foreground px-4 py-3 whitespace-nowrap">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {study.table.rows.map((row) => (
                        <tr key={row.join("|")}>
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className={i === 0 ? "px-4 py-3" : "px-4 py-3 tabular-nums font-semibold whitespace-nowrap"}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">Fuente: {study.table.source}</p>
              </figure>
            )}
            <div className="rounded-2xl bg-muted/60 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <AlertCircle className="h-4 w-4" aria-hidden="true" />
                Lo que este número no dice
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
                {study.caveats.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Section>

          {rest.length > 0 && (
            <Section label="Pantallas">
              <div className="grid gap-8 sm:grid-cols-2">
                {rest.map((img) => (
                  <CaseImage key={img.caption} image={img} />
                ))}
              </div>
            </Section>
          )}

          {study.nextSteps.length > 0 && (
            <Section label="Lo que falta">
              <ul className="space-y-2 text-base leading-relaxed">
                {study.nextSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        {/* ── Navegación ── */}
        <nav className="mt-6 border-t border-border pt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link href={`/projects/${next.slug}`} className="group">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Siguiente caso</p>
            <p className="mt-1 text-xl font-semibold group-hover:text-primary transition-colors inline-flex items-center gap-2">
              {next.title}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link href="/contact">Contacto</Link>
            </Button>
            <Button asChild>
              <Link href="/cv-mariano-breiman-ats.pdf" target="_blank" rel="noopener noreferrer">
                Descargar CV
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </article>
  )
}
