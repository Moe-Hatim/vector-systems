import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleDot, FileWarning, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type CaseStudy = {
  businessType: string;
  title: string;
  what: string;
  soWhat: string;
  nowWhat: string;
  improvements: readonly string[];
};

type CaseStudyCardProps = {
  study: CaseStudy;
  ctaHref: string;
};

export function CaseStudyCard({ study, ctaHref }: CaseStudyCardProps) {
  return (
    <Card className="h-full border-border/70 bg-white shadow-[0_18px_36px_-30px_rgba(3,22,49,0.28)]">
      <CardHeader className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{study.businessType}</p>
        <CardTitle className="leading-snug text-primary md:text-2xl">{study.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <article className="rounded-xl bg-[var(--surface-container-low)] p-4">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <FileWarning className="size-4 text-accent" />
            What
          </p>
          <p className="text-sm leading-relaxed text-slate-700">{study.what}</p>
        </article>

        <article className="rounded-xl bg-[var(--surface-container-low)] p-4">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <CircleDot className="size-4 text-accent" />
            So what
          </p>
          <p className="text-sm leading-relaxed text-slate-700">{study.soWhat}</p>
        </article>

        <article className="rounded-xl bg-[var(--surface-container-low)] p-4">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <Lightbulb className="size-4 text-accent" />
            Now what
          </p>
          <p className="text-sm leading-relaxed text-slate-700">{study.nowWhat}</p>
        </article>

        {study.improvements.length > 0 ? (
          <>
            <Separator className="bg-border/70" />
            <div>
              <p className="mb-3 text-sm font-semibold text-primary">Key improvements</p>
              <ul className="grid gap-2">
                {study.improvements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 size-4 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : null}

        <div>
          <Button asChild size="lg" className="h-11 rounded-xl px-6">
            <Link href={ctaHref}>
              Book a consultation
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

