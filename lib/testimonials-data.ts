export interface Testimonial {
  id: string
  name: string
  role: string      // Full LinkedIn headline, shown truncated in card
  content: string
  linkedinUrl?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Julieta Espinosa",
    role: "Head of Marketing & Communications | Driving Growth, Brand Impact & Performance Strategies",
    content:
      "Es un placer recomendar a Mariano como diseñador UX/UI. Trabajamos juntos en distintos equipos en Multitravel.com y su talento y pasión por el diseño son evidentes en cada proyecto que encara. Su enfoque centrado en el usuario y su habilidad para crear soluciones innovadoras lo convierten en un profesional excepcional.",
    linkedinUrl: "https://www.linkedin.com/in/mariano-breiman/details/recommendations/",
  },
  {
    id: "2",
    name: "Natalia Romero",
    role: "Ssr UX/UI Designer | Diseño centrado en las personas",
    content:
      "Mariano es un gran profesional cercano y carismático con un gran dominio del UX, siempre dispuesto a ayudar y colaborar con todos, responsable con sus tareas, creativo para idear soluciones, analítico, detallista pero sobre todo una gran persona. Fue un placer haber compartido con Mariano el equipo.",
    linkedinUrl: "https://www.linkedin.com/in/mariano-breiman/details/recommendations/",
  },
  {
    id: "3",
    name: "Nicolás Romero Díaz",
    role: "UX/UI Designer | Graphic Designer",
    content:
      "Tuve el agrado y suerte de trabajar junto a Mariano como diseñadores UX/UI en el mismo equipo de diseño. Desde el primer momento fue muy atento, trayendo una energía positiva a todo el equipo a diario. Posee un gran ojo para detectar problemas y buscar soluciones. Siempre estuvo atento a brindar ayuda, abierto al aprendizaje y a compartir conocimientos. Busca constantemente mejorar y aprender.",
    linkedinUrl: "https://www.linkedin.com/in/mariano-breiman/details/recommendations/",
  },
  {
    id: "4",
    name: "Manuela Tomicic Chaparro",
    role: "Consultor en Diseño de Servicios, Product Design y Experiencia de Usuario",
    content:
      "Mariano es un excelente diseñador. Tiene una gran creatividad, lo que lo lleva a cuestionarse el medio y construir propuestas innovadoras. Gracias a su gran personalidad, es capaz de generar un buen ambiente laboral y se relaciona muy bien con sus pares. Además, trabaja bien en equipo y siempre busca dar lo mejor de sí.",
    linkedinUrl: "https://www.linkedin.com/in/mariano-breiman/details/recommendations/",
  },
]
