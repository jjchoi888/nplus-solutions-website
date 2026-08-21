"use client";

import {
  ArrowUpRight,
  Check,
  FileText,
  ImageIcon,
  LoaderCircle,
  Paperclip,
  X,
} from "lucide-react";
import {
  ClipboardEvent,
  DragEvent,
  FormEvent,
  useRef,
  useState,
} from "react";
import { COMPANY_EMAIL } from "@/lib/company-info";
import { getSiteCopy, type Locale } from "@/lib/i18n";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const MAX_FILES = 4;
const MAX_TOTAL_BYTES = 3 * 1024 * 1024;
const ACCEPT_ATTRIBUTE =
  ".jpg,.jpeg,.png,.webp,.gif,.heic,.heif,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv";

const ALLOWED_EXTENSIONS = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "gif",
  "heic",
  "heif",
  "pdf",
  "doc",
  "docx",
  "xls",
  "xlsx",
  "ppt",
  "pptx",
  "txt",
  "csv",
]);

function getExtension(filename: string) {
  const parts = filename.toLowerCase().split(".");
  return parts.length > 1 ? parts.pop() || "" : "";
}

function isAllowedFile(file: File) {
  return ALLOWED_EXTENSIONS.has(getExtension(file.name));
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileKey(file: File) {
  return `${file.name}:${file.size}:${file.lastModified}`;
}

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentError, setAttachmentError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const copy = getSiteCopy(locale).form;

  function addFiles(files: File[]) {
    if (!files.length) return;

    setStatus("idle");
    setAttachmentError("");

    setAttachments((current) => {
      const next = [...current];
      const existingKeys = new Set(next.map(fileKey));
      let totalBytes = next.reduce((sum, file) => sum + file.size, 0);

      for (const file of files) {
        if (existingKeys.has(fileKey(file))) continue;

        if (!isAllowedFile(file)) {
          setAttachmentError(copy.attachmentTypeNotAllowed);
          continue;
        }

        if (next.length >= MAX_FILES) {
          setAttachmentError(copy.attachmentTooMany);
          break;
        }

        if (totalBytes + file.size > MAX_TOTAL_BYTES) {
          setAttachmentError(copy.attachmentTooLarge);
          continue;
        }

        next.push(file);
        existingKeys.add(fileKey(file));
        totalBytes += file.size;
      }

      return next;
    });
  }

  function removeAttachment(index: number) {
    setAttachments((current) =>
      current.filter((_, itemIndex) => itemIndex !== index),
    );
    setAttachmentError("");
    setStatus("idle");
  }

  function handlePaste(event: ClipboardEvent<HTMLFormElement>) {
    const itemFiles = Array.from(event.clipboardData.items)
      .filter((item) => item.kind === "file")
      .map((item) => item.getAsFile())
      .filter((file): file is File => Boolean(file));

    const files = itemFiles.length
      ? itemFiles
      : Array.from(event.clipboardData.files || []);

    if (!files.length) return;

    event.preventDefault();
    addFiles(files);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    addFiles(Array.from(event.dataTransfer.files || []));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const formElement = event.currentTarget;
    const source = new FormData(formElement);
    const payload = new FormData();

    payload.set("name", String(source.get("name") || "").trim());
    payload.set("company", String(source.get("company") || "").trim());
    payload.set("email", String(source.get("email") || "").trim());
    payload.set("message", String(source.get("message") || "").trim());
    payload.set("website", String(source.get("website") || "").trim());
    payload.set("locale", locale);

    for (const file of attachments) {
      payload.append("attachments", file, file.name);
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      formElement.reset();
      setAttachments([]);
      setAttachmentError("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";
  const totalAttachmentBytes = attachments.reduce(
    (sum, file) => sum + file.size,
    0,
  );

  return (
    <form
      onSubmit={handleSubmit}
      onPaste={handlePaste}
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

      <div className="grid gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/42">
          {copy.attachments}
        </p>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ACCEPT_ATTRIBUTE}
          className="hidden"
          onChange={(event) => {
            addFiles(Array.from(event.target.files || []));
            event.currentTarget.value = "";
          }}
        />

        <div
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
          className="rounded-2xl border border-dashed border-white/14 bg-black/10 p-4 transition hover:border-white/24"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-white/68">{copy.attachmentHelp}</p>
              <p className="mt-1 text-xs leading-5 text-white/42">
                {copy.pasteHelp}
              </p>
            </div>

            <button
              type="button"
              disabled={isSending}
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-4 py-2.5 text-xs font-semibold text-white/76 transition hover:border-white/24 hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Paperclip size={15} />
              {copy.attachFiles}
            </button>
          </div>
        </div>

        {attachments.length > 0 ? (
          <div className="grid gap-2">
            {attachments.map((file, index) => (
              <div
                key={fileKey(file)}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-white/64">
                  {file.type.startsWith("image/") ? (
                    <ImageIcon size={16} />
                  ) : (
                    <FileText size={16} />
                  )}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-white/78">
                    {file.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/38">
                    {formatBytes(file.size)}
                  </p>
                </div>

                <button
                  type="button"
                  disabled={isSending}
                  onClick={() => removeAttachment(index)}
                  aria-label={copy.removeAttachment}
                  title={copy.removeAttachment}
                  className="grid size-8 shrink-0 place-items-center rounded-full text-white/42 transition hover:bg-white/8 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <X size={15} />
                </button>
              </div>
            ))}

            <p className="text-right text-[11px] text-white/38">
              {attachments.length}/{MAX_FILES} · {formatBytes(totalAttachmentBytes)} / 3 MB
            </p>
          </div>
        ) : null}

        {attachmentError ? (
          <p role="alert" className="text-xs leading-5 text-rose-200/90">
            {attachmentError}
          </p>
        ) : null}
      </div>

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
