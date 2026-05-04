import Image from "next/image";
import { Handshake, Landmark, Wallet } from "lucide-react";
import { founderNote, galleryImages, whyVector } from "@/lib/site-content";

const icons = [Handshake, Wallet, Landmark];

export function WhySection() {
  return (
    <section className="section-shell bg-background">
      <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <h2 className="section-heading">Why Vector Systems?</h2>
          <div className="space-y-7">
            {whyVector.map((item, idx) => {
              const Icon = icons[idx];
              return (
                <article key={item.title} className="interactive-lift reveal-fade flex gap-4 rounded-xl p-2">
                  <div className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-container)] text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--on-surface-variant)]">{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="interactive-soft rounded-2xl bg-[var(--surface-container-low)] p-6">
            <p className="text-sm leading-relaxed italic text-[var(--on-surface-variant)]">&ldquo;{founderNote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="relative size-11 overflow-hidden rounded-full">
                <Image src="/founder.png" alt="Founder of Vector Systems" fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Founder, Vector Systems</p>
                <p className="text-xs text-[var(--on-surface-variant)]">Systems Engineer and Data Specialist</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="space-y-3 md:space-y-4">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--surface-container)]">
              <Image src={galleryImages[0]} alt="Team collaboration in office" fill sizes="(min-width:1024px) 18vw, 44vw" className="object-cover" />
            </figure>
            <figure className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--surface-container)]">
              <Image src={galleryImages[1]} alt="Operations dashboard on tablet" fill sizes="(min-width:1024px) 18vw, 44vw" className="object-cover" />
            </figure>
          </div>
          <div className="space-y-3 pt-8 md:space-y-4 md:pt-10">
            <figure className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--surface-container)]">
              <Image src={galleryImages[2]} alt="Organizing files on desktop" fill sizes="(min-width:1024px) 18vw, 44vw" className="object-cover" />
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--surface-container)]">
              <Image src={galleryImages[3]} alt="Business partnership handshake" fill sizes="(min-width:1024px) 18vw, 44vw" className="object-cover" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
