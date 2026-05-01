"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Users, BarChart2 } from "lucide-react"
import { SKILLS_DATA, LANGUAGES } from "@/lib/skills-data"
import { cn } from "@/lib/utils"

// ─── Donut geometry ────────────────────────────────────────────────────────────
const R    = 29
const SW   = 6
const SIZE = 76
const CX   = SIZE / 2
const CY   = SIZE / 2
const CIRC = 2 * Math.PI * R

// ─── Soft skills ───────────────────────────────────────────────────────────────
const SOFT = [
  {
    icon: MessageSquare,
    name: "Comunicación",
    desc: "Presento y defiendo decisiones de diseño con claridad ante distintas audiencias.",
  },
  {
    icon: Users,
    name: "Trabajo en equipo",
    desc: "Colaboro con desarrollo, producto y negocio adaptando el lenguaje a cada interlocutor.",
  },
  {
    icon: BarChart2,
    name: "Visión de producto",
    desc: "Conecto el diseño con objetivos estratégicos del negocio y métricas de impacto.",
  },
]

// ─── Single donut ring ─────────────────────────────────────────────────────────
function DonutRing({
  pct,
  name,
  sub,
  desc,
  animated,
  delay,
  logoUrl,
}: {
  pct: number
  name: string
  sub: string
  desc?: string
  animated: boolean
  delay: number
  logoUrl?: string
}) {
  const uid      = name.replace(/[^a-z0-9]/gi, "_").toLowerCase()
  const fill     = animated ? CIRC * (1 - pct / 100) : CIRC
  const [tapped, setTapped] = useState(false)

  return (
    <div
      className="group relative flex flex-col items-center gap-2 cursor-pointer select-none focus:outline-none"
      tabIndex={0}
      onMouseLeave={() => setTapped(false)}
      onClick={() => setTapped((v) => !v)}
      onKeyDown={(e) => e.key === "Enter" && setTapped((v) => !v)}
      aria-label={`${name}: ${pct}%${desc ? `. ${desc}` : ""}`}
    >
      {/* ── Tooltip ── */}
      {desc && (
        <div
          className={cn(
            "absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50",
            "w-44 p-3 rounded-xl",
            "bg-card border border-primary/20 shadow-lg shadow-primary/8",
            "text-[10px] text-muted-foreground leading-relaxed text-center",
            "transition-all duration-200 pointer-events-none",
            tapped
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-1.5 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0",
          )}
        >
          {desc}
          {/* CSS triangle arrow pointing down */}
          <span
            className="absolute top-full left-1/2 -translate-x-1/2 block"
            style={{
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid hsl(var(--card))",
              marginTop: -1,
            }}
          />
        </div>
      )}

      {/* ── Donut ring with hover scale + glow ── */}
      <div
        className="relative transition-transform duration-300 group-hover:scale-110"
        style={{ width: SIZE, height: SIZE }}
      >
        {/* Glow layer */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)/0.35), hsl(var(--secondary)/0.25))",
          }}
        />

        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="-rotate-90"
          aria-hidden
        >
          <defs>
            <linearGradient id={`g-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   style={{ stopColor: "hsl(var(--primary))" }} />
              <stop offset="100%" style={{ stopColor: "hsl(var(--secondary))" }} />
            </linearGradient>
          </defs>

          {/* Track */}
          <circle
            cx={CX} cy={CY} r={R}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={SW + 1}
          />

          {/* Progress arc */}
          <circle
            cx={CX} cy={CY} r={R}
            fill="none"
            stroke={`url(#g-${uid})`}
            strokeWidth={SW}
            strokeLinecap="round"
            strokeDasharray={CIRC}
            style={{
              strokeDashoffset: fill,
              transition: `stroke-dashoffset 950ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            }}
          />
        </svg>

        {/* Center: brand logo (default) → pct on hover */}
        <div className="absolute inset-0 flex items-center justify-center">
          {logoUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl}
                alt={name}
                width={22}
                height={22}
                className="logo-icon object-contain transition-opacity duration-200 group-hover:opacity-0"
                onError={(e) => { e.currentTarget.style.display = "none" }}
              />
              <span className="absolute text-[11px] font-bold tabular-nums text-foreground leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {pct}%
              </span>
            </>
          ) : (
            <span className="text-[11px] font-bold tabular-nums text-foreground leading-none">
              {pct}%
            </span>
          )}
        </div>
      </div>

      {/* Labels */}
      <div className="text-center px-0.5 space-y-0.5 w-full">
        <p className="text-[11px] font-semibold leading-tight text-foreground break-words hyphens-auto group-hover:text-primary transition-colors duration-200">
          {name}
        </p>
        <p className="text-[10px] text-muted-foreground leading-tight">{sub}</p>
      </div>
    </div>
  )
}

// ─── Main export ────────────────────────────────────────────────────────────────
export function SkillDonuts() {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  let gi = 0
  const cats = SKILLS_DATA.map((cat) => ({
    ...cat,
    skills: cat.skills.map((s) => ({ ...s, delay: gi++ * 55 })),
  }))

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-12 xl:gap-16 items-start"
    >

      {/* ══ Left: categorías verticales con donuts ══ */}
      <div className="space-y-1">
        {cats.map((cat, ci) => {
          const Icon = cat.icon
          return (
            <div key={cat.id}>
              {ci > 0 && <div className="h-px bg-border/30 my-9" />}

              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-none">{cat.title}</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{cat.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-7">
                {cat.skills.map((tool) => (
                  <DonutRing
                    key={tool.name}
                    pct={tool.pct}
                    name={tool.name}
                    sub={tool.sub}
                    desc={tool.desc}
                    animated={animated}
                    delay={tool.delay}
                    logoUrl={tool.logoUrl}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* ══ Right: habilidades blandas + idiomas ══ */}
      <div className="space-y-8">

        {/* Habilidades blandas */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Habilidades blandas
          </p>
          <div className="space-y-3">
            {SOFT.map((skill) => {
              const Icon = skill.icon
              return (
                <div
                  key={skill.name}
                  className="flex gap-3 p-4 rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-sm cursor-default group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors duration-300 group-hover:bg-primary/20">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight mb-1">{skill.name}</p>
                    <p className="text-[11px] text-muted-foreground leading-snug">{skill.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Idiomas */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Idiomas
          </p>
          <div className="rounded-xl border border-border bg-card p-4 space-y-4">
            {LANGUAGES.map((lang, idx) => (
              <div key={lang.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold">{lang.name}</span>
                  <span className="text-[11px] text-muted-foreground">{lang.level}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: animated ? `${lang.pct}%` : "0%",
                      background:
                        "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                      transition: `width 900ms cubic-bezier(0.16,1,0.3,1) ${idx * 120 + 350}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
