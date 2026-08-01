import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import about from "../../content/about.json";
import achievements from "../../content/achievements.json";
import certifications from "../../content/certifications.json";
import leadership from "../../content/leadership.json";
import projects from "../../content/projects.json";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { StatCard } from "@/components/design-system/stat-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  siteConfig.siteName,
  "Home page for Rishi Chaudhari’s portfolio with a premium hero, about preview, and links into the site.",
  "/",
);

const heroSubtitle = about.heroSubtitle;
const aboutIntro = about.aboutIntro;
const stats = {
  projects: projects.projects.length,
  leadershipRoles: leadership.entries.length,
  hackathons: achievements.items.filter((item) => item.competition.toLowerCase().includes("hackathon")).length,
  certifications: certifications.items.length,
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.09),_transparent_34%)]" />

      <Section className="py-16 md:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal className="space-y-8">
            <div className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-soft">
              Premium personal portfolio
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-balance md:text-7xl">
                Hi, I&apos;m {about.fullName}.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                {heroSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/resume.pdf">Download Resume</Link>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
                <Link href="https://github.com/rishi-chaudhari" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
                <Link href="https://linkedin.com/in/rishi-chaudhari" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[28rem] overflow-hidden rounded-[var(--radius)] border border-border bg-card shadow-soft">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_55%)]" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/headshot.png"
                  alt={`${about.fullName} headshot`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 28rem"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pb-16 pt-0 md:pb-24">
        <Reveal className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">About preview</p>
            <div className="space-y-4 text-lg leading-8 text-foreground/90">
              {aboutIntro.map((paragraph: string) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard value={String(stats.projects)} label="Projects" />
            <StatCard value={String(stats.leadershipRoles)} label="Leadership roles" />
            <StatCard value={String(stats.hackathons)} label="Hackathons" />
            <StatCard value={String(stats.certifications)} label="Certifications" />
          </div>

          <Card className="border-border/80 bg-card/90">
            <CardContent className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm leading-6 text-muted-foreground md:max-w-2xl">
                This preview is the short version of the About section. It keeps the focus on the professional summary and the
                core numbers recruiters scan first.
              </p>
              <Button asChild variant="ghost" className="justify-start px-0 text-accent hover:bg-transparent hover:text-accent/80">
                <Link href="/about">Read more about me</Link>
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </Section>
    </div>
  );
}