import { NextResponse } from "next/server";
import { DemoRequestPayload } from "@/types";

const VALID_INTERESTS = new Set([
  "New Digital Product",
  "Enterprise Platform / LMS",
  "SafeStep Platform Demo",
  "Technical Consultation",
  "General Inquiry",
]);

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

    const webhookUrl = process.env.DEMO_REQUEST_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ error: "Online inquiries are not configured yet. Please email info@laliguras.com directly." }, { status: 503 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);
    let delivery: Response;
    try {
      delivery = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.DEMO_REQUEST_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.DEMO_REQUEST_WEBHOOK_SECRET}` } : {}),
        },
        body: JSON.stringify({
          id: crypto.randomUUID(),
          fullName,
          organization,
          workEmail,
          phoneNumber: phoneNumber || undefined,
          interest: body.interest,
          message: message || undefined,
          submittedAt: new Date().toISOString(),
        }),
        cache: "no-store",
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!delivery.ok) {
      return NextResponse.json({ error: "We could not deliver your inquiry. Please email info@laliguras.com directly." }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Your inquiry was delivered to Laliguras." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "We could not process your inquiry. Please email info@laliguras.com directly." }, { status: 500 });
  }
}
