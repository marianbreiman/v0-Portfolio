"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Inicio",      path: "/" },
  { name: "Acerca",      path: "/about" },
  { name: "Habilidades", path: "/skills" },
  { name: "Proyectos",   path: "/projects" },
  { name: "Contacto",    path: "/contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileMenuOpen(false) }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-2 glass-effect shadow-sm shadow-primary/5"
          : "py-4 bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Inicio"
        >
          <Logo className="h-9 w-9 transition-transform duration-300 group-hover:scale-110" />
          <span className="font-heading font-bold text-base hidden sm:inline-block transition-colors duration-300 group-hover:text-primary">
            Mariano Breiman
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 group py-1",
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
                {/* Active indicator */}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-primary to-secondary transition-all duration-400",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            )
          })}
          <ModeToggle />
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="transition-all duration-200 hover:scale-110"
          >
            <span className={cn("transition-all duration-300", mobileMenuOpen ? "rotate-90" : "rotate-0")}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 glass-effect md:hidden animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full gap-10">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-2xl font-bold transition-all duration-300 animate-slide-in",
                  pathname === item.path ? "gradient-text" : "text-foreground/70 hover:text-foreground",
                )}
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
