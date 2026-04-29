"use client"

import { useEffect, useRef, useCallback } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 })
  const frameRef = useRef<number>(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    targetMouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener("resize", resize)
    resize()
    window.addEventListener("mousemove", handleMouseMove)

    const orbs = [
      { x: 0.15, y: 0.2,  r: 0.45, phase: 0,   speed: 0.0004 },
      { x: 0.82, y: 0.75, r: 0.38, phase: 2.1,  speed: 0.0003 },
      { x: 0.5,  y: 0.5,  r: 0.28, phase: 4.2,  speed: 0.0006 },
    ]

    let t = 0

    const animate = () => {
      t += 1

      const mx = mouseRef.current
      const tx = targetMouseRef.current
      mx.x += (tx.x - mx.x) * 0.04
      mx.y += (tx.y - mx.y) * 0.04

      ctx.clearRect(0, 0, width, height)

      const isDark = document.documentElement.classList.contains("dark")

      orbs.forEach((orb, i) => {
        const wobbleX = orb.x + Math.sin(t * orb.speed + orb.phase) * 0.08
        const wobbleY = orb.y + Math.cos(t * orb.speed * 0.7 + orb.phase) * 0.06
        const attractX = wobbleX + (mx.x - 0.5) * (i === 2 ? 0.06 : 0.03)
        const attractY = wobbleY + (mx.y - 0.5) * (i === 2 ? 0.06 : 0.03)

        const cx = attractX * width
        const cy = attractY * height
        const radius = orb.r * Math.max(width, height)
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)

        if (isDark) {
          if (i === 0) {
            grad.addColorStop(0,   "rgba(30, 64, 124, 0.22)")
            grad.addColorStop(0.5, "rgba(30, 64, 124, 0.08)")
            grad.addColorStop(1,   "rgba(30, 64, 124, 0)")
          } else if (i === 1) {
            grad.addColorStop(0,   "rgba(255, 150, 160, 0.16)")
            grad.addColorStop(0.5, "rgba(255, 150, 160, 0.05)")
            grad.addColorStop(1,   "rgba(255, 150, 160, 0)")
          } else {
            grad.addColorStop(0,   "rgba(100, 140, 220, 0.12)")
            grad.addColorStop(0.6, "rgba(100, 140, 220, 0.03)")
            grad.addColorStop(1,   "rgba(100, 140, 220, 0)")
          }
        } else {
          // Light mode — vibrant, luminous glows on near-white background
          if (i === 0) {
            grad.addColorStop(0,   "rgba(79, 108, 246, 0.26)")
            grad.addColorStop(0.4, "rgba(79, 108, 246, 0.10)")
            grad.addColorStop(1,   "rgba(79, 108, 246, 0)")
          } else if (i === 1) {
            grad.addColorStop(0,   "rgba(236, 72, 153, 0.22)")
            grad.addColorStop(0.5, "rgba(236, 72, 153, 0.07)")
            grad.addColorStop(1,   "rgba(236, 72, 153, 0)")
          } else {
            grad.addColorStop(0,   "rgba(109, 40, 217, 0.20)")
            grad.addColorStop(0.6, "rgba(109, 40, 217, 0.06)")
            grad.addColorStop(1,   "rgba(109, 40, 217, 0)")
          }
        }

        ctx.fillStyle = grad
        ctx.fillRect(0, 0, width, height)
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
