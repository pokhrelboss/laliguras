"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MousePointer2 } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FEATURES = [
  "Role-aware learner dashboard",
  "Interactive 360° hazard scenarios",
  "Structured modules and assessments",
  "Progress and certificate workflows",
] as const;

export const FeaturedProjectsSection: React.FC = () => (
  <section id="featured-work" className="relative overflow-hidden bg-[#e7e5de] py-24 sm:py-32 lg:py-40">
    <Container size="xl">
      <div className="mb-14 flex flex-col gap-8 border-b border-black/15 pb-10 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
        <ScrollReveal>
          <span className="eyebrow">Selected work</span>
          <h2 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1] tracking-[-0.06em] text-[#101916] sm:text-6xl lg:text-7xl">
            One product, seen from <span className="display-serif text-[#9b1730] italic">every angle.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={120}>
          <p className="max-w-sm text-sm leading-7 text-[#5f6c66]">A close look at how Laliguras translates a complex training journey into a coherent digital system.</p>
        </ScrollReveal>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(285px,.36fr)_minmax(0,.64fr)] lg:gap-14">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <ScrollReveal>
            <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b1730]">
              <span className="petal-mark" aria-hidden="true" />
              A Laliguras project · 2026
            </div>
            <h3 className="text-5xl font-semibold tracking-[-0.065em] text-[#101916] sm:text-6xl">SafeStep</h3>
            <p className="display-serif mt-2 text-2xl italic leading-tight text-[#9b1730]">An Integrated Health and Safety Training Platform</p>
            <p className="mt-7 text-sm leading-7 text-[#52635b]">
              SafeStep is a separate product project created by Laliguras. It brings lessons, realistic safety scenarios, assessments, learner progress, and certificates into one focused experience.
            </p>
            <ul className="mt-8 space-y-3 border-y border-black/14 py-6">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-[#273832]">
                  <Check className="h-4 w-4 text-[#9b1730]" strokeWidth={1.75} /> {feature}
                </li>
              ))}
            </ul>
            <Link href="/projects/safestep" className="group mt-7 inline-flex min-h-12 items-center gap-2 bg-[#101916] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#9b1730]">
              Explore the project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
          </ScrollReveal>
        </aside>

        <div className="relative pb-14 pt-2">
          <div className="absolute -left-10 top-14 h-[88%] w-px bg-black/12" aria-hidden="true" />
          <ScrollReveal direction="left" duration={850}>
            <div className="safe-frame overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#071713] p-2.5 sm:rounded-[1.6rem] sm:p-4">
              <div className="mb-2.5 flex items-center justify-between px-2 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/48 sm:mb-4">
                <span className="flex items-center gap-2"><i className="h-1.5 w-1.5 rounded-full bg-[#d72b4b]" /> SafeStep product system</span>
                <span className="hidden sm:inline">Overview · Learner · Scenarios · Certificates</span>
              </div>
              <Image src="/reference/prototype-reference.png" alt="SafeStep interface overview showing the marketing site, learner dashboard, training module, hazard scenario, assessment, certificate, profile, and help screens" width={3072} height={1536} unoptimized sizes="(max-width: 1024px) 100vw, 70vw" className="h-auto w-full rounded-[0.7rem] bg-white" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={130} className="relative z-10 -mt-5 ml-4 max-w-[270px] sm:-mt-9 sm:ml-10 sm:max-w-[330px]">
            <div className="border border-black/10 bg-[#f5f4ef] p-5 shadow-[0_18px_45px_rgba(16,25,22,.14)] sm:p-6">
              <MousePointer2 className="mb-8 h-5 w-5 text-[#9b1730]" strokeWidth={1.5} />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9b1730]">Designed around action</p>
              <p className="mt-2 text-sm leading-6 text-[#52635b]">The system moves from awareness to practice, verification, and a clear record of progress.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Container>
  </section>
);
