import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MoveDown } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InteractiveHazardPreview } from "@/components/sections/InteractiveHazardPreview";
import { PROJECTS } from "@/data/projects";

const safeStep = PROJECTS[0];

export const metadata: Metadata = {
  title: "SafeStep — Health and Safety Training Platform",
  description: "Explore SafeStep, an integrated health and safety training platform created as a separate product project by Laliguras.",
};

export default function SafeStepProjectPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      <section className="grain relative overflow-hidden bg-[#0b1713] pb-24 pt-20 text-white sm:pb-32 sm:pt-28 lg:pb-40">
        <div className="bg-himalaya-pattern absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute -right-20 top-0 h-[520px] w-[520px] rounded-full bg-[#9b1730]/16 blur-[100px]" aria-hidden="true" />
        <Container size="xl" className="relative z-10">
          <ScrollReveal>
            <Link href="/projects" className="mb-14 inline-flex items-center gap-2 text-xs font-semibold text-white/58 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" strokeWidth={1.75} /> All work</Link>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ef93a5]">A separate Laliguras product project</p>
                <h1 className="mt-6 text-[clamp(4.8rem,12vw,11rem)] font-semibold leading-[0.78] tracking-[-0.085em]">SafeStep</h1>
                <p className="display-serif mt-7 max-w-3xl text-2xl italic leading-tight text-[#f3c7cf] sm:text-4xl">An Integrated Health and Safety Training Platform</p>
              </div>
              <div className="border-l border-white/25 pl-6">
                <p className="text-sm leading-7 text-white/66">{safeStep.summary}</p>
                <a href="#product-architecture" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">Explore the system <MoveDown className="h-4 w-4 text-[#ef93a5]" strokeWidth={1.75} /></a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="relative -mt-12 pb-24 sm:-mt-16 sm:pb-32">
        <Container size="xl">
          <ScrollReveal direction="up" duration={900}>
            <div className="safe-frame overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#071713] p-2.5 sm:rounded-[1.8rem] sm:p-4">
              <div className="mb-3 flex items-center justify-between px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45"><span>SafeStep product system</span><span className="hidden sm:block">Designed by Laliguras</span></div>
              <Image src="/reference/prototype-reference.png" alt="SafeStep marketing, dashboard, module, scenario, assessment, certificate, profile, and help interfaces" width={3072} height={1536} priority sizes="100vw" className="h-auto w-full rounded-xl" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section id="product-architecture" className="pb-24 sm:pb-32 lg:pb-40">
        <Container size="xl">
          <div className="grid gap-14 lg:grid-cols-[.42fr_.58fr] lg:gap-24">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <span className="eyebrow">The system</span>
                <h2 className="mt-7 text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[#101916] sm:text-6xl">One connected journey, not a pile of features.</h2>
                <p className="mt-7 text-sm leading-7 text-[#5f6c66]">SafeStep organizes the learner experience from first contact through learning, practice, assessment, completion, and support.</p>
              </div>
            </ScrollReveal>
            <div className="border-t border-black/15">
              {safeStep.features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={(index % 4) * 45}>
                  <article className="grid gap-4 border-b border-black/15 py-6 sm:grid-cols-[52px_1fr_1.2fr] sm:items-start sm:py-8">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#9b1730]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#101916]">{feature.title}</h3>
                    <p className="text-sm leading-6 text-[#65736c]">{feature.description}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="interactive-sim" className="border-y border-black/10 bg-[#faf9f5] py-6 sm:py-10">
        <InteractiveHazardPreview />
      </section>

      <section className="bg-[#102a22] py-24 text-white sm:py-32">
        <Container size="xl">
          <ScrollReveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef93a5]">Project perspective</p><h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">Safety learning works best when people can <span className="display-serif text-[#f3c7cf] italic">act, not only watch.</span></h2></div>
              <div className="max-w-sm border-l border-white/20 pl-6"><p className="text-sm leading-7 text-white/62">The interactive scenario above is a functional preview. It remains intentionally lightweight while demonstrating the product’s learning direction.</p><Link href="/contact" className="group mt-7 inline-flex min-h-12 items-center gap-2 bg-[#9b1730] px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101916]">Discuss a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} /></Link></div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
