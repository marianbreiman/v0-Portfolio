import { Sparkles, Code2, PenTool } from "lucide-react"

export interface SkillItem {
  name: string
  pct: number
  label: string
  sub: string    // short context shown under donut
  desc?: string  // tooltip text on hover
}

export interface SkillCategory {
  id: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  skills: SkillItem[]
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "ai",
    title: "IA aplicada al diseño",
    subtitle: "Integrada activamente en el proceso.",
    icon: Sparkles,
    skills: [
      {
        name: "ChatGPT",
        pct: 90, label: "Uso diario", sub: "IA · research",
        desc: "Research, síntesis, estrategia, copy, documentación y exploración de soluciones.",
      },
      {
        name: "Claude.ai",
        pct: 85, label: "Uso diario", sub: "IA · docs",
        desc: "Apoyo para revisar código, documentar, estructurar proyectos y mejorar implementación.",
      },
      {
        name: "Figma Make",
        pct: 78, label: "Uso frecuente", sub: "IA · diseño",
        desc: "Exploración rápida de interfaces, variaciones visuales y prototipos asistidos.",
      },
      {
        name: "VS Code + Codex / Claude",
        pct: 76, label: "Uso frecuente", sub: "IA · código",
        desc: "Desarrollo asistido, mejoras de UI y conexión entre diseño e implementación.",
      },
      {
        name: "Gemini",
        pct: 72, label: "Exploración", sub: "IA · exploración",
        desc: "Contraste de ideas, análisis alternativo y apoyo en investigación.",
      },
    ],
  },
  {
    id: "code",
    title: "Código & implementación",
    subtitle: "Para diseñar con más contexto técnico.",
    icon: Code2,
    skills: [
      {
        name: "VS Code",
        pct: 75, label: "Uso frecuente", sub: "Editor",
        desc: "Trabajo sobre proyectos web, ajustes de componentes y validación local.",
      },
      {
        name: "HTML + CSS",
        pct: 72, label: "Intermedio", sub: "Frontend",
        desc: "Estructura, responsive, estilos, layout y detalles visuales.",
      },
      {
        name: "Figma Dev Mode",
        pct: 70, label: "Avanzado", sub: "Handoff",
        desc: "Handoff de diseño, especificaciones, tokens y colaboración con desarrollo.",
      },
      {
        name: "JavaScript",
        pct: 60, label: "Básico", sub: "Scripting",
        desc: "Interacciones básicas, lógica de interfaz y comprensión técnica.",
      },
      {
        name: "Git",
        pct: 58, label: "Básico", sub: "Versionado",
        desc: "Control de versiones y colaboración sobre código.",
      },
    ],
  },
  {
    id: "design",
    title: "Diseño, research & docs",
    subtitle: "Stack principal de trabajo diario.",
    icon: PenTool,
    skills: [
      {
        name: "Figma Diseño",
        pct: 95, label: "Avanzado", sub: "UI · prototipado",
        desc: "Diseño UI, componentes, prototipos, variantes y handoff.",
      },
      {
        name: "FigJam",
        pct: 88, label: "Avanzado", sub: "Ideación · mapas",
        desc: "Workshops, mapas, flujos, ideación y organización visual.",
      },
      {
        name: "Notion",
        pct: 85, label: "Avanzado", sub: "Docs",
        desc: "Documentación, procesos, research y organización de decisiones.",
      },
      {
        name: "Maze / Lookback",
        pct: 78, label: "Intermedio", sub: "Testing",
        desc: "Validación, pruebas de usabilidad y análisis de comportamiento.",
      },
      {
        name: "Hotjar / GA",
        pct: 75, label: "Intermedio", sub: "Métricas",
        desc: "Métricas, comportamiento, funnels e insights de producto.",
      },
    ],
  },
]

export interface Language {
  name: string
  level: string
  pct: number
}

export const LANGUAGES: Language[] = [
  { name: "Español", level: "Nativo",                 pct: 100 },
  { name: "Inglés",  level: "B2 · First Certificate", pct: 78  },
]
