import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Laliguras",
  description: "Privacy policy and data governance practices of Laliguras and SafeStep.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8FAF8] py-16 md:py-24">
      <Container size="md" className="space-y-10">
        <div className="space-y-3">
          <Badge variant="crimson" size="sm">
            Legal & Compliance
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#64766E]">
            Last updated: September 10, 2026
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-[#3D4F47] space-y-6 leading-relaxed bg-white p-8 sm:p-12 rounded-2xl border border-[#E1E7E3] shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">1. Commitment to Privacy</h2>
            <p>
              Laliguras (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your personal and corporate privacy. This Privacy Policy outlines how we collect, process, and protect your information when accessing the Laliguras website and our SafeStep interactive training platform.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">2. Information We Collect</h2>
            <p>
              We collect information that you provide voluntarily when requesting demonstrations, contacting our advisory team, or enrolling in training programs:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Contact details: Name, business email, organization name, phone number.</li>
              <li>Training metrics: Module completion status, assessment scores, and certification records.</li>
              <li>Technical data: Browser type, operating system, and anonymous interaction analytics for platform optimization.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">3. Use of Information</h2>
            <p>
              Collected data is strictly utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Deliver interactive health, safety, and compliance courses.</li>
              <li>Issue and manage training completion records when that service is enabled.</li>
              <li>Provide organizational administrators with workforce compliance reporting.</li>
              <li>Improve simulation fidelity and user interface responsiveness.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">4. Data Protection & Security</h2>
            <p>
              We implement industry-standard encryption protocols (TLS in transit and AES-256 at rest) for all employee records and corporate data. We never sell or license your organization&apos;s data to third-party advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">5. Contact Us</h2>
            <p>
              For questions regarding our privacy practices or data rights, please contact our compliance officer at{" "}
              <a href="mailto:team@pokhrel.tech" className="text-[#9E1A2F] underline font-medium">
                team@pokhrel.tech
              </a>.
            </p>
          </section>

          <div className="pt-4 border-t border-[#E1E7E3]">
            <Link href="/" className="text-xs font-semibold text-[#9E1A2F] hover:underline">
              ← Return to Laliguras Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
