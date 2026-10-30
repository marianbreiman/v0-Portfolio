import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CaseStudyDetail } from "@/components/case/case-study-detail"
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  return <CaseStudyDetail study={study} />
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return {
    title: `${study.title} · Multitravel | Mariano Breiman`,
    description: study.summary,
  }
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}
