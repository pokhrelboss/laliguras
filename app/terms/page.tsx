import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Laliguras",
  description: "Terms and conditions governing the use of Laliguras and the SafeStep training platform.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#F8FAF8] py-16 md:py-24">
      <Container size="md" className="space-y-10">
        <div className="space-y-3">
          <Badge variant="forest" size="sm">
            Terms of Service
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-[#64766E]">
            Last updated: September 10, 2026
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-[#3D4F47] space-y-6 leading-relaxed bg-white p-8 sm:p-12 rounded-2xl border border-[#E1E7E3] shadow-xs">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Laliguras website and the SafeStep training platform, you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a company or entity, you represent that you have the authority to bind such entity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">2. Training Content & Intellectual Property</h2>
            <p>
              All courseware, 360-degree interactive scenarios, video assets, text, graphics, and underlying software code are the intellectual property of Laliguras. Subscribers and learners receive a non-exclusive, non-transferable license to access course modules during their active subscription period.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">3. Certification & Compliance</h2>
            <p>
              Certificates of completion are awarded to individual learners upon successfully satisfying course criteria and assessment thresholds. Certificates reflect completion of instructional requirements and are intended to assist employers with statutory compliance records.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">4. User Conduct</h2>
            <p>
              Users agree not to reverse engineer, scrape, copy, or distribute platform materials without prior written consent from Laliguras.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0A1914]">5. Inquiries</h2>
            <p>
              For legal notices or questions regarding service agreements, contact us at{" "}
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
