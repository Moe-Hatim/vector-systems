import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  return (
    <section className="section-shell pt-32 md:pt-36">
      <div className="container-shell animate-enter-up space-y-7">
        <p className="eyebrow text-sm font-bold tracking-[0.2em] md:text-base">{eyebrow}</p>
        <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[var(--on-surface-variant)] md:text-xl">{description}</p>
        <div className="flex flex-wrap gap-3">
          {primaryLabel && primaryHref ? (
            <Button asChild size="lg" className="h-11 rounded-full px-6">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : null}
          {secondaryLabel && secondaryHref ? (
            <Button asChild variant="outline" size="lg" className="h-11 rounded-full px-6">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
