"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
            Laliguras is shaped by the people behind it. Meet the project leads, engineers, and analysts driving our technology initiatives.
          </p>
          <Link href="/team" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#101916]">
            Meet Team Laliguras <ArrowRight className="h-4 w-4 text-[#9b1730] transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
          </Link>
        </ScrollReveal>

        <div className="border-t border-black/15">
          {TEAM_MEMBERS.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 55}>
              <div className="group grid grid-cols-[36px_52px_1fr] sm:grid-cols-[48px_64px_1fr] items-center gap-4 sm:gap-6 border-b border-black/15 py-4 sm:py-6">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9b1730]">0{index + 1}</span>
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-black/15 bg-white shrink-0">
                  {member.photoUrl ? (
                    <Image
                      src={member.photoUrl}
                      alt={member.name}
                      fill
                      sizes="56px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="grid h-full w-full place-items-center text-xs font-bold text-[#52635b]">{member.initials}</span>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold tracking-[-0.035em] text-[#101916] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">{member.name}</h3>
                  {member.role && (
                    <p className="mt-0.5 truncate text-xs font-medium text-[#6e7c75] sm:text-sm">{member.role}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
