import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { COMPANY_INFO } from "@/data/company";
import {
  Cpu,
  HeartHandshake,
  Mountain,
  Users2,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Laliguras Digital Product Studio",
  description:
    "Learn about Laliguras, our engineering philosophy, our Himalayan roots, and how we build mission-critical digital products and platforms like SafeStep.",
};

export default function AboutPage() {
  const valueIcons = [
    Cpu,
    HeartHandshake,
    Mountain,
    Users2,
    Lightbulb,
    CheckCircle2,
  ];

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E1E7E3] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <ScrollReveal direction="up">
              <Badge variant="primary" size="md">
                ABOUT LALIGURAS
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1914] leading-[1.12]">
                Architecting digital solutions with Himalayan resilience.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="text-lg sm:text-xl text-[#2E4038] leading-relaxed">
                {COMPANY_INFO.shortDescription}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Story & Heritage Section */}
      <section className="py-20 bg-white border-b border-[#E1E7E3]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: The Laliguras Story */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="up">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                  Our Heritage & Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1914] tracking-tight mt-2">
                  Rooted in Endurance, Driven by Craft
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <div className="space-y-4 text-base text-[#2E4038] leading-relaxed">
                  <p>{COMPANY_INFO.story}</p>
                  <p>
                    We reject the culture of fragile, disposable software and generic templates. Whether we are architecting high-throughput telemetry pipelines or developing immersive 360-degree training simulations like SafeStep, we build systems designed for long-term operational durability.
                  </p>
                </div>
              </ScrollReveal>

              {/* Quote Block */}
              <ScrollReveal direction="up" delay={150}>
                <div className="p-6 rounded-2xl bg-[#FDF2F4] border-l-4 border-[#9E1A2F] text-[#831526] space-y-2">
                  <p className="text-base sm:text-lg font-semibold italic">
                    &ldquo;{COMPANY_INFO.quote.text}&rdquo;
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                    — {COMPANY_INFO.quote.author}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={100}>
                <div className="bg-[#0F2D24] rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-xl border border-[#1E4639]">
                  <div className="w-14 h-14 rounded-2xl bg-[#163E32] border border-[#215645] flex items-center justify-center text-[#E63952]">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    The Laligurans Inspiration
                  </h3>
                  <p className="text-sm text-[#C4D6CD] leading-relaxed">
                    The Laligurans (Rhododendron) is Nepal&apos;s national flower, renowned for blooming across high-altitude mountain terrain, braving harsh alpine climates and steep ridges. It represents resilience, purposeful beauty, and grounded strength.
                  </p>
                  <div className="pt-4 border-t border-[#1E4639] space-y-2 text-xs text-[#A8BFB5]">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                      <span>Zero short-term shortcuts or technical debt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                      <span>Empowering clients with 100% IP ownership</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8FAF8] border-b border-[#E1E7E3]">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={50}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7E3] space-y-4 shadow-xs h-full">
                <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] text-[#9E1A2F] flex items-center justify-center border border-[#F5C7CE]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1914]">Our Mission</h3>
                <p className="text-base text-[#2E4038] leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E1E7E3] space-y-4 shadow-xs h-full">
                <div className="w-12 h-12 rounded-xl bg-[#EBF3F0] text-[#0F2D24] flex items-center justify-center border border-[#CDE1D9]">
                  <Mountain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1914]">Our Vision</h3>
                <p className="text-base text-[#2E4038] leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E1E7E3]">
        <Container size="xl">
          <div className="max-w-3xl space-y-4 mb-16">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E1A2F]">
                Our Values
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1914]">
                The principles that guide our code and partnerships.
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_INFO.values.map((value, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <ScrollReveal key={value.title} direction="up" delay={idx * 80} duration={500}>
                  <div className="p-7 rounded-2xl bg-[#F8FAF8] border border-[#E1E7E3] h-full space-y-3 hover:border-[#CCD6CE] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#9E1A2F] flex items-center justify-center border border-[#E1E7E3]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1914]">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#52665C] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Case Study Feature & CTA */}
      <section className="py-20 bg-[#F8FAF8]">
        <Container size="xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0F2D24] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl border border-[#1E4639]">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5C7CE]">
                Featured Client Build
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                See our engineering in action: SafeStep
              </h3>
              <p className="text-sm text-[#C4D6CD]">
                Discover how Laliguras designed and engineered a full-scale occupational health and safety training suite with interactive 360° simulations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/projects/safestep"
                className="px-6 py-3.5 rounded-xl bg-[#9E1A2F] text-white text-sm font-semibold hover:bg-[#831526] transition-colors flex items-center gap-2"
              >
                SafeStep Showcase <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-[#163E32] text-white text-sm font-semibold hover:bg-[#1E4639] border border-[#215645] transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
