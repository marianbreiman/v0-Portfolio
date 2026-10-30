import Image from "next/image"
import { ImageOff } from "lucide-react"
import type { CaseImage as CaseImageData } from "@/lib/case-studies"
import { cn } from "@/lib/utils"

// Si la imagen está pendiente, se muestra un recuadro gris que dice qué captura va ahí.
// Para reemplazarla: poné el archivo en /public/casos/multitravel y completá `src`,
// `width` y `height` en lib/case-studies.ts (y sacá `pending`).
export function CaseImage({ image, className }: { image: CaseImageData; className?: string }) {
  const isMobile = image.device === "mobile"

  if (image.pending || !image.src) {
    // En producción no se muestran los recuadros pendientes; en preview y local, sí.
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") return null
    return (
      <figure className={cn("space-y-3", className)}>
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-muted/60 p-6 text-center",
            isMobile ? "aspect-[3/4] max-w-[240px] mx-auto w-full" : "aspect-[16/10]",
          )}
        >
          <ImageOff className="h-6 w-6 text-muted-foreground/60" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Captura pendiente</p>
          <p className="text-sm text-muted-foreground max-w-xs">{image.alt}</p>
        </div>
        <figcaption className="text-sm text-muted-foreground leading-relaxed">{image.caption}</figcaption>
      </figure>
    )
  }

  return (
    <figure className={cn("space-y-3", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border bg-muted/30",
          isMobile && "max-w-[300px] mx-auto",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width ?? 1600}
          height={image.height ?? 1000}
          className="w-full h-auto"
          sizes={isMobile ? "300px" : "(min-width: 1024px) 900px, 100vw"}
        />
      </div>
      <figcaption className="text-sm text-muted-foreground leading-relaxed">{image.caption}</figcaption>
    </figure>
  )
}
