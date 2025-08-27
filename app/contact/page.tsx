"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Mail, Github, Send, CheckCircle, FileText, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Por favor completa todos los campos")
      return
    }

    // Simular envío del formulario
    console.log("Form data:", formData)
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">Contacto</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones. Trabajemos juntos para crear algo
                increíble.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollAnimation>
              <div className="space-y-8">
                <SectionHeading
                  title="Información de contacto"
                  subtitle="No dudes en contactarme a través de cualquiera de estos canales."
                />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <Link
                        href="mailto:marianbreiman@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        marianbreiman@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Teléfono</h3>
                      <Link
                        href="tel:+5491145989878"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (+54) 11 4598-9878
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">Ubicación</h3>
                      <p className="text-muted-foreground">Palermo, CABA, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Linkedin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">LinkedIn</h3>
                      <Link
                        href="https://linkedin.com/in/mariano-breiman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/mariano-breiman
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Github className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold">GitHub</h3>
                      <Link
                        href="https://github.com/marianbreiman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/marianbreiman
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-bold mb-4">Curriculum Vitae</h3>
                  <Button asChild>
                    <Link href="/mariano-breiman-cv.pdf" download>
                      <FileText className="mr-2 h-4 w-4" />
                      Descargar CV
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-card rounded-lg border p-6 md:p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <CheckCircle className="h-16 w-16 text-primary mb-6" />
                    <h2 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h2>
                    <p className="text-muted-foreground mb-6">
                      Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                    <Button onClick={resetForm}>Enviar otro mensaje</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Enviar un mensaje</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Nombre
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Tu email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Asunto
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Asunto del mensaje"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Mensaje
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tu mensaje"
                          className="min-h-[150px]"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
