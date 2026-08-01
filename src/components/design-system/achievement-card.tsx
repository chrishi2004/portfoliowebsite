import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

type AchievementCardProps = {
  image: string;
  imageAlt: string;
  competition: string;
  award: string;
  date: string;
  description?: string;
};

export function AchievementCard({ image, imageAlt, competition, award, date, description }: AchievementCardProps) {
  return (
    <Card className="overflow-hidden border-border/80">
      <div className="relative aspect-[4/3] bg-muted">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
      </div>
      <CardContent className="space-y-2 px-5 py-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{competition}</p>
        <h3 className="font-heading text-lg font-bold tracking-tight">{award}</h3>
        {description ? <p className="text-sm leading-6 text-muted-foreground">{description}</p> : null}
        <p className="text-sm font-medium text-foreground">{date}</p>
      </CardContent>
    </Card>
  );
}