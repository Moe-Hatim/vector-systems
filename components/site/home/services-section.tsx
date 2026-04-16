import Link from "next/link";
import { ArrowRight, CheckCircle2, Cog, GitBranch, Wrench } from "lucide-react";
import { services } from "@/lib/site-content";
import { SectionIntro } from "@/components/site/home/section-intro";

const icons = [Wrench, GitBranch, Cog];

export function ServicesSection() {
  return (
    <section className="section-shell bg-background">
      <div className="container-shell space-y-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionIntro
            title="Practical solutions, not just advice"
            description="We do not only diagnose the problem. We build the systems that fix it."
            className="max-w-2xl"
          />
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-transform hover:translate-x-0.5">
            View full service catalog
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = icons[idx];
            return (
              <article key={service.title} className="space-y-5">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-primary">{service.title}</h3>
                <ul className="space-y-3 text-sm text-[var(--on-surface-variant)]">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4 text-secondary" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

