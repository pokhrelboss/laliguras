import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Product strategy, experience design, software engineering, interactive simulation, and technical foundations from Laliguras.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      <section className="page-hero py-24 sm:py-32 lg:py-40">
        <Container size="xl" className="relative z-10">
          <ScrollReveal><span className="eyebrow">Services</span><h1 className="mt-8 max-w-6xl text-balance text-[clamp(3.5rem,8.4vw,8.7rem)] font-semibold leading-[0.89] tracking-[-0.075em] text-[#101916]">The thinking and making behind <span className="display-serif text-[#9b1730] italic">useful products.</span></h1><p className="mt-8 max-w-2xl border-l border-[#9b1730] pl-6 text-base leading-8 text-[#52635b]">We work across product direction, experience, engineering, and delivery—keeping the system coherent from the first conversation to the final handover.</p></ScrollReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28 lg:py-36">
        <Container size="xl">
          <div className="border-t border-black/15">
            {SERVICES.map((service, index) => (
              <ScrollReveal key={service.id} delay={(index % 3) * 60}>
                <article id={service.slug} className="scroll-mt-28 border-b border-black/15 py-12 sm:py-16">
                  <div className="grid gap-10 lg:grid-cols-[90px_.75fr_1.25fr] lg:gap-14">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#9b1730]">0{index + 1}</p>
                    <div><h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#101916] sm:text-5xl">{service.title}</h2><div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">{service.keyTechnologies.slice(0, 4).map((tech) => <span key={tech} className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#77827d]">{tech}</span>)}</div></div>
                    <div><p className="max-w-2xl text-base leading-8 text-[#52635b]">{service.fullDescription}</p><ul className="mt-8 grid gap-3 sm:grid-cols-2">{service.deliverables.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#273832]"><Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#9b1730]" strokeWidth={1.75} />{item}</li>)}</ul></div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#102a22] py-24 text-white sm:py-32">
        <Container size="xl"><ScrollReveal><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef93a5]">A tailored engagement</p><h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">Start with the problem, then shape the right team around it.</h2></div><Link href="/contact" className="group inline-flex min-h-12 items-center gap-2 bg-[#9b1730] px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101916]">Discuss your project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} /></Link></div></ScrollReveal></Container>
      </section>
    </div>
  );
}
