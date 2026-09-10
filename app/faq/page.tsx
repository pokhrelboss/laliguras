import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQS } from "@/data/faqs";
import { FaqSection } from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Questions & Answers",
  description: "Answers about Laliguras, project engagements, and the SafeStep health and safety training product.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      <section className="page-hero py-24 sm:py-32">
        <Container size="xl" className="relative z-10"><ScrollReveal><span className="eyebrow">Questions & answers</span><h1 className="mt-8 max-w-5xl text-balance text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#101916]">Clarity before <span className="display-serif text-[#9b1730] italic">commitment.</span></h1><p className="mt-8 max-w-2xl border-l border-[#9b1730] pl-6 text-base leading-8 text-[#52635b]">A practical starting point for questions about Laliguras and SafeStep.</p></ScrollReveal></Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container size="xl"><div className="grid gap-12 lg:grid-cols-[.3fr_.7fr] lg:gap-20"><ScrollReveal><div className="lg:sticky lg:top-28"><p className="text-sm leading-7 text-[#5f6c66]">Use the category filters to focus the list. Each answer reflects the current public scope of the studio and product.</p><Link href="/contact" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#101916]">Ask something else <ArrowUpRight className="h-4 w-4 text-[#9b1730] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} /></Link></div></ScrollReveal><ScrollReveal direction="left" delay={90}><FaqSection initialFaqs={FAQS} /></ScrollReveal></div></Container>
      </section>
    </div>
  );
}
