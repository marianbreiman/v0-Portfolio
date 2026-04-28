import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import {
  Figma, Layout, Search, GitBranch, Rocket, Users, Brain, GitCompare,
  Monitor, Smartphone, Layers, PenTool, BarChart2, MessageSquare
} from "lucide-react"

const DESIGN_SKILLS = [
  { icon: Figma,      name: "Figma",           desc: "Diseño de interfaces, sistemas y prototipos" },
  { icon: Layout,     name: "Design Systems",  desc: "Componentes reutilizables y tokens de diseño" },
  { icon: PenTool,    name: "Diseño Visual",   desc: "Tipografía, color, composición y jerarquía" },
  { icon: Smartphone, name: "Mobile-first",    desc: "Diseño responsivo y adaptado a contexto" },
  { icon: Monitor,    name: "Web Design",      desc: "Interfaces web con foco en conversión y UX" },
  { icon: Layers,     name: "Wireframing",     desc: "Flujos, arquitectura de información y bocetos" },
]

const PROCESS_SKILLS = [
  { icon: Search,      name: "UX Research",        desc: "Entrevistas, tests de usabilidad y análisis" },
  { icon: Brain,       name: "Design Thinking",    desc: "Empatizar, definir, idear, prototipar, testear" },
  { icon: GitBranch,   name: "Doble Diamante",     desc: "Convergencia y divergencia en cada etapa" },
  { icon: Rocket,      name: "Lean UX",            desc: "Hipótesis, MVPs e iteración continua" },
  { icon: Users,       name: "Pruebas de usuario", desc: "Validación con personas reales en contexto real" },
  { icon: GitCompare,  name: "A/B Testing",        desc: "Comparación basada en métricas claras" },
]

const SOFT_SKILLS = [
  { icon: MessageSquare, name: "Comunicación",       desc: "Presento y defiendo decisiones con claridad" },
  { icon: Users,         name: "Trabajo en equipo",  desc: "Colaboro con desarrollo, producto y negocio" },
  { icon: BarChart2,     name: "Visión de producto", desc: "Conecto el diseño con los objetivos del negocio" },
]

const TOOLS = [
  { name: "Figma",           level: 95 },
  { name: "FigJam",          level: 88 },
  { name: "Notion",          level: 85 },
  { name: "Maze / Lookback", level: 78 },
  { name: "Hotjar / GA",     level: 75 },
  { name: "HTML + CSS",      level: 72 },
  { name: "JavaScript",      level: 60 },
  { name: "Git",             level: 58 },
]

export default function SkillsPage() {
  return (
    <div className="pt-24">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div
          className="orb w-[500px] h-[500px] -left-32 top-0 opacity-50"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.12) 0%, transparent 70%)" }}
        />

        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl space-y-5">
              <p className="chip">Capacidades</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Mis <span className="gradient-text">habilidades</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Un resumen estructurado de lo que domino: herramientas, disciplinas y formas de
                trabajar que aplico en cada proyecto.
              </p>
            </div>
          </ScrollAnimation>
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
                <div className="project-card p-6 h-full group cursor-default flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROCESO & METODOLOGÍA
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-muted/20">
        <div className="container">
          <ScrollAnimation>
            <div className="mb-12">
              <p className="chip mb-3">Proceso</p>
              <SectionHeading
                title="Metodologías de diseño"
                subtitle="Adapto el método al problema, no al revés. Cada proyecto necesita una forma distinta de abordarse."
              />
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_SKILLS.map((skill, index) => (
              <ScrollAnimation key={index} delay={index * 60}>
                <div className="project-card p-6 h-full group cursor-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all duration-500 group-hover:bg-primary/20">
                      <skill.icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-sm">{skill.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HERRAMIENTAS + SOFT SKILLS
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ScrollAnimation>
              <div>
                <p className="chip mb-3">Stack</p>
                <SectionHeading
                  title="Herramientas"
                  subtitle="Lo que uso día a día y el nivel de dominio en cada una."
                />

                <div className="space-y-5 mt-8">
                  {TOOLS.map((tool, index) => (
                    <ScrollAnimation key={index} delay={index * 50}>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">{tool.name}</span>
                          <span className="text-muted-foreground text-xs">{tool.level}%</span>
                        </div>
                        <div className="skill-bar animate-complete">
                          <div
                            className="skill-bar-fill animate-complete"
                            style={{ transform: `scaleX(${tool.level / 100})` }}
                          />
                        </div>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="space-y-8">
                <div>
                  <p className="chip mb-3">Transversales</p>
                  <SectionHeading
                    title="Habilidades blandas"
                    subtitle="Lo que hace que el buen diseño llegue al producto."
                  />

                  <div className="space-y-4 mt-6">
                    {SOFT_SKILLS.map((skill, index) => (
                      <div key={index} className="project-card p-5 flex gap-4 items-start group cursor-default">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary/20">
                          <skill.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm mb-0.5">{skill.name}</h3>
                          <p className="text-xs text-muted-foreground">{skill.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-card p-6">
                  <h3 className="font-bold mb-5 text-sm">Idiomas</h3>
                  <div className="space-y-4">
                    {[
                      { lang: "Español", level: "Nativo",        pct: 100 },
                      { lang: "Inglés",  level: "Conversacional", pct: 75 },
                    ].map((l) => (
                      <div key={l.lang}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-medium">{l.lang}</span>
                          <span className="text-muted-foreground">{l.level}</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-bar-fill animate-complete"
                            style={{ transform: `scaleX(${l.pct / 100})` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

    </div>
  )
}
