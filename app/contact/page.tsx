"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { HeroDotBackground } from "@/components/hero-dot-background"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Mail, Github, Send, FileText, MapPin, ArrowUpRight } from "lucide-react"

const CONTACT_CHANNELS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "Para trabajar juntos o conectar",
    display: "mariano-breiman",
    href: "https://www.linkedin.com/in/mariano-breiman/",
    featured: true,
  },
  {
    icon: Mail,
    label: "Email",
    sub: "Para consultas directas",
    display: "marianbreiman@gmail.com",
    href: "mailto:marianbreiman@gmail.com",
    featured: false,
  },
  {
    icon: Github,
    label: "GitHub",
    sub: "Código y proyectos",
    display: "marianbreiman",
    href: "https://github.com/marianbreiman",
    featured: false,
  },
]

type Status = "idle" | "loading" | "success" | "error"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors]     = useState<Record<string, string>>({})
  const [status, setStatus]     = useState<Status>("idle")
  const [serverError, setServerError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim())    errs.name    = "Ingresá tu nombre."
    if (!formData.email.trim())   errs.email   = "Ingresá tu email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Email no válido."
    if (!formData.subject.trim()) errs.subject = "Ingresá un asunto."
    if (!formData.message.trim()) errs.message = "Escribí tu mensaje."
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus("loading")
    setServerError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data: { ok?: boolean; error?: string } = await res.json()

      if (!res.ok || !data.ok) {
        setServerError(data.error ?? "No se pudo enviar el mensaje. Intentá de nuevo.")
        setStatus("error")
        return
      }

      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setServerError("Error de red. Verificá tu conexión e intentá de nuevo.")
      setStatus("error")
    }
  }

  return (
    <div className="pt-24">

      {/* ── Hero ── */}
      <section className="pt-20 pb-14 md:pt-32 md:pb-20 relative overflow-hidden hero-animated-bg">
        <div
          className="orb w-[600px] h-[600px] -right-20 -top-16 opacity-65"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)/0.26) 0%, transparent 70%)" }}
        />
        <div
          className="orb orb-secondary w-[480px] h-[480px] -left-20 bottom-0 opacity-50"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.20) 0%, transparent 70%)" }}
        />
        <HeroDotBackground />

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div style={{ animation: "badge-pop 0.55s var(--ease-out-expo) 0.05s both" }}>
              <p className="chip mx-auto">Hablemos</p>
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
              style={{ animation: "hero-word-in 0.9s var(--ease-out-expo) 0.18s both" }}
            >
              Trabajemos <span className="gradient-text">juntos</span>
            </h1>
            <div
              className="h-0.5 w-16 rounded-full mx-auto"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
                animation: "line-grow 0.8s var(--ease-out-expo) 0.45s both",
                transformOrigin: "center",
              }}
            />
            <p
              className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto"
              style={{ animation: "slide-in 0.7s ease-out 0.5s both" }}
            >
              Abierto a nuevas oportunidades, colaboraciones y proyectos de diseño.
              Contame qué estás construyendo.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ── Contacto principal ── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 xl:gap-16 items-start">

            {/* Left: canales */}
            <ScrollAnimation>
              <div className="space-y-8">
                <div>
                  <p className="chip mb-3">Contacto</p>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Canales directos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    LinkedIn para oportunidades o proyectos, email para consultas puntuales.
                  </p>
                </div>

                <div className="space-y-3">
                  {CONTACT_CHANNELS.map((ch) => {
                    const Icon = ch.icon
                    const isExternal = !ch.href.startsWith("mailto")
                    return (
                      <a
                        key={ch.label}
                        href={ch.href}
                        target={isExternal ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-between gap-4 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                          ch.featured
                            ? "border-primary/25 bg-primary/5 hover:border-primary/40 hover:bg-primary/8"
                            : "border-border bg-card hover:border-primary/25 hover:bg-muted/40"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                            ch.featured
                              ? "bg-primary/15 text-primary group-hover:bg-primary/25"
                              : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className={`text-sm font-bold ${ch.featured ? "text-primary" : "text-foreground"}`}>
                              {ch.label}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">{ch.display}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </a>
                    )
                  })}
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Palermo, CABA, Argentina · Disponible de forma remota</span>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Curriculum Vitae</p>
                  <Button asChild variant="outline" className="btn-primary-glow gap-2">
                    <Link href="/cv-mariano-breiman-ats.pdf" target="_blank" rel="noopener noreferrer" download>
                      <FileText className="h-4 w-4" />
                      Descargar CV
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right: formulario Resend */}
            <ScrollAnimation delay={150}>
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-bold">Enviarme un mensaje</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Te respondo lo antes posible.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="rounded-xl bg-primary/8 border border-primary/20 p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-bold text-foreground">Mensaje enviado.</p>
                    <p className="text-sm text-muted-foreground">
                      Te voy a responder apenas pueda.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nombre <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name" name="name"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email" name="email" type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="subject" name="subject"
                        placeholder="¿De qué querés hablar?"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-destructive" : ""}
                      />
                      {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message" name="message"
                        placeholder="Contame qué estás construyendo..."
                        className={`min-h-[140px] ${errors.message ? "border-destructive" : ""}`}
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-destructive rounded-lg border border-destructive/30 bg-destructive/8 px-4 py-3">
                        {serverError}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full btn-primary-glow gap-2 disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollAnimation>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Preguntas frecuentes"
              subtitle="Respuestas a preguntas comunes sobre trabajar juntos."
              centered
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                question: "¿Cuál es tu proceso de diseño?",
                answer:
                  "Mi proceso de diseño típicamente incluye descubrimiento, investigación, ideación, prototipado, pruebas e implementación. Adapto este proceso según las necesidades específicas de cada proyecto.",
              },
              {
                question: "¿Cuánto tiempo toma un proyecto típico?",
                answer:
                  "Los tiempos de proyecto varían según el alcance y la complejidad. Un rediseño simple de sitio web podría tomar 4-6 semanas, mientras que una aplicación compleja podría tomar 3-6 meses. Proporcionaré un cronograma detallado durante nuestra consulta inicial.",
              },
              {
                question: "¿Trabajas de forma remota?",
                answer:
                  "Sí, trabajo de forma remota con clientes de todo el mundo. Utilizo herramientas colaborativas como Figma, Slack y Zoom para asegurar una comunicación fluida y una gestión eficiente del proyecto.",
              },
              {
                question: "¿Qué información necesitas para comenzar un proyecto?",
                answer:
                  "Para comenzar, generalmente necesito información sobre los objetivos de negocio, público objetivo, requisitos del proyecto, cronograma y presupuesto. Proporcionaré un cuestionario detallado para recopilar esta información.",
              },
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-card rounded-lg border p-6">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
