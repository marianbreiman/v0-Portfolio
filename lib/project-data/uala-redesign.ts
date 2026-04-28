import { Project } from "@/lib/types"

export const ualaRedesign: Project = {
  slug: "uala-redesign",
  title: "Rediseño UX/UI Ualá",
  description: "Mejora la experiencia de usuario de la app de billetera digital Ualá, con foco en seguridad, soporte y agilidad en pagos.",
  year: "2023",
  role: "UX Researcher & Designer",
  context: "Académico",
  status: "academic",
  category: "UX Research & Design · Fintech",
  tags: ["UX Research", "UI Design", "Fintech", "Seguridad"],
  duration: "6 semanas",
  externalUrl: "https://www.behance.net/gallery/133580041/Rediseno-UXUI-Uala",
  metrics: [
    { label: "Seguridad percibida", value: "+20%", status: "simulated" },
    { label: "Tiempo de pago", value: "–30%", status: "simulated" },
  ],
  details: {
    overview: {
      problem: "Los usuarios de Ualá reportaban incertidumbre para pagar servicios y no estaban seguros de que sus datos estuvieran protegidos.",
      objective: "Diseñar un flujo de pagos más claro y confiable, con información visible de seguridad y soporte accesible.",
      contribution: "Realicé análisis de flujos existentes, benchmarks de apps fintech y rediseñé pantallas clave de pago y soporte.",
      impact: "La propuesta busca reducir errores en pagos y aumentar la confianza del usuario en cada transacción.",
    },
    baseline: {
      situation: "La experiencia de pago era poco visible, con botones y mensajes que no comunicaban claramente el estado de la operación.",
      users: "Clientes actuales de Ualá que usan la app para pagos de servicios, recargas y transferencias.",
      constraints: "Mantener consistencia con la identidad Ualá, respetar patrones de accesibilidad y proponer soluciones implementables.",
    },
    objective: {
      primary: "Reducir el tiempo que los usuarios tardan en completar un pago.",
      secondary: [
        "Aumentar la confianza percibida en el proceso de pago.",
        "Mejorar el acceso a soporte y comprobantes.",
      ],
    },
    baselineMetrics: [
      { label: "Tasa de abandono en pago", value: "No disponible", status: "pending" },
      { label: "Confianza percibida", value: "No disponible", status: "pending" },
    ],
    hypothesis: "Si simplificaba los pasos y hacía más visibles las confirmaciones de seguridad, los usuarios completarían pagos más rápido y con menos dudas.",
    methodology: "Validé flujos con micro-tests de usabilidad y revisé benchmarks de apps financieras para optimizar jerarquía y legibilidad.",
    process: [
      { title: "Análisis del flujo actual", description: "Identifiqué puntos de fricción en el proceso de pago y relevé datos de soporte sobre errores recurrentes." },
      { title: "Benchmark y patrones", description: "Estudié soluciones de apps fintech para fortalecer la confianza y claridad en cada paso." },
      { title: "Propuesta de interacción", description: "Rediseñé la pantalla de pago, la confirmación y el acceso rápido a ayuda durante la transacción." },
      { title: "Iteración visual", description: "Ajusté tipografía, iconografía y estados para que el flujo se sintiera más seguro y predecible." },
    ],
    designDecisions: [
      {
        decision: "Incluir alertas de seguridad junto al monto y los datos del servicio",
        reason: "Para que el usuario tenga mayor certeza antes de confirmar la operación.",
        alternative: "Mostrar la seguridad solo en el footer, lo que habría reducido su visibilidad.",
      },
      {
        decision: "Usar botones claros para continuar y cancelar",
        reason: "Mejora la rapidez en la toma de decisiones y evita clics accidentales.",
        alternative: "Dejar un solo botón principal, lo que habría generado más dudas al usuario.",
      },
    ],
    results: {
      type: "expected",
      summary: "El rediseño propone mejoras de eficiencia y confianza, con métricas de impacto esperadas tras una validación de prototipo.",
      expectedMetrics: [
        { label: "Reducción del tiempo promedio para pagar un servicio", value: "–30%", status: "simulated" },
        { label: "Aumento de la confianza percibida", value: "+20%", status: "simulated" },
      ],
    },
    learnings: [
      "Los usuarios necesitan señales de seguridad tempranas durante el flujo de pago.",
      "La claridad en los estados de confirmación reduce solicitudes de soporte.",
    ],
    nextSteps: [
      "Probar el flujo con usuarios reales en un prototipo funcional.",
      "Medir la tasa de éxito de pagos y ajustar los mensajes de error.",
    ],
  },
}
