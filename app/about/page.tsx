import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "About Laliguras",
  description: "Laliguras is an independent product and technology studio in Nepal, named for the Himalayan rhododendron and shaped by resilience, clarity, and craft.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      <section className="page-hero py-24 sm:py-32 lg:py-40">
        <Container size="xl" className="relative z-10">
          <ScrollReveal>
            <span className="eyebrow">About Laliguras</span>
            <h1 className="mt-8 max-w-6xl text-balance text-[clamp(3.5rem,8.4vw,8.7rem)] font-semibold leading-[0.89] tracking-[-0.075em] text-[#101916]">Rooted in Nepal. <span className="display-serif text-[#9b1730] italic">Open to the world.</span></h1>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-24 sm:py-32 lg:py-40">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-[.42fr_.58fr] lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28"><span className="eyebrow">Our name</span><p className="mt-8 max-w-md text-sm leading-7 text-[#5f6c66]">Laliguras is the Nepali name for the rhododendron: the national flower that colours mountain forests red after enduring a hard winter.</p></div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={100}>
              <figure>
                <div className="relative aspect-[16/8] overflow-hidden bg-[#102a22]"><Image src="/brand/laliguras-himalaya-hero.webp" alt="Himalayan ridges and red Laliguras rhododendrons at dawn" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover object-center" /></div>
                <figcaption className="mt-3 flex justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77827d]"><span>Himalayan resilience</span><span>Nepal</span></figcaption>
              </figure>
              <p className="mt-12 max-w-3xl text-balance text-3xl font-semibold leading-[1.15] tracking-[-0.04em] text-[#101916] sm:text-5xl">That combination of endurance and quiet beauty is more than a visual motif. It is the standard we want our work to carry.</p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#102a22] py-24 text-white sm:py-32 lg:py-40">
        <Container size="xl">
          <ScrollReveal><span className="eyebrow text-[#ef93a5]">What guides us</span><h2 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">Principles for work that must <span className="display-serif text-[#f3c7cf] italic">last.</span></h2></ScrollReveal>
          <div className="mt-16 grid border-t border-white/18 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANY_INFO.values.map((value, index) => (
              <ScrollReveal key={value.title} delay={(index % 3) * 70}>
                <article className="h-full border-b border-white/18 p-7 sm:border-l sm:p-9">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#ef93a5]">0{index + 1}</p><h3 className="mt-12 text-xl font-semibold tracking-[-0.03em]">{value.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{value.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container size="xl">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><span className="eyebrow">What comes next</span><h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">Build something worth caring about.</h2></div><Link href="/contact" className="group inline-flex min-h-12 items-center gap-2 bg-[#9b1730] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#101916]">Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} /></Link></div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
