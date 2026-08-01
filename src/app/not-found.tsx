import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/section";

export default function NotFound() {
  return (
    <Section className="py-20 md:py-28">
      <Card className="mx-auto max-w-2xl border-border/80 shadow-soft">
        <CardContent className="space-y-6 px-6 py-8 text-center md:px-10 md:py-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">404</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Page not found</h1>
          <p className="mx-auto max-w-xl text-sm leading-7 text-muted-foreground">
            The page you were looking for does not exist or has moved. Return home to continue exploring the portfolio.
          </p>
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
