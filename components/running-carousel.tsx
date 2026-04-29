"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowUpRight, Footprints, Instagram } from "lucide-react"
import { runningItems, type RunningItem } from "@/lib/running-data"
import { cn } from "@/lib/utils"

const TYPE_LABELS: Record<RunningItem["type"], string> = {
  reel:  "Reel",
  post:  "Post",
  story: "Historia",
  recap: "Recap",
}

// Gradient per type for placeholder background
const TYPE_GRADIENTS: Record<RunningItem["type"], string> = {
  reel:  "from-primary/20 via-secondary/10 to-primary/5",
  post:  "from-secondary/20 via-primary/8 to-secondary/5",
  story: "from-primary/15 via-secondary/15 to-transparent",
  recap: "from-secondary/25 via-primary/12 to-secondary/8",
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

        {/* Visual area — aspect-[4/5] like Instagram portrait */}
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 to-secondary/75 opacity-0 group-hover:opacity-95 transition-all duration-350 flex flex-col items-center justify-center gap-3 p-6">
            <Footprints className="h-7 w-7 text-white/80" />
            <p className="text-white text-sm text-center leading-relaxed font-medium">
              {item.description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-white/90 text-xs font-semibold mt-1 border border-white/30 rounded-full px-3 py-1.5 bg-white/10">
              Ver en Instagram <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Type badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide bg-background/85 backdrop-blur-sm text-foreground border border-border/60">
              {TYPE_LABELS[item.type]}
            </span>
          </div>

          {/* Instagram icon top-right */}
          <div className="absolute top-3 right-3 opacity-70 group-hover:opacity-0 transition-opacity duration-200">
            <div className="w-7 h-7 rounded-full bg-background/85 backdrop-blur-sm flex items-center justify-center border border-border/60">
              <Instagram className="h-3.5 w-3.5 text-foreground" />
            </div>
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
  const gradient = TYPE_GRADIENTS[item.type]
  return (
    <div className={cn("absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 bg-gradient-to-br", gradient)}>
      {/* Icon */}
      <div className="relative shrink-0">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center">
          <Footprints className="h-7 w-7 text-primary/55" />
        </div>
        <div className="absolute -inset-1.5 rounded-3xl border border-primary/10 animate-pulse" />
      </div>

      {/* Content */}
      <div className="text-center space-y-2">
        <p className="text-xs font-bold text-foreground/50 uppercase tracking-[0.14em]">
          {TYPE_LABELS[item.type]}
        </p>
        <p className="text-sm font-bold text-foreground/70 leading-snug line-clamp-2">
          {item.title}
        </p>
        {item.description && (
          <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
            {item.description}
          </p>
        )}
      </div>

      {/* Instagram handle */}
      <div className="flex items-center gap-1.5">
        <Instagram className="h-3 w-3 text-primary/45" />
        <span className="text-[10px] text-muted-foreground font-medium">@marianbreiman</span>
      </div>
    </div>
  )
}
