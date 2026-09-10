"use client";

import React from "react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Zap, Users, Code, Check } from "lucide-react";

export const WhyLaligurasSection: React.FC = () => {
  const reasons = [
    {
      title: "Architecture Built to Last",
      description: "We don't hack together throwaway MVPs. Every data schema, component tree, and cloud deployment is engineered with type-safety, clean boundaries, and performance benchmarks.",
      icon: Code,
    },
    {
      title: "Direct Access to Senior Builders",
      description: "No layers of account managers or junior pass-throughs. You collaborate directly with experienced software engineers and product designers who execute your vision.",
      icon: Users,
    },
    {
      title: "100% Client Intellectual Property",
      description: "You own all code, repositories, design assets, and architectural documentation. No lock-in, no proprietary black boxes, and zero vendor traps.",
      icon: ShieldCheck,
    },
    {
      title: "Continuous Speed & Reliability",
      description: "Bi-weekly sprint demos, continuous deployment pipelines, and proactive automated testing ensure your product launches on schedule with zero surprises.",
      icon: Zap,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-[#E1E7E3]">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E1A2F]">
                Why Work With Us
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1914] leading-[1.18]">
                Technical rigor meets human-centered craft.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="text-base text-[#2E4038] leading-relaxed">
                Organizations choose Laliguras when quality cannot be compromised. Whether building complex spatial training engines like SafeStep or scaling mission-critical web applications, we operate as an embedded extension of your team.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="p-4 rounded-xl bg-white border border-[#E1E7E3] shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A1914]">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                  <span>Full-Stack Modern Standards (Next.js 16 • React 19 • TypeScript)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A1914]">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                  <span>WCAG 2.2 AA Accessibility & Cross-Browser Parity</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A1914]">
                  <Check className="w-4 h-4 text-[#22C55E]" />
                  <span>Transparent Fixed-Sprint Engagements</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <ScrollReveal key={reason.title} direction="up" delay={idx * 100} duration={600}>
                  <div className="p-6 rounded-2xl bg-white border border-[#E1E7E3] hover:border-[#CCD6CE] hover:shadow-[0_12px_30px_rgba(10,25,20,0.04)] transition-all h-full space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF2F4] text-[#9E1A2F] flex items-center justify-center border border-[#F5C7CE]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1914]">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-[#52665C] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};
