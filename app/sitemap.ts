import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://portfolio-sosaulises.vercel.app"

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/proyectos/${project.slug}`,
    changeFrequency: "monthly",
    priority: project.featured ? 0.8 : 0.6,
  }))

  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...projectRoutes,
  ]
}
