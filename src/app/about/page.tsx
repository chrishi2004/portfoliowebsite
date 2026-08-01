import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import about from "../../../content/about.json";
import achievements from "../../../content/achievements.json";
import certifications from "../../../content/certifications.json";
import leadership from "../../../content/leadership.json";
import projects from "../../../content/projects.json";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Timeline } from "@/components/layout/timeline";
import { StatCard } from "@/components/design-system/stat-card";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = buildPageMetadata(
  "About | Rishi Chaudhari | Portfolio",
  "Learn more about Rishi Chaudhari’s background, education, career journey, and the story behind the portfolio.",
  "/about",
);

export default function AboutPage() {
  const stats = {
    projects: projects.projects.length,
    leadershipRoles: leadership.entries.length,
    hackathons: achievements.items.filter((item) => item.competition.toLowerCase().includes("hackathon")).length,
    certifications: certifications.items.length,
  };

  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-10">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">About</p>
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">{about.fullName}</h1>
          <div className="space-y-4 text-lg leading-8 text-muted-foreground">
            {about.fullBio.map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard value={String(stats.projects)} label="Projects" />
          <StatCard value={String(stats.leadershipRoles)} label="Leadership roles" />
          <StatCard value={String(stats.hackathons)} label="Hackathons" />
          <StatCard value={String(stats.certifications)} label="Certifications" />
        </Reveal>

        <Reveal className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Education timeline</p>
            <h2 className="text-3xl font-bold tracking-tight">Academic foundation</h2>
          </div>
          <Timeline
            items={about.educationTimeline.map((item) => ({
              title: item.title,
              subtitle: item.subtitle,
              period: item.period,
              description: item.description,
            }))}
          />
        </Reveal>

        <Reveal className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Career journey</p>
            <h2 className="text-3xl font-bold tracking-tight">How the portfolio direction evolved</h2>
          </div>
          <Timeline
            items={about.careerJourney.map((item) => ({
              title: item.title,
              subtitle: item.subtitle,
              period: item.period,
              description: item.description,
            }))}
          />
        </Reveal>

        <Reveal>
          <Card>
            <CardContent className="px-6 py-6 text-sm leading-7 text-muted-foreground">
              The about page is now fully data-driven from <span className="font-medium text-foreground">content/about.json</span>, so future copy changes only need a JSON update.
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
