"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { SectionHeading } from "@/components/section-heading"
import { Linkedin, ArrowUpRight, Quote } from "lucide-react"
import type { Testimonial } from "@/lib/testimonials-data"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("")
}

// Trim LinkedIn headline to first section before "|"
function shortRole(role: string) {
  const pipe = role.indexOf("|")
  return pipe !== -1 ? role.slice(0, pipe).trim() : role
}

const AVATAR_PALETTES = [
  "from-primary/25 to-secondary/20 text-primary",
  "from-secondary/30 to-primary/15 text-primary/80",
  "from-primary/20 to-primary/35 text-primary",
  "from-secondary/25 to-secondary/15 text-primary/70",
]

function TestimonialCard({ t, palette }: { t: Testimonial; palette: string }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = t.content.length > 220

  return (
    <div className="group h-full rounded-2xl border border-border bg-card p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/20">

      {/* LinkedIn badge + quote icon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-muted/50">
          <Linkedin className="h-3 w-3 text-[#0A66C2]" />
          <span className="text-[10px] font-semibold text-muted-foreground tracking-wide">
            Recomendación LinkedIn
          </span>
        </div>
        <Quote className="h-4 w-4 text-primary/20" />
      </div>

      {/* Quote text with optional expand */}
      <div className="flex-1">
        <p
          className={[
            "text-sm leading-relaxed text-foreground/90",
            !expanded && isLong ? "line-clamp-4" : "",
          ].join(" ")}
        >
          &ldquo;{t.content}&rdquo;
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 text-xs font-semibold text-primary hover:text-primary/75 transition-colors duration-200"
          >
            {expanded ? "Ver menos" : "Leer más"}
          </button>
        )}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/40">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${palette} flex items-center justify-center shrink-0 text-xs font-bold`}
        >
          {getInitials(t.name)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sm leading-tight truncate">{t.name}</p>
          <p className="text-[11px] text-muted-foreground leading-snug line-clamp-1">
            {shortRole(t.role)}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="chip mx-auto mb-4">Validación profesional</p>
            <SectionHeading
              title="Lo que dicen mis colegas"
              subtitle="Recomendaciones de compañeros y colegas con quienes trabajé."
              centered
            />
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, index) => (
            <ScrollAnimation key={t.id} delay={index * 80}>
              <TestimonialCard
                t={t}
                palette={AVATAR_PALETTES[index % AVATAR_PALETTES.length]}
              />
            </ScrollAnimation>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <ScrollAnimation delay={200}>
          <div className="flex justify-center mt-10">
            <Link
              href="https://www.linkedin.com/in/mariano-breiman/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4 text-[#0A66C2]" />
              Ver recomendaciones en LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
