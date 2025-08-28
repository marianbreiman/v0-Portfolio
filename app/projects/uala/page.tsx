import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SectionHeading } from "@/components/section-heading"
import {
  ArrowLeft,
  ArrowRight,
  Target,
  AlertTriangle,
  Users,
  TrendingUp,
  BarChart3,
  Search,
  Eye,
  MessageSquare,
  Shield,
  FileText,
  Smartphone,
  CreditCard,
  ThumbsUp,
  ThumbsDown,
  Lightbulb,
} from "lucide-react"

export default function UalaProjectPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(168,85,247,0.1),rgba(168,85,247,0))]" />
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
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-900/50 animate-pulse">
                  Caso de Estudio UX Research & Design
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Rediseño App{" "}
                  <span className="text-purple-600 dark:text-purple-500 hover:text-purple-700 dark:hover:text-purple-400 transition-colors">
                    Ualá
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Proyecto académico de Coderhouse enfocado en mejorar la experiencia de usuario de la app de billetera
                  digital Ualá para aumentar la confianza y adopción en un mercado competitivo.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200} className="transition-all duration-500 hover:scale-105">
              <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group">
                <div className="text-center p-8 transition-all duration-500 group-hover:scale-110">
                  <h2 className="text-4xl font-bold text-white mb-4 transition-colors group-hover:text-purple-100">
                    Ualá
                  </h2>
                  <p className="text-xl text-white/90 transition-colors group-hover:text-white">
                    Rediseño de App Fintech
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">PROYECTO</h3>
              <p className="text-xl font-semibold">Rediseño App Ualá</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">ROL</h3>
              <p className="text-xl font-semibold">UX Researcher & Designer</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">DURACIÓN</h3>
              <p className="text-xl font-semibold">6 semanas</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">AÑO</h3>
              <p className="text-xl font-semibold">2023</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <SectionHeading title="¿Qué es Ualá?" />
            </div>
            <div className="md:col-span-2 space-y-4">
              <p>
                Ualá es una app para el manejo más fácil de tus finanzas + una cuenta y una tarjeta de débito Mastercard
                internacional gratis que te permitirá utilizarla para disponer de tus fondos. Con la tarjeta Ualá puedes
                comprar en cualquier comercio y sitio web del mundo que acepte Mastercard.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-3">
                  <h4 className="font-bold flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                    Funcionalidades principales:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Retiros de efectivo en cajeros ATM</li>
                    <li>Transferencias instantáneas</li>
                    <li>Compras con Mastercard Internacional</li>
                    <li>Pagos de servicios y recargas</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold flex items-center">
                    <Target className="h-5 w-5 mr-2 text-purple-600" />
                    Objetivo del proyecto:
                  </h4>
                  <p className="text-muted-foreground">
                    Mejorar la experiencia de usuario para que los usuarios sigan eligiendo Ualá en un mercado de
                    billeteras digitales en constante crecimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto y Problema */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading title="¿Por qué hacemos este research?" centered />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <ScrollAnimation>
              <div className="space-y-6">
                <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-lg border border-orange-100 dark:border-orange-900/20">
                  <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Contexto COVID-19
                  </h3>
                  <p className="text-orange-700 dark:text-orange-400">
                    La llegada del COVID-19 y posterior cuarentena trajo diferentes complicaciones para varios sectores
                    de la economía. Sin embargo, las billeteras digitales lograron canalizar las virtudes del contexto
                    para afianzar su crecimiento.
                  </p>
                  <div className="mt-4 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">6.5M</div>
                    <p className="text-sm text-orange-600">usuarios en Argentina</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold">¿Por qué rediseñamos?</h3>
                <p className="text-muted-foreground">
                  El mercado de billeteras virtuales está en ascenso por lo que la clave del triunfo estará en brindar
                  la mejor oferta de valor. Para conseguirlo es fundamental analizar constantemente la experiencia del
                  usuario con el producto.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Hallazgos principales:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Sección de ayuda y chat de soporte difícil de encontrar</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Interfaz poco atractiva e intuitiva</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Función "Pagos de Servicios" confusa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Falta de confianza en la seguridad</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading
              title="Metodología"
              subtitle="Utilizamos los 5 elementos UX de James Garrett para la planificación estratégica de la gestión de experiencia de usuario."
              centered
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: <Search className="h-8 w-8" />,
                title: "Estrategia",
                description: "Investigación de necesidades del usuario e intereses del negocio.",
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Requerimientos",
                description: "Definición de especificaciones funcionales y de contenido.",
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Estructura",
                description: "Ideación y definición de flujos, sistemas y jerarquías.",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Prototipar",
                description: "Diseño de bocetos y wireframes de la App.",
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Testear",
                description: "Diseño visual; componentes, colores y otros elementos.",
              },
            ].map((step, index) => (
              <ScrollAnimation key={index} delay={index * 100} className="hover-card">
                <div className="bg-card rounded-xl p-6 border text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Investigación */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading title="Entender las necesidades del usuario" centered />
          </ScrollAnimation>

          <div className="mb-12">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4">Metodología de investigación</h3>
                <p className="text-muted-foreground mb-6">
                  Este research empezó desde un principio mediante un <strong>Desk Research</strong>. Investigamos las
                  valoraciones de la App y con el fin de conocer a los usuarios de Ualá y su opinión, se realizó una
                  encuesta semiestructurada y entrevistas cualitativas y cuantitativas semiestructuradas vía Zoom.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
                    <p className="text-sm text-muted-foreground">Participantes totales</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">21</div>
                    <p className="text-sm text-muted-foreground">Preguntas en Google Forms</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                    <p className="text-sm text-muted-foreground">Grupos de usuarios</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Perfil de participantes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Por edad:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Menores de 18 años</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-muted rounded-full h-2 mr-3">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                          </div>
                          <span className="font-bold">15%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Entre 18 y 30 años</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-muted rounded-full h-2 mr-3">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                          </div>
                          <span className="font-bold">60%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Más de 30 años</span>
                        <div className="flex items-center">
                          <div className="w-32 bg-muted rounded-full h-2 mr-3">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                          </div>
                          <span className="font-bold">25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Por perfil de usuario</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Ex-usuarios</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-muted rounded-full h-2 mr-3">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "42%" }}></div>
                      </div>
                      <span className="font-bold">10 personas</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Empleados</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-muted rounded-full h-2 mr-3">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "33%" }}></div>
                      </div>
                      <span className="font-bold">8 personas</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Estudiantes</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-muted rounded-full h-2 mr-3">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <span className="font-bold">6 personas</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Resultados Cuantitativos</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">¿Has enviado/recibido una captura luego de una operación?</p>
                    <div className="flex justify-between items-center">
                      <span>Sí</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-muted rounded-full h-2 mr-3">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                        <span className="font-bold">80%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">¿Te preocupa la falta de seguridad al ingresar?</p>
                    <div className="flex justify-between items-center">
                      <span>Sí</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-muted rounded-full h-2 mr-3">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        <span className="font-bold">100%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">¿Tuviste problemas al pagar servicios?</p>
                    <div className="flex justify-between items-center">
                      <span>Sí</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-muted rounded-full h-2 mr-3">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: "55%" }}></div>
                        </div>
                        <span className="font-bold">55%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Experiencia general con Ualá</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Buena</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-muted rounded-full h-2 mr-3">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                      </div>
                      <span className="font-bold">50%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Regular</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-muted rounded-full h-2 mr-3">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                      <span className="font-bold">40%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mala</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-muted rounded-full h-2 mr-3">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                      <span className="font-bold">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-100 dark:border-green-900/20">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-4 flex items-center">
                  <ThumbsUp className="h-5 w-5 mr-2" />
                  Lo que gustó
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-green-700 dark:text-green-400">
                  <li>El organizador mensual</li>
                  <li>Las promociones</li>
                  <li>Es una opción para los no bancarizados</li>
                  <li>Las inversiones</li>
                  <li>Su versatilidad</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg border border-red-100 dark:border-red-900/20">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4 flex items-center">
                  <ThumbsDown className="h-5 w-5 mr-2" />
                  Lo que no gustó
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-red-700 dark:text-red-400">
                  <li>No tiene pago por QR</li>
                  <li>La app es poco estética</li>
                  <li>No hay un buen soporte</li>
                  <li>No hay un comprobante</li>
                  <li>Poca organización de usuarios</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-900/20">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Sugerencias
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-blue-700 dark:text-blue-400">
                  <li>Pagos con QR</li>
                  <li>Sección de ayuda 24hs</li>
                  <li>Creación de un comprobante</li>
                  <li>Organización de usuarios</li>
                  <li>Mejorar estética urgente</li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* User Persona */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading title="User Persona" centered />
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-card rounded-xl p-8 border shadow-sm max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Nicolás</h3>
                  <p className="text-muted-foreground">22 años</p>
                  <p className="text-muted-foreground">Diseñador Gráfico</p>
                  <p className="text-muted-foreground">Universidad de Palermo</p>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg border border-purple-100 dark:border-purple-900/20">
                    <p className="text-purple-800 dark:text-purple-300 italic text-lg">
                      "Me siento cansado, necesito una app que me permita manejar mi efectivo de manera rápida."
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Sobre mí</h4>
                    <p className="text-muted-foreground">
                      Soy un apasionado Diseñador Gráfico y hace un tiempo vengo trabajando de lleno en el mundo
                      Freelance, desde la parte gráfica como la parte digital y web de diferentes proyectos para
                      empresas con gran renombre.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Habilidades técnicas</h4>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Paquete Adobe</li>
                        <li>Nuevas tecnologías</li>
                        <li>Paquete Office</li>
                        <li>Redes sociales</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Vínculo con el producto</h4>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Usuario reciente de Ualá</li>
                        <li>Usa la tarjeta para trabajo y personal</li>
                        <li>Lo convenció por ser simple y gratuita</li>
                        <li>No entiende de inversiones</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2 text-red-600">Frustraciones</h4>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>No poder organizar contactos por categorías</li>
                        <li>Dificultad para encontrar ayuda</li>
                        <li>Quejas de clientes por comprobantes poco serios</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-green-600">Metas y necesidades</h4>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Transacciones rápidas y sin dificultad</li>
                        <li>Comprobantes descargables</li>
                        <li>Soporte inmediato y fácil de encontrar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Journey Map */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading
              title="Journey Map"
              subtitle="Escenario: Un día de semana, Nicolás recibe su tarjeta Ualá y necesita cargarle saldo para abonarle a su proveedor de insumos que acepta solo este medio de pago."
              centered
            />
          </ScrollAnimation>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Activar tarjeta",
                actions: ["Abrir la App", "Activar la tarjeta y cargar datos"],
                emotion: "😐",
                emotionText: "Leve confusión",
                quote: "Confusión para activar la tarjeta al recibirla",
                improvement: "Crear onboarding claro para activar la tarjeta",
                color: "orange",
              },
              {
                step: "2",
                title: "Cargar saldo",
                actions: ["Ir al Pago Fácil o Rapipago más cercano", "Solicitar carga de efectivo"],
                emotion: "😞",
                emotionText: "Molestia",
                quote: "Mucha espera en el local para cargar saldo. ¿Puedo variar?",
                improvement: "Ampliar puntos de carga (incluir cajeros propios o convenios)",
                color: "red",
              },
              {
                step: "3",
                title: "Realizar pago",
                actions: ["Ir a transferencias", "Buscar destinatario", "Realizar transacción", "Confirmar con clave"],
                emotion: "🙂",
                emotionText: "Mayor claridad con trabas",
                quote: "Se podría organizar mejor a los contactos y usuarios",
                improvement: "Guardar usuarios frecuentes, permitir clasificar por categorías",
                color: "yellow",
              },
              {
                step: "4",
                title: "Confirmar pago",
                actions: ["Enviar captura al proveedor", "Esperar confirmación", "Lidiar con quejas por comprobante"],
                emotion: "😡",
                emotionText: "Alta frustración",
                quote: "Debería poder tener, descargar y enviar un comprobante dentro de la App",
                improvement: "Generar comprobantes confiables desde la app, listos para enviar",
                color: "red",
              },
              {
                step: "5",
                title: "Soporte",
                actions: ["Buscar ayuda con dificultad", "Aguardar atención", "Realizar consulta"],
                emotion: "😠",
                emotionText: "Frustración",
                quote: "No encuentro la sección de ayuda con facilidad y pierdo mucho tiempo",
                improvement: "Crear una sección de soporte visible, con chat directo",
                color: "red",
              },
            ].map((stage, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-card rounded-xl p-6 border shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xl font-bold mb-2">
                        {stage.step}
                      </div>
                      <h3 className="text-lg font-bold">{stage.title}</h3>
                      <div className="text-2xl mt-2">{stage.emotion}</div>
                      <p className="text-sm text-muted-foreground">{stage.emotionText}</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Acciones</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        {stage.actions.map((action, i) => (
                          <li key={i}>{action}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2">Quote del usuario</h4>
                      <p className="text-sm italic text-muted-foreground">"{stage.quote}"</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-2 text-green-600">Mejora propuesta</h4>
                      <p className="text-sm text-muted-foreground">{stage.improvement}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lean Canvas */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading
              title="Lean Canvas — Ualá"
              subtitle="Herramienta de mapeo que nos permite concentrar los aspectos clave del negocio en una sola página."
              centered
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation>
              <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-xl border border-red-100 dark:border-red-900/20">
                <h3 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-4">Problema del negocio</h3>
                <ul className="list-disc pl-5 space-y-2 text-red-700 dark:text-red-400">
                  <li>La App Ualá no maneja bien la atención al cliente</li>
                  <li>No maneja un porcentaje alto de confianza en NO-usuarios</li>
                  <li>Maneja una estética básica y poco intuitiva</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-xl border border-blue-100 dark:border-blue-900/20">
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4">Arquetipo de usuarios</h3>
                <p className="text-blue-700 dark:text-blue-400">
                  Principalmente se enfocó en el rango de <strong>18 a 30 años</strong> debido a su mayor predisposición
                  a probar nuevas tecnologías y aplicaciones, especialmente aquellos sin acceso tradicional a servicios
                  bancarios.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <div className="bg-green-50 dark:bg-green-900/10 p-8 rounded-xl border border-green-100 dark:border-green-900/20">
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4">Hipótesis</h3>
                <ul className="list-disc pl-5 space-y-2 text-green-700 dark:text-green-400">
                  <li>Los usuarios depositarán su confianza si la app ofrece garantías de seguridad</li>
                  <li>Una sección de soporte visible generará más confianza</li>
                  <li>Una app con mayor estética e intuición será más recomendada</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-purple-50 dark:bg-purple-900/10 p-8 rounded-xl border border-purple-100 dark:border-purple-900/20">
                <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-4">Soluciones</h3>
                <ul className="list-disc pl-5 space-y-2 text-purple-700 dark:text-purple-400">
                  <li>Comprobantes descargables y compartibles</li>
                  <li>Sección principal de soporte</li>
                  <li>Mejorar estética e intuición</li>
                  <li>Inicio de sesión con autenticación biométrica</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Matriz de Prioridades */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading
              title="Matriz de Factibilidad y Deseabilidad"
              subtitle="Priorización de soluciones basada en el valor para los usuarios (deseabilidad) y la facilidad de implementación (factibilidad)."
              centered
            />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-900/20">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">🟦 Prioridad 1</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">Alta deseabilidad + Alta factibilidad</p>
                  <ul className="list-disc pl-5 space-y-2 text-blue-700 dark:text-blue-400">
                    <li>Huella digital o código de seguridad al iniciar sesión</li>
                    <li>Chat de ayuda 24hs + Sección de ayuda principal</li>
                    <li>Comprobante inmediato con descarga y envío</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-100 dark:border-green-900/20">
                  <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-4">🟩 Prioridad 2</h3>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                    Alta factibilidad + Media deseabilidad
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-green-700 dark:text-green-400">
                    <li>Mejorar comunicación y estética de la App</li>
                    <li>Mejor onboarding para activación de tarjeta</li>
                    <li>Agregar contacto desde transacción y categorizar</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="space-y-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-lg border border-yellow-100 dark:border-yellow-900/20">
                  <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-4">🟨 Prioridad 3</h3>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-3">
                    Alta deseabilidad + Baja factibilidad
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-yellow-700 dark:text-yellow-400">
                    <li>Escaneo de código QR</li>
                    <li>Mapa con puntos de carga</li>
                    <li>Categorías personalizables por usuario</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg border border-red-100 dark:border-red-900/20">
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4">🟥 Prioridad 4</h3>
                  <p className="text-sm text-red-600 dark:text-red-400 mb-3">Baja deseabilidad + Baja factibilidad</p>
                  <ul className="list-disc pl-5 space-y-2 text-red-700 dark:text-red-400">
                    <li>Login con cuentas de terceros (Facebook, Gmail)</li>
                    <li>Personalización de contactos (iconos, descripciones)</li>
                    <li>Personalización de íconos para categorías</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Arquitectura de Información */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading title="Arquitectura de Información" centered />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <ScrollAnimation>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Card Sorting</h3>
                <p className="text-muted-foreground">
                  Se realizó un card sorting con <strong>9 participantes</strong> que agruparon{" "}
                  <strong>20 tarjetas</strong> en <strong>5 categorías</strong> representando las secciones principales
                  de la App.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-lg border border-orange-100 dark:border-orange-900/20">
                  <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-3">Hallazgos clave</h4>
                  <ul className="list-disc pl-5 space-y-2 text-orange-700 dark:text-orange-400">
                    <li>
                      <strong>42%</strong> ubicaron correctamente las tarjetas
                    </li>
                    <li>
                      <strong>33%</strong> crearon nueva categoría para "Ayuda"
                    </li>
                    <li>
                      <strong>86%</strong> tuvieron problemas con la categoría "Más"
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Tree Testing</h3>
                <p className="text-muted-foreground">
                  Se evaluó la nueva arquitectura con <strong>7 usuarios</strong> realizando tareas clave dentro del
                  árbol de navegación propuesto.
                </p>
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-100 dark:border-green-900/20">
                  <h4 className="font-bold text-green-800 dark:text-green-300 mb-3">Resultados</h4>
                  <ul className="list-disc pl-5 space-y-2 text-green-700 dark:text-green-400">
                    <li>
                      <strong>100%</strong> completaron ambas tareas
                    </li>
                    <li>
                      <strong>64%</strong> lo hicieron sin desviaciones
                    </li>
                    <li>
                      <strong>71%</strong> éxito directo en encontrar soporte
                    </li>
                    <li>
                      <strong>57%</strong> éxito directo en buscar comprobantes
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Conclusiones de Arquitectura</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-green-600">Consenso fuerte en:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Perfil → Datos personales, Configuración</li>
                    <li>Inicio/Finanzas → Análisis, Inversiones, Movimientos</li>
                    <li>Recargas y pagos → Formas de carga, Pagos, QR</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-red-600">Alta dispersión en:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Ayuda (ubicación inconsistente)</li>
                    <li>Categoría "Más" (funcionó como cajón de sastre)</li>
                    <li>Buscadores y funciones secundarias</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Resultados y Conclusiones */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionHeading title="Resultados y Conclusiones" centered />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation>
              <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-100 dark:border-green-900/20">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-4">
                  Resultados para el negocio
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-green-700 dark:text-green-400">
                  <li>
                    Aumento del <strong>NPS score</strong> (recomendación)
                  </li>
                  <li>Mayor número de usuarios suscritos</li>
                  <li>Incremento en transacciones realizadas</li>
                  <li>Mejora en retención de usuarios</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-900/20">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">Beneficios para el usuario</h3>
                <ul className="list-disc pl-5 space-y-2 text-blue-700 dark:text-blue-400">
                  <li>Mayor seguridad y funcionalidades</li>
                  <li>Comprobantes descargables y enviables</li>
                  <li>Mejor experiencia estética</li>
                  <li>Soporte más accesible</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-6">Conclusiones del proyecto</h3>
              <p className="text-muted-foreground mb-4">
                En base a los insights obtenidos de las entrevistas, encuestas y el estudio de contexto, se
                identificaron las principales problemáticas del producto:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-3">
                    <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-bold mb-2">Información</h4>
                  <p className="text-sm text-muted-foreground">Falta de información dentro del home</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-bold mb-2">Seguridad</h4>
                  <p className="text-sm text-muted-foreground">Falta de seguridad percibida</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-bold mb-2">Soporte</h4>
                  <p className="text-sm text-muted-foreground">Dificultad para llegar a la ayuda</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6 hover:text-primary transition-colors">
              ¿Te interesa conocer más sobre mi proceso?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Este caso de estudio muestra mi enfoque metodológico para resolver problemas complejos de UX. Me
              encantaría conversar sobre cómo puedo ayudar en tu próximo proyecto.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="group transition-transform hover:scale-105">
                <Link href="/contact">
                  Conversemos sobre tu proyecto
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transition-transform hover:scale-105 bg-transparent"
              >
                <Link href="/projects/future">Ver proyecto Future</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
