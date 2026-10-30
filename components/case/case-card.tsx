import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"
import { cn } from "@/lib/utils"

// Card de un caso. `featured` la muestra grande, con imagen.
export function CaseCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  const cover = study.images.find((i) => !i.pending && i.device === "desktop")

  return (
    <Link
      href={`/projects/${study.slug}`}
      className={cn(
        "project-card group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        featured && "md:grid md:grid-cols-[1fr_1.1fr]",
      )}
    >
      <div className={cn("flex h-full flex-col gap-5 p-7", featured && "md:p-10 md:justify-between")}>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">{study.kicker}</p>
          <h3
            className={cn(
              "font-bold tracking-tight group-hover:text-primary transition-colors",
              featured ? "text-3xl md:text-4xl" : "text-xl",
            )}
          >
            {study.title}
          </h3>
          <p className={cn("text-muted-foreground leading-relaxed", featured ? "text-base" : "text-sm")}>
            {study.summary}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="border-t border-border pt-4">
            <p className={cn("font-bold tabular-nums tracking-tight", featured ? "text-3xl" : "text-2xl")}>
              {study.headline.value}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">{study.headline.label}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Ver caso
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      {featured && cover?.src && (
        <div className="relative hidden md:block bg-muted/40 overflow-hidden border-l border-border">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 55vw, 100vw"
          />
        </div>
      )}
    </Link>
  )
}
