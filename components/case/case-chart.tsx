import type { CaseChart as CaseChartData } from "@/lib/case-studies"

function fmt(n: number) {
  return `${n.toLocaleString("es-AR", { maximumFractionDigits: 1 })}%`
}

// Gráfico de barras en HTML/CSS. Solo porcentajes: nunca cantidades de ventas.
export function CaseChart({ chart }: { chart: CaseChartData }) {
  const max = Math.max(...chart.bars.map((b) => b.value), 1)
  const markerAt = new Map(chart.markers?.map((m) => [m.beforeIndex, m.label]) ?? [])

  return (
    <figure className="rounded-2xl border bg-card p-6 md:p-8">
      <figcaption className="space-y-1 mb-8">
        <p className="font-semibold text-lg leading-snug">{chart.title}</p>
        <p className="text-sm text-muted-foreground">{chart.subtitle}</p>
      </figcaption>

      <div
        className="grid items-end gap-2 sm:gap-4 h-56 border-b border-border"
        style={{ gridTemplateColumns: `repeat(${chart.bars.length}, minmax(0, 1fr))` }}
        role="img"
        aria-label={`${chart.title}. ${chart.bars.map((b) => `${b.label}: ${fmt(b.value)}`).join(", ")}`}
      >
        {chart.bars.map((bar, i) => (
          <div key={bar.label} className="relative h-full flex flex-col justify-end items-center">
            {markerAt.has(i) && (
              <div className="absolute -left-1 sm:-left-2 top-0 bottom-0 border-l border-dashed border-muted-foreground/50">
                <span className="absolute top-0 left-1.5 text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                  {markerAt.get(i)}
                </span>
              </div>
            )}
            <span className="text-xs sm:text-sm font-semibold tabular-nums mb-1.5">{fmt(bar.value)}</span>
            <div
              className={
                bar.highlight
                  ? "w-full max-w-[72px] rounded-t-md bg-[#1C6DD0]"
                  : "w-full max-w-[72px] rounded-t-md bg-muted-foreground/25"
              }
              style={{ height: `${Math.max((bar.value / max) * 72, bar.value > 0 ? 2 : 0.5)}%` }}
            />
          </div>
        ))}
      </div>
      <div
        className="grid gap-2 sm:gap-4 pt-2"
        style={{ gridTemplateColumns: `repeat(${chart.bars.length}, minmax(0, 1fr))` }}
        aria-hidden="true"
      >
        {chart.bars.map((bar) => (
          <span key={bar.label} className="text-center text-xs sm:text-sm text-muted-foreground">
            {bar.label}
          </span>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground leading-relaxed">Fuente: {chart.source}</p>
    </figure>
  )
}
