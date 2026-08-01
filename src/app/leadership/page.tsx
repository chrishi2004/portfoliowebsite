import Image from "next/image";

import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import leadership from "../../../content/leadership.json";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Timeline } from "@/components/layout/timeline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger } from "@/components/ui/modal";

export const metadata: Metadata = buildPageMetadata(
  "Leadership | Rishi Chaudhari | Portfolio",
  "Leadership, community, and event coordination highlights from Rishi Chaudhari’s portfolio.",
  "/leadership",
);

export default function LeadershipPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-10">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Leadership</p>
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">Community and event leadership</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Timeline cards for GDG, ROBOFIESTA, Theatre Club, and MUN with gallery-driven modal views.
          </p>
        </Reveal>

        <Reveal>
          <Timeline
            items={leadership.entries.map((entry) => ({
              title: entry.organization,
              subtitle: entry.role,
              period: entry.teamSize,
              description: entry.impact.join(" "),
              tags: entry.achievements,
            }))}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {leadership.entries.map((entry, index) => (
            <Reveal key={entry.organization} delay={index * 0.04}>
              <Card>
              <CardContent className="space-y-5 px-6 py-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">{entry.organization}</p>
                  <h2 className="font-heading text-2xl font-bold tracking-tight">{entry.role}</h2>
                  <p className="text-sm text-muted-foreground">Team size: {entry.teamSize}</p>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                  {entry.impact.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {entry.achievements.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {entry.gallery.map((image) => (
                    <Modal key={image.src}>
                      <ModalTrigger asChild>
                        <button type="button" className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius)] border border-border bg-muted text-left">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            loading="lazy"
                          />
                        </button>
                      </ModalTrigger>
                      <ModalContent>
                        <ModalHeader>
                          <ModalTitle>{entry.organization} gallery</ModalTitle>
                          <ModalDescription>{entry.role} - expanded view</ModalDescription>
                        </ModalHeader>
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] border border-border bg-muted">
                          <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" loading="lazy" />
                        </div>
                      </ModalContent>
                    </Modal>
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