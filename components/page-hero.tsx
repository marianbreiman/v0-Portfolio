import { HeroDotBackground } from "@/components/hero-dot-background"

interface PageHeroProps {
  eyebrow: string
  titleBefore: string
  titleGradient: string
  titleAfter?: string
  description: string
  orbSide?: "left" | "right"
}

export function PageHero({
  eyebrow,
  titleBefore,
  titleGradient,
  titleAfter,
  description,
  orbSide = "right",
}: PageHeroProps) {
  const isRight = orbSide === "right"

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative overflow-hidden hero-animated-bg">
      {/* Dot background: grid + wave + mouse spotlight */}
      <HeroDotBackground />

      {/* Primary orb */}
      <div
        className="orb orb-secondary w-[560px] h-[560px] opacity-60"
        style={{
          background: isRight
            ? "radial-gradient(circle, hsl(var(--secondary)/0.26) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(var(--primary)/0.22) 0%, transparent 70%)",
          ...(isRight ? { right: -96, top: -64 } : { left: -128, top: -40 }),
        }}
      />
      {/* Secondary orb */}
      <div
        className="orb w-[440px] h-[440px] opacity-45"
        style={{
          background: isRight
            ? "radial-gradient(circle, hsl(var(--primary)/0.18) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(var(--secondary)/0.22) 0%, transparent 70%)",
          ...(isRight ? { left: -80, bottom: 0 } : { right: -64, bottom: 0 }),
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl space-y-6">

          <div style={{ animation: "badge-pop 0.55s var(--ease-out-expo) 0.05s both" }}>
            <p className="chip">{eyebrow}</p>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            style={{ animation: "hero-word-in 0.9s var(--ease-out-expo) 0.18s both" }}
          >
            {titleBefore}{" "}
            <span className="gradient-text">{titleGradient}</span>
            {titleAfter && <> {titleAfter}</>}
          </h1>

          <div
            className="h-0.5 w-16 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
              animation: "line-grow 0.8s var(--ease-out-expo) 0.45s both",
              transformOrigin: "left center",
            }}
          />

          <p
            className="text-xl text-muted-foreground leading-relaxed max-w-xl"
            style={{ animation: "slide-in 0.7s ease-out 0.5s both" }}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
