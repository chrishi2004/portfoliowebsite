import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { contactLinks } from "@/lib/contact";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <Section className="py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Card className="border-border/80 shadow-soft">
          <CardHeader>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <CardTitle className="text-3xl">Let&apos;s build something useful.</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Use the form to reach me directly. I keep the layout minimal so the key details stay easy to scan.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[var(--radius)] border border-border bg-muted/40 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Email</p>
                <Button asChild variant="ghost" className="mt-2 h-auto justify-start px-0 text-base">
                  <Link href={contactLinks.email.href}>{contactLinks.email.value}</Link>
                </Button>
              </div>
              <div className="rounded-[var(--radius)] border border-border bg-muted/40 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</p>
                <Button asChild variant="ghost" className="mt-2 h-auto justify-start px-0 text-base">
                  <Link href={contactLinks.linkedin.href} target="_blank" rel="noreferrer">
                    {contactLinks.linkedin.value}
                  </Link>
                </Button>
              </div>
              <div className="rounded-[var(--radius)] border border-border bg-muted/40 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">GitHub</p>
                <Button asChild variant="ghost" className="mt-2 h-auto justify-start px-0 text-base">
                  <Link href={contactLinks.github.href} target="_blank" rel="noreferrer">
                    {contactLinks.github.value}
                  </Link>
                </Button>
              </div>
              <div className="rounded-[var(--radius)] border border-border bg-muted/40 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Location</p>
                <p className="mt-2 text-base font-medium text-foreground">{contactLinks.location.value}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Minimal form</Badge>
              <Badge variant="secondary">Client-side validation</Badge>
              <Badge variant="secondary">Resend delivery</Badge>
            </div>
          </CardContent>
        </Card>

        <ContactForm />
      </div>
    </Section>
  );
}
