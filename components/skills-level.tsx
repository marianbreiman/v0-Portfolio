"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { cn } from "@/lib/utils"
import type { SkillCategory } from "@/lib/skills-data"

interface SkillsLevelProps {
  categories: SkillCategory[]
  className?: string
}

export function SkillsLevel({ categories, className }: SkillsLevelProps) {
  return (
    <div className={cn("", className)}>
      <div className="grid gap-5 xl:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <ScrollAnimation key={category.id} delay={index * 80}>
              <div className="group rounded-3xl border border-border bg-card/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{category.title}</p>
                    <p className="text-xs text-muted-foreground">{category.subtitle}</p>
                  </div>
                  <div className="rounded-lg bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
                    {category.skills.length}
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-sm font-medium text-foreground truncate">{skill.name}</span>
                        <span className="text-xs font-bold text-primary shrink-0">{skill.pct}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-border/40">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${skill.pct}%`,
                            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    </div>
  )
}
