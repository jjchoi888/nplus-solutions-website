import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { COMPANY_EMAIL } from "@/lib/company-info";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const name = clean(payload.name, 120);
    const company = clean(payload.company, 160);
    const email = clean(payload.email, 254);
    const message = clean(payload.message, 5000);
    const website = clean(payload.website, 200);
    const locale = clean(payload.locale, 10) || "en";

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid form submission" },
        { status: 400 },
      );
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
    const forwardedFor = request.headers.get("x-forwarded-for") || "";
    const ipAddress = forwardedFor.split(",")[0]?.trim() || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    await transporter.sendMail({
      from: `N Plus Website <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `[N Plus Website] Inquiry from ${senderName}`,
      text: [
        "New inquiry from nplusplatforms.com",
        "",
        `Name: ${name}`,
        `Company: ${company || "-"}`,
        `Email: ${email}`,
        `Language: ${locale}`,
        "",
        "Project / Inquiry:",
        message,
        "",
        "---",
        `IP: ${ipAddress}`,
        `User-Agent: ${userAgent}`,
        `Received: ${new Date().toISOString()}`,
      ].join("\\n"),
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
