import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Surface({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-[var(--radius)] border border-border bg-card text-card-foreground shadow-soft", className)} {...props} />;
}