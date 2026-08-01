import { cn } from "@/lib/utils";

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags?: string[];
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-6 border-l border-border pl-6", className)}>
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="relative">
          <span className="absolute -left-[1.875rem] top-1.5 h-3.5 w-3.5 rounded-full border-4 border-background bg-accent" />
          <div className="rounded-[var(--radius)] border border-border bg-card p-5 shadow-soft">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
              <p className="text-sm font-medium text-foreground/80">{item.period}</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            {item.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}