import { Project } from "@/lib/types"

export const futurePrototype: Project = {
  slug: "future-prototype",
  title: "Future – Prototipo UX/UI",
  description: "Aplicación que ayuda a estudiantes a elegir su carrera universitaria y dónde estudiarla, ofreciendo información de carreras, universidades y becas.",
  year: "2024",
  role: "UX Researcher & Designer",
  context: "Académico",
  status: "academic",
  category: "UX/UI Design • App Móvil",
  tags: ["UX Research", "UI Design", "Mobile App", "Orientación Vocacional"],
  duration: "8 semanas",
  externalUrl: "https://www.behance.net/gallery/125441469/Future-Prototipo-UxUi",
  metrics: [
    { label: "Completitud de perfil", value: "+35%", status: "simulated" },
    { label: "Tiempo de decisión", value: "–25%", status: "simulated" },
  ],
  details: {
    overview: {
      problem: "Estudiantes tenían dificultades para comparar opciones universitarias y carreras sin una visión clara de costos, requisitos y oportunidades.",
      objective: "Diseñar una herramienta intuitiva que facilite la exploración de carreras y universidades, reduciendo la incertidumbre en la elección vocacional.",
      contribution: "Realicé investigación de usuario, mapa de experiencia, prototipos de baja y media fidelidad, y validé flujos de selección de carrera.",
      impact: "La propuesta busca aumentar la claridad en la elección vocacional y generar más confianza en estudiantes al explorar opciones educativas.",
    },
    baseline: {
      situation: "Los usuarios navegaban entre múltiples sitios sin un criterio claro para comparar carreras, universidades y becas.",
      users: "Estudiantes de último año de secundaria y recién ingresados que buscan orientación para su próxima etapa académica.",
      constraints: "Tiempo limitado de investigación, necesidad de contenido accesible y un enfoque móvil-first para primeras decisiones.",
    },
    objective: {
      primary: "Crear una experiencia de exploración clara y comprensible para seleccionar carreras universitarias.",
      secondary: [
        "Facilitar la comparación entre universidades y becas.",
        "Reducir la complejidad de la información académica.",
      ],
    },
    baselineMetrics: [
      { label: "Métrica de claridad percibida", value: "No disponible", status: "pending" },
      { label: "Interés inicial en opciones académicas", value: "No disponible", status: "pending" },
    ],
    hypothesis: "Si ofrecía una vista estructurada de carreras y filtros por intereses, los estudiantes sentirían más confianza para explorar opciones académicas.",
    methodology: "Usé entrevistas semi-estructuradas, pruebas de flujo y prototipos interactivos para iterar rápidamente en la experiencia móvil.",
    process: [
      { title: "Investigación inicial", description: "Recopilé insights de estudiantes sobre sus necesidades, miedos e información faltante al elegir una carrera." },
      { title: "Estructura de contenido", description: "Definí las secciones principales: exploración de carreras, universidades, requisitos y ayuda financiera." },
      { title: "Prototipado", description: "Diseñé pantallas de alta fidelidad para la búsqueda y comparación de opciones educativas." },
      { title: "Validación", description: "Revisé el flujo con usuarios para asegurar que los criterios de comparación fueran claros y accionables." },
    ],
    designDecisions: [
      {
        decision: "Mostrar recomendaciones de carrera por intereses",
        reason: "Permite al usuario ver opciones relevantes sin sentirse abrumado por todas las alternativas.",
        alternative: "Presentar todas las carreras en un listado plano, lo que habría aumentado la carga cognitiva.",
      },
      {
        decision: "Incluir íconos y descripciones breves en tarjetas de carrera",
        reason: "Ayuda a los usuarios a entender rápidamente cada opción sin leer textos largos.",
        alternative: "Usar solo texto y filtros avanzados, que habría ralentizado el recorrido de descubrimiento.",
      },
    ],
    results: {
      type: "expected",
      summary: "El prototipo está listo para pruebas cuantitativas y se espera que aumente la claridad percibida y el interés en carreras STEM.",
      expectedMetrics: [
        { label: "Nivel de claridad percibida", value: "+25%", status: "simulated" },
        { label: "Interés en carreras STEM", value: "+15%", status: "simulated" },
      ],
    },
    learnings: [
      "La orientación vocacional funciona mejor cuando los usuarios comparan opciones en paralelo.",
      "Menos contenido textual y más resultados directos aumentan la comprensión.",
    ],
    nextSteps: [
      "Medir la percepción de claridad con usuarios reales.",
      "Iterar en la sección de filtros según tendencias de uso.",
    ],
  },
}
