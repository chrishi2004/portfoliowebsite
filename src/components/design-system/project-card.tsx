import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProjectCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export function ProjectCard({ image, imageAlt, title, description, tags, href }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border/80 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      <CardContent className="space-y-4 px-5 py-5">
        <div className="space-y-2">
          <h3 className="font-heading text-xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="border-border bg-muted text-foreground">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild variant="ghost" className="px-0 text-accent hover:bg-transparent hover:text-accent/80">
          <Link href={href}>View case study</Link>
        </Button>
      </CardContent>
    </Card>
  );
}