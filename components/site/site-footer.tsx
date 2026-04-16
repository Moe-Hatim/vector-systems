import Link from "next/link";
import { Link2, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--surface-container-low)]">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <p className="text-base font-semibold tracking-tight text-primary">{siteConfig.name}</p>
          <p className="text-sm text-[var(--on-surface-variant)]">Building practical systems for SMEs.</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-primary">Services</h4>
          <ul className="space-y-2 text-sm text-[var(--on-surface-variant)]">
            <li>
              <Link href="/services#operational-setup" className="hover:text-primary">
                Operational Setup
              </Link>
            </li>
            <li>
              <Link href="/services#workflow-systems" className="hover:text-primary">
                Workflow Systems
              </Link>
            </li>
            <li>
              <Link href="/services#automation" className="hover:text-primary">
                Automation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-primary">Company</h4>
          <ul className="space-y-2 text-sm text-[var(--on-surface-variant)]">
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-primary">
                Case Studies
              </Link>
            </li>
            <li>
              <a href={siteConfig.whatsappUrl} className="hover:text-primary">
                Contact on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-primary">Connect</h4>
          <p className="mb-4 text-sm text-[var(--on-surface-variant)]">{siteConfig.location}</p>
          <ul className="space-y-2 text-sm text-[var(--on-surface-variant)]">
            <li>
              <a href="#" className="inline-flex items-center gap-2 hover:text-primary">
                <Link2 className="size-4" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="size-4" />
                <span>{siteConfig.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="size-4" />
                <span>{siteConfig.phone}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-shell py-6">
        <p className="text-xs text-[var(--on-surface-variant)]/80">© 2026 Vector Systems. Built for Rwandan SMEs.</p>
      </div>
    </footer>
  );
}

