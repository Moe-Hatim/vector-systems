import Image from "next/image";
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
    <section className="section-shell relative overflow-hidden pt-6 md:pt-10">
      <div className="container-shell grid items-center gap-8 md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_300px]">
        <div className="animate-enter-up space-y-7">
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

        <div className="pointer-events-none hidden justify-end md:flex">
          <Image src="/vector-logo.svg" alt="" aria-hidden width={260} height={260} className="opacity-10 lg:size-[280px]" />
        </div>
      </div>
    </section>
  );
}
