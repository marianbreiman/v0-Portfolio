import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

// Trabajo previo a Multitravel, con la carátula nativa de Behance.
// `context` dice de dónde salió cada uno: un cliente real o un ejercicio de formación.
const BEHANCE_PROJECTS = [
  {
    id: "184224897",
    title: "Orbit",
    subtitle: "Landing web y app",
    context: "Cliente",
    url: "https://www.behance.net/gallery/184224897/Diseno-para-Orbit-Landing-Web-App",
  },
  {
    id: "125441469",
    title: "Future",
    subtitle: "App de orientación vocacional",
    context: "Académico",
    url: "https://www.behance.net/gallery/125441469/Future-Prototipo-UxUi",
  },
  {
    id: "133580041",
    title: "Ualá",
    subtitle: "Ejercicio de rediseño",
    context: "Académico",
    url: "https://www.behance.net/gallery/133580041/Rediseno-UXUI-Uala",
  },
  {
    id: "184223321",
    title: "Consorcio de Transportes de Madrid",
    subtitle: "Propuesta conceptual",
    context: "Académico",
    url: "https://www.behance.net/gallery/184223321/Propuesta-para-el-Consorcio-de-Transportes-de-Madrid",
  },
  {
    id: "184225635",
    title: "Alleata",
    subtitle: "UX/UI challenge",
    context: "Académico",
    url: "https://www.behance.net/gallery/184225635/Rediseno-para-alleata",
  },
]

export function BehanceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {BEHANCE_PROJECTS.map((project, index) => (
        <ScrollAnimation key={project.id} delay={index * 70}>
          <div className="space-y-3">
            <div className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/25">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {/* iframe visual — sin pointer events para evitar scroll interno */}
                <iframe
                  src={`https://www.behance.net/embed/project/${project.id}?ilo0=1`}
                  title={project.title}
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none select-none"
                  loading="lazy"
                  tabIndex={-1}
                  allowFullScreen
                  allow="clipboard-write"
                  referrerPolicy="strict-origin-when-cross-origin"
                />

                {/* Capa interactiva que cubre toda la card */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex flex-col justify-end"
                  aria-label={`Ver ${project.title} en Behance`}
                >
                  {/* Overlay gradiente: siempre en mobile, hover en desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-opacity duration-400 opacity-100 md:opacity-0 md:group-hover:opacity-100" />

                  {/* Contenido desktop (sube en hover) */}
                  <div className="relative hidden md:flex flex-col gap-2.5 p-5 transition-all duration-300 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-white font-bold text-base leading-tight drop-shadow-sm">{project.title}</p>
                    <span className="self-start inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/18 backdrop-blur-sm border border-white/28 rounded-full px-3.5 py-1.5">
                      Ver en Behance <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>

                  {/* Contenido mobile (siempre visible) */}
                  <div className="relative flex md:hidden items-center justify-between gap-2 px-4 py-3">
                    <p className="text-white font-bold text-sm leading-tight truncate drop-shadow-sm">{project.title}</p>
                    <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold text-white/90">
                      Behance <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-baseline justify-between gap-3 px-1">
              <p className="text-sm">
                <span className="font-medium">{project.title}</span>
                <span className="text-muted-foreground"> · {project.subtitle}</span>
              </p>
              <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-muted-foreground">
                {project.context}
              </span>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  )
}
