"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { HeroDotBackground } from "@/components/hero-dot-background"

// ─── Hero entrance animation ─────────────────────────────────────
function useHeroEntrance() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])
  return ready
}

interface HeroSectionProps {
  stats?: Array<{ value: string; label: string }>
}

export function HeroSection({ stats = [] }: HeroSectionProps) {
  const ready = useHeroEntrance()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated mesh gradient background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.001
      // Clear fully on each frame so blobs don't darken light-mode background
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw animated gradient blobs
      const isDark = document.documentElement.classList.contains("dark")
      const blobs = [
        {
          x: canvas.width * 0.2 + Math.sin(time * 0.3) * 50,
          y: canvas.height * 0.3 + Math.cos(time * 0.2) * 50,
          size: 220,
          color: isDark ? "rgba(79, 108, 246, 0.09)" : "rgba(79, 108, 246, 0.18)",
        },
        {
          x: canvas.width * 0.8 + Math.sin(time * 0.4) * 60,
          y: canvas.height * 0.7 + Math.cos(time * 0.25) * 60,
          size: 200,
          color: isDark ? "rgba(147, 51, 234, 0.07)" : "rgba(147, 51, 234, 0.16)",
        },
        {
          x: canvas.width * 0.5 + Math.sin(time * 0.25) * 40,
          y: canvas.height * 0.15 + Math.cos(time * 0.35) * 30,
          size: 160,
          color: isDark ? "rgba(236, 72, 153, 0.05)" : "rgba(236, 72, 153, 0.12)",
        },
      ]

      blobs.forEach((blob) => {
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.size)
        gradient.addColorStop(0, blob.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(blob.x - blob.size, blob.y - blob.size, blob.size * 2, blob.size * 2)
      })

      animationId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden min-h-[92vh] flex items-center bg-white dark:bg-background">
      {/* Dot background: grid + wave + mouse spotlight */}
      <HeroDotBackground />

      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none"
      />

      {/* Ambient orbs - only in dark mode */}
      {typeof window !== 'undefined' && document.documentElement.classList.contains('dark') && (
        <>
          <div
            className="orb w-[600px] h-[600px] -left-32 top-0"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.15) 0%, transparent 70%)" }}
          />
          <div
            className="orb orb-secondary w-[500px] h-[500px] -right-24 bottom-0"
            style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.18) 0%, transparent 70%)" }}
          />
        </>
      )}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">
          {/* ── Left: Text ── */}
          <div className="space-y-10">
            {/* Location chip */}
            <div
              className="chip"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.6s 0.1s ease, transform 0.6s 0.1s ease",
              }}
            >
              <MapPin className="h-3 w-3" />
              Palermo, CABA, Argentina
            </div>

            {/* Name + role */}
            <div className="space-y-3 overflow-hidden">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "translateY(0) skewY(0deg)" : "translateY(48px) skewY(2deg)",
                  transition:
                    "opacity 0.9s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.9s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <span className="gradient-text">Mariano</span>
                <br />
                <span className="gradient-text">Breiman</span>
              </h1>

              <p
                className="text-xl md:text-2xl font-semibold text-muted-foreground tracking-wide"
                style={{
                  opacity: ready ? 1 : 0,
                  transform: ready ? "translateY(0)" : "translateY(24px)",
                  transition: "opacity 0.8s 0.42s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s 0.42s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                Product Designer · UX/UI · Research
              </p>
            </div>

            {/* Value proposition */}
            <p
              className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-xl"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s 0.58s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s 0.58s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              Diseño productos digitales que conectan investigación, estrategia e interfaz
              para transformar problemas complejos en decisiones claras para las personas.
            </p>

            {/* CTA row */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.7s 0.72s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.7s 0.72s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <Button asChild size="lg" className="group btn-primary-glow text-base px-8 py-6">
                <Link href="/projects">
                  Ver casos de estudio
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-primary-glow text-base px-8 py-6 bg-transparent">
                <Link href="/contact">Conversemos</Link>
              </Button>
            </div>

            {/* Stats */}
            {stats.length > 0 && (
              <div
                className="flex flex-wrap gap-10 pt-2"
                style={{
                  opacity: ready ? 1 : 0,
                  transition: "opacity 0.7s 0.88s ease",
                }}
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Photo ── */}
          <div
            className="relative"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
              transition: "opacity 1s 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), transform 1s 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Glow ring */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)/0.6), hsl(var(--secondary)/0.5))",
                animation: "pulse-glow 3s ease-in-out infinite",
              }}
            />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl gradient-border aspect-[4/5]">
              <Image
                src="/mariano-professional.jpeg"
                alt="Mariano Breiman, Product Designer"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Photo overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent shapes */}
            <div className="floating-animation absolute -bottom-6 -right-6 w-28 h-28 bg-primary/25 rounded-full blur-2xl" />
            <div
              className="floating-animation absolute -top-6 -left-6 w-20 h-20 bg-secondary/30 rounded-full blur-xl"
              style={{ animationDelay: "-3s" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            filter: blur(20px);
          }
          50% {
            opacity: 0.6;
            filter: blur(24px);
          }
        }
      `}</style>
    </section>
  )
}
