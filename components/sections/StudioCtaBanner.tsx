"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const StudioCtaBanner: React.FC = () => (
  <section className="relative overflow-hidden bg-[#9b1730] py-24 text-white sm:py-32">
    <div className="absolute -right-10 -top-28 h-96 w-96 rounded-full border border-white/12" aria-hidden="true" />
    <div className="absolute -right-28 -top-10 h-96 w-96 rounded-full border border-white/12" aria-hidden="true" />
    <Container size="xl" className="relative">
      <ScrollReveal>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">A good place to begin</p>
            <h2 className="mt-7 max-w-5xl text-balance text-[clamp(3rem,7vw,7.6rem)] font-semibold leading-[0.91] tracking-[-0.07em]">
              Bring us the hard <span className="display-serif text-[#ffd9df] italic">problem.</span>
            </h2>
          </div>
          <div className="max-w-sm border-l border-white/30 pl-6">
            <p className="text-sm leading-7 text-white/76">Tell us what you are trying to change. We’ll help turn the uncertainty into a clear product direction.</p>
            <Link href="/contact" className="group mt-7 inline-flex min-h-12 items-center gap-3 bg-white px-5 text-sm font-semibold text-[#861329] transition-colors hover:bg-[#101916] hover:text-white">
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  </section>
);
