import type { Metadata } from "next";

import { ProjectListing } from "@/components/projects/project-listing";
import { getProjectSummaries, projectCategories } from "@/lib/projects";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  "Projects | Rishi Chaudhari | Portfolio",
  "Browse the portfolio’s project case studies, including the Retail AI Platform and AD² Restormer.",
  "/projects",
);

type ProjectsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { category } = await searchParams;
  const activeFilter = projectCategories.includes(category as (typeof projectCategories)[number])
    ? (category as (typeof projectCategories)[number])
    : "All";

  return <ProjectListing projects={getProjectSummaries()} activeFilter={activeFilter} />;
}