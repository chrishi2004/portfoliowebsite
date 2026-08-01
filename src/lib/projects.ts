import projectsData from "../../content/projects.json";

import type { ProjectCardSummary, ProjectData, ProjectCategory } from "@/types/project";

export const projects = projectsData.projects as ProjectData[];

export const projectCategories: Array<"All" | ProjectCategory> = ["All", "AI", "Analytics", "Full Stack", "Leadership"];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSummaries(): ProjectCardSummary[] {
  return projects.map(({ slug, title, heroImage, category, description, tags }) => ({
    slug,
    title,
    heroImage,
    category,
    description,
    tags,
  }));
}