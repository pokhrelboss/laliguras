"use client";

import React from "react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const VALUES = [
  ["Resilient by design", "Systems with clear boundaries, maintainable foundations, and room to evolve."],
  ["Human in every detail", "Interfaces built around attention, accessibility, and the realities of everyday work."],
  ["Open partnership", "Direct collaboration, visible decisions, and a shared understanding of what is being built."],
  ["Ownership that lasts", "Products prepared for handover, stewardship, and life beyond the first release."],
] as const;

export const WhyLaligurasSection: React.FC = () => (
  <section className="relative overflow-hidden bg-[#faf9f5] py-24 sm:py-32 lg:py-40">
    <div className="absolute inset-x-0 bottom-0 h-52 bg-himalaya-pattern opacity-40" aria-hidden="true" />
    <Container size="xl" className="relative">
      <ScrollReveal>
        <span className="eyebrow">Our point of view</span>
      </ScrollReveal>
      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
        <ScrollReveal delay={90}>
          <blockquote className="max-w-4xl text-balance text-[clamp(2.6rem,5.2vw,5.8rem)] font-semibold leading-[1.01] tracking-[-0.06em] text-[#101916]">
            “Technology should feel <span className="display-serif text-[#9b1730] italic">considered</span> long after the novelty wears off.”
          </blockquote>
        </ScrollReveal>
        <div className="border-t border-black/15">
          {VALUES.map(([title, copy], index) => (
            <ScrollReveal key={title} delay={index * 70}>
              <div className="grid gap-3 border-b border-black/15 py-6 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                <h3 className="text-sm font-semibold text-[#101916]">{title}</h3>
                <p className="text-sm leading-6 text-[#65736c]">{copy}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
