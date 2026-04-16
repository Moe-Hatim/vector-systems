"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ConsultationPayload = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  teamSize: string;
  challenge: string;
};

const initialForm: ConsultationPayload = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  teamSize: "",
  challenge: "",
};

export function ConsultationForm() {
  const [form, setForm] = useState<ConsultationPayload>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Form is not configured yet. Add EmailJS public environment variables in Vercel settings.",
      });
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          full_name: form.fullName,
          business_name: form.businessName,
          email: form.email,
          phone: form.phone,
          team_size: form.teamSize || "Not provided",
          challenge: form.challenge,
        },
        {
          publicKey,
        }
      );

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thanks. Your request was sent successfully. We will contact you shortly.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We could not submit your request right now. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="grid gap-3 text-left md:grid-cols-2" onSubmit={onSubmit}>
      <label className="space-y-1.5 text-sm">
        <span className="font-medium text-primary-foreground">Full name</span>
        <Input
          required
          value={form.fullName}
          onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
          className="h-10 border-white/35 bg-white/14 text-primary-foreground placeholder:text-white/70 dark:bg-white/14"
          placeholder="Your full name"
        />
      </label>

      <label className="space-y-1.5 text-sm">
        <span className="font-medium text-primary-foreground">Business name</span>
        <Input
          required
          value={form.businessName}
          onChange={(event) => setForm((prev) => ({ ...prev, businessName: event.target.value }))}
          className="h-10 border-white/35 bg-white/14 text-primary-foreground placeholder:text-white/70 dark:bg-white/14"
          placeholder="Business name"
        />
      </label>

      <label className="space-y-1.5 text-sm">
        <span className="font-medium text-primary-foreground">Email</span>
        <Input
          required
          type="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="h-10 border-white/35 bg-white/14 text-primary-foreground placeholder:text-white/70 dark:bg-white/14"
          placeholder="you@business.com"
        />
      </label>

      <label className="space-y-1.5 text-sm">
        <span className="font-medium text-primary-foreground">Phone / WhatsApp</span>
        <Input
          required
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          className="h-10 border-white/35 bg-white/14 text-primary-foreground placeholder:text-white/70 dark:bg-white/14"
          placeholder="+250..."
        />
      </label>

      <label className="space-y-1.5 text-sm">
        <span className="font-medium text-primary-foreground">Team size</span>
        <Input
          value={form.teamSize}
          onChange={(event) => setForm((prev) => ({ ...prev, teamSize: event.target.value }))}
          className="h-10 border-white/35 bg-white/14 text-primary-foreground placeholder:text-white/70 dark:bg-white/14"
          placeholder="2 - 15"
        />
      </label>

      <label className="space-y-1.5 text-sm md:col-span-2">
        <span className="font-medium text-primary-foreground">Main challenge</span>
        <textarea
          required
          value={form.challenge}
          onChange={(event) => setForm((prev) => ({ ...prev, challenge: event.target.value }))}
          className="min-h-28 w-full rounded-lg border border-white/35 bg-white/14 px-3 py-2 text-sm text-primary-foreground placeholder:text-white/70 outline-none transition focus-visible:ring-2 focus-visible:ring-white/45"
          placeholder="Tell us what is currently hard to organize or track."
        />
      </label>

      <div className="md:col-span-2">
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="h-11 rounded-2xl bg-secondary px-7 text-secondary-foreground hover:bg-[#245841]"
        >
          {submitting ? "Sending..." : "Book your consultation"}
        </Button>
      </div>

      {status.type !== "idle" ? (
        <p
          className={`text-sm md:col-span-2 ${
            status.type === "success" ? "text-[#b8ffdb]" : "text-[#ffd2d2]"
          }`}
          aria-live="polite"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
