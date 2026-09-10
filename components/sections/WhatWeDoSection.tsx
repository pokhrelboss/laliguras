"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PRINCIPLES = [
  ["01", "Think clearly", "We begin with the problem, the people affected by it, and the system that must endure after launch."],
  ["02", "Design with purpose", "Every screen, interaction, and technical choice earns its place. Restraint is part of the craft."],
  ["03", "Build for reality", "We engineer maintainable products for real workflows, real constraints, and long-term ownership."],
] as const;

export const WhatWeDoSection: React.FC = () => (
  <section id="studio-intro" className="relative overflow-hidden bg-[#f5f4ef] py-24 sm:py-32 lg:py-40">
    <div className="absolute -right-20 top-8 h-80 w-80 rounded-full border border-[#9b1730]/10" aria-hidden="true" />
    <div className="absolute -right-5 top-24 h-56 w-56 rounded-full border border-[#102a22]/10" aria-hidden="true" />
    <Container size="xl">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,.55fr)] lg:gap-24">
        <div>
          <ScrollReveal>
            <span className="eyebrow">The studio</span>
          </ScrollReveal>
          <ScrollReveal delay={90}>
            <h2 className="mt-8 max-w-5xl text-balance text-[clamp(2.8rem,6.1vw,6.8rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-[#101916]">
              Digital craft, grounded in <span className="display-serif text-[#9b1730] italic">place</span> and built for the world.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="left" delay={170} className="self-end">
          <p className="border-l border-[#9b1730] pl-6 text-base leading-8 text-[#52635b]">
            Laliguras is an independent product and technology studio in Nepal. Like the rhododendron that gives us our name, our work is shaped by resilience, clarity, and the confidence to grow in demanding terrain.
          </p>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#101916]">
            More about Laliguras
            <ArrowUpRight className="h-4 w-4 text-[#9b1730] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
          </Link>
        </ScrollReveal>
      </div>

      <div className="mt-20 grid border-y border-black/15 md:grid-cols-3 lg:mt-28">
        {PRINCIPLES.map(([num, title, copy], index) => (
          <ScrollReveal key={num} delay={index * 100} className="h-full">
            <article className="group h-full px-0 py-8 md:min-h-60 md:border-l md:border-black/15 md:px-8 md:first:border-l-0 lg:px-10">
              <div className="mb-14 flex items-center justify-between md:mb-20">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#9b1730]">{num}</span>
                <span className="petal-mark opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#101916]">{title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#65736c]">{copy}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);
