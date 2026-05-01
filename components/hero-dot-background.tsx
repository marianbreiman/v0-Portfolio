"use client"

import { useEffect, useRef } from "react"

// ── Grid ───────────────────────────────────────────────────────────
const SPACING    = 28      // px between dot centers
const DOT_R      = 0.85   // dot radius px

// ── Wave ───────────────────────────────────────────────────────────
const WAVE_SPEED = 0.0022  // ~8 s full sweep at 60 fps (was 0.0016 / 11 s)
const WAVE_HALF  = 0.12   // normalized half-width — slightly wider for smooth fade
const PAUSE_MS   = 5000   // ms idle between sweeps

// ── Mouse spotlight ─────────────────────────────────────────────────
const MOUSE_R    = 22     // tight radius — subtle, not a spotlight

// ── Colors ─────────────────────────────────────────────────────────
const DARK_RGB        = [175, 205, 245] as const   // cool blue-white
const DARK_BASE_A     = 0.18
const DARK_WAVE_PEAK  = 0.70
const DARK_MOUSE_PEAK = 0.52

const LIGHT_RGB        = [40, 70, 160] as const    // navy más saturado
const LIGHT_BASE_A     = 0.22
const LIGHT_WAVE_PEAK  = 0.58
const LIGHT_MOUSE_PEAK = 0.42

export function HeroDotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef  = useRef({ x: -9999, y: -9999 })
  const frameRef  = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const finePointer   = window.matchMedia("(pointer: fine)").matches
    const dpr           = Math.min(window.devicePixelRatio || 1, 2)

    let lw = 0, lh = 0

    const resize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (!w || !h) return
      lw = w; lh = h
      canvas.width  = lw * dpr
      canvas.height = lh * dpr
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Mouse tracking — global so content on top doesn't block it
    const onMove = (e: MouseEvent) => {
      if (!finePointer) return
      const rect = canvas.getBoundingClientRect()
      const inside =
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top  && e.clientY <= rect.bottom
      mouseRef.current = inside
        ? { x: e.clientX - rect.left, y: e.clientY - rect.top }
        : { x: -9999, y: -9999 }
    }
    window.addEventListener("mousemove", onMove, { passive: true })

    // Wave state
    let waveX    = -WAVE_HALF
    let pausing  = false
    let pauseEnd = 0

    const draw = () => {
      if (!lw || !lh) { frameRef.current = requestAnimationFrame(draw); return }

      // Reset transform every frame (handles resize changes cleanly)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, lw, lh)

      const isDark = document.documentElement.classList.contains("dark")
      const mx = mouseRef.current

      // Advance wave
      if (!reducedMotion) {
        const now = performance.now()
        if (pausing) {
          if (now >= pauseEnd) { pausing = false; waveX = -WAVE_HALF }
        } else {
          waveX += WAVE_SPEED
          if (waveX > 1 + WAVE_HALF) { pausing = true; pauseEnd = now + PAUSE_MS }
        }
      }

      const [R, G, B] = isDark ? DARK_RGB : LIGHT_RGB
      const baseA     = isDark ? DARK_BASE_A  : LIGHT_BASE_A
      const wavePeak  = isDark ? DARK_WAVE_PEAK  : LIGHT_WAVE_PEAK
      const mousePeak = isDark ? DARK_MOUSE_PEAK : LIGHT_MOUSE_PEAK
      const maxA      = isDark ? 0.88 : 0.65

      const cols = Math.ceil(lw / SPACING) + 1
      const rows = Math.ceil(lh / SPACING) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING
          const y = r * SPACING

          // Deterministic per-dot noise — makes the wave front feel organic, not a rigid band
          const noise = Math.sin(r * 1.7 + c * 2.3) * 0.038

          // Wave contribution — bell curve falloff + noise offset
          let waveBoost = 0
          if (!reducedMotion && !pausing) {
            const d = Math.abs(x / lw - waveX + noise) / WAVE_HALF
            if (d < 1) waveBoost = 1 - d * d
          }

          // Mouse contribution — linear falloff, tight radius
          let mouseBoost = 0
          if (finePointer) {
            const dx = x - mx.x
            const dy = y - mx.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < MOUSE_R) mouseBoost = 1 - dist / MOUSE_R
          }

          const totalBoost = waveBoost * (wavePeak - baseA) + mouseBoost * (mousePeak - baseA)
          const a = Math.min(baseA + totalBoost, maxA)

          // Glow halo — dark mode only, only for significantly boosted dots
          if (isDark && totalBoost > 0.06) {
            ctx.fillStyle = `rgba(${R},${G},${B},${(totalBoost * 0.11).toFixed(3)})`
            ctx.beginPath()
            ctx.arc(x, y, DOT_R * 5.5, 0, Math.PI * 2)
            ctx.fill()
          }

          // Core dot
          ctx.fillStyle = `rgba(${R},${G},${B},${a.toFixed(3)})`
          ctx.beginPath()
          ctx.arc(x, y, DOT_R, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frameRef.current)
      ro.disconnect()
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
