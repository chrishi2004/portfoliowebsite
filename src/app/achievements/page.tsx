import Image from "next/image";

import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import achievements from "../../../content/achievements.json";

import { AchievementCard } from "@/components/design-system/achievement-card";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger } from "@/components/ui/modal";

export const metadata: Metadata = buildPageMetadata(
  "Achievements | Rishi Chaudhari | Portfolio",
  "Awards, hackathons, and competition highlights from Rishi Chaudhari’s portfolio.",
  "/achievements",
);

export default function AchievementsPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-10">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Achievements</p>
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">Achievements and recognition</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Each card opens a modal with the certificate image, full description, and date.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.items.map((item, index) => (
            <Reveal key={item.award} delay={index * 0.04}>
              <Modal>
              <ModalTrigger asChild>
                <button type="button" className="text-left">
                  <AchievementCard
                    image={item.certificateImage}
                    imageAlt={item.award}
                    competition={item.competition}
                    award={item.award}
                    date={item.date}
                    description={item.description}
                  />
                </button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>{item.award}</ModalTitle>
                  <ModalDescription>
                    {item.competition} - {item.date}
                  </ModalDescription>
                </ModalHeader>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius)] border border-border bg-muted">
                  <Image src={item.certificateImage} alt={item.award} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" loading="lazy" />
                </div>
                <Card>
                  <CardContent className="space-y-2 px-5 py-5 text-sm leading-6 text-muted-foreground">
                    <p>{item.fullDescription}</p>
                    <p className="font-medium text-foreground">Date: {item.date}</p>
                  </CardContent>
                </Card>
              </ModalContent>
              </Modal>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}