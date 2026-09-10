"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY_INFO } from "@/data/company";
import { 
  ArrowRight, 
  Code2, 
  Layers, 
  Compass, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";


export const StudioHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E1E7E3] bg-[#F8FAF8]">
      {/* Background Architectural Grid & Subtle Mountain Gradients */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
      <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-radial from-[#FDF2F4] to-transparent opacity-80 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[450px] h-[450px] bg-radial from-[#EBF3F0] to-transparent opacity-70 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Studio Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            <ScrollReveal direction="up" delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E1E7E3] shadow-xs text-xs font-semibold text-[#0A1914]">
                <span className="w-2 h-2 rounded-full bg-[#9E1A2F] animate-ping" />
                <span className="text-[#9E1A2F] font-bold uppercase tracking-wider">
                  Technology & Product Studio
                </span>
                <span className="text-[#A8BFB5]">•</span>
                <span className="text-[#52665C]">Kathmandu, Nepal</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1914] leading-[1.12]">
                Engineering <span className="text-[#9E1A2F]">Ambitious</span> Digital Products & Platforms.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="text-lg sm:text-xl text-[#2E4038] max-w-2xl leading-relaxed">
                Laliguras is a modern technology studio. We partner with forward-thinking organizations to design, architect, and engineer high-performance software, custom enterprise platforms, and interactive 3D simulations.
              </p>
            </ScrollReveal>

            {/* Flagship Notice Ribbon */}
            <ScrollReveal direction="up" delay={250}>
              <div className="p-3.5 rounded-xl bg-white border border-[#E1E7E3] shadow-xs flex items-center justify-between gap-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FDF2F4] text-[#9E1A2F] flex items-center justify-center shrink-0 font-bold text-xs border border-[#F5C7CE]">
                    SS
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-[#0A1914]">Featured Client Build: </span>
                    <span className="text-[#52665C]">SafeStep — An Integrated Health & Safety Platform</span>
                  </div>
                </div>
                <Link
                  href="/projects/safestep"
                  className="text-xs font-semibold text-[#9E1A2F] hover:underline flex items-center shrink-0 gap-0.5"
                >
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal direction="up" delay={300}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/projects"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Our Work
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                >
                  Start a Project
                </Button>
              </div>
            </ScrollReveal>

            {/* Studio Metrics */}
            <ScrollReveal direction="up" delay={400}>
              <div className="pt-6 border-t border-[#E1E7E3] grid grid-cols-2 sm:grid-cols-4 gap-6">
                {COMPANY_INFO.studioStats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="text-2xl font-bold text-[#0A1914] tracking-tight">{stat.value}</p>
                    <p className="text-xs text-[#52665C] leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Architectural Visual Card */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={200} duration={800}>
              <div className="relative rounded-2xl bg-white border border-[#CCD6CE] p-6 sm:p-7 shadow-[0_16px_40px_rgba(10,25,20,0.06)] space-y-6">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E1E7E3]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#E63952]/40" />
                    <div className="w-3 h-3 rounded-full bg-[#EAB308]/40" />
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]/40" />
                    <span className="text-xs font-mono text-[#52665C] ml-2">laliguras.studio/ecosystem</span>
                  </div>
                  <Badge variant="outline" size="sm">v2.4 Production</Badge>
                </div>

                {/* Studio Capability Visual Tiles */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#E1E7E3] hover:border-[#9E1A2F]/40 transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#FDF2F4] text-[#9E1A2F] shrink-0 group-hover:scale-105 transition-transform">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0A1914] flex items-center gap-1.5">
                          Digital Product Engineering
                          <span className="text-[10px] text-[#52665C] font-normal">Next.js • React 19 • TS</span>
                        </h4>
                        <p className="text-[11px] text-[#52665C] mt-0.5 leading-normal">
                          Modular full-stack architectures engineered for scale and enterprise workloads.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#E1E7E3] hover:border-[#9E1A2F]/40 transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#EBF3F0] text-[#0F2D24] shrink-0 group-hover:scale-105 transition-transform">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0A1914] flex items-center gap-1.5">
                          Enterprise Platforms & LMS
                          <span className="text-[10px] text-[#52665C] font-normal">SafeStep Suite</span>
                        </h4>
                        <p className="text-[11px] text-[#52665C] mt-0.5 leading-normal">
                          Custom role-based learning portals with verifiable digital credentialing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAF8] border border-[#E1E7E3] hover:border-[#9E1A2F]/40 transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#FEF3C7] text-[#92400E] shrink-0 group-hover:scale-105 transition-transform">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#0A1914] flex items-center gap-1.5">
                          360° Spatial Simulations
                          <span className="text-[10px] text-[#52665C] font-normal">Interactive Canvas</span>
                        </h4>
                        <p className="text-[11px] text-[#52665C] mt-0.5 leading-normal">
                          In-browser interactive hazard hotspots and decision trees with zero app installs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Architecture Integrity Tag */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#52665C]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                    100% Clean Architecture & Client IP Ownership
                  </span>
                  <span className="font-mono text-[11px]">Nepal → Global</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </section>
  );
};
