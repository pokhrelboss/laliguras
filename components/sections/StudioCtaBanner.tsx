"use client";

import React from "react";
import { Container } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Sparkles, Mail } from "lucide-react";

export const StudioCtaBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] relative overflow-hidden">
      <Container size="xl">
        <ScrollReveal direction="up" duration={700}>
          <div className="rounded-3xl bg-[#0A1914] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-[#1E4639]">
            
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#9E1A2F]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-radial from-[#163E32] to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163E32] border border-[#215645] text-xs font-semibold text-[#F5C7CE]">
                <Sparkles className="w-3.5 h-3.5 text-[#E63952]" />
                <span>Let&apos;s Build Something Ambitious</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                Have a mission-critical platform to build? Let&apos;s architect it together.
              </h2>

              <p className="text-base sm:text-lg text-[#C4D6CD] leading-relaxed max-w-2xl">
                From specialized enterprise solutions like SafeStep to full-scale web products, we bring engineering precision, design elegance, and complete client ownership to your vision.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project Consultation
                </Button>
                <Button
                  href="/projects/safestep"
                  variant="outline"
                  size="lg"
                  className="bg-[#163E32] border-[#215645] text-white hover:bg-[#1E4639]"
                >
                  Explore SafeStep Case Study
                </Button>
              </div>

              <div className="pt-6 border-t border-[#1E4639] flex flex-wrap items-center gap-6 text-xs text-[#A8BFB5]">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#E63952]" />
                  Direct response within 24 hours: info@laliguras.com
                </span>
                <span>•</span>
                <span>Fixed-scope or sprint-based partnerships</span>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
