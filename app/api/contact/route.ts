import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "marianbreiman@gmail.com"
  let body: { name?: string; email?: string; subject?: string; message?: string }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 })
  }

  const { name, email, subject, message } = body

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email no válido." }, { status: 400 })
  }

  if (!apiKey) {
    console.error("RESEND_API_KEY no configurado")
    return NextResponse.json(
      { error: "Servicio de email no configurado. Por favor escribime directo a marianbreiman@gmail.com." },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: [
        `Nombre: ${name}`,
        `Email:  ${email}`,
        `Asunto: ${subject}`,
        "",
        "Mensaje:",
        message,
        "",
        "---",
        "Enviado desde marianbreiman.vercel.app",
      ].join("\n"),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "No se pudo enviar el mensaje. Intentá de nuevo." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Error inesperado. Intentá de nuevo más tarde." }, { status: 500 })
  }
}
