"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TEAM_MEMBERS } from "@/data/team";

export const TeamSection: React.FC = () => (
  <section className="overflow-hidden bg-[#f5f4ef] py-24 sm:py-32 lg:py-40">
    <Container size="xl">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <ScrollReveal>
          <span className="eyebrow">The people</span>
          <h2 className="mt-7 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#101916] sm:text-6xl">
            Six names. One shared <span className="display-serif text-[#9b1730] italic">standard of care.</span>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-[#5f6c66]">
            Laliguras is shaped by the people behind it. We keep this introduction simple: no invented titles, biographies, or borrowed credentials.
          </p>
          <Link href="/team" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#101916]">
            Meet Team Laliguras <ArrowRight className="h-4 w-4 text-[#9b1730] transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
          </Link>
        </ScrollReveal>

        <div className="border-t border-black/15">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 55}>
              <div className="group grid grid-cols-[54px_1fr_auto] items-center border-b border-black/15 py-5 sm:grid-cols-[76px_1fr_auto] sm:py-7">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9b1730]">0{index + 1}</span>
                <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#101916] transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">{member.name}</h3>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-black/15 text-[10px] font-bold tracking-[0.08em] text-[#52635b] transition-colors group-hover:border-[#9b1730] group-hover:bg-[#9b1730] group-hover:text-white">{member.initials}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
