import { Project } from "@/lib/types"

export const alleataRedesign: Project = {
  slug: "alleata-redesign",
  title: "Rediseño para alleata (UX/UI Challenge)",
  description: "Rediseño de la plataforma alleata para mejorar la experiencia de usuarios en el acceso a servicios.",
  year: "2023",
  role: "UX/UI Designer",
  context: "Académico",
  status: "academic",
  category: "UX/UI Design · Web App",
  tags: ["Redesign", "UX Research", "UI Design"],
  duration: "5 semanas",
  externalUrl: "https://www.behance.net/gallery/184225635/Rediseno-para-alleata",
  metrics: [
    { label: "Engagement", value: "+20%", status: "simulated" },
    { label: "Tasa de conversión", value: "+10%", status: "simulated" },
  ],
  details: {
    overview: {
      problem: "La plataforma no tenía una experiencia clara para que los usuarios descubrieran servicios y procesos clave.",
      objective: "Mejorar la usabilidad del panel principal y la visualización de servicios disponibles.",
      contribution: "Rediseñé la estructura de navegación y las tarjetas de servicio con énfasis en accesibilidad.",
      impact: "La propuesta busca facilitar la adopción de la plataforma y reducir la fricción en tareas recurrentes.",
    },
    baseline: {
      situation: "Los usuarios perdían tiempo buscando efectos de servicio y no siempre entendían el estado de sus solicitudes.",
      users: "Personas que usan alleata para gestionar recursos, servicios y contrataciones en línea.",
      constraints: "Mantener un diseño coherente con la identidad existente y mejorar la jerarquía visual sin reescribir la plataforma completa.",
    },
    objective: {
      primary: "Crear un panel más orientado a la acción con accesos directos claros.",
      secondary: ["Reducir el tiempo de búsqueda de servicios", "Mejorar la lectura de estados y alertas."],
    },
    baselineMetrics: [
      { label: "Tasa de interacción con el panel", value: "No disponible", status: "pending" },
      { label: "Errores de navegación", value: "No disponible", status: "pending" },
    ],
    hypothesis: "Si simplificamos las opciones principales y mostramos los estados de servicio con claridad, los usuarios completarán tareas más rápido.",
    methodology: "Realicé pruebas de usabilidad con prototipos y ajusté los componentes clave según los recorridos más frecuentes.",
    process: [
      { title: "Mapeo de tareas", description: "Definí las acciones más importantes para los usuarios al entrar al dashboard." },
      { title: "Rediseño de tarjetas", description: "Reformulé las tarjetas de servicio para que fueran más descriptivas y fáciles de escanear." },
      { title: "Revisión de estados", description: "Mejoré la comunicación de estados de envío, aprobación y seguimiento." },
    ],
    designDecisions: [
      {
        decision: "Ordenar las acciones por prioridad de usuario en lugar de categoría técnica",
        reason: "Facilita que el usuario encuentre lo más relevante para su objetivo inmediato.",
        alternative: "Mantener la clasificación técnica original, lo que habría aumentado la complejidad inicial.",
      },
    ],
    results: {
      type: "pending",
      summary: "Caso en construcción. Se espera documentar métricas reales en una futura fase de pruebas.",
    },
    learnings: ["Los dashboards requieren jerarquía clara y accesos directos a las acciones más comunes."],
    nextSteps: ["Probar el rediseño con usuarios reales y medir reducción de clicks."],
  },
}
