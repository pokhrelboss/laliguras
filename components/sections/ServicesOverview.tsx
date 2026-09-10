"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Code2, Layers, Palette, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/data/services";

const ICONS: Record<string, React.ElementType> = { Code2, Layers, Compass, Palette, ShieldCheck };

export const ServicesOverview: React.FC = () => (
  <section className="relative overflow-hidden bg-[#102a22] py-24 text-white sm:py-32 lg:py-36">
    <div className="bg-himalaya-pattern absolute inset-0 opacity-30" aria-hidden="true" />
    <Container size="xl" className="relative">
      <div className="grid gap-10 border-b border-white/18 pb-12 lg:grid-cols-2 lg:items-end">
        <ScrollReveal>
          <span className="eyebrow text-[#f1aab8]">What we make</span>
          <h2 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            From first principle to <span className="display-serif text-[#f3c7cf] italic">finished product.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={100} className="lg:justify-self-end">
          <p className="max-w-md text-sm leading-7 text-white/62 sm:text-base">
            Strategy, experience design, software engineering, and spatial interaction—brought together by one close-knit team.
          </p>
          <Link href="/services" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            See all capabilities <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
          </Link>
        </ScrollReveal>
      </div>

      <div className="divide-y divide-white/14">
        {SERVICES.map((service, index) => {
          const Icon = ICONS[service.iconName] ?? Code2;
          return (
            <ScrollReveal key={service.id} delay={index * 60}>
              <Link href={`/services#${service.slug}`} className="group grid gap-5 py-8 transition-colors hover:bg-white/[0.035] sm:grid-cols-[60px_1fr_auto] sm:items-center sm:px-4 lg:py-10">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#f1aab8]">0{index + 1}</span>
                  <Icon className="h-5 w-5 text-white/45 sm:hidden" strokeWidth={1.5} />
                </div>
                <div className="grid gap-3 lg:grid-cols-[minmax(260px,.8fr)_minmax(340px,1.2fr)] lg:items-center lg:gap-16">
                  <h3 className="text-2xl font-semibold tracking-[-0.045em] text-white sm:text-3xl">{service.title}</h3>
                  <p className="max-w-xl text-sm leading-6 text-white/58">{service.shortDescription}</p>
                </div>
                <span className="grid h-11 w-11 place-items-center border border-white/20 transition-all group-hover:border-[#c22a47] group-hover:bg-[#a91836]">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
                </span>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </Container>
  </section>
);
