import { cn } from "@/lib/utils"

// Recorrido laboral en una línea de tiempo. Cada barra ocupa el período real,
// así se ven las superposiciones y los huecos tal como fueron.
const START_YEAR = 2020
const END_YEAR = 2026
const TOTAL_MONTHS = (END_YEAR - START_YEAR + 1) * 12

interface Job {
  company: string
  role: string
  from: [number, number] // [año, mes 1-12]
  to: [number, number] | "hoy"
  period: string
  summary: string
  current?: boolean
}

const JOBS: Job[] = [
  {
    company: "Tutenlabs",
    role: "UX/UI Designer",
    from: [2020, 7],
    to: [2022, 1],
    period: "Jul 2020 – Ene 2022",
    summary: "Plataformas internas para gestión de operaciones, en sprints con desarrollo.",
  },
  {
    company: "Orbit",
    role: "Junior UX/UI Designer",
    from: [2021, 9],
    to: [2022, 4],
    period: "Sep 2021 – Abr 2022",
    summary: "Rediseño de sitios corporativos mobile-first y testeo de usabilidad.",
  },
  {
    company: "Coderhouse",
    role: "Tutor de UX/UI (Avanzado)",
    from: [2022, 3],
    to: [2022, 8],
    period: "Mar – Ago 2022",
    summary: "Guié a estudiantes en proyectos reales de UX/UI.",
  },
  {
    company: "Multitravel.com",
    role: "Product Designer",
    from: [2023, 1],
    to: "hoy",
    period: "Ene 2023 – hoy",
    summary: "Único diseñador de producto: checkout, medios de pago, búsqueda y el backoffice MultiOps.",
    current: true,
  },
]

function monthIndex([y, m]: [number, number]) {
  return (y - START_YEAR) * 12 + (m - 1)
}

function nowIndex() {
  const d = new Date()
  return Math.min(monthIndex([d.getFullYear(), d.getMonth() + 1]) + 1, TOTAL_MONTHS)
}

export function CareerTimeline() {
  const years = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)
  const now = nowIndex()

  return (
    <div className="rounded-3xl border bg-card p-6 md:p-8">
      {/* Eje de años */}
      <div className="grid md:grid-cols-[260px_1fr] md:gap-8 mb-3">
        <span className="hidden md:block" />
        <div className="relative h-5">
          {years.map((y) => (
            <span
              key={y}
              className="absolute top-0 -translate-x-1/2 text-[11px] md:text-xs text-muted-foreground tabular-nums"
              style={{ left: `${(((y - START_YEAR) * 12 + 6) / TOTAL_MONTHS) * 100}%` }}
            >
              {y}
            </span>
          ))}
        </div>
      </div>

      <ol className="space-y-6 md:space-y-4">
        {JOBS.map((job) => {
          const start = monthIndex(job.from)
          const end = job.to === "hoy" ? now : monthIndex(job.to) + 1
          return (
            <li key={job.company} className="grid gap-3 md:grid-cols-[260px_1fr] md:gap-8 md:items-center">
              <div>
                <p className="font-semibold leading-snug">
                  {job.company}
                  {job.current && (
                    <span className="ml-2 align-middle inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Actual
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground">{job.role}</p>
                <p className="text-xs text-muted-foreground tabular-nums mt-0.5">{job.period}</p>
              </div>
              <div className="space-y-2">
                <div className="relative h-8 rounded-lg bg-muted/60">
                  {/* separadores de año */}
                  {years.slice(1).map((y) => (
                    <span
                      key={y}
                      className="absolute top-0 bottom-0 border-l border-background"
                      style={{ left: `${(((y - START_YEAR) * 12) / TOTAL_MONTHS) * 100}%` }}
                      aria-hidden="true"
                    />
                  ))}
                  <div
                    className={cn(
                      "absolute top-1 bottom-1 rounded-md",
                      job.current ? "bg-[#1C6DD0]" : "bg-primary/35",
                    )}
                    style={{
                      left: `${(start / TOTAL_MONTHS) * 100}%`,
                      width: `${((end - start) / TOTAL_MONTHS) * 100}%`,
                    }}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{job.summary}</p>
              </div>
            </li>
          )
        })}
      </ol>

    </div>
  )
}
