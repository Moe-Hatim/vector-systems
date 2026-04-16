type CaseStudy = {
  businessType: string;
  what: string;
  soWhat: string;
  nowWhat: string;
};

type JourneyBandProps = {
  study: CaseStudy;
  index: number;
};

function summarize(text: string, maxLength = 150) {
  const firstSentence = text.split(". ")[0]?.trim() ?? text.trim();
  if (firstSentence.length <= maxLength) return firstSentence;
  return `${firstSentence.slice(0, maxLength).trim()}...`;
}

export function JourneyBand({ study, index }: JourneyBandProps) {
  const before = summarize(study.soWhat, 150);
  const after = summarize(study.nowWhat, 140);

  return (
    <article className="border-y border-border/70 py-7 md:py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-lg font-bold tracking-tight text-primary md:text-2xl">{study.businessType}</p>
        <p className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
          Journey {String(index + 1).padStart(2, "0")}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
        <section className="flex h-full flex-col rounded-xl bg-[var(--surface-container-low)] p-4">
          <p className="mb-2 text-sm font-semibold text-primary">Before operations</p>
          <p className="text-sm leading-relaxed text-slate-700">{before}</p>
        </section>

        <section className="flex h-full flex-col rounded-xl bg-[#eaf5ef] p-4">
          <p className="mb-2 text-sm font-semibold text-primary">After implementation</p>
          <p className="text-sm leading-relaxed text-slate-700">{after}</p>
        </section>
      </div>
    </article>
  );
}
