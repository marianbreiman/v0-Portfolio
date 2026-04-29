import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SkillDonuts } from "@/components/skill-donuts"
import { PageHero } from "@/components/page-hero"
import {
  Monitor, Layout, Zap, Eye, Layers, PenTool,
  Brain, BarChart2, Rocket, Search, GitMerge, FileText,
} from "lucide-react"

// ─── Diseño & UX ──────────────────────────────────────────────────────────────
const DESIGN_SKILLS = [
  {
    icon: Monitor,
    name: "Responsive & Adaptive Design",
    desc: "Diseño experiencias consistentes entre desktop y mobile contemplando contexto, jerarquía y comportamiento de uso. No solo ajusto layouts: pienso qué importa en cada pantalla.",
  },
  {
    icon: Layout,
    name: "Design Systems & Atomic Design",
    desc: "Estructuro interfaces escalables y consistentes conectando componentes, patrones visuales y documentación. Diseño para la eficiencia del equipo, no solo del momento.",
  },
  {
    icon: Zap,
    name: "Microinteractions & Motion Design",
    desc: "Uso animación e interacción como soporte de feedback, claridad y experiencia. El movimiento tiene una función, no es adorno.",
  },
  {
    icon: Eye,
    name: "Accessibility & Usability",
    desc: "Priorizo claridad, legibilidad y facilidad de uso para reducir fricción. Diseño para personas reales en contextos reales, incluyendo limitaciones.",
  },
  {
    icon: Layers,
    name: "Interactive Mockups & Prototyping",
    desc: "Prototipo flujos y comportamientos para validar mejor y comunicar decisiones antes de implementación. Un prototipo es un argumento, no una pantalla bonita.",
  },
  {
    icon: PenTool,
    name: "Visual Design",
    desc: "Trabajo color, tipografía, espaciado, ritmo visual y jerarquía para construir interfaces más claras y atractivas. El criterio estético está al servicio del uso.",
  },
]

// ─── Proceso & Estrategia ─────────────────────────────────────────────────────
const PROCESS_SKILLS = [
  {
    icon: Brain,
    name: "Design Thinking & HCD",
    desc: "Parto de necesidades reales para entender contexto, fricciones y oportunidades antes de diseñar. El problema bien definido es la mitad de la solución.",
  },
  {
    icon: BarChart2,
    name: "Data-Driven Design",
    desc: "Uso datos, métricas, señales de comportamiento e hipótesis medibles para tomar mejores decisiones. El diseño se valida con evidencia, no con opiniones.",
  },
  {
    icon: Rocket,
    name: "Lean UX, Agile & Scrum",
    desc: "Trabajo de forma iterativa y colaborativa priorizando valor continuo. Valido sin sobrediseñar, itero rápido y ajusto con aprendizajes reales.",
  },
  {
    icon: Search,
    name: "A/B Testing, Benchmarking & Research",
    desc: "Combino investigación cualitativa, análisis comparativo y pruebas cuantitativas para reducir incertidumbre y construir sobre evidencia.",
  },
  {
    icon: GitMerge,
    name: "Developer Handoff & Communication",
    desc: "Acompaño la implementación, alineo con desarrollo y cuido que la experiencia diseñada llegue correctamente a producto. El handoff no es el final del diseño.",
  },
  {
    icon: FileText,
    name: "Documentation & Specifications",
    desc: "Documento comportamientos, estados, reglas y decisiones para que diseño, producto y desarrollo trabajen con claridad. Un diseño sin specs es un diseño incompleto.",
  },
]

export default function SkillsPage() {
  return (
    <div className="pt-24">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <PageHero
        eyebrow="Capacidades"
        titleBefore="Mis"
        titleGradient="habilidades"
        description="Herramientas, disciplinas y formas de trabajar que aplico en cada proyecto, con el nivel de dominio real en cada una."
        orbSide="left"
      />

      {/* ══════════════════════════════════════════════════════
          STACK — donuts animados + habilidades blandas + idiomas
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-muted/20">
        <div className="container">
          <ScrollAnimation>
            <div className="mb-12">
              <p className="chip mb-3">Stack</p>
              <SectionHeading
                title="Herramientas & nivel de dominio"
                subtitle="Lo que uso día a día, organizado por área, con el nivel de experiencia real en cada herramienta."
              />
            </div>
          </ScrollAnimation>

          <SkillDonuts />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DISEÑO & UX
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="container">
          <ScrollAnimation>
            <div className="mb-12">
              <p className="chip mb-3">Disciplina principal</p>
              <SectionHeading
                title="Diseño & UX/UI"
                subtitle="Las áreas donde tengo mayor profundidad y donde genero más valor."
              />
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESIGN_SKILLS.map((skill, index) => (
              <ScrollAnimation key={index} delay={index * 60}>
                <div className="project-card p-6 h-full group cursor-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-sm leading-snug">{skill.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESO & ESTRATEGIA
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-muted/20">
        <div className="container">
          <ScrollAnimation>
            <div className="mb-12">
              <p className="chip mb-3">Proceso</p>
              <SectionHeading
                title="Proceso & Estrategia"
                subtitle="Adapto el método al problema, no al revés. Cada proyecto necesita una forma distinta de abordarse."
              />
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_SKILLS.map((skill, index) => (
              <ScrollAnimation key={index} delay={index * 60}>
                <div className="project-card p-6 h-full group cursor-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-500 group-hover:bg-primary/20">
                      <skill.icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-sm leading-snug">{skill.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
