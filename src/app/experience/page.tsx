import Image from "next/image";

import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import experience from "../../../content/experience.json";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Timeline } from "@/components/layout/timeline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = buildPageMetadata(
  "Experience | Rishi Chaudhari | Portfolio",
  "Professional and project experience for Rishi Chaudhari, including portfolio projects and technical work.",
  "/experience",
);

export default function ExperiencePage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-10">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">Professional timeline</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            A concise timeline of product, AI, and portfolio work, with skills and supporting media kept in the JSON source.
          </p>
        </Reveal>

        <Reveal>
          <Timeline
            items={experience.entries.map((entry) => ({
              title: entry.role,
              subtitle: entry.organization,
              period: entry.duration,
              description: entry.description,
              tags: entry.skills,
            }))}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {experience.entries.map((entry, index) => (
            <Reveal key={entry.organization} delay={index * 0.04}>
              <Card className="overflow-hidden">
              <div className="relative aspect-[16/9] border-b border-border bg-muted">
                <Image src={entry.media.src} alt={entry.media.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" loading="lazy" />
              </div>
              <CardContent className="space-y-4 px-5 py-5">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{entry.organization}</p>
                  <h2 className="font-heading text-xl font-bold tracking-tight">{entry.role}</h2>
                  <p className="text-sm text-muted-foreground">{entry.duration}</p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{entry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}