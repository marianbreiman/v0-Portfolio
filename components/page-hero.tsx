import { ScrollAnimation } from "@/components/scroll-animation"

interface PageHeroProps {
  eyebrow: string
  titleBefore: string
  titleGradient: string
  titleAfter?: string
  description: string
  /** Which corner the primary orb sits: "left" = top-left, "right" = top-right */
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
  const orbBase = "orb w-[560px] h-[560px] opacity-55"
  const orbSecondary = "orb orb-secondary w-[440px] h-[440px] opacity-40"

  const primaryPos  = orbSide === "right" ? "-right-24 -top-16" : "-left-32 -top-8"
  const primaryBg   = orbSide === "right"
    ? "radial-gradient(circle, hsl(var(--secondary)/0.18) 0%, transparent 70%)"
    : "radial-gradient(circle, hsl(var(--primary)/0.14) 0%, transparent 70%)"

  const secondaryPos = orbSide === "right" ? "-left-20 bottom-0" : "-right-16 bottom-0"
  const secondaryBg  = orbSide === "right"
    ? "radial-gradient(circle, hsl(var(--primary)/0.12) 0%, transparent 70%)"
    : "radial-gradient(circle, hsl(var(--secondary)/0.18) 0%, transparent 70%)"

  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Primary orb */}
      <div className={`${orbBase} ${primaryPos}`} style={{ background: primaryBg }} />
      {/* Secondary orb */}
      <div className={`${orbSecondary} ${secondaryPos}`} style={{ background: secondaryBg }} />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating accents */}
      <div
        className="floating-animation absolute top-20 right-[20%] w-5 h-5 rounded-full bg-secondary/30 blur-sm pointer-events-none"
      />
      <div
        className="floating-animation absolute bottom-20 left-[14%] w-7 h-7 rounded-full bg-primary/20 blur-md pointer-events-none"
        style={{ animationDelay: "-2.5s" }}
      />
      <div
        className="floating-animation absolute top-1/2 left-[7%] w-3 h-3 rounded-full bg-primary/30 blur-sm pointer-events-none"
        style={{ animationDelay: "-4.2s" }}
      />

      <div className="container relative z-10">
        <ScrollAnimation>
          <div className="max-w-3xl space-y-5">
            <p className="chip">{eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {titleBefore}{" "}
              <span className="gradient-text">{titleGradient}</span>
              {titleAfter && <> {titleAfter}</>}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </ScrollAnimation>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
