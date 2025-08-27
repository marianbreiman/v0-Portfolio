import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowLeft, ArrowRight, Users, Search, Lightbulb, Layers, Zap, FileText } from "lucide-react"

export default function FutureProjectPage() {
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
                  Caso de Estudio UX/UI
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Proyecto{" "}
                  <span className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                    Future
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Camina hacia el futuro: averigua qué te gustaría estudiar y dónde hacerlo, infórmate sobre varias
                  carreras profesionales, diferentes universidades y programas de becas ¡Todo en un mismo lugar!
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200} className="transition-all duration-500 hover:scale-105">
              <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center group">
                <div className="text-center p-8 transition-all duration-500 group-hover:scale-110">
                  <h2 className="text-3xl font-bold text-blue-600 mb-4 transition-colors group-hover:text-blue-700">
                    Future
                  </h2>
                  <p className="text-lg text-blue-800 dark:text-blue-300 transition-colors group-hover:text-blue-900 dark:group-hover:text-blue-200">
                    Camina hacia el futuro
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">PROYECTO</h3>
              <p className="text-xl font-semibold">Future App</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">ROL</h3>
              <p className="text-xl font-semibold">UX/UI Designer</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">DURACIÓN</h3>
              <p className="text-xl font-semibold">8 semanas</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Sobre el proyecto</h2>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p>
                Future es una aplicación diseñada para ayudar a estudiantes que están terminando la secundaria o a
                personas que desean cambiar de carrera a encontrar su camino profesional, proporcionando información
                sobre carreras universitarias, instituciones educativas y programas de becas.
              </p>
              <p>
                A través de herramientas como tests vocacionales, búsqueda de carreras y contacto directo con
                universidades, Future busca simplificar el proceso de elección académica y reducir la ansiedad asociada
                con esta importante decisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problemática */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Problemática</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  La etapa final del colegio secundario representa un contexto académico y social muy propenso al
                  estrés, la ansiedad y la incertidumbre. Los estudiantes que se encuentran en esta situación estresante
                  terminan frente a las preguntas: ¿Qué estudiar, qué camino seguir, cómo realizarlo y en dónde?
                </p>
                <p className="text-lg text-muted-foreground">
                  Hoy en día los jóvenes no reciben una gran orientación y/o acompañamiento a la hora de elegir una
                  carrera universitaria que, por lo general, genera miedos y temores además de ser agobiante para el
                  estudiante.
                </p>
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg border border-red-100 dark:border-red-900/20">
                  <p className="text-red-800 dark:text-red-300 font-medium">
                    ¿Sabías que uno de cada tres estudiantes nunca llega a finalizar la carrera que comienza y en
                    determinadas universidades esta cifra afecta a uno de cada dos estudiantes?
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Lightbulb className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">Objetivo</h3>
                  <p className="mt-2 text-blue-700 dark:text-blue-400">
                    Generar una herramienta en donde elegir una carrera universitaria y en donde hacerlo no resulte en
                    un proceso difícil y tedioso, sino que ayude al individuo al encontrar lo que lo apasiona y lo
                    informe acerca del tema.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Solución */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Solución</h2>
          </ScrollAnimation>

          <div className="mb-12">
            <ScrollAnimation>
              <p className="text-lg text-muted-foreground mb-8">
                Mediante Future el usuario podrá investigar e informarse acerca de diferentes carreras universitarias
                y/o cursos terciarios de acuerdo a lo que le interese, y de acuerdo con su elección, diferentes
                alternativas de donde estudiar y por qué. De ser posible también se pretende que esta app informe al
                usuario de la salida laboral de la carrera universitaria de su elección.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Test vocacional</h3>
                <p className="text-muted-foreground">
                  Future permite al usuario realizar un test vocacional para aquellas personas que se encuentren en la
                  duda de su futuro, ayudándoles a descubrir sus intereses y aptitudes.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="bg-card rounded-xl p-6 border shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                  <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Búsqueda de carreras</h3>
                <p className="text-muted-foreground">
                  Los usuarios podrán buscar todo tipo de carreras universitarias en base a sus gustos y/o por simple
                  curiosidad de saber de qué se trata alguna carrera, con información detallada sobre cada una.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Universidades y contacto</h3>
                <p className="text-muted-foreground">
                  La aplicación permitirá que usuarios y universidades se pongan en contacto para que los usuarios
                  puedan solicitarles cualquier tipo de información extra o hacerles preguntas sobre programas
                  académicos y becas.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Arquetipos de personas</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Julieta Barea</h3>
                    <p className="text-muted-foreground">Estudiante de secundaria, 18 años</p>
                    <p className="text-muted-foreground">Belgrano, CABA</p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg mb-6">
                  <p className="text-purple-800 dark:text-purple-300 italic">
                    "Me siento agobiada. Me gustaría saber qué quiero estudiar y en dónde podría hacerlo."
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Bio</h4>
                    <p className="text-muted-foreground">
                      Julieta es una persona extrovertida, no le gustan las cosas tradicionales. En su futuro quiere que
                      la imaginación y creatividad formen parte de su trabajo. Es fanática del diseño, las artes y el
                      cine. Además de esto, le interesa mantenerse al corriente de las nuevas tendencias de moda y de
                      diseño.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Objetivos y metas</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Quiere conocer sus capacidades y gustos.</li>
                      <li>Quiere encontrar su carrera perfecta.</li>
                      <li>Quiere poder ponerse en contacto con las universidades y obtener más información.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Frustraciones</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Tiene miedo y pánico de equivocarse al escoger su carrera.</li>
                      <li>Considera que si se equivoca su vida no será feliz.</li>
                      <li>Posee muy poca información de carreras universitarias, en dónde estudiarlas y por qué.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sofía Rodríguez</h3>
                    <p className="text-muted-foreground">Abogada, 26 años</p>
                    <p className="text-muted-foreground">Almagro, CABA</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg mb-6">
                  <p className="text-blue-800 dark:text-blue-300 italic">
                    "Me siento encerrada, quiero volver a explorar el mundo y divertirme."
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Bio</h4>
                    <p className="text-muted-foreground">
                      Sofía es una persona reservada que está cansada de su trabajo. Ella lleva 7 años trabajando en la
                      misma empresa y se siente estancada. Ella sueña con poder estudiar marketing digital pero aún no
                      sabe en qué universidad.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Objetivos y metas</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>Quiere expandir y explorar sus capacidades y gustos.</li>
                      <li>Quiere encontrar una nueva carrera que la motive.</li>
                      <li>Encontrar una buena universidad que posea becas.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">Frustraciones</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      <li>
                        Tiene miedo y pánico de escoger una nueva carrera que no tenga que ver con lo que ya estuvo
                        haciendo en el pasado.
                      </li>
                      <li>Está viviendo una vida en la que no se siente feliz y no le gusta su trabajo.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Benchmark Competitivo */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Benchmark Competitivo</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Comparación entre plataformas similares para orientar la elección de carrera.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4">¿Qué estudiar?</h3>
                <p className="text-muted-foreground mb-6">
                  Plataforma diseñada para ayudarte a aclarar tus intereses, explorar las diferentes alternativas de
                  carrera disponibles y conocer tu perfil vocacional.
                </p>

                <div>
                  <h4 className="font-bold mb-2">Fortalezas</h4>
                  <ul className="list-disc pl-5 text-green-600 dark:text-green-400 mb-4">
                    <li>
                      Mediante el test vocacional, le brinda al usuario información relevante de sus gustos y
                      habilidades.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2">Debilidades</h4>
                  <ul className="list-disc pl-5 text-red-600 dark:text-red-400">
                    <li>No posee buscador.</li>
                    <li>
                      Le brinda poca información al usuario y para más contenido lo manda por fuera de la aplicación.
                    </li>
                    <li>Solo está orientado a carreras que ofrece la Universidad del Norte.</li>
                    <li>
                      No permite ordenar los resultados según las preferencias del usuario, solo mediante el test
                      vocacional.
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="bg-card rounded-xl p-6 border shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4">InterUniversidades</h3>
                <p className="text-muted-foreground mb-6">
                  Motor de búsqueda para informarse de experiencias de otros estudiantes. También se pueden encontrar
                  carreras universitarias y, en caso de no estar seguro, realizar un test vocacional.
                </p>

                <div>
                  <h4 className="font-bold mb-2">Fortalezas</h4>
                  <ul className="list-disc pl-5 text-green-600 dark:text-green-400 mb-4">
                    <li>Búsqueda rápida con gran variedad de filtros.</li>
                    <li>Permite ordenar los resultados, dando al usuario una mejor experiencia de búsqueda.</li>
                    <li>
                      Mantiene una estética simple entre sus pantallas enfocándose principalmente en los datos para el
                      usuario.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2">Debilidades</h4>
                  <ul className="list-disc pl-5 text-red-600 dark:text-red-400">
                    <li>Comunicación desorganizada.</li>
                    <li>Navegación confusa.</li>
                    <li>Saturación de información poco relevante.</li>
                    <li>Saturación de iconos.</li>
                    <li>Mal funcionamiento dentro de la app.</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4">Ponte en carrera</h3>
                <p className="text-muted-foreground mb-6">
                  El app Ponte en Carrera brinda información confiable y gratuita sobre la oferta formativa y demanda
                  laboral para la mejor toma de decisiones de los jóvenes respecto a su futuro profesional.
                </p>

                <div>
                  <h4 className="font-bold mb-2">Fortalezas</h4>
                  <ul className="list-disc pl-5 text-green-600 dark:text-green-400 mb-4">
                    <li>Contiene información detallada de cada carrera y dónde estudiarla.</li>
                    <li>Posee un buscador detallado con gran variedad de filtros.</li>
                    <li>Su diseño es claro y comprensible, así como la información que maneja.</li>
                    <li>Comunicación clara y navegación intuitiva.</li>
                  </ul>

                  <h4 className="font-bold mb-2">Debilidades</h4>
                  <ul className="list-disc pl-5 text-red-600 dark:text-red-400">
                    <li>Solo está orientada a universidades en Perú.</li>
                    <li>Mal funcionamiento dentro de la app.</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-6">Evaluación comparativa</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Categoría</th>
                      <th className="text-center py-2 px-4">¿Qué Estudiar?</th>
                      <th className="text-center py-2 px-4">InterUniversidades</th>
                      <th className="text-center py-2 px-4">Ponte en Carrera</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Búsqueda</td>
                      <td className="text-center py-2 px-4">😕</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="text-center py-2 px-4">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Navegación</td>
                      <td className="text-center py-2 px-4">😐</td>
                      <td className="text-center py-2 px-4">😕</td>
                      <td className="text-center py-2 px-4">✅</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-medium">Comunicación</td>
                      <td className="text-center py-2 px-4">❌</td>
                      <td className="text-center py-2 px-4">❌</td>
                      <td className="text-center py-2 px-4">✅</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-medium">Diseño</td>
                      <td className="text-center py-2 px-4">❌</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="text-center py-2 px-4">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Card Sorting */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Card Sorting</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <ScrollAnimation>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Card Sorting híbrido</h3>
                <p className="text-muted-foreground">
                  Para este estudio se buscaron participantes que estuviesen cursando el último año de secundaria. Se
                  trató de orientarlos a través de un card sorting híbrido donde había categorías predefinidas, pero
                  también se les dio la posibilidad de que generaran nuevas categorías.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">Participantes</span>
                    <span className="text-2xl font-bold text-blue-600">10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Tarjetas</span>
                    <span className="text-2xl font-bold text-blue-600">14</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-4">Agrupaciones identificadas</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Perfil</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                    <span className="font-bold">82%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Universidad</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <span className="font-bold">90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Test</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <span className="font-bold">80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Economía</span>
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "76%" }}></div>
                    </div>
                    <span className="font-bold">76%</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Conclusiones card sorting</h3>
              <p className="text-muted-foreground mb-4">
                En conclusión, ningún participante decidió crear una categoría para ubicar alguna tarjeta, por lo cual
                estas eran de fácil entendimiento y los participantes no tuvieron problema en ubicarlas dentro de las
                categorías ya preestablecidas.
              </p>
              <p className="text-muted-foreground mb-4">
                Entre el 75% y el 85% coincidieron en su agrupación. Sin embargo, se toma en cuenta añadir más
                información en las tarjetas Aptitudes y Becas ya que la minoría de usuarios no coincidían en las
                categorías que se esperaba.
              </p>
              <p className="text-muted-foreground">También se considera añadir una sección de reseñas.</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Arquitectura de la información */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Arquitectura de la información</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">🏠 HOME</h3>
                <p className="text-muted-foreground">
                  Pantalla principal de la aplicación con acceso a todas las secciones principales.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">📂 PERFIL</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Datos:</span> Nombre, Apellido, Mail
                  </li>
                  <li>
                    <span className="font-medium">Preferencias:</span> Gustos e intereses
                  </li>
                  <li>
                    <span className="font-medium">Favoritos:</span> Carreras favoritas, Universidades favoritas
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">🧠 TEST</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Test vocacional:</span> Test de orientación vocacional, Inteligencia,
                    gustos y habilidades
                  </li>
                  <li>
                    <span className="font-medium">Aptitudes:</span> Test de orientación vocacional, Inteligencia, gustos
                    y habilidades
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">🎓 UNIVERSIDADES</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Universidad pública</li>
                  <li>Universidad privada</li>
                  <li>Carreras profesionales</li>
                  <li>Terciarios</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold mb-4">💰 ECONOMÍA</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium">Becas:</span> Repertorio de becas, Acceso directo a links de
                    universidades para becas
                  </li>
                  <li>Promociones</li>
                  <li>Programa de ayuda financiera</li>
                  <li>Reseñas</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Wireframes</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Evolución de los wireframes desde baja hasta alta fidelidad.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-4">Baja fidelidad</h3>
                <div className="aspect-[9/16] relative mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {/* Placeholder for wireframe image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Primeros bocetos para definir la estructura básica de la aplicación y la ubicación de los elementos
                  principales.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-4">Media fidelidad</h3>
                <div className="aspect-[9/16] relative mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {/* Placeholder for wireframe image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Refinamiento de la estructura con mayor detalle en los componentes y la navegación entre pantallas.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-4">Alta fidelidad</h3>
                <div className="aspect-[9/16] relative mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {/* Placeholder for wireframe image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Diseño final con todos los elementos visuales, tipografía, colores y componentes de interfaz
                  definidos.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pruebas de Usabilidad */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Pruebas de Usabilidad</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <ScrollAnimation>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Objetivo</h3>
                <p className="text-muted-foreground">
                  Comprobar que la estructura y diseño de la App permitan realizar las acciones requeridas, poder
                  realizar un test vocacional y obtener un resultado de dicho test, y por último, haya diferentes
                  carreras con información relevante para el usuario.
                </p>

                <h3 className="text-2xl font-bold">Tareas</h3>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Registro e iniciar sesión</li>
                  <li>Realizar el test vocacional</li>
                  <li>Encontrar la carrera que desees hacer</li>
                  <li>Entrar al perfil y sus ajustes</li>
                </ol>

                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Guion</h4>
                  <p className="text-blue-700 dark:text-blue-400">
                    Estás por terminar la secundaria y las inseguridades se apoderan de vos, estás estresado por no
                    saber qué camino tomar hacia tu futuro. Te contaron que esta App te ayuda a resolver inquietudes e
                    informarte de diferentes carreras y universidades para tomar la mejor elección en base a tus gustos
                    e intereses.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Tabla de resultados</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-2">Tarea</th>
                        <th className="text-center py-2 px-2">Usuario 1</th>
                        <th className="text-center py-2 px-2">Usuario 2</th>
                        <th className="text-center py-2 px-2">Usuario 3</th>
                        <th className="text-center py-2 px-2">Usuario 4</th>
                        <th className="text-center py-2 px-2">Usuario 5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-2 font-medium">Registro / Iniciar sesión</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-2 font-medium">Realizar test vocacional</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-2 font-medium">Encontrar la carrera</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">❌</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2 font-medium">Entrar al perfil y ajustes</td>
                        <td className="text-center py-2 px-2">🟡</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                        <td className="text-center py-2 px-2">✅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>✅ Realizó la tarea</p>
                  <p>🟡 Realizó la tarea con dificultad</p>
                  <p>❌ No logró realizar la tarea</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation>
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <h3 className="text-xl font-bold mb-6">Resumen de los resultados</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-4">✔️ Lo que funcionó</h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Todos los usuarios "pudieron" iniciar sesión y registrarse.</li>
                    <li>
                      Les pareció útil la aplicación a pesar de poder encontrar la información en internet por separado.
                    </li>
                    <li>
                      No tuvieron complicaciones a la hora de navegar e interactuar con los botones y la navegación en
                      general.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-4">❌ Lo que no funcionó</h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Aún no se encuentran disponibles todas las carreras, por lo cual hubo una persona en el testeo que
                      no pudo hallar la información de la carrera de su interés.
                    </li>
                    <li>Falta información de las distintas universidades y sus planes de estudio.</li>
                    <li>El ícono de ajustes de perfil fue confuso para una persona.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-4">💬 Recomendaciones</h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Al ícono de ajustes se planea darle una comunicación más simple.</li>
                    <li>
                      La sección de ayuda financiera se reemplazará por un "muro" donde los usuarios puedan ver
                      opiniones de carreras y/o universidades.
                    </li>
                    <li>Al test vocacional se le agregarán más preguntas específicas a pedido de los usuarios.</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Evaluación Heurística */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Evaluación Heurística</h2>
            <p className="text-lg text-muted-foreground mb-10">
              A continuación, se evaluó la aplicación basada en las 10 heurísticas de usabilidad de Jakob Nielsen. El
              análisis muestra que la App cumple con la mayoría de los principios, excepto por el último.
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">#</th>
                      <th className="text-left py-2 px-4">Heurística</th>
                      <th className="text-center py-2 px-4">Cumplimiento</th>
                      <th className="text-left py-2 px-4">Observaciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">1</td>
                      <td className="py-2 px-4 font-medium">Visibilidad del estado del sistema</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        La App informa al usuario sobre los pasos realizados, especialmente durante el test y la
                        navegación.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">2</td>
                      <td className="py-2 px-4 font-medium">Concordancia entre el sistema y el mundo real</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        El lenguaje y las categorías (ej. carreras, universidades) están adaptados al usuario
                        secundario.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">3</td>
                      <td className="py-2 px-4 font-medium">Control y libertad del usuario</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        El usuario puede retroceder, salir o cambiar de sección sin bloqueos.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">4</td>
                      <td className="py-2 px-4 font-medium">Consistencia y estándares</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        Íconos, botones y flujos son consistentes en todas las pantallas.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">5</td>
                      <td className="py-2 px-4 font-medium">Prevención de errores</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        No se detectaron flujos que lleven a errores inesperados. La navegación está bien guiada.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">6</td>
                      <td className="py-2 px-4 font-medium">Reconocimiento antes que recuerdo</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        Las opciones están visibles, no requiere recordar información de una pantalla a otra.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">7</td>
                      <td className="py-2 px-4 font-medium">Flexibilidad y eficiencia de uso</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        Permite a distintos tipos de usuarios (decididos o indecisos) encontrar caminos útiles.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">8</td>
                      <td className="py-2 px-4 font-medium">Estética y diseño minimalista</td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        Diseño limpio, enfocado en contenido y tareas clave.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">9</td>
                      <td className="py-2 px-4 font-medium">
                        Ayudar a los usuarios a reconocer, diagnosticar y recuperarse de errores
                      </td>
                      <td className="text-center py-2 px-4">✅</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        Mensajes de error claros (por ejemplo, en el login) y posibilidad de corrección.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">10</td>
                      <td className="py-2 px-4 font-medium">Ayuda y documentación</td>
                      <td className="text-center py-2 px-4">❌</td>
                      <td className="py-2 px-4 text-muted-foreground">
                        No hay una sección clara de ayuda o tutorial que oriente al usuario ante dudas.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* UI Kit */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">UI Kit</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Elementos de diseño utilizados en la aplicación, basados en un moodboard con palabras clave: Relajación,
              Armonía, Tranquilidad, Pacífico.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Paleta de colores</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="h-16 rounded-lg bg-blue-600 mb-2"></div>
                    <p className="text-xs text-center text-muted-foreground">#2563EB</p>
                  </div>
                  <div>
                    <div className="h-16 rounded-lg bg-blue-400 mb-2"></div>
                    <p className="text-xs text-center text-muted-foreground">#60A5FA</p>
                  </div>
                  <div>
                    <div className="h-16 rounded-lg bg-teal-500 mb-2"></div>
                    <p className="text-xs text-center text-muted-foreground">#14B8A6</p>
                  </div>
                  <div>
                    <div className="h-16 rounded-lg bg-gray-800 mb-2"></div>
                    <p className="text-xs text-center text-muted-foreground">#1F2937</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Tipografía</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold mb-1">Títulos</p>
                    <p className="text-2xl">Poppins Bold</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Subtítulos</p>
                    <p className="text-xl">Poppins SemiBold</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Cuerpo</p>
                    <p className="text-base">Poppins Regular</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Componentes</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold mb-2">Botones</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Primario</div>
                      <div className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm">
                        Secundario
                      </div>
                      <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">Terciario</div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Cards</p>
                    <div className="bg-white border rounded-lg p-3 shadow-sm">
                      <p className="text-sm font-medium">Título de tarjeta</p>
                      <p className="text-xs text-gray-500">Contenido de ejemplo</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-6">Iconografía</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-muted-foreground">Perfil</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-muted-foreground">Test</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Search className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-muted-foreground">Buscar</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-muted-foreground">Acción</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Elevator Pitch */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Elevator Pitch</h2>
          </ScrollAnimation>

          <div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-xl border border-blue-100 dark:border-blue-900/20">
            <ScrollAnimation>
              <p className="text-xl text-blue-800 dark:text-blue-300 italic mb-6">
                ¿Sabías que uno de cada tres estudiantes nunca llega a finalizar la carrera que comienza y en
                determinadas universidades esta cifra afecta a uno de cada dos estudiantes?
              </p>
              <p className="text-lg text-blue-700 dark:text-blue-400 mb-4">
                Esto ocurre principalmente por la falta de información, no valorar todas las alternativas posibles y/o
                estudiar por estudiar.
              </p>
              <p className="text-lg text-blue-700 dark:text-blue-400 mb-4">
                Hola, mi nombre es Mariano Breiman y es por esto por lo que he creado mi App{" "}
                <span className="font-bold">Future</span>.
              </p>
              <p className="text-lg text-blue-700 dark:text-blue-400 mb-4">
                <span className="font-bold">Future</span> le permite al usuario descubrir sus gustos y, en base a esto,
                elegir una carrera de grado y una universidad donde estudiarla. De esta manera las personas podrán
                informarse y valorar cada opción antes de tomar una decisión.
              </p>
              <p className="text-lg text-blue-700 dark:text-blue-400 font-bold">
                Caminemos juntos hacia el futuro, conoce <span className="font-bold">Future</span>.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-6 hover:text-primary transition-colors">
              ¿Interesado en ver más proyectos?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Explora mi portfolio completo para descubrir más casos de estudio y proyectos de diseño UX/UI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="group transition-transform hover:scale-105">
                <Link href="/projects">
                  Ver más proyectos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
                <Link href="/contact">Contacto</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
