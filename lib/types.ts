export type ProjectStatus = "published" | "in-progress" | "academic" | "professional" | "conceptual" | "external"

export type ProjectMetricStatus = "simulated" | "real" | "pending"

export interface ProjectMetric {
  label: string
  value: string
  status: ProjectMetricStatus
  info?: string
}

export interface ProjectComparison {
  label: string
  before: string
  after: string
}

export interface ProjectOverview {
  problem: string
  objective: string
  contribution: string
  impact: string
}

export interface ProjectBaseline {
  situation: string
  users: string
  constraints: string
}

export interface ProjectObjective {
  primary: string
  secondary: string[]
}

export interface ProjectProcessStep {
  title: string
  description: string
}

export interface ProjectDesignDecision {
  decision: string
  reason: string
  alternative: string
}

export interface ProjectResults {
  type: "real" | "expected" | "pending" | "academic"
  summary: string
  comparison?: ProjectComparison[]
  expectedMetrics?: ProjectMetric[]
}

export interface ProjectDetails {
  overview: ProjectOverview
  baseline: ProjectBaseline
  objective: ProjectObjective
  baselineMetrics: ProjectMetric[]
  hypothesis: string
  methodology: string
  process: ProjectProcessStep[]
  designDecisions: ProjectDesignDecision[]
  results: ProjectResults
  learnings: string[]
  nextSteps: string[]
}

export interface Project {
  slug: string
  title: string
  description: string
  year: string
  role: string
  context: "Profesional" | "Académico" | "Conceptual" | "En construcción"
  status: ProjectStatus
  category: string
  tags: string[]
  duration: string
  externalUrl: string | null
  metrics: ProjectMetric[]
  details?: ProjectDetails
}
