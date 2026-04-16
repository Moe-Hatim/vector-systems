import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export type ServiceOffer = {
  id: string;
  title: string;
  headline: string;
  description: string;
  actions: string[];
  whyItWorks: string;
  outcome: string;
  fairExchange: string;
  urgency: string;
  ctaLabel: string;
  ctaHref: string;
};

type ServiceOfferCardProps = {
  offer: ServiceOffer;
};

export function ServiceOfferCard({ offer }: ServiceOfferCardProps) {
  return (
    <Card className="border-border/70 bg-white shadow-none">
      <CardHeader className="space-y-3">
        <p className="text-lg font-extrabold tracking-[0.04em] text-secondary md:text-xl">{offer.title}</p>
        <CardTitle className="text-2xl leading-tight text-primary md:text-3xl">{offer.headline}</CardTitle>
        <p className="text-sm leading-relaxed text-[var(--on-surface-variant)] md:text-base">{offer.description}</p>
      </CardHeader>

      <Separator className="bg-border/80" />

      <CardContent className="space-y-6 pt-6">
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-primary">What we actually do</h3>
          <ul className="grid gap-2 md:grid-cols-2">
            {offer.actions.map((action) => (
              <li key={action} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 size-4 text-accent" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </section>

        <Separator className="bg-border/60" />

        <div className="grid items-start gap-4 md:grid-cols-2">
          <details className="group self-start rounded-xl bg-[var(--surface-container-low)]">
            <summary className="cursor-pointer list-none p-4">
              <h3 className="text-sm font-semibold text-primary">What changes after</h3>
              <p className="mt-1 text-xs text-slate-600 group-open:hidden">Click to view details</p>
              <p className="mt-1 hidden text-xs text-slate-600 group-open:block">Click to hide details</p>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm leading-relaxed text-slate-700">{offer.outcome}</p>
            </div>
          </details>

          <details className="group self-start rounded-xl bg-[var(--surface-container-low)]">
            <summary className="cursor-pointer list-none p-4">
              <h3 className="text-sm font-semibold text-primary">Why this works</h3>
              <p className="mt-1 text-xs text-slate-600 group-open:hidden">Click to view details</p>
              <p className="mt-1 hidden text-xs text-slate-600 group-open:block">Click to hide details</p>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm leading-relaxed text-slate-700">{offer.whyItWorks}</p>
            </div>
          </details>

          <details className="group self-start rounded-xl bg-[var(--surface-container-low)]">
            <summary className="cursor-pointer list-none p-4">
              <h3 className="text-sm font-semibold text-primary">Fair exchange</h3>
              <p className="mt-1 text-xs text-slate-600 group-open:hidden">Click to view details</p>
              <p className="mt-1 hidden text-xs text-slate-600 group-open:block">Click to hide details</p>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm leading-relaxed text-slate-700">{offer.fairExchange}</p>
            </div>
          </details>

          <details className="group self-start rounded-xl bg-[var(--surface-container-low)]">
            <summary className="cursor-pointer list-none p-4">
              <h3 className="text-sm font-semibold text-primary">Urgency and capacity</h3>
              <p className="mt-1 text-xs text-slate-600 group-open:hidden">Click to view details</p>
              <p className="mt-1 hidden text-xs text-slate-600 group-open:block">Click to hide details</p>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm leading-relaxed text-slate-700">{offer.urgency}</p>
            </div>
          </details>
        </div>

        <div>
          <Button asChild size="lg" className="h-11 rounded-xl px-6">
            <Link href={offer.ctaHref}>{offer.ctaLabel}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
