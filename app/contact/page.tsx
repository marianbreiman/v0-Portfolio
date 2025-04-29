"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Linkedin, Mail, Github, Send, CheckCircle, FileText, MapPin, Phone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  subject: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // En una aplicación real, enviarías los datos del formulario a tu servidor
    console.log(values)

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
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
                    <Button onClick={() => setIsSubmitted(false)}>Enviar otro mensaje</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Enviar un mensaje</h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tu nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tu email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Asunto</FormLabel>
                              <FormControl>
                                <Input placeholder="Asunto del mensaje" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensaje</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Tu mensaje" className="min-h-[150px]" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Enviar mensaje
                        </Button>
                      </form>
                    </Form>
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
