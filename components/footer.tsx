import Link from "next/link"
import { Logo } from "@/components/logo"
import { Linkedin, Mail, Dribbble } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-heading font-bold">Mariano Breiman</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Product Designer creando experiencias digitales centradas en las personas
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: "https://linkedin.com/in/mariano-breiman", icon: Linkedin, label: "LinkedIn" },
              { href: "https://behance.net/marianbreiman", icon: Dribbble, label: "Behance" },
              { href: "mailto:marianbreiman@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mariano Breiman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
