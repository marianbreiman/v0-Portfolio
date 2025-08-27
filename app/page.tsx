import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { ArrowRight, Zap, Users, Palette, Code, Lightbulb, ExternalLink, MapPin } from "lucide-react"

export default function Home() {
  return (
    <>
      <AnimatedGradientBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <ScrollAnimation>
              <div className="mb-6 relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Mariano Breiman"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="gradient-text">Mariano Breiman</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Product Designer</h2>
              <div className="flex items-center justify-center text-muted-foreground mb-6">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Palermo, CABA, Argentina</span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Me apasiona crear experiencias digitales que sean intuitivas, útiles y centradas en las personas.
                Disfruto transformar ideas en soluciones funcionales, trabajando en equipos multidisciplinarios y con
                una mirada estratégica.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    Explorar mi trabajo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contacto</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      </section>

      {/* About Section Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Sobre mí"
              subtitle="Product Designer con experiencia en diseño UX/UI en plataformas web y mobile, desde la investigación hasta la entrega final."
              centered
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollAnimation className="order-2 md:order-1">
              <div className="space-y-4">
                <p>
                  Me apasiona crear experiencias digitales que sean intuitivas, útiles y centradas en las personas.
                  Disfruto transformar ideas en soluciones funcionales, trabajando en equipos multidisciplinarios y con
                  una mirada estratégica.
                </p>
                <p>
                  Tengo experiencia en diseño UX/UI en plataformas web y mobile, desde la investigación hasta la entrega
                  final. Mi enfoque combina el pensamiento estratégico con la ejecución detallada para crear productos
                  que resuelvan problemas reales.
                </p>
                <div className="pt-4">
                  <Button asChild variant="outline">
                    <Link href="/about">Conocer más sobre mí</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="order-1 md:order-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Mariano Breiman"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Skills Section Preview */}
      <section className="section-padding">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Mis habilidades"
              subtitle="Una combinación de diseño centrado en el usuario, conocimiento técnico y resolución creativa de problemas."
              centered
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Design Thinking & Human-Centered Design",
                description: "Aplicación de metodologías centradas en el usuario para resolver problemas complejos.",
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-primary" />,
                title: "Responsive & Adaptive Design",
                description:
                  "Creación de interfaces que se adaptan perfectamente a diferentes dispositivos y contextos de uso.",
              },
              {
                icon: <Palette className="h-8 w-8 text-primary" />,
                title: "Design Systems & Atomic Design",
                description: "Desarrollo de sistemas de diseño escalables y consistentes para productos digitales.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Data-Driven Design",
                description: "Uso de datos y métricas para informar decisiones de diseño y optimizar experiencias.",
              },
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Developer Handoff & Communication",
                description: "Colaboración efectiva con equipos de desarrollo para implementar diseños con precisión.",
              },
              {
                icon: <ExternalLink className="h-8 w-8 text-primary" />,
                title: "Usability Testing",
                description: "Evaluación de diseños con usuarios reales para identificar problemas y áreas de mejora.",
              },
            ].map((skill, index) => (
              <ScrollAnimation key={index} delay={index * 100} className="hover-card">
                <div className="bg-card rounded-lg p-6 h-full border">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/skills">Ver todas las habilidades</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Proyectos destacados"
              subtitle="Una selección de mi trabajo reciente que muestra mi proceso de diseño y enfoque para resolver problemas."
              centered
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-1 gap-8">
            <ScrollAnimation className="group">
              <Link href="/projects/future" className="block">
                <div className="overflow-hidden rounded-lg border bg-card transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Future</h2>
                        <p className="text-lg text-blue-800 dark:text-blue-300">Camina hacia el futuro</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-medium">UX/UI Design</p>
                        <h3 className="text-xl font-bold">Proyecto Future</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Proyecto Future</h3>
                    <p className="text-sm text-muted-foreground mb-4">UX/UI Design</p>
                    <p className="text-muted-foreground">
                      Aplicación que ayuda a estudiantes a elegir su carrera universitaria y dónde estudiarla,
                      proporcionando información sobre carreras, universidades y becas.
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          </div>

          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/projects">
                Ver todos los proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
              <p className="text-muted-foreground mb-8">
                Estoy disponible para proyectos freelance y nuevas oportunidades emocionantes.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contacto</Link>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
