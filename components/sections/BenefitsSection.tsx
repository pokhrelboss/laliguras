import React from "react";
import { Container, Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";
import { Check, Building2, UserCheck } from "lucide-react";

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E1E7E3]">
      <Container size="xl">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="forest" size="sm">
            Measurable Outcomes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
            Built for Employers. Loved by Learners.
          </h2>
          <p className="text-base text-[#3D4F47] leading-relaxed">
            Effective health and safety training must satisfy compliance officers while remaining engaging and frictionless for employees on the ground.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Employers Column */}
          <Card className="p-8 border-[#CDE1D9] bg-[#F8FAF8] hover:border-[#0F2D24] transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0F2D24] text-white flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-[#A8BFB5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A1914]">
                  For Employers & Safety Leaders
                </h3>
                <p className="text-xs text-[#52665C]">
                  Reduce incidents, ensure legal compliance, and protect operations
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {COMPANY_INFO.benefits.employers.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#2E4038]">
                  <span className="w-5 h-5 rounded-full bg-[#EBF3F0] text-[#0E6245] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Employees Column */}
          <Card className="p-8 border-[#F5C7CE] bg-[#FDF8F9] hover:border-[#9E1A2F] transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#9E1A2F] text-white flex items-center justify-center shrink-0">
                <UserCheck className="w-6 h-6 text-[#F5C7CE]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A1914]">
                  For Employees & Learners
                </h3>
                <p className="text-xs text-[#831526]">
                  Learn practical, life-saving habits with engaging interactive modules
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {COMPANY_INFO.benefits.employees.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#2E4038]">
                  <span className="w-5 h-5 rounded-full bg-[#FDF2F4] text-[#9E1A2F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
};
