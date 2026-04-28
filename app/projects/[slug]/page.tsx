import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/project-detail"
import { getProjectBySlug, projects } from "@/lib/projects"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
