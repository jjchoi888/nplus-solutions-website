"use client";

import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { COMPANY_EMAIL } from "@/lib/company-info";
import { getSiteCopy, type Locale } from "@/lib/i18n";

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const copy = getSiteCopy(locale).form;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const payload = {
      name: String(form.get("name") || "").trim(),
      company: String(form.get("company") || "").trim(),
      email: String(form.get("email") || "").trim(),
      message: String(form.get("message") || "").trim(),
      website: String(form.get("website") || "").trim(),
      locale,
    };

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 sm:p-7"
    >
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label>
          Website
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
          {copy.name}
          <input
            name="name"
            required
            maxLength={120}
            disabled={isSending}
            className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28 disabled:cursor-not-allowed disabled:opacity-60"
            placeholder={copy.namePlaceholder}
          />
        </label>

        <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
          {copy.company}
          <input
            name="company"
            maxLength={160}
            disabled={isSending}
            className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28 disabled:cursor-not-allowed disabled:opacity-60"
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
          maxLength={254}
          disabled={isSending}
          className="h-13 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28 disabled:cursor-not-allowed disabled:opacity-60"
          placeholder="name@company.com"
        />
      </label>

      <label className="grid gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/42">
        {copy.message}
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          disabled={isSending}
          className="resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm normal-case leading-6 tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-white/28 disabled:cursor-not-allowed disabled:opacity-60"
          placeholder={copy.messagePlaceholder}
        />
      </label>

      <button
        type="submit"
        disabled={isSending}
        className="mt-1 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:scale-[1.01] hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:scale-100"
      >
        {status === "sending" ? (
          <LoaderCircle size={17} className="animate-spin" />
        ) : status === "success" ? (
          <Check size={17} />
        ) : (
          <ArrowUpRight size={17} />
        )}
        {status === "sending"
          ? copy.sending
          : status === "success"
            ? copy.sent
            : copy.send}
      </button>

      {status === "error" ? (
        <p
          role="alert"
          className="text-center text-xs leading-5 text-rose-200/90"
        >
          {copy.sendError}{" "}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="underline underline-offset-2"
          >
            {COMPANY_EMAIL}
          </a>
        </p>
      ) : (
        <p
          className={`text-center text-xs leading-5 ${
            status === "success" ? "text-emerald-200/90" : "text-white/52"
          }`}
        >
          {status === "success" ? copy.sentNote : copy.note}
        </p>
      )}
    </form>
  );
}
