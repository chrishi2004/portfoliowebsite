import { type ComponentType } from "react";

import { BadgeCheck, BrainCircuit, BriefcaseBusiness, ChartColumn, Cloud, Code2, Cog, Database, FileChartColumn, FlaskConical, GitBranch, Handshake, LayoutGrid, Layers3, MessageSquare, MessageSquareText, Network, Presentation, Rocket, Server, SquareCode, Target, Users, UsersRound, Workflow } from "lucide-react";

import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import skills from "../../../content/skills.json";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  code: Code2,
  server: Server,
  layout: LayoutGrid,
  brain: BrainCircuit,
  chart: ChartColumn,
  cloud: Cloud,
  settings: Cog,
  briefcase: BriefcaseBusiness,
  messages: MessageSquareText,
  typescript: SquareCode,
  python: SquareCode,
  database: Database,
  javascript: SquareCode,
  nodejs: Server,
  api: Workflow,
  shield: BadgeCheck,
  schema: Database,
  nextjs: LayoutGrid,
  react: LayoutGrid,
  tailwind: LayoutGrid,
  motion: Workflow,
  sparkles: BrainCircuit,
  flask: FlaskConical,
  barChart: ChartColumn,
  target: Target,
  fileChart: FileChartColumn,
  insight: ChartColumn,
  vercel: Rocket,
  rocket: Rocket,
  network: Network,
  pipeline: GitBranch,
  git: GitBranch,
  check: BadgeCheck,
  package: Cog,
  layers: Layers3,
  users: Users,
  presentation: Presentation,
  messageSquare: MessageSquare,
  usersRound: UsersRound,
  handshake: Handshake,
  badgeCheck: BadgeCheck,
};

export const metadata: Metadata = buildPageMetadata(
  "Skills | Rishi Chaudhari | Portfolio",
  "A categorized view of Rishi Chaudhari’s technical, AI, cloud, business, and soft skills.",
  "/skills",
);

export default function SkillsPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-10">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Skills</p>
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">Categorized skill grid</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            All skills are sourced from <span className="font-medium text-foreground">content/skills.json</span> and rendered with icons.
          </p>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-2">
          {skills.groups.map((group, index) => {
            const GroupIcon = iconMap[group.icon] ?? Code2;

            return (
              <Reveal key={group.name} delay={index * 0.04}>
                <Card>
                <CardContent className="space-y-5 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground">
                      <GroupIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <h2 className="font-heading text-2xl font-bold tracking-tight">{group.name}</h2>
                      <p className="text-sm text-muted-foreground">{group.skills.length} skills</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {group.skills.map((skill) => {
                      const SkillIcon = iconMap[skill.icon] ?? Code2;

                      return (
                        <div key={skill.name} className="flex items-center gap-3 rounded-[var(--radius)] border border-border bg-background px-4 py-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground">
                            <SkillIcon className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}