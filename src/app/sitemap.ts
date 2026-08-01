import type { MetadataRoute } from "next";

import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/seo";

const staticPages = [
  "/",
  "/about",
  "/projects",
  "/experience",
  "/leadership",
  "/skills",
  "/achievements",
  "/certifications",
  "/contact",
  "/resume",
  "/design-system",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: (path === "/" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly"
        | "always"
        | "hourly"
        | "daily"
        | "yearly"
        | "never",
      priority: path === "/" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as
        | "weekly"
        | "monthly"
        | "always"
        | "hourly"
        | "daily"
        | "yearly"
        | "never",
      priority: 0.8,
    })),
  ];
}
