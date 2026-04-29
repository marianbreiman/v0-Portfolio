export type RunningItemType = "reel" | "post" | "story" | "recap"

export interface RunningItem {
  id: string
  title: string
  type: RunningItemType
  // Ruta relativa a /public (ej: "/running/media-maraton.jpg"), o null para mostrar placeholder
  thumbnail: string | null
  // URL directa al post o reel específico en Instagram (ej: "https://www.instagram.com/p/ABC123/")
  // Si apuntas al perfil general se abrirá el perfil, no el post específico
  instagramUrl: string
  description?: string
}

// ─── Cómo agregar tus propios posts ──────────────────────────────────────────
// 1. Guardá la imagen en /public/running/ (ej: /public/running/media-maraton.jpg)
// 2. Cambiá thumbnail: null → thumbnail: "/running/media-maraton.jpg"
// 3. Cambiá instagramUrl por la URL directa al post específico:
//    - Posts/reels: "https://www.instagram.com/p/[SHORTCODE]/"
//    - Historias: "https://www.instagram.com/stories/marianbreiman/"
// ─────────────────────────────────────────────────────────────────────────────

export const runningItems: RunningItem[] = [
  {
    id: "1",
    title: "Media Maratón Buenos Aires",
    type: "recap",
    thumbnail: null,
    instagramUrl: "https://www.instagram.com/marianbreiman/",
    description: "Cruzar la meta siempre es especial. Una de las mejores sensaciones.",
  },
  {
    id: "2",
    title: "Entrenamiento semanal",
    type: "reel",
    thumbnail: null,
    instagramUrl: "https://www.instagram.com/marianbreiman/",
    description: "Fondo largo de domingo. La constancia construye la resistencia.",
  },
  {
    id: "3",
    title: "Grupo de running",
    type: "post",
    thumbnail: null,
    instagramUrl: "https://www.instagram.com/marianbreiman/",
    description: "La comunidad hace toda la diferencia. Mejores con otros.",
  },
  {
    id: "4",
    title: "Carrera nocturna",
    type: "post",
    thumbnail: null,
    instagramUrl: "https://www.instagram.com/marianbreiman/",
    description: "Correr de noche tiene otra energía. Una experiencia increíble.",
  },
  {
    id: "5",
    title: "Logros 2024",
    type: "recap",
    thumbnail: null,
    instagramUrl: "https://www.instagram.com/marianbreiman/",
    description: "Balance del año: más kilómetros, más aprendizajes, más comunidad.",
  },
]
