import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <section id="how-it-works" className="section-shell bg-primary text-primary-foreground">
      <div className="container-shell">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight md:text-5xl">Your path to order</h2>

        <ol className="relative grid gap-8 md:grid-cols-5">
          <div className="absolute left-0 top-11 hidden h-px w-full bg-white/20 md:block" aria-hidden />
          {processSteps.map((step, index) => (
            <li key={step.title} className="reveal-fade interactive-lift relative z-10 text-center">
              <div className={index === 2 ? "step-chip step-chip-active" : "step-chip"}>
                <span className="text-xl font-semibold">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/75">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

