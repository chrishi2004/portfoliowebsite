import Link from "next/link";

import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";
import certifications from "../../../content/certifications.json";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = buildPageMetadata(
  "Certifications | Rishi Chaudhari | Portfolio",
  "Professional certifications and verification links for Rishi Chaudhari.",
  "/certifications",
);

export default function CertificationsPage() {
  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-10">
        <Reveal className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Certifications</p>
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl">Certification badges</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            Each badge links out to the corresponding issuer or verification destination from the JSON source.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.04}>
              <Link href={item.verificationUrl} target="_blank" rel="noreferrer" className="group block">
                <Card className="h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lift">
                  <CardContent className="flex h-full items-center justify-between gap-4 px-5 py-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{item.issuer}</p>
                      <h2 className="mt-2 font-heading text-xl font-bold tracking-tight">{item.name}</h2>
                    </div>
                    <Badge variant="success" className="whitespace-nowrap">
                      {item.badge}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}