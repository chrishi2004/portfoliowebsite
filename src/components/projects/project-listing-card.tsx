import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectCardSummary } from "@/types/project";

type ProjectListingCardProps = ProjectCardSummary;

export function ProjectListingCard({ slug, title, heroImage, category, description, tags }: ProjectListingCardProps) {
  return (
    <Card className="group overflow-hidden border-border/80 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/projects/${slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42rem"
            loading="lazy"
          />
        </div>
        <CardContent className="space-y-4 px-5 py-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <Badge variant="secondary">{category}</Badge>
            </div>
            <h3 className="font-heading text-xl font-bold tracking-tight">{title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="border-border bg-muted text-foreground">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="text-sm font-medium text-accent transition-colors group-hover:text-accent/80">View case study</div>
        </CardContent>
      </Link>
    </Card>
  );
}