import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { projectCategories } from "@/lib/projects";
import type { ProjectCardSummary, ProjectCategory } from "@/types/project";
import { ProjectListingCard } from "@/components/projects/project-listing-card";
import Link from "next/link";

type ProjectListingProps = {
  projects: ProjectCardSummary[];
  activeFilter: "All" | ProjectCategory;
};

export function ProjectListing({ projects, activeFilter }: ProjectListingProps) {
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">Project case studies</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            A curated listing of product and AI work that links into the dynamic case-study experience, giving visitors a clearer path into the portfolio narrative.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <Button key={category} asChild variant={activeFilter === category ? "primary" : "secondary"} size="sm">
              <Link href={category === "All" ? "/projects" : `/projects?category=${encodeURIComponent(category)}`}>{category}</Link>
            </Button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectListingCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
}