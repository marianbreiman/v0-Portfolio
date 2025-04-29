import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight } from "lucide-react"

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
                Una muestra de mi trabajo de diseño, proceso y enfoque para resolver problemas.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Multitravel.com",
                category: "Product Designer",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Lideré el diseño de soluciones para la industria de viajes, alineando objetivos de negocio con necesidades reales de usuarios. Me enfoqué en la optimización del funnel de conversión, mejora continua de producto, diseño de experiencias móviles y escritorio.",
                link: "/projects/multitravel",
              },
              {
                title: "Tutenlabs",
                category: "UX/UI Designer",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Diseñé plataformas internas para gestión de operaciones. Colaboré con equipos de desarrollo en sprints ágiles, definiendo flujos complejos, wireframes y prototipos funcionales.",
                link: "/projects/tutenlabs",
              },
              {
                title: "Coderhouse",
                category: "UX/UI Design Tutor",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Guié a estudiantes en la creación de proyectos reales, reforzando conceptos de accesibilidad, arquitectura de información, research y diseño visual.",
                link: "/projects/coderhouse",
              },
              {
                title: "Orbit",
                category: "Junior UX/UI Designer",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Trabajé en el rediseño de sitios corporativos con foco en mobile-first y accesibilidad. Participé en testeo de usabilidad y definiciones visuales.",
                link: "/projects/orbit",
              },
              {
                title: "Proyecto Personal: App de Finanzas",
                category: "UX/UI Design",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Diseñé una aplicación de gestión financiera personal con enfoque en la simplicidad y la visualización de datos para ayudar a los usuarios a tomar mejores decisiones financieras.",
                link: "/projects/finanzas-app",
              },
              {
                title: "Proyecto Personal: E-commerce",
                category: "Product Design",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Desarrollé un concepto de e-commerce con enfoque en la experiencia de compra móvil, optimizando el proceso de checkout y la navegación por categorías.",
                link: "/projects/ecommerce",
              },
            ].map((project, index) => (
              <ScrollAnimation key={index} delay={index * 100} className="group">
                <Link href={project.link} className="block">
                  <div className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <p className="text-sm font-medium">{project.category}</p>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex items-center text-primary font-medium group-hover:underline">
                        Ver caso de estudio
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
