import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type RevealProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    delay?: number;
  }
>;

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  return (
    <div
      className={cn("reveal-motion", className)}
      style={{ ["--reveal-delay" as string]: `${delay}s` }}
      {...props}
    >
      {children}
    </div>
  );
}