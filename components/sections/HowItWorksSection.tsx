import React from "react";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";
import { CheckCircle2 } from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAF8] border-b border-[#E1E7E3]">
      <Container size="xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="crimson" size="sm">
            Simple Implementation
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
            How SafeStep Works for Organizations
          </h2>
          <p className="text-base text-[#3D4F47] leading-relaxed">
            From roster onboarding to verifiable compliance auditing, our process is built for seamless deployment with zero technical overhead.
          </p>
        </div>

        {/* 6-step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.workflowSteps.map((step) => (
            <div
              key={step.step}
              className="relative p-6 rounded-xl bg-white border border-[#E1E7E3] hover:border-[#9E1A2F]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-[#9E1A2F]">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EBF3F0] flex items-center justify-center text-[#0E6245]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0A1914] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#3D4F47] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
