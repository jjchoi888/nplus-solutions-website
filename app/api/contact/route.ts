import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { COMPANY_EMAIL } from "@/lib/company-info";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILES = 4;
const MAX_TOTAL_BYTES = 3 * 1024 * 1024;

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

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function getExtension(filename: string) {
  const parts = filename.toLowerCase().split(".");
  return parts.length > 1 ? parts.pop() || "" : "";
}

function sanitizeFilename(filename: string) {
  return (
    filename
      .replace(/[\\/\0\r\n\t]/g, "_")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180) || "attachment"
  );
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const name = clean(form.get("name"), 120);
    const company = clean(form.get("company"), 160);
    const email = clean(form.get("email"), 254);
    const message = clean(form.get("message"), 5000);
    const website = clean(form.get("website"), 200);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid form submission" },
        { status: 400 },
      );
    }

    const files = form
      .getAll("attachments")
      .filter(
        (entry): entry is File =>
          typeof entry !== "string" && entry.size > 0,
      );

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { ok: false, error: "Too many attachments" },
        { status: 400 },
      );
    }

    let totalBytes = 0;

    for (const file of files) {
      if (!ALLOWED_EXTENSIONS.has(getExtension(file.name))) {
        return NextResponse.json(
          { ok: false, error: "Unsupported attachment type" },
          { status: 400 },
        );
      }

      totalBytes += file.size;

      if (totalBytes > MAX_TOTAL_BYTES) {
        return NextResponse.json(
          { ok: false, error: "Attachments are too large" },
          { status: 413 },
        );
      }
    }

    const smtpUser = process.env.ZOHO_SMTP_USER;
    const smtpPassword = process.env.ZOHO_SMTP_PASSWORD;
    const smtpHost = process.env.ZOHO_SMTP_HOST || "smtp.zoho.com";
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT || "465");
    const recipient = process.env.CONTACT_TO_EMAIL || COMPANY_EMAIL;

    if (!smtpUser || !smtpPassword) {
      console.error("Contact SMTP credentials are not configured.");
      return NextResponse.json(
        { ok: false, error: "Mail service is not configured" },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const senderName = name || company || "Website visitor";
    const receivedAt = new Date().toLocaleString("en-PH", {
      timeZone: "Asia/Manila",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const mailAttachments = await Promise.all(
      files.map(async (file) => ({
        filename: sanitizeFilename(file.name),
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || undefined,
      })),
    );

    const attachmentNames = mailAttachments.map((item) => item.filename);

    const text = [
      "New inquiry from nplusplatforms.com",
      "",
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      ...(attachmentNames.length
        ? ["", `Attachments: ${attachmentNames.join(", ")}`]
        : []),
      "",
      `Received: ${receivedAt}`,
    ].join("\n");

    await transporter.sendMail({
      from: `N Plus Website <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `[N Plus Website] Inquiry from ${senderName}`,
      text,
      attachments: mailAttachments,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send inquiry" },
      { status: 500 },
    );
  }
}
