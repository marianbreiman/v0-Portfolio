"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollAnimation } from "@/components/scroll-animation"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Search, BookOpen, Target, Menu, X } from "lucide-react"

const knowledgeData = {
  fundamentos: {
    title: "Fundamentos UX/UI",
    icon: BookOpen,
    color: "from-blue-500 to-purple-600",
    description: "Conceptos básicos y definiciones esenciales del diseño de experiencia de usuario",
    topics: {
      "ux-definition": {
        title: "¿Qué es UX (User Experience)?",
        content: {
          definition:
            "Se conoce como Experiencia de Usuario a todos los aspectos que abarcan la interacción del usuario final con la empresa, sus servicios y sus productos.",
          details: [
            "El requisito fundamental para proporcionar una experiencia de usuario óptima es la de satisfacer las necesidades exactas del cliente sin que le cause ningún problema o molestia.",
            "A partir de ahí llega la simplicidad, el diseño y el gusto para proporcionar productos que sean atractivos para usar y poseer.",
            "La auténtica experiencia de usuario va mucho más allá de ofrecer al cliente lo que ellos piensan que están buscando.",
            "Es necesario una mezcla de varios servicios de diferentes disciplinas como son el marketing, el diseño gráfico e industrial, la ingeniería y el diseño de interfaces.",
            "UX se refiere a lo que experimenta el usuario antes, durante y después de usar el producto.",
            "El diseño UX abarca aspectos como usabilidad, entrevistas, recopilación de información sobre el producto y estudio de la interacción con el usuario.",
          ],
        },
      },
      "ui-definition": {
        title: "¿Qué es UI (User Interface)?",
        content: {
          definition:
            "La interfaz de usuario o UI es el conjunto de elementos de la pantalla que permiten al usuario interactuar con una página web.",
          details: [
            "Es la vista que permite a un usuario interactuar de manera efectiva con un sistema.",
            "Es la suma de una arquitectura de información + patrones de interacción + elementos visuales.",
            "UI se refiere a todo con lo que los usuarios interactúan de forma directa (la capa externa de un producto digital).",
            "Es todo lo que vemos y tocamos en una página web, una aplicación o un dispositivo.",
            "El diseño de interfaces para programas de computación constituye un nuevo campo del diseño –un área híbrida, donde los límites entre el diseño gráfico e industrial se diluyen. - Lev Manovich",
          ],
        },
      },
      "ux-vs-ui": {
        title: "UX vs UI",
        content: {
          definition:
            "Diferencias fundamentales entre el diseño de experiencia de usuario y el diseño de interfaz de usuario.",
          details: [
            "El diseño UX está presente en todo el desarrollo del diseño del producto, desde el inicio, desde que se piensa, se analiza e investiga hasta el final del proyecto con las pruebas de usabilidad y sus mejoras.",
            "El diseño UI comienza en una segunda etapa y va a incorporar al UX, todos los elementos visuales y gráficos.",
            "UI va a aportar la Estética y el diseño a la interfaz.",
            "UX se enfoca en la funcionalidad y usabilidad, mientras que UI se enfoca en la apariencia visual.",
            "Ambos trabajan en conjunto para crear productos digitales exitosos.",
          ],
        },
      },
      usabilidad: {
        title: "¿Qué es Usabilidad?",
        content: {
          definition: "Es la práctica de probar lo fácil que es usar un diseño en un grupo representativo de usuarios.",
          details: [
            "Por lo general, implica observar a estos últimos cuando intentan completar las tareas.",
            "Esto puede llevarse a cabo para diferentes tipos de diseños, desde interfaces de usuario hasta productos físicos.",
            "Comúnmente se realizan de manera constante, desde el desarrollo inicial hasta la liberación de un producto.",
            "Jakob Nielsen, considerado el padre de la Usabilidad, la definió como el atributo de calidad de un producto que se refiere sencillamente a su facilidad de uso.",
            "Implica el grado en que el usuario puede explotar o aprovechar la utilidad de un producto.",
            "Facilidad con que las personas pueden utilizar una herramienta particular o cualquier otro objeto fabricado por humanos con el fin de alcanzar un objetivo concreto - ISO 9241111998",
          ],
        },
      },
    },
  },
  metodologias: {
    title: "Metodologías UX/UI",
    icon: Target,
    color: "from-green-500 to-teal-600",
    description: "Metodologías y procesos para el desarrollo de productos digitales",
    topics: {
      dcu: {
        title: "Diseño Centrado en el Usuario (DCU)",
        content: {
          definition:
            "El Diseño Centrado en el Usuario es un proceso iterativo muy técnico que requiere de una serie de pasos especializados que permiten investigar y diseñar un proyecto web.",
          details: [
            "**Análisis**: Los pasos se inician con un análisis del usuario, el contexto y los escenarios. El análisis del usuario permite entender sus necesidades y conocer su perfil, mientras que el de contexto busca entender todo lo que está alrededor, como la competencia, el mercado, entre otros.",
            "**Diseño**: En la etapa de prototipado se desarrolla un diseño en baja y alta, de manera que se puedan apreciar las funcionalidades del sitio web. El prototipado busca tener una web funcional, que no está en línea aún.",
            "**Validación**: La etapa anterior se pone en evidencia cuando se realiza el test de usuario, que incluye pruebas finales de la plataforma, y uso de herramientas de analítica como eyetracking.",
          ],
        },
      },
      cascada: {
        title: "Metodología Cascada",
        content: {
          definition:
            "El modelo de cascada es un proceso de desarrollo secuencial, en el cual el desarrollo de software se concibe como un conjunto de etapas que se ejecutan una tras otra.",
          details: [
            "Se lo denomina así por las posiciones que ocupan las diferentes fases que componen el proyecto, colocadas una encima de otra, y siguiendo un flujo de ejecución de arriba hacia abajo, como una cascada.",
            "Cada etapa comienza cuando termina la anterior.",
            "Esta metodología no contempla la posibilidad de medir los resultados hasta el final del proyecto.",
            "El modelo de desarrollo en cascada se originó en la industria y la construcción, donde los cambios a posteriori son caros y difíciles de implementar.",
          ],
        },
      },
      agil: {
        title: "Metodología Ágil",
        content: {
          definition:
            "Es una alternativa en la gestión tradicional de proyectos TI, donde se hace hincapié en el empoderamiento de las personas para colaborar y tomar decisiones en equipo.",
          details: [
            "Potencia la planificación continua, las pruebas permanentes y la integración conjunta del código y los despliegues.",
            "A diferencia del desarrollo en Cascada donde existe una única etapa de relevamiento, el desarrollo ágil posee tantas instancias de relevamiento como iteraciones.",
            "En cada iteración se podrá revisar lo relevado en la iteración anterior a partir de los hallazgos en las pruebas realizadas.",
            "Esta metodología propone un abordaje iterativo.",
            "Cada iteración se compone de 3 instancias: Análisis, Elaboración y Prueba.",
          ],
        },
      },
      "design-thinking": {
        title: "Design Thinking",
        content: {
          definition:
            "Es un método para generar ideas innovadoras que centra su eficacia en entender y dar solución a las necesidades reales de los usuarios.",
          details: [
            "**Empatizar**: Lo primero que debes hacer es conocer a tus clientes en profundidad y ponerte en su lugar. Se trata de saber qué necesitan, qué quieren, qué les gusta.",
            "**Definir**: El segundo paso será definir el problema y quedarte sólo con aquello que realmente te va a ayudar a solucionarlo.",
            "**Idear**: Es el momento clave, la hora de ponerse realmente a pensar, pero no vale pensar soluciones prácticas o clásicas. Toda idea es bien recibida.",
            "**Prototipar**: Ya tienes la idea, la solución a tu problema, así que es el momento de ponerlo en práctica.",
            "**Testear**: Llega el momento de que el cliente lo pruebe, de ponerlo en el mercado y recibir el feedback de tu público objetivo.",
          ],
        },
      },
      "design-sprint": {
        title: "Design Sprint",
        content: {
          definition:
            "Design Sprint es una metodología que se basa en la filosofía de Design Thinking, pero tiene su propia propuesta de valor. Permite prototipar y validar ideas de diseño con usuarios finales de manera rápida.",
          details: [
            "El método fue creado por Google en 2010, después de haber estudiado cientos de estrategias de Design Thinking.",
            "Es una metodología creada por Jake Knapp en 2010, que se actualizó en 2018 mientras trabajaba en Google.",
            "Consta de 6 fases, y según el proyecto y la ocasión una fase durará más que otra.",
            "Google define 5 fases a realizar en un período de 5 días, con una duración total de 40 horas.",
            "A diferencia del Design Thinking, el Design Sprint nos marca cuánto debe durar el proceso.",
          ],
        },
      },
      brainstorming: {
        title: "Brainstorming",
        content: {
          definition:
            "El Brainstorming, también conocido como lluvia o tormenta de ideas, es una técnica creativa grupal cuyo objetivo es la generación de nuevas ideas acerca de un tema o problema concreto en un ambiente relajado.",
          details: [
            "**Las 6 reglas de IDEO**:",
            "1. **Postergar juicios de valor**: Adoptá una mentalidad abierta en tus sesiones de ideas.",
            "2. **Fomentar las ideas absurdas, extremas y radicales**: Incluso una idea descabellada puede llevarte a la próxima innovación radical.",
            "3. **Construir sobre las ideas de los demás integrantes**: Una buena práctica es continuar una conversación diciendo: 'para aprovechar esto que acabas de decir...'",
            "4. **Una conversación a la vez**: Escuchá cada idea de cada persona antes de anotarla.",
            "5. **Ser visual para explicar**: Dibuja o escribí tus ideas en post-it o en hojas de papel.",
            "6. **Priorizar cantidad sobre calidad**: Intentá tener entre 40 y 50 ideas como mínimo en cada sesión.",
          ],
        },
      },
    },
  },
  investigacion: {
    title: "Investigación UX",
    icon: Search,
    color: "from-purple-500 to-pink-600",
    description: "Métodos y técnicas de investigación de usuarios",
    topics: {
      "user-personas": {
        title: "User Personas",
        content: {
          definition:
            "Las User Personas son representaciones ficticias de usuarios reales basadas en investigación y datos reales sobre el comportamiento y características demográficas de los usuarios.",
          details: [
            "Ayudan a los equipos de diseño a entender mejor a sus usuarios objetivo.",
            "Se basan en investigación real, no en suposiciones.",
            "Incluyen información demográfica, comportamientos, necesidades y objetivos.",
            "Permiten tomar decisiones de diseño más informadas.",
            "Facilitan la comunicación dentro del equipo sobre quiénes son los usuarios.",
          ],
        },
      },
      "journey-map": {
        title: "Journey Map",
        content: {
          definition:
            "Un Journey Map es una visualización del proceso que sigue una persona para lograr un objetivo específico.",
          details: [
            "Mapea cada paso de la experiencia del usuario con un producto o servicio.",
            "Identifica puntos de dolor y oportunidades de mejora.",
            "Incluye emociones, pensamientos y acciones del usuario en cada etapa.",
            "Ayuda a identificar momentos críticos en la experiencia.",
            "Facilita la alineación del equipo sobre la experiencia completa del usuario.",
          ],
        },
      },
    },
  },
}

export default function ConocimientosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("fundamentos")
  const [selectedTopic, setSelectedTopic] = useState<string>("ux-definition")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentCategory = knowledgeData[selectedCategory as keyof typeof knowledgeData]
  const currentTopic = currentCategory?.topics[selectedTopic as keyof typeof currentCategory.topics]

  const filteredCategories = Object.entries(knowledgeData).filter(([key, category]) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedGradientBackground />

      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Base de Conocimientos UX/UI
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Biblioteca completa de definiciones, metodologías y mejores prácticas en diseño de experiencia de
                usuario e interfaces. Un recurso educativo gratuito para toda la comunidad.
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar conocimientos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary/50 transition-all duration-300"
                />
              </div>
            </div>
          </ScrollAnimation>

          <div className="flex gap-8">
            {/* Mobile Sidebar Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="fixed top-32 left-4 z-50 md:hidden bg-background/80 backdrop-blur-sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>

            {/* Sidebar */}
            <div
              className={`fixed md:sticky top-24 left-0 h-[calc(100vh-6rem)] w-80 bg-background/95 backdrop-blur-sm border-r border-primary/20 overflow-y-auto z-40 transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
              }`}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6">Categorías</h2>
                <div className="space-y-4">
                  {filteredCategories.map(([categoryKey, category]) => {
                    const IconComponent = category.icon
                    const isSelected = selectedCategory === categoryKey

                    return (
                      <div key={categoryKey}>
                        <Button
                          variant={isSelected ? "default" : "ghost"}
                          className={`w-full justify-start h-auto p-4 ${
                            isSelected
                              ? `bg-gradient-to-r ${category.color} text-white hover:opacity-90`
                              : "hover:bg-muted"
                          }`}
                          onClick={() => {
                            setSelectedCategory(categoryKey)
                            setSelectedTopic(Object.keys(category.topics)[0])
                            setSidebarOpen(false)
                          }}
                        >
                          <IconComponent className="h-5 w-5 mr-3" />
                          <div className="text-left">
                            <div className="font-medium">{category.title}</div>
                            <div className="text-xs opacity-80">{Object.keys(category.topics).length} temas</div>
                          </div>
                        </Button>

                        {/* Topics */}
                        {isSelected && (
                          <div className="ml-4 mt-2 space-y-1">
                            {Object.entries(category.topics).map(([topicKey, topic]) => (
                              <Button
                                key={topicKey}
                                variant={selectedTopic === topicKey ? "secondary" : "ghost"}
                                size="sm"
                                className="w-full justify-start text-sm"
                                onClick={() => {
                                  setSelectedTopic(topicKey)
                                  setSidebarOpen(false)
                                }}
                              >
                                {topic.title}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {currentTopic && (
                <ScrollAnimation>
                  <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${currentCategory.color} text-white`}>
                          <currentCategory.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {currentCategory.title}
                          </Badge>
                          <CardTitle className="text-3xl">{currentTopic.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-8">
                      {/* Definition */}
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-primary">Definición</h3>
                        <p className="text-lg leading-relaxed">{currentTopic.content.definition}</p>
                      </div>

                      {/* Details */}
                      <div>
                        <h3 className="text-xl font-bold mb-6">Detalles y Explicación</h3>
                        <div className="space-y-4">
                          {currentTopic.content.details.map((detail, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-1">
                                {index + 1}
                              </div>
                              <p className="text-foreground leading-relaxed">
                                {detail.includes("**") ? (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: detail.replace(
                                        /\*\*(.*?)\*\*/g,
                                        '<strong class="text-primary font-semibold">$1</strong>',
                                      ),
                                    }}
                                  />
                                ) : (
                                  detail
                                )}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Navigation */}
                      <div className="flex justify-between items-center pt-8 border-t border-primary/20">
                        <div className="text-sm text-muted-foreground">
                          Tema {Object.keys(currentCategory.topics).indexOf(selectedTopic) + 1} de{" "}
                          {Object.keys(currentCategory.topics).length}
                        </div>
                        <div className="flex gap-2">
                          {Object.keys(currentCategory.topics).indexOf(selectedTopic) > 0 && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setSelectedTopic(
                                  Object.keys(currentCategory.topics)[
                                    Object.keys(currentCategory.topics).indexOf(selectedTopic) - 1
                                  ],
                                )
                              }
                            >
                              Anterior
                            </Button>
                          )}
                          {Object.keys(currentCategory.topics).indexOf(selectedTopic) <
                            Object.keys(currentCategory.topics).length - 1 && (
                            <Button
                              size="sm"
                              onClick={() =>
                                setSelectedTopic(
                                  Object.keys(currentCategory.topics)[
                                    Object.keys(currentCategory.topics).indexOf(selectedTopic) + 1
                                  ],
                                )
                              }
                            >
                              Siguiente
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )}
            </div>
          </div>

          {/* Stats Section */}
          <ScrollAnimation delay={0.6}>
            <div className="mt-16">
              <SectionHeading
                title="Estadísticas de la Base de Conocimientos"
                subtitle="Un recurso en constante crecimiento para la comunidad de diseño"
                centered
              />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {Object.keys(knowledgeData).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Categorías</div>
                </div>
                <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {Object.values(knowledgeData).reduce((acc, section) => acc + Object.keys(section.topics).length, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Temas</div>
                </div>
                <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {Object.values(knowledgeData).reduce(
                      (acc, section) =>
                        acc +
                        Object.values(section.topics).reduce(
                          (detailAcc, topic) => detailAcc + topic.content.details.length,
                          0,
                        ),
                      0,
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">Conceptos</div>
                </div>
                <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">Gratuito</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
