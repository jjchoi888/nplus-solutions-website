"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { FormEvent, useState } from "react";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`N Plus website inquiry from ${name || company || "a prospective partner"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nProject / Inquiry:\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
          Name
          <input
            name="name"
            required
            className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
          Company
          <input
            name="company"
            className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28"
            placeholder="Company or organization"
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
        Email
        <input
          name="email"
          type="email"
          required
          className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28"
          placeholder="name@company.com"
        />
      </label>
      <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
        Tell us about your project
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm normal-case leading-6 tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28"
          placeholder="Project idea, objective, location, timeline, or support required"
        />
      </label>
      <button
        type="submit"
        className="mt-1 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:scale-[1.01] hover:bg-white/90"
      >
        {sent ? <Check size={17} /> : <ArrowUpRight size={17} />}
        {sent ? "Email prepared" : "Send inquiry"}
      </button>
      <p className="text-center text-xs leading-5 text-white/32">The button opens your default email application with the inquiry details prepared.</p>
    </form>
  );
}
