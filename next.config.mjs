import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: __dirname,
  // Los casos académicos salieron del sitio (siguen en Behance).
  // Redirigimos sus URLs viejas para que ningún link compartido dé 404.
  async redirects() {
    const old = [
      "future-prototype", "uala-redesign", "orbit-landing", "consorcio-madrid", "alleata-redesign",
      "uala", "future", "orbit", "alleata",
    ]
    return old.map((slug) => ({ source: `/projects/${slug}`, destination: "/projects", permanent: false }))
  },
}

export default nextConfig