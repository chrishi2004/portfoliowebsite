import { Card, CardContent } from "@/components/ui/card";

type StatCardProps = {
  value: string;
  label: string;
  hint?: string;
};

export function StatCard({ value, label, hint }: StatCardProps) {
  return (
    <Card className="border-border/80 bg-card/90">
      <CardContent className="px-5 py-5">
        <div className="space-y-1">
          <p className="font-heading text-3xl font-bold tracking-tight text-foreground">{value}</p>
          <p className="text-sm font-medium text-foreground">{label}</p>
          {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
        </div>
      </CardContent>
    </Card>
  );
}