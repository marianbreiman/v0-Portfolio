"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
      className="h-9 w-9 hover:scale-110 transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 focus-visible:ring-2 focus-visible:ring-primary"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}
