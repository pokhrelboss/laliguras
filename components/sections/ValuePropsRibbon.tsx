import React from "react";
import { Container } from "@/components/ui/Card";
import { COMPANY_INFO } from "@/data/company";
import {
  GraduationCap,
  ShieldCheck,
  Wrench,
  TrendingUp,
  Building2,
} from "lucide-react";

export const ValuePropsRibbon: React.FC = () => {
  const icons = [
    GraduationCap,
    ShieldCheck,
    Wrench,
    TrendingUp,
    Building2,
  ];

  return (
    <section className="py-12 bg-white border-b border-[#E1E7E3] relative z-20">
      <Container size="xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
            The Laliguras Advantage
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1914] tracking-tight mt-1.5">
            Designed for Real Workplace Results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {COMPANY_INFO.valueProps.map((prop, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={prop.title}
                className="group p-5 rounded-xl border border-[#E1E7E3] bg-[#F8FAF8] hover:bg-white hover:border-[#9E1A2F]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FDF2F4] border border-[#F5C7CE] flex items-center justify-center text-[#9E1A2F] group-hover:bg-[#9E1A2F] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0A1914] group-hover:text-[#9E1A2F] transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-[#3D4F47] leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
