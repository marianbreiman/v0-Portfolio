import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { ArrowRight, Search, Lightbulb, Layers, Code, MapPin, Eye, Target } from "lucide-react"

export default function Home() {
  return (
    <>
      <AnimatedGradientBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="gradient-text">Mariano Breiman</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">Product Designer</h2>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Palermo, CABA, Argentina</span>
                  </div>
                </div>

                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  Transformo problemas complejos en{" "}
                  <span className="text-primary font-semibold">experiencias digitales simples y humanas</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="group text-lg px-8 py-6">
                    <Link href="/projects">
                      Ver casos de estudio
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                    <Link href="/contact">Conversemos</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="relative">
                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-workspace-with-design-tools.png"
                    alt="Mariano Breiman en su entorno de trabajo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary/30 rounded-full blur-xl" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mi propuesta de valor */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Mi propuesta de valor</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Me apasiona el diseño porque combina{" "}
                <span className="text-primary font-semibold">empatía y estrategia</span>. Cada proyecto es una
                oportunidad para entender profundamente a las personas, sus necesidades y frustraciones, y transformar
                esa comprensión en soluciones que realmente importen. No diseño interfaces, diseño experiencias que
                conectan, simplifican y empoderan a quienes las usan.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Mi enfoque va más allá de lo visual: pienso en sistemas, en procesos, en el impacto real que cada
                decisión de diseño tiene en la vida de las personas y en los objetivos del negocio.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Metodología de diseño */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Mi metodología de diseño"
              subtitle="Un proceso probado que combina investigación, creatividad y validación para crear soluciones efectivas."
              centered
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Search className="h-8 w-8" />,
                title: "Descubrir",
                description: "Investigo el contexto, usuarios y oportunidades para entender el problema real.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Definir",
                description: "Sintetizo hallazgos para crear un marco claro del problema a resolver.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Idear",
                description: "Genero múltiples soluciones creativas a través de técnicas de ideación.",
              },
              {
                icon: <Layers className="h-8 w-8" />,
                title: "Prototipar",
                description: "Creo prototipos interactivos para materializar y probar las ideas.",
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Testear",
                description: "Valido las soluciones con usuarios reales para iterar y mejorar.",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Implementar",
                description: "Colaboro con desarrollo para asegurar que la visión se haga realidad.",
              },
            ].map((step, index) => (
              <ScrollAnimation key={index} delay={index * 100} className="hover-card">
                <div className="bg-card rounded-xl p-6 border text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Proyectos destacados"
              subtitle="Casos de estudio que muestran mi proceso de diseño y enfoque para resolver problemas complejos."
              centered
            />
          </ScrollAnimation>

          <div className="space-y-8 mt-12">
            {/* Future Project */}
            <ScrollAnimation className="group">
              <Link href="/projects/future" className="block">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-900/50">
                        UX/UI Design • App Móvil
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">Proyecto Future</h3>
                      <p className="text-muted-foreground">8 semanas • UX Researcher & Designer</p>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Aplicación que ayuda a estudiantes a elegir su carrera universitaria y dónde estudiarla,
                      proporcionando información sobre carreras, universidades y becas en un solo lugar.
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      Ver caso de estudio completo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Future</h2>
                        <p className="text-lg text-blue-800 dark:text-blue-300">Camina hacia el futuro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>

            {/* Ualá Project */}
            <ScrollAnimation className="group" delay={200}>
              <Link href="/projects/uala" className="block">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="order-2 md:order-1 relative h-[300px] rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h2 className="text-3xl font-bold text-white mb-4">Ualá</h2>
                        <p className="text-lg text-white/90">Rediseño de App Fintech</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 space-y-6">
                    <div className="space-y-2">
                      <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-900/50">
                        UX Research & Design • Fintech
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">Rediseño App Ualá</h3>
                      <p className="text-muted-foreground">6 semanas • Proyecto Académico Coderhouse</p>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Mejora de la experiencia de usuario de la app de billetera digital Ualá, enfocándome en seguridad,
                      soporte al cliente y una interfaz más intuitiva.
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      Ver caso de estudio completo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/projects">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">¿Listo para crear algo juntos?</h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Estoy disponible para proyectos que busquen crear experiencias digitales que realmente importen.
                  Conversemos sobre tu próximo desafío.
                </p>
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/contact">
                    Iniciemos una conversación
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
