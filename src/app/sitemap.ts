import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/data/servicesData";
import { ALL_PROJECTS } from "@/data/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.worldartglass.net";
  const lastModified = new Date();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/saint-gobain`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 15 Dedicated Services URLs
  const servicePages: MetadataRoute.Sitemap = ALL_SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Project Case Studies URLs
  const projectPages: MetadataRoute.Sitemap = ALL_PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}
