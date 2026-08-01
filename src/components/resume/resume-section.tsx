import Link from "next/link";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const resumePath = "/resume.pdf";

export function ResumeSection() {
  return (
    <Section className="py-16 md:py-24">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary">Resume</Badge>
          <Badge variant="outline">ATS-friendly PDF path</Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Card className="border-border/80 shadow-soft">
            <CardHeader>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Download</p>
              <CardTitle className="text-3xl">One-click access to the resume PDF.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-7 text-muted-foreground">
                The resume section is wired to the PDF path used by the site. If a second designed version is ever added, this is the
                place to label it separately.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={resumePath} target="_blank" rel="noreferrer" download>
                    Download Resume
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/80 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">PDF viewer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-muted">
                <iframe
                  src={resumePath}
                  title="Resume PDF viewer"
                  className="h-[min(90vh,48rem)] w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
