import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

type MarkdownBlockProps = {
  content: string;
  className?: string;
};

export function MarkdownBlock({ content, className }: MarkdownBlockProps) {
  return (
    <div className={cn("space-y-4 text-sm leading-7 text-muted-foreground", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="text-sm leading-7 text-muted-foreground">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
          ul: ({ children }) => <ul className="ml-5 list-disc space-y-2 text-sm leading-7 text-muted-foreground">{children}</ul>,
          ol: ({ children }) => <ol className="ml-5 list-decimal space-y-2 text-sm leading-7 text-muted-foreground">{children}</ol>,
          li: ({ children }) => <li className="pl-1">{children}</li>,
          h1: ({ children }) => <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">{children}</h1>,
          h2: ({ children }) => <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">{children}</h2>,
          h3: ({ children }) => <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">{children}</h3>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}