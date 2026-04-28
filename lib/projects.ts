import { Project } from "@/lib/types"
import { alleataRedesign } from "@/lib/project-data/alleata-redesign"
import { consorcioMadrid } from "@/lib/project-data/consorcio-madrid"
import { futurePrototype } from "@/lib/project-data/future-prototype"
import { orbitLanding } from "@/lib/project-data/orbit-landing"
import { ualaRedesign } from "@/lib/project-data/uala-redesign"

export const projects: Project[] = [
  futurePrototype,
  ualaRedesign,
  orbitLanding,
  consorcioMadrid,
  alleataRedesign,
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
