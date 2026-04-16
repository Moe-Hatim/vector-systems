import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JourneyBand } from "@/components/site/case-studies/journey-band";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { Button } from "@/components/ui/button";
import { caseStudies, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real examples of how small businesses improve operations with better structure, tracking, and follow-up.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="See how businesses go from chaos to clarity"
        description="Vector Systems helps small businesses organize operations, track what matters, and run with more control."
        primaryLabel="Book a consultation"
        primaryHref={siteConfig.bookingUrl}
        secondaryLabel="Contact on WhatsApp"
        secondaryHref={siteConfig.whatsappUrl}
      />

      <SectionShell
        title="Practical examples from real operational work"
        description="These stories show how small businesses moved from daily confusion to clearer systems and better control."
      >
        <p className="max-w-3xl text-sm leading-relaxed text-slate-700 md:text-base">
          Each journey shows the starting reality, why it was holding the business back, and what changed after practical system
          setup.
        </p>
      </SectionShell>

      <SectionShell title="Business journeys" description="Realistic examples based on common SME operating challenges." className="section-muted">
        <div className="space-y-5">
          {caseStudies.map((study, index) => (
            <JourneyBand key={study.title} study={study} index={index} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Your business may need the same kind of clarity"
        description="Most businesses do not need more tools first. They need better structure and consistent follow-through."
      >
        <div className="max-w-3xl space-y-4 rounded-xl bg-[var(--surface-container-low)] px-5 py-4 text-sm leading-relaxed text-slate-700">
          <p>
            If your team is spending too much time chasing updates, missing follow-ups, or manually reconciling information,
            improving structure is usually the first step.
          </p>
          <Button asChild size="lg" className="h-11 rounded-xl px-6">
            <Link href={siteConfig.bookingUrl}>
              Book a consultation
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </SectionShell>
    </main>
  );
}
