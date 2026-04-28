import { Info } from "lucide-react"
import { ProjectMetric } from "@/lib/types"

interface MetricBadgeProps {
  metric: ProjectMetric
}

export function MetricBadge({ metric }: MetricBadgeProps) {
  const showNotice = metric.status !== "real"
  const titleText =
    metric.status === "simulated"
      ? "Métrica simulada para fines de portafolio"
      : metric.status === "pending"
      ? "Métrica pendiente: datos disponibles en una futura actualización"
      : undefined

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/30">
      <span className="text-muted-foreground">{metric.label}</span>
      <span className="font-bold">{metric.value}</span>
      {showNotice && titleText && (
        <span title={titleText} aria-label={titleText}>
          <Info className="h-3 w-3 text-primary/50" />
        </span>
      )}
    </div>
  )
}