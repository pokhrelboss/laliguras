"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/data/services";
import { 
  Code2, 
  Layers, 
  Compass, 
  Palette, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Compass,
  Palette,
  ShieldCheck,
};

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-[#E1E7E3]">
      <Container size="xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E1A2F]">
                Studio Services
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1914] leading-[1.18]">
                Capabilities designed for ambitious digital products.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={150}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9E1A2F] hover:text-[#831526] transition-colors pb-1 border-b border-[#F5C7CE] hover:border-[#9E1A2F]"
            >
              Explore all services & tech stacks <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Code2;
            return (
              <ScrollReveal key={service.id} direction="up" delay={idx * 100} duration={600}>
                <div className="p-8 rounded-2xl bg-white border border-[#E1E7E3] hover:border-[#CCD6CE] hover:shadow-[0_16px_36px_rgba(10,25,20,0.05)] transition-all h-full flex flex-col justify-between group">
                  <div className="space-y-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] text-[#9E1A2F] flex items-center justify-center border border-[#F5C7CE] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#0A1914] group-hover:text-[#9E1A2F] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#52665C] mt-2 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Deliverables checklist */}
                    <div className="pt-2 border-t border-[#F1F5F2] space-y-2">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#0A1914]">
                        Core Deliverables:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#2E4038]">
                        {service.deliverables.slice(0, 3).map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E1E7E3] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {service.keyTechnologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-[#F1F5F2] text-[#2E4038] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-xs font-semibold text-[#0A1914] group-hover:text-[#9E1A2F] flex items-center gap-1 shrink-0 ml-2"
                    >
                      Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
