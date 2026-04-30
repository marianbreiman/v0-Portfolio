"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowUpRight, Instagram, Play, ImageIcon, BookOpen } from "lucide-react"
import { runningItems, type RunningItem } from "@/lib/running-data"
import { cn } from "@/lib/utils"

const TYPE_LABELS: Record<RunningItem["type"], string> = {
  reel:  "Reel",
  post:  "Post",
  story: "Historia",
  recap: "Recap",
}

// Gradientes cálidos estilo Instagram por tipo
const TYPE_GRADIENTS: Record<RunningItem["type"], [string, string, string]> = {
  reel:  ["#f09433", "#e6683c", "#dc2743"],
  post:  ["#833ab4", "#c13584", "#e1306c"],
  story: ["#405de6", "#833ab4", "#f09433"],
  recap: ["#12c2e9", "#c471ed", "#f64f59"],
}

const TYPE_ICONS: Record<RunningItem["type"], React.ElementType> = {
  reel:  Play,
  post:  ImageIcon,
  story: Instagram,
  recap: BookOpen,
}

const AUTOPLAY_MS = 4500

function getVisibleCount(width: number) {
  if (width >= 1024) return 3
  if (width >= 640)  return 2
  return 1
}

export function RunningCarousel() {
  const [current, setCurrent]   = useState(0)
  const [paused, setPaused]     = useState(false)
  const [visible, setVisible]   = useState(3)
  const intervalRef             = useRef<ReturnType<typeof setInterval> | null>(null)
  const total                   = runningItems.length

  useEffect(() => {
    const update = () => setVisible(getVisibleCount(window.innerWidth))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const maxIndex = Math.max(0, total - visible)

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1))
  }, [maxIndex])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, AUTOPLAY_MS)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, next])

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!paused) intervalRef.current = setInterval(next, AUTOPLAY_MS)
  }, [paused, next])

  const handlePrev = () => { prev(); resetTimer() }
  const handleNext = () => { next(); resetTimer() }

  const cardWidthPct = 100 / visible

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${current * cardWidthPct}%)` }}
        >
          {runningItems.map((item) => (
            <div
              key={item.id}
              className="shrink-0 px-2.5"
              style={{ width: `${cardWidthPct}%` }}
            >
              <CarouselCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer() }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === current
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-primary/25 hover:bg-primary/50",
              )}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-xl border border-primary/20 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-xl border border-primary/20 bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Instagram profile CTA */}
      <div className="mt-8 flex justify-center">
        <a
          href="https://www.instagram.com/marianbreiman/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-card text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
        >
          <Instagram className="h-4 w-4 text-primary" />
          Ver perfil en Instagram
          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
        </a>
      </div>
    </div>
  )
}

function CarouselCard({ item }: { item: RunningItem }) {
  return (
    <button
      onClick={() => window.open(item.instagramUrl, "_blank", "noopener,noreferrer")}
      className="w-full text-left group"
      aria-label={`Ver "${item.title}" en Instagram`}
    >
      <div className="rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/25">

        {/* Visual area */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {item.thumbnail ? (
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <InstagramPlaceholder item={item} />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold border border-white/40 rounded-full px-4 py-2 bg-white/15 backdrop-blur-sm">
              Ver en Instagram <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Card footer */}
        <div className="px-4 py-3.5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-semibold text-sm leading-tight line-clamp-1">{item.title}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">@marianbreiman</p>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>
      </div>
    </button>
  )
}

function InstagramPlaceholder({ item }: { item: RunningItem }) {
  const [c1, c2, c3] = TYPE_GRADIENTS[item.type]
  const TypeIcon = TYPE_ICONS[item.type]

  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-5"
      style={{
        background: `linear-gradient(160deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`,
      }}
    >
      {/* Top: perfil + tipo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/30">
            <Instagram className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-white/95 text-xs font-semibold drop-shadow-sm">@marianbreiman</span>
        </div>
        <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
          {TYPE_LABELS[item.type]}
        </span>
      </div>

      {/* Centro: ícono del tipo */}
      <div className="flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
          {item.type === "reel" ? (
            /* Triángulo play */
            <div className="w-0 h-0 border-y-[9px] border-y-transparent border-l-[16px] border-l-white ml-1" />
          ) : (
            <TypeIcon className="h-6 w-6 text-white" />
          )}
        </div>
      </div>

      {/* Bottom: título + descripción */}
      <div className="space-y-1.5">
        <p className="text-white font-bold text-sm leading-snug line-clamp-2 drop-shadow-sm">
          {item.title}
        </p>
        {item.description && (
          <p className="text-white/75 text-[11px] leading-relaxed line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )
}
