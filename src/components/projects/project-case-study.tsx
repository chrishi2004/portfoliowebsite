"use client";

import Image from "next/image";
import Link from "next/link";

import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { MarkdownBlock } from "@/components/projects/markdown-block";
import { StatCard } from "@/components/design-system/stat-card";
import type { ProjectCaseStudy, ProjectFeature } from "@/types/project";

type ProjectCaseStudyProps = {
  project: ProjectCaseStudy;
};

function FeatureItem({ feature }: { feature: ProjectFeature }) {
  if (typeof feature === "string") {
    return <li className="rounded-[var(--radius)] border border-border bg-background px-4 py-3 text-sm leading-7 text-muted-foreground">{feature}</li>;
  }

  return (
    <li className="rounded-[var(--radius)] border border-border bg-background px-4 py-4">
      <h3 className="font-heading text-base font-bold tracking-tight text-foreground">{feature.title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{feature.description}</p>
    </li>
  );
}

export function ProjectCaseStudyPage({ project }: ProjectCaseStudyProps) {
  return (
    <div className="space-y-0">
      <Section className="pt-16 md:pt-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary">{project.category}</Badge>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-balance md:text-7xl">{project.title}</h1>
          </div>
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-soft">
            <div className="relative aspect-[16/9]">
              <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority sizes="100vw" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 px-6 py-6">
              <h2 className="font-heading text-2xl font-bold tracking-tight">Problem</h2>
              <MarkdownBlock content={project.problem} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4 px-6 py-6">
              <h2 className="font-heading text-2xl font-bold tracking-tight">Objectives</h2>
              <MarkdownBlock content={project.objectives} />
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <Card>
          <CardContent className="space-y-4 px-6 py-6">
            <h2 className="font-heading text-2xl font-bold tracking-tight">Business Need</h2>
            <MarkdownBlock content={project.businessNeed} />
          </CardContent>
        </Card>
      </Section>

      <Section>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight">Architecture Diagram</h2>
          <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-soft">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.architectureDiagram}
                alt={`${project.title} architecture diagram`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 72rem"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech.name} variant="outline" className="border-border bg-muted text-foreground">
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight">Features</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <FeatureItem key={typeof feature === "string" ? feature : feature.title + index} feature={feature} />
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight">Challenges</h2>
            <div className="space-y-4">
              {project.challenges.map((item) => (
                <Card key={item.challenge}>
                  <CardContent className="space-y-3 px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Challenge</p>
                    <p className="text-sm leading-7 text-foreground">{item.challenge}</p>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Solution</p>
                    <p className="text-sm leading-7 text-muted-foreground">{item.solution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold tracking-tight">Solutions</h2>
            <Card>
              <CardContent className="space-y-3 px-5 py-5">
                <p className="text-sm leading-7 text-muted-foreground">
                  Each challenge is paired with a practical response so the story stays scannable while highlighting the reasoning behind the design decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight">Metrics</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {project.metrics.map((metric) => (
              <StatCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight">Screenshots</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {project.screenshots.map((src, index) => (
              <Modal key={src}>
                <ModalTrigger asChild>
                  <button
                    type="button"
                    aria-label={`${project.title} screenshot ${index + 1}`}
                    className="group relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] border border-border bg-muted text-left"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </button>
                </ModalTrigger>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>{project.title} screenshot {index + 1}</ModalTitle>
                  </ModalHeader>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] border border-border bg-muted">
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                      loading="lazy"
                    />
                  </div>
                </ModalContent>
              </Modal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Card>
          <CardContent className="space-y-4 px-6 py-6">
            <h2 className="font-heading text-2xl font-bold tracking-tight">Lessons Learned</h2>
            <MarkdownBlock content={project.lessonsLearned} />
          </CardContent>
        </Card>
      </Section>

      <Section>
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight">Future Improvements</h2>
          <ul className="space-y-3">
            {project.futureImprovements.map((item) => (
              <li key={item} className="rounded-[var(--radius)] border border-border bg-card px-4 py-3 text-sm leading-7 text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pb-24">
        <div className="flex flex-wrap gap-3">
          {project.githubUrl ? (
            <Button asChild>
              <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button asChild variant="secondary">
              <Link href={project.demoUrl} target="_blank" rel="noreferrer">
                Demo
              </Link>
            </Button>
          ) : null}
        </div>
      </Section>
    </div>
  );
}