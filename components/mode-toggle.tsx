"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [open, setOpen] = useState(false)

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    // No cerramos el dropdown automáticamente
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:scale-110 transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Cambiar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="backdrop-blur-md bg-background/95 border border-primary/20 shadow-xl min-w-[120px]"
        sideOffset={5}
      >
        <DropdownMenuItem
          onClick={() => handleThemeChange("light")}
          className={`hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-200 cursor-pointer ${
            theme === "light" ? "bg-primary/10" : ""
          }`}
        >
          <Sun className="mr-2 h-4 w-4" />
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("dark")}
          className={`hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-200 cursor-pointer ${
            theme === "dark" ? "bg-primary/10" : ""
          }`}
        >
          <Moon className="mr-2 h-4 w-4" />
          Oscuro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange("system")}
          className={`hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-200 cursor-pointer ${
            theme === "system" ? "bg-primary/10" : ""
          }`}
        >
          <div className="mr-2 h-4 w-4 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-current" />
          </div>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
