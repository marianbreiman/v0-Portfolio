"use client"

import { useEffect, useRef, useState } from "react"
import { SKILLS_DATA, LANGUAGES } from "@/lib/skills-data"

export function SkillBars() {
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
      { threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* 3-column grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS_DATA.map((stack, catIdx) => (
          <div
            key={stack.id}
            className="rounded-2xl border border-border bg-card p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/25"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <stack.icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-snug">{stack.title}</h3>
                <p className="text-[11px] text-muted-foreground mt-0.5">{stack.subtitle}</p>
              </div>
            </div>

            <div className="h-px bg-border/40 mb-5" />

            {/* Tool rows */}
            <div className="space-y-4 flex-1">
              {stack.skills.map((tool, toolIdx) => {
                const delay = (catIdx * stack.skills.length + toolIdx) * 55
                return (
                  <div key={tool.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[12px] font-semibold text-foreground leading-none">
                        {tool.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-muted-foreground">{tool.label}</span>
                        <span className="text-[11px] font-bold text-primary tabular-nums w-7 text-right">
                          {tool.pct}%
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden bg-muted">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: animated ? `${tool.pct}%` : "0%",
                          background:
                            "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                          transition: `width 900ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div className="mt-8 pt-8 border-t border-border/30">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground text-center mb-5">
          Idiomas
        </p>
        <div className="grid sm:grid-cols-2 gap-5 max-w-sm mx-auto">
          {LANGUAGES.map((lang, idx) => (
            <div key={lang.name}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold">{lang.name}</span>
                <span className="text-xs text-muted-foreground">{lang.level}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: animated ? `${lang.pct}%` : "0%",
                    background:
                      "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                    transition: `width 900ms cubic-bezier(0.16,1,0.3,1) ${idx * 120 + 400}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
