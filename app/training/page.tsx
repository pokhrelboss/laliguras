import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { COURSES } from "@/data/courses";
import { CourseCatalog } from "@/components/sections/CourseCatalog";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Health & Safety Training Modules | Accredited Courses",
  description:
    "Browse Laliguras accredited occupational health and safety training modules: Manual Handling, Fire Safety, COSHH, Working at Height, PPE, and Emergency Response.",
};

export default function TrainingPage() {
  return (
    <div className="bg-[#F8FAF8] py-16 md:py-24">
      <Container size="xl" className="space-y-12">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="primary" size="md">
            SAFESTEP COURSEWARE • ENGINEERED BY LALIGURAS
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1914] tracking-tight">
            Accredited Workplace Safety Modules
          </h1>
          <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed">
            The safety training catalog engineered by <strong>Laliguras</strong> for the <strong>SafeStep</strong> platform. Every module combines clear instruction, 360° virtual scenarios, and verifiable certifications.
          </p>
        </div>


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
