"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";
import { COMPANY_EMAIL } from "@/lib/company-info";
import { getSiteCopy, type Locale } from "@/lib/i18n";

export function ContactForm({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);
  const copy = getSiteCopy(locale).form;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const sender = name || company || copy.prospectivePartner;
    const subject = encodeURIComponent(`${copy.subjectPrefix}: ${sender}`);
    const body = encodeURIComponent(
      `${copy.bodyName}: ${name}\n${copy.bodyCompany}: ${company}\n${copy.bodyEmail}: ${email}\n\n${copy.bodyProject}:\n${message}`,
    );

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
          {copy.name}
          <input
            name="name"
            required
            className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28"
            placeholder={copy.namePlaceholder}
          />
        </label>
        <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
          {copy.company}
          <input
            name="company"
            className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28"
            placeholder={copy.companyPlaceholder}
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
        {copy.email}
        <input
          name="email"
          type="email"
          required
          className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28"
          placeholder="name@company.com"
        />
      </label>
      <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
        {copy.message}
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm normal-case leading-6 tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28"
          placeholder={copy.messagePlaceholder}
        />
      </label>
      <button
        type="submit"
        className="mt-1 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:scale-[1.01] hover:bg-white/90"
      >
        {sent ? <Check size={17} /> : <ArrowUpRight size={17} />}
        {sent ? copy.prepared : copy.send}
      </button>
      <p className="text-center text-xs leading-5 text-white/32">
        {copy.note}
      </p>
    </form>
  );
}
