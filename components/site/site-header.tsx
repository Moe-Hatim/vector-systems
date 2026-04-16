"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-content";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-3 md:pt-4">
        <div className="rounded-2xl bg-white/88 px-4 py-3 shadow-[0_8px_30px_rgba(3,22,49,0.06)] backdrop-blur-xl md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-primary md:text-base">
              <Image src="/vector-logo.svg" alt="Vector Systems logo" width={30} height={30} className="size-6 md:size-7" priority />
              <span>{siteConfig.name}</span>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive(item.href)
                      ? "text-xs font-semibold uppercase tracking-[0.12em] text-secondary"
                      : "text-xs font-medium uppercase tracking-[0.12em] text-slate-500 transition-colors hover:text-slate-900"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button asChild className="btn-gradient h-8 rounded-xl px-4 text-xs md:h-9 md:px-5 md:text-sm">
                <Link href={siteConfig.bookingUrl}>Book a consultation</Link>
              </Button>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="inline-flex items-center justify-center rounded-lg p-2 text-primary transition-colors hover:bg-[var(--surface-container-low)] md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-3 space-y-2 border-t border-border/70 pt-3 md:hidden">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    isActive(item.href)
                      ? "block rounded-lg bg-[var(--surface-container-low)] px-3 py-2 text-sm font-semibold text-secondary"
                      : "block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[var(--surface-container-low)]"
                  }
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="btn-gradient mt-1 h-10 w-full rounded-xl text-sm">
                <Link href={siteConfig.bookingUrl} onClick={() => setMenuOpen(false)}>
                  Book a consultation
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
