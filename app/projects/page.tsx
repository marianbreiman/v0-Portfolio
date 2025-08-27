import Link from "next/link"
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
          <div className="grid md:grid-cols-1 gap-8">
            {/* Future Project - Featured */}
            <ScrollAnimation className="group">
              <Link href="/projects/future" className="block">
                <div className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Future</h2>
                        <p className="text-lg text-blue-800 dark:text-blue-300">Camina hacia el futuro</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                      <div className="text-white">
                        <p className="text-sm font-medium mb-2">UX/UI Design</p>
                        <h3 className="text-2xl font-bold">Proyecto Future</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Proyecto Future</h3>
                    <p className="text-sm text-muted-foreground mb-4">UX/UI Design</p>
                    <p className="text-muted-foreground mb-4">
                      Aplicación que ayuda a estudiantes a elegir su carrera universitaria y dónde estudiarla,
                      proporcionando información sobre carreras, universidades y becas.
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      Ver caso de estudio
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
