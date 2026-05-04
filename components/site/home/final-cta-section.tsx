import { ConsultationForm } from "@/components/site/home/consultation-form";

export function FinalCtaSection() {
  return (
    <section id="book-consultation" className="section-shell bg-background">
      <div className="container-shell">
        <div className="reveal-fade relative overflow-hidden rounded-2xl bg-[var(--primary-container)] px-6 py-12 text-primary-foreground md:px-16 md:py-20">
          <div className="relative z-10 mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Book a consultation</h2>
              <p className="text-sm leading-relaxed text-[var(--on-primary-container)] md:text-base">
                Tell us about your business and your biggest operations challenge. We will review it and get back to you by
                email.
              </p>
              <p className="text-sm font-medium text-[var(--on-primary-container)]">No jargon. Just practical systems that work.</p>
            </div>

            <ConsultationForm />
          </div>
          <div className="absolute -left-20 -top-16 size-60 rounded-full bg-secondary/15 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -right-10 size-72 rounded-full bg-primary/25 blur-3xl" aria-hidden />
        </div>
      </div>
    </section>
  );
}
