import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TEAM_MEMBERS } from "@/data/team";

export const metadata: Metadata = {
  title: "Team Laliguras",
  description: "Meet the six people behind Laliguras: Sakshyam Pokhrel, Sijan Kafle, Arbin Giri, Ishan Bhandari, Aayush Nepaune, and Sukriti Rimal.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      <section className="page-hero py-24 sm:py-32 lg:py-40">
        <Container size="xl" className="relative z-10">
          <ScrollReveal>
            <span className="eyebrow">Team Laliguras</span>
            <h1 className="mt-8 max-w-5xl text-balance text-[clamp(3.5rem,8vw,8.2rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#101916]">Small enough to care. <span className="display-serif text-[#9b1730] italic">Curious enough</span> to grow.</h1>
            <p className="mt-8 max-w-2xl border-l border-[#9b1730] pl-6 text-base leading-8 text-[#52635b]">The people building Laliguras and shaping its work. Titles and biographies will appear when the team provides them—not before.</p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container size="xl">
          <div className="border-t border-black/15">
            {TEAM_MEMBERS.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 60}>
                <article className="group grid grid-cols-[48px_1fr_auto] items-center border-b border-black/15 py-7 sm:grid-cols-[90px_1fr_auto] sm:py-10">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#9b1730]">0{index + 1}</span>
                  <h2 className="text-2xl font-semibold tracking-[-0.045em] text-[#101916] transition-transform duration-300 group-hover:translate-x-3 sm:text-5xl">{member.name}</h2>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-black/15 text-[10px] font-bold tracking-[0.08em] text-[#596861] transition-all group-hover:rotate-6 group-hover:border-[#9b1730] group-hover:bg-[#9b1730] group-hover:text-white sm:h-16 sm:w-16 sm:text-xs">{member.initials}</span>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <div className="mt-20 grid gap-8 bg-[#102a22] p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef93a5]">Work with us</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">A thoughtful team for ambitious work.</h2></div>
              <Link href="/contact" className="group inline-flex min-h-12 items-center gap-2 bg-[#9b1730] px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101916]">Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} /></Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
