import Link from "next/link"
import { Logo } from "@/components/logo"
import { Linkedin, Mail, Dribbble } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
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

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/in/mariano-breiman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://behance.net/marianbreiman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="Behance"
            >
              <Dribbble className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:marianbreiman@gmail.com"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mariano Breiman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
