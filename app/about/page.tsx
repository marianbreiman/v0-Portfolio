import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Heart, RefreshCw, Lightbulb, Zap, Palette, MapPin, Calendar } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Sobre <span className="gradient-text">Mariano</span>
                </h1>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Palermo, CABA, Argentina</span>
                </div>
                <p className="text-xl text-muted-foreground">
                  Product Designer especializado en experiencias web y mobile responsive. Con experiencia en el sector
                  turístico, empresas SaaS, educación digital y proyectos freelance.
                </p>
                <div className="space-y-4">
                  <p>
                    Me apasiona crear experiencias digitales que sean intuitivas, útiles y centradas en las personas.
                    Disfruto transformar ideas en soluciones funcionales, trabajando en equipos multidisciplinarios y
                    con una mirada estratégica.
                  </p>
                  <p>
                    Tengo experiencia en diseño UX/UI en plataformas web y mobile, desde la investigación hasta la
                    entrega final. Mi enfoque combina el pensamiento estratégico con la ejecución detallada para crear
                    productos que resuelvan problemas reales.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src="/mariano-casual.jpeg" alt="Mariano Breiman" fill className="object-cover object-center" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Mis valores"
              subtitle="Los principios fundamentales que guían mi proceso de diseño y toma de decisiones."
              centered
            />
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Empatía",
                description:
                  "Entender las necesidades, motivaciones y puntos de dolor de los usuarios para crear soluciones significativas.",
              },
              {
                icon: <RefreshCw className="h-10 w-10 text-primary" />,
                title: "Iteración",
                description:
                  "Refinar continuamente los diseños basándome en feedback y pruebas para lograr el mejor resultado.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Claridad",
                description: "Crear interfaces intuitivas con comunicación clara y elementos de diseño con propósito.",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Funcionalidad",
                description:
                  "Asegurar que los diseños no solo se vean bien sino que funcionen efectivamente para resolver problemas reales.",
              },
              {
                icon: <Palette className="h-10 w-10 text-primary" />,
                title: "Estética",
                description:
                  "Elaborar experiencias visualmente atractivas que deleiten a los usuarios y mejoren el engagement.",
              },
            ].map((value, index) => (
              <ScrollAnimation key={index} delay={index * 100} className="hover-card">
                <div className="bg-card rounded-lg p-6 h-full border text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading title="Experiencia laboral" subtitle="Mi trayectoria profesional en el mundo del diseño." />
          </ScrollAnimation>

          <div className="space-y-12">
            {[
              {
                year: "Ene. 2023 – Presente",
                title: "Product Designer",
                company: "Multitravel.com",
                description:
                  "Lidero el diseño de soluciones para la industria de viajes, alineando objetivos de negocio con necesidades reales de usuarios. Me enfoco en la optimización del funnel de conversión, mejora continua de producto, diseño de experiencias móviles y escritorio, e implementación de features como filtros, checkout y cupones.",
              },
              {
                year: "Jul. 2020 – Ene. 2022",
                title: "UX/UI Designer",
                company: "Tutenlabs",
                description:
                  "Diseñé plataformas internas para gestión de operaciones. Colaboré con equipos de desarrollo en sprints ágiles, definiendo flujos complejos, wireframes y prototipos funcionales.",
              },
              {
                year: "Mar. 2022 – Ago. 2022",
                title: "UX/UI Design Tutor (Avanzado)",
                company: "Coderhouse",
                description:
                  "Guié a estudiantes en la creación de proyectos reales, reforzando conceptos de accesibilidad, arquitectura de información, research y diseño visual.",
              },
              {
                year: "Sept. 2021 – Abr. 2022",
                title: "Junior UX/UI Designer",
                company: "Orbit",
                description:
                  "Trabajé en el rediseño de sitios corporativos con foco en mobile-first y accesibilidad. Participé en testeo de usabilidad y definiciones visuales.",
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                  <div className="mb-1 text-sm font-medium text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="mb-2 text-muted-foreground">{item.company}</div>
                  <p>{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading title="Educación" subtitle="Mi formación académica y certificaciones." />
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <div className="space-y-8">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-bold mb-2">Universidad de Palermo</h3>
                  <p className="text-muted-foreground mb-4">Diseñador Industrial (Mar. 2017 – Jun. 2024)</p>
                </div>

                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-xl font-bold mb-2">Instituto ORT</h3>
                  <p className="text-muted-foreground mb-4">
                    Bachiller Técnico en Diseño Industrial (Mar. 2012 – Dic. 2016)
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-lg p-6 border h-full">
                <h3 className="text-xl font-bold mb-4">Certificaciones Coderhouse</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">UX/UI Design Certificate (2021)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">UX Research Certificate (2022)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">UX/UI Design Advance Certificate (2022)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">JavaScript Certificate (2023)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">Web Development Certificate (2023)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation delay={200}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/mariano-casual.jpeg"
                  alt="Espacio de trabajo de Mariano"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Idiomas</h2>
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-6 border">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">Español</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Nativo</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div className="bg-card rounded-lg p-6 border">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">Inglés</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">Conversacional</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
