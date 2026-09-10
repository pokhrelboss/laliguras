import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { COURSES } from "@/data/courses";
import { CourseCatalog } from "@/components/sections/CourseCatalog";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SafeStep Training Modules",
  description:
    "Browse the workplace health and safety modules currently mapped for the SafeStep product project.",
};

export default function TrainingPage() {
  return (
    <div className="bg-[#f5f4ef]">
      <section className="page-hero py-20 sm:py-28">
      <Container size="xl">
        {/* Page Header */}
        <div className="relative z-10 max-w-4xl space-y-5">
          <span className="eyebrow">SafeStep · A Laliguras project</span>
          <h1 className="text-balance text-5xl font-semibold leading-[.95] tracking-[-0.06em] text-[#101916] sm:text-7xl">
            Workplace safety modules, <span className="display-serif text-[#9b1730] italic">clearly mapped.</span>
          </h1>
          <p className="max-w-2xl border-l border-[#9b1730] pl-6 text-base leading-8 text-[#52635b]">
            The current course catalogue for SafeStep, a separate health and safety training product project created by Laliguras.
          </p>
        </div>
      </Container>
      </section>

      <Container size="xl" className="space-y-12 py-20 sm:py-28">

        {/* Interactive Filterable Catalog */}
        <CourseCatalog initialCourses={COURSES} />

        {/* Bespoke Training Consultation CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0F2D24] text-white border border-[#1E4639] flex flex-col lg:flex-row items-center justify-between gap-8 mt-16">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="forest" size="sm" className="bg-[#163E32] text-[#F5C7CE] border-[#215645]">
              Tailored Curricula
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Do you operate a specialized industrial facility?
            </h3>
            <p className="text-sm text-[#C4D6CD] leading-relaxed">
              We create custom training modules matching your internal Standard Operating Procedures (SOPs), specific plant machinery, and unique facility layout.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#A8BFB5]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                Bespoke 360° Photo Capture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                Company SOP Integration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                Dedicated Tenant LMS
              </span>
            </div>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="shrink-0 w-full lg:w-auto"
          >
            Request Custom Consultation
          </Button>
        </div>
      </Container>
    </div>
  );
}
