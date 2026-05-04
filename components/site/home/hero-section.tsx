import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImage, siteConfig } from "@/lib/site-content";

export function HomeHeroSection() {
  return (
    <section className="hero-panel section-shell pt-28 md:pt-32">
      <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-7 animate-enter-up">
          <p className="badge-pill badge-pill-hero">Organize, Track and Grow</p>
          <h1 className="hero-display">We help your business run properly.</h1>
          <p className="hero-body">
            Stop losing time, money, and information. We build simple operational systems and workflows SMEs in Rwanda need
            to run with clarity.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="btn-gradient interactive-lift h-11 rounded-2xl px-6">
              <Link href={siteConfig.bookingUrl}>
                Book a consultation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="interactive-lift h-11 rounded-2xl border-transparent bg-white px-6 text-slate-700 hover:bg-slate-100">
              <Link href="#how-it-works">See how it works</Link>
            </Button>
          </div>
        </div>

        <div className="relative animate-enter-up-delayed">
          <div className="relative aspect-[11/10] overflow-hidden rounded-3xl bg-[var(--surface-container-lowest)] shadow-[0_20px_40px_rgba(3,22,49,0.08)]">
            <Image
              src={heroImage}
              alt="Modern office workspace in Kigali with organized desk and greenery"
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover"
              priority
            />
          </div>
          <aside className="metric-card interactive-soft absolute -bottom-6 left-3 w-56 p-5 sm:left-6">
            <div className="mb-4 flex items-start justify-between">
              <BarChart3 className="size-6 text-secondary" />
              <span className="status-dot" aria-hidden />
            </div>
            <p className="metric-label">Efficiency gain</p>
            <p className="metric-value">+40%</p>
            <p className="metric-note">Average time saved on manual tracking tasks.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

