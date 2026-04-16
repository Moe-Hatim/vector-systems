import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionShell } from "@/components/site/section-shell";
import { ServiceOfferCard, type ServiceOffer } from "@/components/site/services/service-offer-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processSteps, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description: "Practical service offers for Operational Setup, Workflow Systems, and Automation.",
};

const serviceOffers: ServiceOffer[] = [
  {
    id: "operational-setup",
    title: "Operational Setup",
    headline: "Move from confusion to structure in your daily operations.",
    description:
      "Most small teams are not failing because they lack effort. They are losing time because files, templates, and basic organization are inconsistent.",
    actions: [
      "Organize your digital files into one clear structure",
      "Create practical templates for quotes, invoices, and records",
      "Set simple naming and storage rules your team can follow",
      "Set up a basic communication structure for handovers and updates",
    ],
    whyItWorks:
      "Most businesses do not need complex tools first. They need a clean operational foundation that everyone can use without confusion.",
    outcome:
      "Your business runs with order. Documents are easy to find, work is easier to hand over, and daily admin stress drops.",
    fairExchange:
      "This is a serious setup project, not a quick fix. You give us your current process and context, and we build a structure you can rely on every day.",
    urgency:
      "We handle a limited number of setup projects at a time to make sure each one is implemented properly with your team.",
    ctaLabel: "Book a consultation",
    ctaHref: siteConfig.bookingUrl,
  },
  {
    id: "workflow-systems",
    title: "Workflow Systems",
    headline: "Know exactly what is happening in your business at any time.",
    description:
      "When sales, payments, tasks, and projects are tracked in different places, owners lose visibility and follow-ups slip through.",
    actions: [
      "Set up clear sales and lead tracking",
      "Track payment status and receivables in one view",
      "Create task visibility so people know what is pending",
      "Track project progress and handovers clearly",
    ],
    whyItWorks:
      "Visibility improves execution. When your team sees one shared view of what is pending and what is done, decisions become faster and cleaner.",
    outcome:
      "You stop guessing. You can see pipeline movement, payment gaps, task status, and project progress without chasing updates all day.",
    fairExchange:
      "This requires team adoption, not just tools. We build the workflow with your real operating rhythm so the system gets used, not ignored.",
    urgency:
      "To keep quality high, we onboard a small number of workflow implementations per cycle and work closely with each team.",
    ctaLabel: "Talk about your business",
    ctaHref: siteConfig.bookingUrl,
  },
  {
    id: "automation",
    title: "Automation",
    headline: "Reduce repetitive work and save time every week.",
    description:
      "Many small businesses repeat the same manual tasks every day. Follow-up reminders, status updates, and simple reports consume time that should go to clients.",
    actions: [
      "Automate reminders for follow-ups and payments",
      "Reduce copy-paste work between your daily tools",
      "Set up simple automated status and reporting flows",
      "Implement practical automations your team can maintain",
    ],
    whyItWorks:
      "Automation works best when it is simple and tied to real repeated tasks. We automate what your team actually does, not what looks impressive.",
    outcome:
      "Your team spends less time on repetitive admin, follow-ups are more consistent, and operations become more dependable.",
    fairExchange:
      "Automation is an upgrade to your operating system. We map your repetitive work carefully and implement flows that are stable and useful long-term.",
    urgency:
      "Because automation needs close testing and refinement, we only run a limited number of active automation builds at once.",
    ctaLabel: "See if this fits your business",
    ctaHref: siteConfig.bookingUrl,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Practical offers for SMEs that want better control"
        description="Each service solves a real operational problem and is implemented in a way your team can actually use."
        primaryLabel="Book a consultation"
        primaryHref={siteConfig.bookingUrl}
        secondaryLabel="Contact on WhatsApp"
        secondaryHref={siteConfig.whatsappUrl}
      />

      <SectionShell
        title="What we offer"
        description="Choose one service or combine them as your business grows."
      >
        <div className="grid gap-6">
          {serviceOffers.map((offer) => (
            <div id={offer.id} key={offer.title}>
              <ServiceOfferCard offer={offer} />
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="How implementation works"
        description="Every project follows a clear process so your team knows what to expect."
        className="section-muted"
      >
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border/70 bg-white p-5">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent">0{index + 1}</p>
              <h3 className="font-heading text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{step.detail}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell title="Not sure where to start?" description="Most businesses start with Operational Setup. It creates the structure needed for tracking and automation to work properly.">
        <Card className="border-border/70 bg-white shadow-none">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Start with the foundation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              If files, templates, and internal structure are still inconsistent, begin there first. Once the basics are stable,
              we can layer in workflows and automation with better results.
            </p>
            <Button asChild size="lg" className="h-11 rounded-xl px-6">
              <Link href={siteConfig.bookingUrl}>
                Book a consultation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </SectionShell>

      <SectionShell
        title="Capacity note"
        description="Every setup is done hands-on, with your real team and real workflows."
        className="section-muted"
      >
        <Card className="border-0 bg-[var(--surface-container-lowest)] shadow-[0_20px_38px_-30px_rgba(3,22,49,0.28)]">
          <CardContent className="grid gap-5 p-6 md:grid-cols-[auto_1fr] md:items-start md:p-8">
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-[#d9f5e5] text-secondary">
              <ShieldCheck className="size-5" />
            </div>
            <div className="space-y-3">
              <p className="text-base font-semibold text-primary">Limited active slots for implementation quality</p>
              <p className="text-sm leading-relaxed text-slate-700">
                We only take a limited number of active projects at a time so each business gets proper implementation quality.
              </p>
              <p className="text-sm leading-relaxed text-slate-700">
                If our current capacity is full, new projects are scheduled into the next available start window.
              </p>
              <div className="flex items-start gap-2 rounded-lg bg-[var(--surface-container-low)] px-3 py-2 text-sm text-slate-700">
                <CheckCircle2 className="mt-0.5 size-4 text-secondary" />
                <span>Hands-on rollout with your real team, not a generic template drop.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionShell>
    </main>
  );
}

