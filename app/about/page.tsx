import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { founderNote, siteConfig, whyVector } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Vector Systems helps SMEs in Rwanda build practical operating systems.",
};

const aboutValues = [{ title: "Privacy & Security" }, ...whyVector] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Vector Systems"
        title="A systems partner for growing businesses"
        description="We focus on practical implementation so small teams can operate with clarity and control."
        primaryLabel="Book a consultation"
        primaryHref={siteConfig.bookingUrl}
        secondaryLabel="See services"
        secondaryHref="/services"
      />

      <SectionShell
        title="What we stand for"
        description="Reliable delivery, simple structures, and systems that improve daily execution."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aboutValues.map((item) => (
            <Card key={item.title} className="border-border/70 bg-white">
              <CardContent className="flex items-start gap-2 py-4 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 size-4 text-accent" />
                <span>{item.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Founder credibility" description={founderNote} className="section-muted">
        <div className="grid gap-8 md:grid-cols-[220px_minmax(0,560px)] md:items-start md:justify-center">
          <div className="relative mx-auto size-36 overflow-hidden rounded-2xl md:mx-0 md:size-48">
            <Image src="/founder.png" alt="Founder" fill sizes="(min-width: 768px) 192px, 144px" className="object-cover" />
          </div>
          <div className="rounded-2xl border border-border/70 bg-white p-6 text-sm leading-relaxed text-slate-700">
            Vector Systems was built to solve real operational pain for SMEs in Rwanda first, with long-term expansion into
            deeper systems for technical operations and industry-specific workflows.
          </div>
        </div>
      </SectionShell>

      <SectionShell title="Work with us" description="If your business needs better structure and visibility, we can help you put it in place.">
        <Button asChild size="lg" className="h-11 rounded-full px-6">
          <Link href={siteConfig.bookingUrl}>
            Start a conversation
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </SectionShell>
    </main>
  );
}
