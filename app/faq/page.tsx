import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FAQS } from "@/data/faqs";
import { FaqSection } from "@/components/sections/FaqSection";
import { Mail, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Laliguras SafeStep",
  description:
    "Find answers to common questions about Laliguras safety training, certificates, mobile access, organization management, and demo requests.",
};

export default function FaqPage() {
  return (
    <div className="bg-[#F8FAF8] py-16 md:py-24">
      <Container size="xl" className="space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="crimson" size="sm">
            Support & Help
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1914] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed">
            Everything you need to know about our health and safety curriculum, verifiable certifications, and enterprise deployment options.
          </p>
        </div>

        {/* FAQ Accordion Component */}
        <FaqSection initialFaqs={FAQS} />

        {/* Still Have Questions Box */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-[#EBF3F0] border border-[#CDE1D9] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0F2D24] text-white flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6 text-[#E63952]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F2D24]">
                Have a question not listed here?
              </h3>
              <p className="text-xs sm:text-sm text-[#1E4639]">
                Our safety advisory team is available to assist your organization.
              </p>
            </div>
          </div>
          <Button
            href="/contact"
            variant="primary"
            size="md"
            leftIcon={<Mail className="w-4 h-4" />}
            className="shrink-0 w-full sm:w-auto"
          >
            Contact Our Team
          </Button>
        </div>
      </Container>
    </div>
  );
}
