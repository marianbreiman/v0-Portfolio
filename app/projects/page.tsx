import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, Calendar, User, Clock, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: "future",
    title: "Proyecto Future",
    subtitle: "Camina hacia el futuro",
    description:
      "Aplicación que ayuda a estudiantes a elegir su carrera universitaria y dónde estudiarla, proporcionando información sobre carreras, universidades y becas en un solo lugar.",
    category: "UX/UI Design • App Móvil",
    duration: "8 semanas",
    role: "UX Researcher & Designer",
    year: "2024",
    color: "blue",
    bgGradient: "from-blue-500 to-blue-600",
  },
  {
    id: "uala",
    title: "Rediseño App Ualá",
    subtitle: "Fintech UX Research",
    description:
      "Mejora de la experiencia de usuario de la app de billetera digital Ualá, enfocándome en seguridad, soporte al cliente y una interfaz más intuitiva.",
    category: "UX Research & Design • Fintech",
    duration: "6 semanas",
    role: "UX Researcher & Designer",
    year: "2023",
    color: "purple",
    bgGradient: "from-purple-500 to-pink-500",
  },
]

const behanceProjects = [
  {
    id: "125441469",
    title: "Future",
    subtitle: "Prototipo UX/UI",
    description: "Aplicación para orientación vocacional estudiantil",
    url: "https://www.behance.net/gallery/125441469/Future-Prototipo-UxUi",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "184224897",
    title: "Refugurus Orbit",
    subtitle: "Landing Web App",
    description: "Diseño para Orbit - Landing Web App",
    url: "https://www.behance.net/gallery/184224897/Diseno-para-Orbit-Landing-Web-App",
    color: "from-green-600 to-teal-600",
  },
  {
    id: "184225635",
    title: "Challenge Conexa",
    subtitle: "Rediseño para Alleata",
    description: "Challenge de diseño UX/UI para plataforma digital",
    url: "https://www.behance.net/gallery/184225635/Rediseno-para-alleata",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "133580041",
    title: "Case Study Ualá",
    subtitle: "Rediseño UX/UI",
    description: "Rediseño completo de la app de billetera digital",
    url: "https://www.behance.net/gallery/133580041/Rediseno-UXUI-Uala",
    color: "from-violet-600 to-purple-600",
  },
  {
    id: "184223321",
    title: "Consorcio Transportes Madrid",
    subtitle: "Propuesta de Diseño",
    description: "Propuesta para el Consorcio de Transportes de Madrid",
    url: "https://www.behance.net/gallery/184223321/Propuesta-para-el-Consorcio-de-Transportes-de-Madrid",
    color: "from-orange-600 to-red-600",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Mis <span className="gradient-text">proyectos</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Una muestra de mi trabajo de diseño, proceso y enfoque para resolver problemas complejos.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Behance Projects Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Proyectos en Behance"
              subtitle="Una selección de trabajos de diseño gráfico, branding y UX/UI disponibles en mi perfil de Behance."
              centered
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {behanceProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 100} className="group">
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    {/* Behance Embed */}
                    <iframe
                      src={`https://www.behance.net/embed/project/${project.id}?ilo0=1`}
                      className="w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      frameBorder="0"
                      allow="clipboard-write"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center p-6`}
                    >
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-sm opacity-90 mb-2">{project.subtitle}</p>
                        <p className="text-xs opacity-75 mb-4">{project.description}</p>
                        <div className="inline-flex items-center text-sm font-medium">
                          Ver en Behance
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="https://behance.net/marianbreiman" target="_blank" rel="noopener noreferrer">
                Ver perfil completo en Behance
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Casos de estudio detallados"
              subtitle="Proyectos con proceso completo de investigación, diseño y validación."
              centered
            />
          </ScrollAnimation>

          <div className="space-y-12 mt-12">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 200} className="group">
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className={`${index % 2 === 1 ? "order-2 md:order-1" : ""} space-y-6`}>
                      <div className="space-y-3">
                        <div
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${
                            project.color === "blue"
                              ? "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-900/50"
                              : "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-900/50"
                          }`}
                        >
                          {project.category}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {project.duration}
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {project.role}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.year}
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground">{project.description}</p>
                      <div className="flex items-center text-primary font-medium group-hover:underline">
                        Ver caso de estudio completo
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                    <div
                      className={`${index % 2 === 1 ? "order-1 md:order-2" : ""} relative h-[300px] rounded-xl overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center`}
                      >
                        <div className="text-center p-8">
                          <h2 className="text-3xl font-bold text-white mb-4">{project.title.split(" ").pop()}</h2>
                          <p className="text-lg text-white/90">{project.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
