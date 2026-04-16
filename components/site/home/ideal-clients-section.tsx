import { Building2, BriefcaseBusiness, Cog, MessageCircle } from "lucide-react";
import { idealClient } from "@/lib/site-content";
import { SectionIntro } from "@/components/site/home/section-intro";

const icons = [BriefcaseBusiness, MessageCircle, Building2, Cog];

export function IdealClientsSection() {
  return (
    <section className="section-shell bg-[var(--surface-container-low)]">
      <div className="container-shell space-y-10">
        <SectionIntro center title="Who we build for" />
        <div className="flex flex-wrap justify-center gap-4">
          {idealClient.map((label, idx) => {
            const Icon = icons[idx];
            return (
              <article key={label} className="inline-flex items-center gap-3 rounded-2xl bg-[var(--surface-container-lowest)] px-6 py-4 text-sm font-semibold text-primary shadow-[0_10px_24px_rgba(3,22,49,0.05)]">
                <Icon className="size-4 text-secondary" />
                {label}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

