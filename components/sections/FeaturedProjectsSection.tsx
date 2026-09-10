"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";


export const FeaturedProjectsSection: React.FC = () => {
  const safeStep = PROJECTS.find((p) => p.id === "safestep") || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.id !== "safestep");

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E1E7E3]">
      <Container size="xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E1A2F]">
                Our Work / Selected Projects
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1914] leading-[1.18]">
                Proven platforms engineered for industry leaders.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={150}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9E1A2F] hover:text-[#831526] transition-colors pb-1 border-b border-[#F5C7CE] hover:border-[#9E1A2F]"
            >
              Browse all projects & case studies <ArrowUpRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        {/* MARQUEE FEATURED PROJECT: SafeStep */}
        <ScrollReveal direction="up" delay={100} duration={800}>
          <div className="rounded-3xl bg-[#0F2D24] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#1E4639] shadow-2xl mb-12">
            {/* Background Mountain Motif */}
            <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-radial from-[#1E4639] to-transparent rounded-full opacity-60 blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Left Column: Case Study Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163E32] border border-[#215645] text-xs font-semibold text-[#F5C7CE]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E63952]" />
                  <span>Flagship Client Project • Health & Safety</span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {safeStep.title}
                  </h3>
                  <p className="text-lg text-[#F5C7CE] font-medium mt-1">
                    {safeStep.subtitle}
                  </p>
                </div>

                <p className="text-[#C4D6CD] text-base leading-relaxed">
                  {safeStep.summary}
                </p>

                {/* Key Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-[#E2ECE7]">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Interactive 360° Hazard Simulator</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E2ECE7]">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Learner Dashboard & Streak Tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E2ECE7]">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Modular Video Chapter Lessons</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E2ECE7]">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Tamper-Evident Digital Certificates</span>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="pt-4 border-t border-[#1E4639] grid grid-cols-3 gap-4">
                  {safeStep.metrics.slice(0, 3).map((metric, mIdx) => (
                    <div key={mIdx}>
                      <p className="text-2xl font-bold text-white font-mono">{metric.value}</p>
                      <p className="text-[11px] text-[#A8BFB5] leading-snug mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects/safestep"
                    className="px-6 py-3.5 rounded-xl bg-[#9E1A2F] text-white text-sm font-semibold hover:bg-[#831526] transition-all shadow-md flex items-center gap-2"
                  >
                    View SafeStep Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/projects/safestep#interactive-sim"
                    className="px-6 py-3.5 rounded-xl bg-[#163E32] text-white text-sm font-semibold hover:bg-[#1E4639] border border-[#215645] transition-all"
                  >
                    Try 360° Simulator
                  </Link>
                </div>
              </div>

              {/* Right Column: SafeStep UI Teaser Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#091C16] border border-[#215645] p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E4639]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E63952]" />
                      <span className="text-xs font-mono text-[#A8BFB5]">safestep.platform/learner</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#22C55E] bg-[#163E32] px-2 py-0.5 rounded">
                      Live Simulation
                    </span>
                  </div>

                  {/* Mockup Preview Visual */}
                  <div className="rounded-xl overflow-hidden bg-[#0A1914] border border-[#1E4639] p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#A8BFB5]">
                      <span>Welcome back, Learner</span>
                      <span className="text-[#F5C7CE] font-mono">Streak: 5 Days</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#163E32] border border-[#215645] space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-white">
                        <span>Training Progress</span>
                        <span>3 / 5 Modules (60%)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#0F2D24] overflow-hidden">
                        <div className="w-3/5 h-full bg-[#9E1A2F] rounded-full" />
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#163E32] border border-[#215645] flex items-center justify-between">
                      <div className="text-xs">
                        <p className="font-semibold text-white">360° Warehouse Hazard Sim</p>
                        <p className="text-[10px] text-[#A8BFB5]">5 Hotspots Identified</p>
                      </div>
                      <span className="text-xs font-bold text-[#E63952] bg-[#FDF2F4] px-2.5 py-1 rounded-md">
                        Interactive
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-center text-[#A8BFB5] italic">
                    Designed and built by Laliguras for modern occupational health and safety.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 150} duration={600}>
              <div className="p-8 rounded-2xl bg-[#F8FAF8] border border-[#E1E7E3] hover:border-[#CCD6CE] hover:shadow-[0_16px_36px_rgba(10,25,20,0.04)] transition-all h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#9E1A2F] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[#52665C] font-mono">{project.year}</span>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#0A1914] group-hover:text-[#9E1A2F] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm font-medium text-[#52665C] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#2E4038] leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-2 border-t border-[#E1E7E3] grid grid-cols-3 gap-2">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <p className="text-base font-bold text-[#0A1914] font-mono">{m.value}</p>
                        <p className="text-[10px] text-[#52665C] leading-snug">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E1E7E3] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#E1E7E3] text-[#2E4038] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects#${project.slug}`}
                    className="text-xs font-semibold text-[#0A1914] group-hover:text-[#9E1A2F] flex items-center gap-1"
                  >
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </Container>
    </section>
  );
};
