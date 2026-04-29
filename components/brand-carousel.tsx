"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import type { Brand } from "@/lib/brands-data"

interface BrandCarouselProps {
  brands: Brand[]
}

const CATEGORY_LABEL: Record<Brand["category"], string> = {
  client:    "Cliente",
  project:   "Proyecto",
  education: "Formación",
}

export function BrandCarousel({ brands }: BrandCarouselProps) {
  const track = [...brands, ...brands, ...brands]

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, hsl(var(--primary)/0.06), transparent)",
        }}
      />

      <div className="container relative z-10 mb-10">
        <ScrollAnimation>
          <div className="text-center space-y-2">
            <p className="chip mx-auto">Experiencia</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Marcas y proyectos con los que colaboré
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Empresas, plataformas y productos en los que apliqué mis habilidades de diseño.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 brand-marquee">
          {track.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm whitespace-nowrap shrink-0 group cursor-default transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-sm"
            >
              {/* Initial badge */}
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/20">
                <span className="text-[10px] font-black text-primary tracking-wider">
                  {brand.abbr}
                </span>
              </div>

              {/* Name + category */}
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">{brand.name}</p>
                <p className="text-[10px] text-muted-foreground">{CATEGORY_LABEL[brand.category]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10" />
      </div>

      <style jsx global>{`
        @keyframes brand-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .brand-marquee {
          animation: brand-scroll 28s linear infinite;
          width: max-content;
        }
        .brand-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
