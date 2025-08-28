import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

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

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
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
