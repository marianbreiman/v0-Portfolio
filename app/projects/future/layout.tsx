import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyecto Future | Mariano Breiman",
  description:
    "Caso de estudio de Future, una aplicación que ayuda a estudiantes a elegir su carrera universitaria y dónde estudiarla.",
}

export default function FutureLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
