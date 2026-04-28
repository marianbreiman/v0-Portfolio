import Link from "next/link"
import { ArrowRight, ExternalLink, FileText, Info, Sparkles, Clock, Calendar, User, CheckCircle2, Layers, Lightbulb, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MetricBadge } from "@/components/metric-badge"
import { Project } from "@/lib/types"
import { projects } from "@/lib/projects"

interface ProjectDetailProps {
  project: Project
}

const statusLabels: Record<string, string> = {
  published: "Publicado",
  "in-progress": "En progreso",
  academic: "Académico",
  professional: "Profesional",
  conceptual: "Conceptual",
  external: "Externo",
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const details = project.details
  const alternateProject = projects.find((item) => item.slug !== project.slug)
  const statusLabel = statusLabels[project.status] ?? project.status

  return (
    <div className="container py-16">
      <div className="grid gap-10 xl:grid-cols-[1.5fr_0.9fr] items-start">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary border border-primary/20">
              {project.category}
            </span>
            <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
              {statusLabel}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{project.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Rol</p>
              <p className="mt-2 font-semibold">{project.role}</p>
            </div>
            <div className="rounded-2xl border bg-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Año</p>
              <p className="mt-2 font-semibold">{project.year}</p>
            </div>
            <div className="rounded-2xl border bg-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Duración</p>
              <p className="mt-2 font-semibold">{project.duration}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.metrics.map((metric, index) => (
              <MetricBadge key={index} metric={metric} />
            ))}
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border bg-card p-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Datos rápidos</p>
            <div className="grid gap-3">
              <div className="rounded-2xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">Contexto</p>
                <p className="mt-1 font-semibold">{project.context}</p>
              </div>
              <div className="rounded-2xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">Etiquetas</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.externalUrl && (
                <div className="rounded-2xl bg-muted p-4">
                  <p className="text-xs text-muted-foreground">Behance</p>
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Ver caso en Behance
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>

      {details ? (
        <div className="space-y-16 pt-16">
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <Lightbulb className="h-4 w-4" />
              <span>Resumen ejecutivo</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border bg-card p-6">
                <h2 className="text-lg font-semibold">Problema</h2>
                <p className="mt-3 text-muted-foreground">{details.overview.problem}</p>
              </div>
              <div className="rounded-3xl border bg-card p-6">
                <h2 className="text-lg font-semibold">Objetivo</h2>
                <p className="mt-3 text-muted-foreground">{details.overview.objective}</p>
              </div>
              <div className="rounded-3xl border bg-card p-6">
                <h2 className="text-lg font-semibold">Mi contribución</h2>
                <p className="mt-3 text-muted-foreground">{details.overview.contribution}</p>
              </div>
              <div className="rounded-3xl border bg-card p-6">
                <h2 className="text-lg font-semibold">Impacto esperado</h2>
                <p className="mt-3 text-muted-foreground">{details.overview.impact}</p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contexto y problema</p>
                <h2 className="mt-3 text-2xl font-bold">Línea de base</h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl border bg-card p-6">
                    <h3 className="text-base font-semibold">Situación inicial</h3>
                    <p className="mt-2 text-muted-foreground">{details.baseline.situation}</p>
                  </div>
                  <div className="rounded-3xl border bg-card p-6">
                    <h3 className="text-base font-semibold">Usuarios afectados</h3>
                    <p className="mt-2 text-muted-foreground">{details.baseline.users}</p>
                  </div>
                  <div className="rounded-3xl border bg-card p-6">
                    <h3 className="text-base font-semibold">Restricciones</h3>
                    <p className="mt-2 text-muted-foreground">{details.baseline.constraints}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border bg-card p-6">
                <h3 className="text-base font-semibold">Objetivos</h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Principal</p>
                    <p className="mt-2 text-muted-foreground">{details.objective.primary}</p>
                  </div>
                  {details.objective.secondary.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Secundarios</p>
                      <ul className="mt-3 space-y-2 list-disc pl-5 text-muted-foreground">
                        {details.objective.secondary.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="rounded-3xl border bg-card p-6">
                <h3 className="text-base font-semibold">Métricas iniciales</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {details.baselineMetrics.map((metric, index) => (
                    <MetricBadge key={index} metric={metric} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <Compass className="h-4 w-4" />
              <span>Hipótesis y metodología</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border bg-card p-6">
                <h3 className="text-lg font-semibold">Hipótesis</h3>
                <p className="mt-3 text-muted-foreground">{details.hypothesis}</p>
              </div>
              <div className="rounded-3xl border bg-card p-6">
                <h3 className="text-lg font-semibold">Metodología</h3>
                <p className="mt-3 text-muted-foreground">{details.methodology}</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <Layers className="h-4 w-4" />
              <span>Proceso</span>
            </div>
            <div className="space-y-4">
              {details.process.map((step, index) => (
                <div key={index} className="rounded-3xl border bg-card p-6">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              <span>Decisiones de diseño</span>
            </div>
            <div className="space-y-4">
              {details.designDecisions.map((decision, index) => (
                <div key={index} className="rounded-3xl border bg-card p-6">
                  <h3 className="text-lg font-semibold">{decision.decision}</h3>
                  <p className="mt-3 text-muted-foreground">{decision.reason}</p>
                  <p className="mt-3 text-sm text-muted-foreground/80">Alternativa descartada: {decision.alternative}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <CheckCircle2 className="h-4 w-4" />
              <span>Medición y resultados</span>
            </div>
            <div className="space-y-6 rounded-3xl border bg-card p-6">
              <p className="text-muted-foreground">{details.results.summary}</p>

              {details.results.type === "real" && details.results.comparison ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {details.results.comparison.map((item, index) => (
                    <div key={index} className="rounded-2xl bg-muted p-4">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <div className="mt-3 flex items-center justify-between gap-4 text-base font-semibold">
                        <span>{item.before}</span>
                        <span>→</span>
                        <span>{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : details.results.type === "expected" ? (
                <div className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {details.results.expectedMetrics?.map((metric, index) => (
                      <MetricBadge key={index} metric={metric} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-muted p-6">
                  <p className="text-sm text-muted-foreground">Este proyecto tiene métricas de seguimiento pendientes y se documentará en una futura actualización.</p>
                  {details.results.expectedMetrics?.length ? (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {details.results.expectedMetrics.map((metric, index) => (
                        <MetricBadge key={index} metric={metric} />
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-semibold">Aprendizajes</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                {details.learnings.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border bg-card p-6">
              <h3 className="text-lg font-semibold">Próximos pasos</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                {details.nextSteps.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      ) : (
        <div className="rounded-3xl border bg-muted p-10 text-center">
          <h2 className="text-2xl font-bold">Caso en construcción</h2>
          <p className="mt-4 text-muted-foreground">En este proyecto se documentará el proceso, decisiones y métricas en una futura actualización.</p>
        </div>
      )}

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Button asChild size="lg">
          <Link href={alternateProject ? `/projects/${alternateProject.slug}` : "/projects"}>
            Ver otro proyecto
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contacto</Link>
        </Button>
        {project.externalUrl ? (
          <Button asChild variant="outline" size="lg">
            <Link href={project.externalUrl} target="_blank" rel="noopener noreferrer">
              Ver en Behance
            </Link>
          </Button>
        ) : null}
        <Button asChild size="lg">
          <Link href="/CV.pdf" target="_blank" rel="noopener noreferrer">
            Descargar CV
          </Link>
        </Button>
      </div>
    </div>
  )
}
