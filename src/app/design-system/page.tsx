"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { AchievementCard } from "@/components/design-system/achievement-card";
import { ProjectCard } from "@/components/design-system/project-card";
import { StatCard } from "@/components/design-system/stat-card";
import { Timeline } from "@/components/layout/timeline";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Surface } from "@/components/ui/surface";

const timelineItems = [
  {
    title: "Software Engineer Intern",
    subtitle: "Company / Organization",
    period: "2025",
    description: "Built user-facing product features and improved internal workflows with a focus on clarity, reliability, and measurable business impact.",
    tags: ["Next.js", "TypeScript", "Product Thinking"],
  },
  {
    title: "GDG / Leadership Role",
    subtitle: "Community Leadership",
    period: "2024",
    description: "Led sessions, coordinated volunteers, and helped translate technical work into approachable outcomes for peers and collaborators.",
    tags: ["Leadership", "Communication", "Community"],
  },
  {
    title: "Computer Science Education",
    subtitle: "University",
    period: "2022 - 2026",
    description: "Focused on software engineering, AI systems, analytics, and business-oriented problem solving across projects and competitions.",
    tags: ["AI", "Analytics", "Business"],
  },
];

const projectData = [
  {
    image: "/design-system/project-retail-ai.svg",
    imageAlt: "Retail AI platform preview",
    title: "Retail AI Platform",
    description: "A business-focused AI product concept for forecasting, inventory insight, and decision support with a polished operational interface.",
    tags: ["AI", "Analytics", "Dashboard"],
    href: "#projects",
  },
  {
    image: "/design-system/project-restormer.svg",
    imageAlt: "AD2 Restormer preview",
    title: "AD² Restormer",
    description: "A technical case study around restoration workflows, experimentation, and model iteration with a clean research-to-product presentation.",
    tags: ["Deep Learning", "Research", "ML"],
    href: "#projects",
  },
];

const achievementData = [
  {
    image: "/design-system/achievement.svg",
    imageAlt: "Competition badge preview",
    competition: "Hackathon",
    award: "Winner / Finalist",
    date: "2025",
    description: "Shown as a clean proof-of-achievement card with enough hierarchy for recruiter scanning.",
  },
  {
    image: "/design-system/achievement.svg",
    imageAlt: "Certification preview",
    competition: "Certification",
    award: "Industry Badge",
    date: "2026",
    description: "A second card variant that can represent certificates, awards, and event recognition.",
  },
];

export default function DesignSystemPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.08),_transparent_24%)]" />

      <Section className="pt-16 md:pt-20">
        <Reveal className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Design System</Badge>
            <Badge variant="success">Phase 1 foundation</Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-balance md:text-7xl">
                A premium component library for the portfolio site.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                This page serves as a reference surface for the tokens, patterns, and reusable UI blocks that shape the live portfolio experience.
              </p>
            </div>
            <Surface className="p-6">
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Typography stack</p>
                <p className="font-heading text-3xl font-bold tracking-tight">Space Grotesk</p>
                <p className="text-sm text-muted-foreground">Body text uses Inter for high readability.</p>
                <p className="font-mono text-sm text-muted-foreground">JetBrains Mono for code snippets only.</p>
              </div>
            </Surface>
          </div>
        </Reveal>
      </Section>

      <Section id="tokens">
        <Reveal>
          <div className="mb-8 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Design tokens</p>
            <h2 className="text-3xl font-bold tracking-tight">Color and rhythm system</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Background", light: "#FAFAFA", dark: "#0B1120" },
              { label: "Card", light: "#FFFFFF", dark: "#0F172A" },
              { label: "Text", light: "#111827", dark: "#F8FAFC" },
              { label: "Accent", light: "#2563EB", dark: "#2563EB" },
            ].map((token) => (
              <Card key={token.label} className="overflow-hidden border-border/80">
                <div className="h-28 border-b border-border/80 bg-background" />
                <CardContent className="space-y-2 px-5 py-5">
                  <p className="font-medium">{token.label}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Light {token.light}</span>
                    <span>Dark {token.dark}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="mb-8 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Buttons</p>
            <h2 className="text-3xl font-bold tracking-tight">Primary, secondary, and ghost</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button>Primary button</Button>
            <Button variant="secondary">Secondary button</Button>
            <Button variant="ghost">Ghost button</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="mb-8 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Surface components</p>
            <h2 className="text-3xl font-bold tracking-tight">Cards, badges, and stats</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <Card className="border-border/80">
              <CardHeader>
                <CardTitle>Generic content card</CardTitle>
                <CardDescription>Reusable for callouts, summaries, and supporting content.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-6 text-muted-foreground">
                  The card component keeps shadows soft, borders thin, and spacing generous to match the portfolio’s premium feel.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Tailwind</Badge>
                  <Badge variant="secondary">Reusable</Badge>
                  <Badge variant="success">Accessible</Badge>
                </div>
              </CardContent>
            </Card>
            <StatCard value="12+" label="Projects shipped" hint="Shown as a large number and a concise label" />
            <StatCard value="4" label="Leadership roles" hint="Useful for the about section stats" />
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="mb-8 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Navigation</p>
            <h2 className="text-3xl font-bold tracking-tight">Sticky chrome, theme control, and resume CTA</h2>
          </div>
          <div className="rounded-[var(--radius)] border border-border bg-card p-4 shadow-soft">
            <p className="mb-3 text-sm text-muted-foreground">The actual navbar lives in the shared layout and reacts to scroll state.</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Home",
                "About",
                "Projects",
                "Experience",
                "Leadership",
                "Achievements",
                "Contact",
              ].map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="experience">
        <Reveal>
          <div className="mb-8 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Timeline</p>
            <h2 className="text-3xl font-bold tracking-tight">Experience, leadership, and education</h2>
          </div>
          <Timeline items={timelineItems} />
        </Reveal>
      </Section>

      <Section id="projects">
        <Reveal>
          <div className="mb-8 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
            <h2 className="text-3xl font-bold tracking-tight">Case-study ready cards</h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-2">
            {projectData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open screenshot modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Expanded project screenshot</DialogTitle>
                  <DialogDescription>A simple dialog pattern for enlarged visual review.</DialogDescription>
                </DialogHeader>
                <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius)] border border-border bg-muted">
                  <Image
                    src="/design-system/project-retail-ai.svg"
                    alt="Expanded screenshot preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 72rem"
                    loading="lazy"
                  />
                </div>
              </DialogContent>
            </Dialog>
            <Button asChild variant="ghost">
              <Link href="#contact">Contact CTA preview</Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section id="achievements">
        <Reveal>
          <div className="mb-8 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Achievements</p>
            <h2 className="text-3xl font-bold tracking-tight">Competition and award cards</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {achievementData.map((achievement) => (
              <AchievementCard key={achievement.award} {...achievement} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="resume">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Resume</p>
              <h2 className="text-3xl font-bold tracking-tight">A dedicated section for the resume viewer and download flow.</h2>
              <p className="max-w-2xl text-muted-foreground">
                This foundation leaves room for an embedded PDF viewer, ATS resume download button, and supporting links.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Download resume</Button>
              <Button variant="secondary">Open PDF viewer</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section id="contact">
        <Reveal>
          <div className="rounded-[var(--radius)] border border-border bg-card p-6 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
                <h2 className="text-3xl font-bold tracking-tight">Minimal contact treatment with strong hierarchy.</h2>
                <p className="max-w-2xl text-muted-foreground">
                  The actual portfolio can later plug in email, phone, social links, and a validated contact form here.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Email</Badge>
                <Badge variant="outline">LinkedIn</Badge>
                <Badge variant="outline">GitHub</Badge>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}