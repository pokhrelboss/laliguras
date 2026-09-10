"use client";

import React from "react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Cpu, Users, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const WhatWeDoSection: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Architecture-First Engineering",
      description: "We don't build disposable prototypes. We design solid data models, type-safe APIs, and maintainable cloud architectures built to withstand real operational loads and future feature expansion.",
      icon: Cpu,
    },
    {
      num: "02",
      title: "Human-Centered Craft",
      description: "Complex business software does not have to feel tedious. We combine ergonomic user journeys, crisp typography, and intuitive interfaces that frontline workers and enterprise executives genuinely enjoy using.",
      icon: Users,
    },
    {
      num: "03",
      title: "Complete Client Ownership",
      description: "We work as your dedicated technical partner. You own 100% of the intellectual property, clean source code, architectural documentation, and cloud infrastructure from day one.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E1E7E3]">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <ScrollReveal direction="up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9E1A2F]">
              What Laliguras Does
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1914] leading-[1.18]">
              We translate ambitious ideas into resilient digital reality.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <p className="text-base sm:text-lg text-[#2E4038] leading-relaxed">
              From bespoke enterprise systems like the SafeStep training platform to high-concurrency web applications, we partner with clients across the complete product lifecycle—from initial architecture to long-term operational scale.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.num} direction="up" delay={idx * 120} duration={600}>
                <div className="p-8 rounded-2xl bg-[#F8FAF8] border border-[#E1E7E3] hover:border-[#CCD6CE] hover:shadow-[0_12px_30px_rgba(10,25,20,0.04)] transition-all h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-bold text-[#9E1A2F]">
                        {pillar.num}
                      </span>
                      <div className="p-2 rounded-xl bg-white border border-[#E1E7E3] text-[#0F2D24] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1914]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#52665C] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Context Banner */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0F2D24] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h4 className="text-lg font-bold text-white">Need a tailored platform for your organization?</h4>
              <p className="text-sm text-[#C4D6CD]">
                Explore how we engineered SafeStep as a custom client platform, or consult with us on your own project.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/projects/safestep"
                className="px-4 py-2.5 rounded-lg bg-[#9E1A2F] text-white text-xs font-semibold hover:bg-[#831526] transition-colors flex items-center gap-1.5"
              >
                SafeStep Case Study <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-4 py-2.5 rounded-lg bg-[#163E32] text-white text-xs font-semibold hover:bg-[#1E4639] border border-[#215645] transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
