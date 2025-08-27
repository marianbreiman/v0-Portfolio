import { redirect } from "next/navigation"

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
  {
    slug: "future",
    title: "Future Project",
    category: "Upcoming Project",
    client: "FutureClient",
    year: "2024",
    role: "UX/UI Designer",
    heroImage: "/placeholder.svg?height=800&width=1600",
    overview: "Details of the future project will be revealed soon.",
    challenge: "The challenge is to design a project that meets future client needs and exceeds expectations.",
    solution: "I will design a user interface that is innovative, user-friendly, and meets the client's requirements.",
    process: [],
    outcome: "The outcome will be a successful project that is well-received by the client and users.",
    nextProject: "",
  },
]

// Lista de proyectos válidos
const validProjects = ["future"]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Si el slug es válido, redirigir a la ruta específica
  if (validProjects.includes(params.slug)) {
    redirect(`/projects/${params.slug}`)
  }

  // Si no es un proyecto válido, redirigir a Future por defecto
  redirect("/projects/future")
}

// Generar parámetros estáticos para los proyectos válidos
export function generateStaticParams() {
  return validProjects.map((slug) => ({
    slug: slug,
  }))
}
