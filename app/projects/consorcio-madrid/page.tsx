import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowLeft } from "lucide-react"

export default function ConsorcioMadridProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(79,108,246,0.1),rgba(79,108,246,0))]" />
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <Button variant="ghost" asChild className="mb-8 hover:scale-105 transition-transform">
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-all group-hover:-translate-x-1" />
                Volver a Proyectos
              </Link>
            </Button>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="transition-all duration-500 hover:translate-y-[-5px]">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-900/50 animate-pulse">
                  Caso de Estudio UX/UI Design
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Proyecto{" "}
                  <span className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    Consorcio Madrid
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Propuesta de diseño para el sistema de transporte público de Madrid.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200} className="transition-all duration-500 hover:scale-105">
              <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group">
                <div className="text-center p-8 transition-all duration-500 group-hover:scale-110">
                  <h2 className="text-3xl font-bold text-blue-600 mb-4 transition-colors group-hover:text-blue-700">
                    Consorcio Madrid
                  </h2>
                  <p className="text-lg text-blue-800 dark:text-blue-300 transition-colors group-hover:text-blue-900 dark:group-hover:text-blue-200">
                    Propuesta de Diseño
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}