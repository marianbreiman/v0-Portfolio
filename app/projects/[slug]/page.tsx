import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SectionHeading } from "@/components/section-heading"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Mock project data - in a real app, this would come from a database or CMS
const projects = [
  {
    slug: "health-track",
    title: "HealthTrack App",
    category: "Mobile App Design",
    client: "HealthTech Inc.",
    year: "2023",
    role: "Lead UX/UI Designer",
    heroImage: "/placeholder.svg?height=800&width=1600",
    overview:
      "HealthTrack is a comprehensive health monitoring application designed to help users track their fitness goals, medical appointments, and overall wellbeing. The app provides personalized insights and recommendations based on user data.",
    challenge:
      "The main challenge was to create an intuitive interface that could handle complex health data while remaining accessible to users of all ages and technical abilities. The app needed to present medical information clearly without overwhelming users.",
    solution:
      "I designed a modular interface with customizable dashboards that allow users to focus on the health metrics most relevant to them. The app uses a clean, approachable visual language with clear information hierarchy and intuitive navigation patterns.",
    process: [
      {
        title: "Research",
        description:
          "Conducted user interviews, competitive analysis, and stakeholder workshops to understand user needs and business requirements.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Information Architecture",
        description:
          "Created user flows and site maps to organize the app's features and content in a logical, user-centered structure.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Wireframing",
        description:
          "Developed low-fidelity wireframes to establish layout, information hierarchy, and core functionality.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Visual Design",
        description:
          "Created a clean, accessible visual language with a calming color palette and clear typography to make health data easy to understand.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Built interactive prototypes and conducted usability testing with target users to refine the design based on feedback.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    outcome:
      "The HealthTrack app launched successfully with positive user feedback, particularly regarding its ease of use and clear presentation of complex health data. User engagement metrics exceeded initial targets by 35%, and the app has maintained a 4.8/5 rating in app stores.",
    nextProject: "eco-commerce",
  },
  {
    slug: "eco-commerce",
    title: "Eco Commerce Platform",
    category: "E-commerce Website",
    client: "GreenMarket",
    year: "2022",
    role: "UX/UI Designer",
    heroImage: "/placeholder.svg?height=800&width=1600",
    overview:
      "An online marketplace for eco-friendly products with a focus on sustainability and ethical consumption. The platform connects environmentally conscious consumers with verified sustainable brands.",
    challenge:
      "The challenge was to create a shopping experience that highlights the environmental benefits of products without compromising on the convenience and familiarity of traditional e-commerce platforms.",
    solution:
      "I designed a user interface that seamlessly integrates sustainability metrics into the shopping experience, allowing users to make informed choices based on their environmental values.",
    process: [
      {
        title: "Research",
        description:
          "Conducted user interviews and surveys to understand the shopping habits and priorities of environmentally conscious consumers.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "User Flows",
        description:
          "Mapped out key user journeys, focusing on product discovery, sustainability verification, and checkout processes.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Wireframing",
        description:
          "Created wireframes for key pages and interactions, establishing a clear information hierarchy and navigation structure.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Visual Design",
        description:
          "Developed a nature-inspired visual language that communicates trust, authenticity, and sustainability through earthy colors, organic shapes, and thoughtful typography.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Created interactive prototypes and conducted usability testing to refine the shopping experience and sustainability features.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
    outcome:
      "The Eco Commerce Platform has successfully connected over 200 sustainable brands with environmentally conscious consumers. The platform has seen a 45% increase in repeat purchases and has received industry recognition for its innovative approach to sustainable e-commerce.",
    nextProject: "financial-dashboard",
  },
  {
    slug: "financial-dashboard",
    title: "Financial Dashboard",
    category: "Web Application",
    client: "InvestWise",
    year: "2022",
    role: "UX/UI Designer",
    heroImage: "/placeholder.svg?height=800&width=1600",
    overview:
      "A comprehensive dashboard for financial analysis and portfolio management with intuitive data visualization.",
    challenge:
      "The challenge was to present complex financial data in an accessible way that helps users make informed investment decisions without feeling overwhelmed.",
    solution:
      "I designed a modular dashboard with customizable widgets and clear data visualizations that allow users to monitor their investments at a glance while providing tools for deeper analysis.",
    process: [],
    outcome:
      "The Financial Dashboard has helped users improve their investment performance by providing clear insights and actionable information. User engagement has increased by 60% compared to the previous version of the platform.",
    nextProject: "health-track",
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const nextProject = projects.find((p) => p.slug === project.nextProject)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container">
          <ScrollAnimation>
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="max-w-3xl mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.category}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-12">
              <Image src={project.heroImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <ScrollAnimation className="space-y-2">
              <h3 className="font-bold">Client</h3>
              <p>{project.client}</p>
            </ScrollAnimation>

            <ScrollAnimation delay={100} className="space-y-2">
              <h3 className="font-bold">Year</h3>
              <p>{project.year}</p>
            </ScrollAnimation>

            <ScrollAnimation delay={200} className="space-y-2">
              <h3 className="font-bold">Role</h3>
              <p>{project.role}</p>
            </ScrollAnimation>

            <ScrollAnimation delay={300} className="space-y-2">
              <h3 className="font-bold">Deliverables</h3>
              <p>UX Research, UI Design, Prototyping</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollAnimation>
              <SectionHeading title="Overview" className="mb-6" />
              <div className="prose dark:prose-invert">
                <p>{project.overview}</p>
              </div>
            </ScrollAnimation>

            <div>
              <ScrollAnimation delay={100}>
                <SectionHeading title="Challenge" className="mb-6" />
                <div className="prose dark:prose-invert">
                  <p>{project.challenge}</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200} className="mt-8">
                <SectionHeading title="Solution" className="mb-6" />
                <div className="prose dark:prose-invert">
                  <p>{project.solution}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Design Process"
              subtitle="A look at how the project evolved from concept to completion."
              centered
            />
          </ScrollAnimation>

          <div className="space-y-24 mt-16">
            {project.process.map((step, index) => (
              <ScrollAnimation key={index}>
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                  </div>

                  <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                    <div className="relative h-[300px] rounded-lg overflow-hidden border">
                      <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading title="Outcome" subtitle="The impact and results of the project." centered />

            <div className="max-w-3xl mx-auto text-center mt-8">
              <p className="text-lg">{project.outcome}</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Next Project Section */}
      {nextProject && (
        <section className="py-16">
          <div className="container">
            <ScrollAnimation>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-8">Next Project</h2>
                <Link href={`/projects/${nextProject.slug}`} className="group">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={nextProject.heroImage || "/placeholder.svg"}
                      alt={nextProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <div className="text-white">
                        <p className="text-sm font-medium mb-2">{nextProject.category}</p>
                        <h3 className="text-2xl font-bold">{nextProject.title}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      )}
    </div>
  )
}
