import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("px-6 py-16 md:py-24", className)} {...props}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}