import { Project } from "@/lib/types"

export const consorcioMadrid: Project = {
  slug: "consorcio-madrid",
  title: "Propuesta para el Consorcio de Transportes de Madrid",
  description: "App de transporte público que unifica horarios y rutas en una sola interfaz.",
  year: "2023",
  role: "UX/UI Designer",
  context: "Académico",
  status: "academic",
  category: "UX/UI Design · App Móvil",
  tags: ["UX Research", "UI Design", "Mobile App"],
  duration: "6 semanas",
  externalUrl: "https://www.behance.net/gallery/184223321/Propuesta-para-el-Consorcio-de-Transportes-de-Madrid",
  metrics: [
    { label: "Satisfacción usuario", value: "+25%", status: "simulated" },
    { label: "Tiempo de búsqueda", value: "–40%", status: "simulated" },
  ],
  details: {
    overview: {
      problem: "Los viajeros necesitaban una vista única de rutas y horarios sin cambiar entre múltiples apps.",
      objective: "Diseñar una app que facilite la planificación de viajes en transporte público en Madrid.",
      contribution: "Entregué una interfaz de consulta de rutas y un flujo de seguimiento en tiempo real.",
      impact: "El prototipo apunta a reducir la complejidad de la planificación de viajes diarios.",
    },
    baseline: {
      situation: "La experiencia de transporte público estaba fragmentada entre webs y apps sin coordinación visual.",
      users: "Personas locales y turistas que usan metro, autobús y tren dentro de Madrid.",
      constraints: "Necesidad de datos claros y accesibles en movilidad, preferencia por experiencias móviles sencillas.",
    },
    objective: {
      primary: "Unificar acceso a rutas, horarios y alertas de transporte en una sola aplicación.",
      secondary: ["Reducir el esfuerzo de planificación diaria.", "Ofrecer información clara para usuarios en movimiento."],
    },
    baselineMetrics: [
      { label: "Tiempo de búsqueda de ruta", value: "No disponible", status: "pending" },
      { label: "Confusión en transferencias", value: "No disponible", status: "pending" },
    ],
    hypothesis: "Si unificamos los datos en una sola app, los usuarios perderán menos tiempo buscando combinaciones de transporte.",
    methodology: "Usé análisis de tareas y creación de user journeys para priorizar la información más relevante para el viaje." ,
    process: [
      { title: "Análisis de usuarios", description: "Identifiqué comportamientos clave de viajeros diarios y objetivos de uso rápido." },
      { title: "Arquitectura de la información", description: "Organizamos rutas, horarios y alertas en un sistema claro y móvil-first." },
      { title: "Interacción en movimiento", description: "Diseñé pantallas que funcionan con una sola mano y con retroalimentación inmediata." },
    ],
    designDecisions: [
      {
        decision: "Priorizar la búsqueda de rutas desde el primer paso",
        reason: "Los usuarios necesitan respuestas rápidas en lugar de múltiples pantallas introductorias.",
        alternative: "Crear un onboarding extenso, lo que habría aumentado la fricción inicial.",
      },
    ],
    results: {
      type: "pending",
      summary: "Caso en construcción. Documentaré métricas de viaje y uso en una próxima actualización.",
    },
    learnings: ["Los viajeros valoran los resultados inmediatos más que las explicaciones largas."],
    nextSteps: ["Validar el prototipo con usuarios en situaciones reales de viaje."],
  },
}
