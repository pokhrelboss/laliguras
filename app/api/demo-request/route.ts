import { NextResponse } from "next/server";
import { DemoRequestPayload } from "@/types";

// In-memory submissions store for Phase 1 (extensible for database insertion in Phase 2)
export const demoSubmissions: (DemoRequestPayload & {
  id: string;
  submittedAt: string;
  status: "pending" | "reviewed" | "contacted";
})[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, organization, workEmail, phoneNumber, interest, message } =
      body as Partial<DemoRequestPayload>;

    // Server-side validations
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Full Name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!organization || typeof organization !== "string" || organization.trim().length < 2) {
      return NextResponse.json(
        { error: "Organization or Company name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!workEmail || !emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "A valid business email address is required." },
        { status: 400 }
      );
    }

    const validInterests = [
      "New Digital Product",
      "Enterprise Platform / LMS",
      "SafeStep Platform Demo",
      "Technical Consultation",
      "General Inquiry",
      "Request a Demo",
      "Training Partnership",
      "Enterprise Training",
    ];


    if (!interest || !validInterests.includes(interest)) {
      return NextResponse.json(
        { error: "Please select a valid area of interest." },
        { status: 400 }
      );
    }

    const newSubmission = {
      id: `demo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      fullName: fullName.trim(),
      organization: organization.trim(),
      workEmail: workEmail.toLowerCase().trim(),
      phoneNumber: phoneNumber ? String(phoneNumber).trim() : undefined,
      interest,
      message: message ? String(message).trim() : undefined,
      submittedAt: new Date().toISOString(),
      status: "pending" as const,
    };

    demoSubmissions.push(newSubmission);

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been successfully submitted.",
        submissionId: newSubmission.id,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}

// GET endpoint allowing admin review of demo submissions
export async function GET() {
  return NextResponse.json({
    total: demoSubmissions.length,
    submissions: demoSubmissions,
  });
}
