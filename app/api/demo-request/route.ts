import { NextResponse } from "next/server";
import { DemoRequestPayload } from "@/types";

const RESEND_API_URL = "https://api.resend.com/emails";
const SENDER_EMAIL = "Laliguras <noreply@pokhrel.tech>";
const RECIPIENT_EMAIL = "team@pokhrel.tech";
const VALID_INTERESTS = new Set([
  "New Digital Product",
  "Enterprise Platform / LMS",
  "SafeStep Platform Demo",
  "Technical Consultation",
  "General Inquiry",
]);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function textValue(value: string | undefined) {
  return value?.trim() || "—";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<DemoRequestPayload>;
    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    const organization = typeof body.organization === "string" ? body.organization.trim() : "";
    const workEmail = typeof body.workEmail === "string" ? body.workEmail.trim().toLowerCase() : "";
    const phoneNumber = typeof body.phoneNumber === "string" ? body.phoneNumber.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (fullName.length < 2) return NextResponse.json({ error: "Please provide your full name." }, { status: 400 });
    if (organization.length < 2) return NextResponse.json({ error: "Please provide your organization." }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) return NextResponse.json({ error: "Please provide a valid work email." }, { status: 400 });
    if (!body.interest || !VALID_INTERESTS.has(body.interest)) return NextResponse.json({ error: "Please select a valid area of interest." }, { status: 400 });
    if (message.length > 5_000) return NextResponse.json({ error: "Please keep your message under 5,000 characters." }, { status: 400 });

    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    if (!resendApiKey) {
      return NextResponse.json({ error: "Online inquiries are not configured yet. Please email team@pokhrel.tech directly." }, { status: 503 });
    }

    const submittedAt = new Date().toISOString();
    const interest = body.interest;
    const safeName = escapeHtml(fullName);
    const safeOrganization = escapeHtml(organization);
    const safeEmail = escapeHtml(workEmail);
    const safePhone = escapeHtml(textValue(phoneNumber));
    const safeInterest = escapeHtml(interest);
    const safeMessage = escapeHtml(textValue(message)).replaceAll("\n", "<br />");
    const textBody = [
      "New Laliguras inquiry",
      "",
      `Name: ${fullName}`,
      `Organization: ${organization}`,
      `Email: ${workEmail}`,
      `Phone: ${textValue(phoneNumber)}`,
      `Interest: ${interest}`,
      `Submitted: ${submittedAt}`,
      "",
      "Message:",
      textValue(message),
    ].join("\n");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);
    let delivery: Response;
    try {
      delivery = await fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: [RECIPIENT_EMAIL],
          reply_to: workEmail,
          subject: `New Laliguras inquiry — ${fullName}`,
          text: textBody,
          html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#101916"><h2>New Laliguras inquiry</h2><p><strong>Name:</strong> ${safeName}<br /><strong>Organization:</strong> ${safeOrganization}<br /><strong>Email:</strong> ${safeEmail}<br /><strong>Phone:</strong> ${safePhone}<br /><strong>Interest:</strong> ${safeInterest}<br /><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p><p><strong>Message</strong></p><p>${safeMessage}</p></div>`,
        }),
        cache: "no-store",
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!delivery.ok) {
      console.error("Resend rejected a Laliguras inquiry", { status: delivery.status });
      return NextResponse.json({ error: "We could not deliver your inquiry. Please email team@pokhrel.tech directly." }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Your inquiry was delivered to Laliguras." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "We could not process your inquiry. Please email team@pokhrel.tech directly." }, { status: 500 });
  }
}
