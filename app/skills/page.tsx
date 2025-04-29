import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import {
  Users,
  Lightbulb,
  Palette,
  Zap,
  Code,
  BarChart,
  Layers,
  PenTool,
  Monitor,
  MessageSquare,
  Figma,
  FileText,
  Repeat,
  Compass,
  Smartphone,
  Workflow,
  Sliders,
} from "lucide-react"

export default function SkillsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Mis <span className="gradient-text">habilidades</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Un conjunto completo de capacidades de diseño perfeccionadas a través de años de experiencia y
                aprendizaje continuo.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Diseño & UX Skills */}
      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Diseño & UX"
              subtitle="Creación de interfaces visualmente atractivas que comunican claramente y mejoran la experiencia del usuario."
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Monitor className="h-8 w-8 text-primary" />,
                title: "Responsive & Adaptive Design",
                description:
                  "Creación de interfaces que se adaptan perfectamente a diferentes dispositivos y contextos de uso.",
              },
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Design Systems & Atomic Design",
                description:
                  "Desarrollo de sistemas de diseño escalables y consistentes para mantener coherencia en los productos.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Microinteractions & Motion Design",
                description:
                  "Diseño de animaciones e interacciones que proporcionan feedback y deleitan a los usuarios.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Accessibility & Usability",
                description:
                  "Creación de interfaces inclusivas que pueden ser utilizadas por personas con diversas capacidades.",
              },
              {
                icon: <Smartphone className="h-8 w-8 text-primary" />,
                title: "Interactive Mockups & Animations",
                description: "Desarrollo de prototipos interactivos que simulan la experiencia real del producto.",
              },
              {
                icon: <Palette className="h-8 w-8 text-primary" />,
                title: "Visual Design",
                description:
                  "Creación de interfaces estéticamente agradables con atención al color, tipografía y espaciado.",
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
        </div>
      </section>

      {/* Proceso & Estrategia Skills */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Proceso & Estrategia"
              subtitle="Metodologías y enfoques para abordar proyectos de diseño de manera efectiva y estratégica."
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Compass className="h-8 w-8 text-primary" />,
                title: "Design Thinking & Human-Centered Design",
                description: "Aplicación de metodologías centradas en el usuario para resolver problemas complejos.",
              },
              {
                icon: <BarChart className="h-8 w-8 text-primary" />,
                title: "Data-Driven Design",
                description: "Uso de datos y métricas para informar decisiones de diseño y optimizar experiencias.",
              },
              {
                icon: <Repeat className="h-8 w-8 text-primary" />,
                title: "Lean UX, Agile & Scrum",
                description:
                  "Implementación de metodologías ágiles para iterar rápidamente y entregar valor de forma continua.",
              },
              {
                icon: <Sliders className="h-8 w-8 text-primary" />,
                title: "A/B Testing, Benchmarking, User Interviews",
                description: "Aplicación de técnicas de investigación para validar hipótesis y mejorar diseños.",
              },
              {
                icon: <Workflow className="h-8 w-8 text-primary" />,
                title: "Developer Handoff & Communication",
                description: "Colaboración efectiva con equipos de desarrollo para implementar diseños con precisión.",
              },
              {
                icon: <FileText className="h-8 w-8 text-primary" />,
                title: "Documentation & Specifications",
                description: "Creación de documentación clara y detallada para facilitar la implementación de diseños.",
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
        </div>
      </section>

      {/* Producción Skills */}
      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Producción"
              subtitle="Habilidades técnicas para llevar los conceptos de diseño a la realidad."
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "Low & High-Fidelity Wireframes",
                description:
                  "Creación de representaciones visuales de diferentes niveles de fidelidad para establecer la estructura y el flujo.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Prototypes & User Flows",
                description:
                  "Desarrollo de prototipos interactivos y flujos de usuario para validar conceptos antes de la implementación.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Usability Testing",
                description: "Evaluación de diseños con usuarios reales para identificar problemas y áreas de mejora.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Cross-functional Team Collaboration",
                description: "Trabajo efectivo con equipos multidisciplinarios para lograr objetivos comunes.",
              },
              {
                icon: <Figma className="h-8 w-8 text-primary" />,
                title: "Design Tools Mastery",
                description:
                  "Dominio de herramientas de diseño como Figma, Adobe Creative Suite y otras plataformas relevantes.",
              },
              {
                icon: <Code className="h-8 w-8 text-primary" />,
                title: "Basic Front-end Knowledge",
                description:
                  "Comprensión de los fundamentos de HTML, CSS y JavaScript para colaborar mejor con desarrolladores.",
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
        </div>
      </section>

      {/* Herramientas */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Herramientas"
              subtitle="Dominio de las herramientas necesarias para el diseño y desarrollo de productos digitales."
              centered
            />
          </ScrollAnimation>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Figma",
                level: "Alto dominio",
                percentage: 95,
              },
              {
                name: "Adobe Creative Suite",
                level: "Intermedio",
                percentage: 75,
              },
              {
                name: "Clarity",
                level: "Básico",
                percentage: 50,
              },
              {
                name: "Microsoft Office",
                level: "Intermedio",
                percentage: 70,
              },
              {
                name: "Notion",
                level: "Intermedio",
                percentage: 80,
              },
              {
                name: "VS Code",
                level: "Básico",
                percentage: 45,
              },
            ].map((tool, index) => (
              <ScrollAnimation key={index} delay={index * 100} className="hover-card">
                <div className="bg-card rounded-lg p-6 h-full border">
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${tool.percentage}%` }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{tool.level}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Mi proceso de diseño"
              subtitle="Un enfoque sistemático para resolver desafíos de diseño y crear experiencias excepcionales."
              centered
            />
          </ScrollAnimation>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-muted hidden md:block" />

            {[
              {
                title: "Descubrir",
                description:
                  "Entender el espacio del problema a través de investigación, entrevistas con stakeholders y análisis competitivo.",
                icon: <Users className="h-10 w-10" />,
              },
              {
                title: "Definir",
                description:
                  "Sintetizar los hallazgos de la investigación para identificar necesidades, puntos de dolor y oportunidades.",
                icon: <Lightbulb className="h-10 w-10" />,
              },
              {
                title: "Idear",
                description:
                  "Generar una amplia gama de soluciones creativas a través de bocetos, wireframes y talleres colaborativos.",
                icon: <PenTool className="h-10 w-10" />,
              },
              {
                title: "Prototipar",
                description:
                  "Crear modelos interactivos para probar ideas y recopilar feedback antes de la implementación.",
                icon: <Layers className="h-10 w-10" />,
              },
              {
                title: "Testear",
                description:
                  "Evaluar diseños con usuarios reales para validar suposiciones e identificar áreas de mejora.",
                icon: <BarChart className="h-10 w-10" />,
              },
              {
                title: "Implementar",
                description:
                  "Trabajar estrechamente con desarrolladores para asegurar que la visión de diseño se realice en el producto final.",
                icon: <Code className="h-10 w-10" />,
              },
            ].map((step, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div
                  className={`relative flex items-center gap-6 mb-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="hidden md:flex items-center justify-center w-1/2">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground z-10">
                      {step.icon}
                    </div>
                  </div>

                  <div
                    className={`w-full md:w-1/2 bg-card rounded-lg p-6 border ${index % 2 === 1 ? "text-right" : ""}`}
                  >
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <div className="hidden md:block">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
