import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Card";
import { COMPANY_INFO } from "@/data/company";
import { ArrowRight, Shield, Sparkles, CheckCircle2, Play, Users } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E1E7E3] bg-gradient-to-b from-[#F8FAF8] via-white to-[#F8FAF8]">
      {/* Subtle Mountain Contour Backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-himalaya-pattern"
        aria-hidden="true"
      />

      {/* Soft Mountain Horizon Vector Silhouette */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none opacity-20 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200L180 120L360 160L600 80L840 150L1080 90L1260 140L1440 100V200H0Z"
            fill="#0F2D24"
          />
        </svg>
      </div>

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="crimson" size="sm" className="shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#9E1A2F]" />
                {COMPANY_INFO.tagline}
              </Badge>
              <span className="hidden sm:inline-block text-xs font-semibold text-[#52665C] tracking-wide uppercase">
                Workplace Health & Safety
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1914] tracking-tight leading-[1.1]">
                <span className="text-[#9E1A2F]">SafeStep</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F2D24] mt-2 sm:mt-3">
                  An Integrated Health and Safety Training Platform
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#831526] tracking-wide pt-1">
                {COMPANY_INFO.mantra}
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Interactive training. Real-world scenarios. Safer people, stronger workplaces.
              We replace passive compliance checklists with realistic 360° workplace simulations,
              empowering teams to spot hazards before incidents occur.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Request a Demo
              </Button>
              <Button
                href="/platform"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/80"
              >
                Explore Platform
              </Button>
            </div>

            {/* Key trust indicators */}
            <div className="pt-4 border-t border-[#E1E7E3] grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E6245] shrink-0" />
                <span className="text-xs font-medium text-[#2E4038]">360° Hazard Scenarios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0E6245] shrink-0" />
                <span className="text-xs font-medium text-[#2E4038]">Mobile & Desktop Ready</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#0E6245] shrink-0" />
                <span className="text-xs font-medium text-[#2E4038]">Verifiable Certificates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Platform Visual Composition */}
          <div className="lg:col-span-5 relative">
            {/* Main Interactive Preview Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-[#CCD6CE]/80 transition-transform duration-300 hover:shadow-2xl">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E1E7E3]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E63952]" />
                  <div className="w-3 h-3 rounded-full bg-[#EAB308]" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                  <span className="ml-2 text-xs font-semibold text-[#0A1914]">
                    SafeStep Simulation Engine
                  </span>
                </div>
                <Badge variant="forest" size="sm">
                  Active Demo
                </Badge>
              </div>

              {/* Graphic Screen Representation */}
              <div className="relative rounded-xl overflow-hidden bg-[#0A1914] aspect-4/3 flex flex-col justify-between p-4 sm:p-5 text-white border border-[#1E4639]">
                {/* Background Blueprint Grid */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Top overlay badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 bg-[#0F2D24]/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#1E4639] text-xs font-mono text-[#A8BFB5]">
                    <Shield className="w-3.5 h-3.5 text-[#E63952]" />
                    <span>SCENARIO: WAREHOUSE-01</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2 py-0.5 rounded">
                    360° LIVE
                  </span>
                </div>

                {/* Center Scenario Visual Art */}
                <div className="relative z-10 my-auto text-center space-y-2 py-2">
                  <div className="inline-flex p-3 rounded-full bg-[#9E1A2F]/20 border border-[#9E1A2F]/40 text-[#F5C7CE] mb-1 animate-pulse">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    Manual Handling & Hazard Inspection
                  </h2>
                  <p className="text-xs text-[#C4D6CD] max-w-xs mx-auto">
                    Click and drag to explore the warehouse and identify 5 potential safety risks in real time.
                  </p>
                </div>

                {/* Bottom Interactive Progress Bar */}
                <div className="relative z-10 bg-[#0F2D24]/95 backdrop-blur-xs p-3 rounded-lg border border-[#1E4639] space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#A8BFB5] font-medium">Hazards Detected</span>
                    <span className="text-white font-bold font-mono">4 of 5 Found</span>
                  </div>
                  <div className="w-full bg-[#163E32] rounded-full h-2 overflow-hidden">
                    <div className="bg-[#9E1A2F] h-full rounded-full w-4/5 transition-all duration-500" />
                  </div>
                </div>
              </div>

              {/* Floating Badge: Inspired by Himalayan Laligurans */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white rounded-xl p-3 shadow-lg border border-[#E1E7E3] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FDF2F4] border border-[#F5C7CE] flex items-center justify-center shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 29C14 28 10 24 9 20C12 21 16 23 18 29ZM18 29C22 28 26 24 27 20C24 21 20 23 18 29Z"
                      fill="#0F2D24"
                    />
                    <circle cx="18" cy="14" r="8" fill="#9E1A2F" />
                    <circle cx="18" cy="14" r="3.5" fill="#E63952" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0A1914] leading-tight">
                    Small Steps
                  </p>
                  <p className="text-[11px] font-semibold text-[#9E1A2F]">
                    Safer Futures
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white rounded-xl p-3 shadow-lg border border-[#E1E7E3] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EBF3F0] flex items-center justify-center text-[#0F2D24]">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-[#52665C] font-medium leading-none">
                    Learner Retention
                  </p>
                  <p className="text-sm font-extrabold text-[#0F2D24] mt-0.5">
                    High Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
