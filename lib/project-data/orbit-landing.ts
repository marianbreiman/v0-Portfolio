import { Project } from "@/lib/types"

export const orbitLanding: Project = {
  slug: "orbit-landing",
  title: "Diseño para Orbit Landing Web + App",
  description: "Landing corporativa orientada al reclutamiento: 'Contratá más, contratá mejor'.",
  year: "2023",
  role: "UX/UI Designer",
  context: "Profesional",
  status: "external",
  category: "Landing web · UX/UI",
  tags: ["Research", "UI Design", "Landing page"],
  duration: "4 semanas",
  externalUrl: "https://www.behance.net/gallery/184224897/Diseno-para-Orbit-Landing-Web-App",
  metrics: [
    { label: "Conversión esperada", value: "+15%", status: "simulated" },
    { label: "Tiempo de scroll", value: "–30%", status: "simulated" },
  ],
  details: {
    overview: {
      problem: "Necesitaban una landing que reflejara profesionalismo y ayudara a atraer talento con claridad.",
      objective: "Construir una experiencia que comunique la propuesta de valor de Orbit y facilite la conversión de potenciales candidatos.",
      contribution: "Diseñé una estructura de contenido clara y una interfaz moderna que aporta confianza en la marca.",
      impact: "Se espera que una landing más clara mejore la percepción del reclutamiento y aumente el interés de candidatos.",
    },
    baseline: {
      situation: "La landing previa no destacaba los beneficios de trabajar en Orbit ni ofrecía un recorrido de lectura fluido.",
      users: "Personas en búsqueda de empleo con interés en tecnología y hiring managers que evalúan la marca empleadora.",
      constraints: "Adaptar el diseño a la identidad visual de Orbit y mantener un mensaje sencillo para captar atención rápida.",
    },
    objective: {
      primary: "Mejorar la claridad del mensaje y los conversiones de candidatos.",
      secondary: ["Establecer jerarquía visual clara.", "Reducir la carga cognitiva en el hero y las secciones clave."],
    },
    baselineMetrics: [
      { label: "Tasa de rebote estimada", value: "No disponible", status: "pending" },
      { label: "Duración de visita", value: "No disponible", status: "pending" },
    ],
    hypothesis: "Si la propuesta de valor se presenta con claridad y el diseño refleja profesionalismo, aumentará el interés de los candidatos.",
    methodology: "Me apoyé en principios de copywriting y diseño visual para priorizar la información más relevante en la landing.",
    process: [
      { title: "Definición de hero", description: "Enfocamos el mensaje principal en contratar talento y en los beneficios clave del proyecto." },
      { title: "Estructura de contenido", description: "Diseñamos secciones de casos de uso, valores y llamado a la acción para mantener el recorrido." },
      { title: "Diseño visual", description: "Ajustamos tipografía, colores y espaciado para dar solidez sin recargar la página." },
    ],
    designDecisions: [
      {
        decision: "Usar un hero directo con tagline fuerte",
        reason: "Ayuda a entender rápidamente de qué trata el sitio y para quién es.",
        alternative: "Hacer un hero más conceptual, lo que habría diluido el mensaje de reclutamiento.",
      },
    ],
    results: {
      type: "pending",
      summary: "Caso en construcción. En este proyecto se documentará el proceso, decisiones y métricas en una futura actualización.",
    },
    learnings: ["Claridad y enfoque en el hero son clave para landing pages corporativas."],
    nextSteps: ["Recopilar métricas reales de tráfico y conversión tras lanzamiento."],
  },
}
