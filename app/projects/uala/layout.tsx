import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rediseño App Ualá | Mariano Breiman",
  description:
    "Caso de estudio del rediseño de la app Ualá, proyecto académico enfocado en mejorar la experiencia de usuario de la billetera digital.",
}

export default function UalaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
