import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Explore SafeStep, an integrated health and safety training platform created as a separate product project by Laliguras.",
};

const FEATURES = [
  "A focused learner dashboard",
  "Interactive workplace hazard scenarios",
  "Training modules and assessments",
  "Progress, certificate, profile, and help journeys",
] as const;

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      <section className="page-hero py-24 sm:py-32 lg:py-40">
        <Container size="xl" className="relative z-10">
          <ScrollReveal>
            <span className="eyebrow">Selected work</span>
            <h1 className="mt-8 max-w-5xl text-balance text-[clamp(3.4rem,8vw,8.2rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#101916]">
              Work with a reason to <span className="display-serif text-[#9b1730] italic">exist.</span>
            </h1>
            <p className="mt-8 max-w-2xl border-l border-[#9b1730] pl-6 text-base leading-8 text-[#52635b]">We share work only when there is real work to share. SafeStep is the current featured Laliguras project.</p>
          </ScrollReveal>
        </Container>
      </section>

      <section id="safestep" className="py-24 sm:py-32 lg:py-40">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-[.38fr_.62fr] lg:gap-16">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b1730]">01 · Product project · 2026</p>
                <h2 className="mt-6 text-6xl font-semibold tracking-[-0.07em] text-[#101916] sm:text-7xl">SafeStep</h2>
                <p className="display-serif mt-3 text-2xl italic leading-tight text-[#9b1730]">An Integrated Health and Safety Training Platform</p>
                <p className="mt-8 text-sm leading-7 text-[#596861]">Created by Laliguras as a distinct product project, SafeStep explores how workplace safety training can become more active, coherent, and useful.</p>
                <ul className="mt-8 space-y-3 border-y border-black/15 py-6">
                  {FEATURES.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-[#273832]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9b1730]" strokeWidth={1.75} />{feature}</li>)}
                </ul>
                <Link href="/projects/safestep" className="group mt-7 inline-flex min-h-12 items-center gap-2 bg-[#101916] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#9b1730]">View the full project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} /></Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <div className="safe-frame overflow-hidden rounded-[1.3rem] bg-[#071713] p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between px-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/45"><span>SafeStep · interface system</span><span className="hidden sm:inline">Laliguras product project</span></div>
                <Image src="/reference/prototype-reference.png" alt="Overview of the SafeStep website and learner product interfaces" width={3072} height={1536} priority sizes="(max-width: 1024px) 100vw, 65vw" className="h-auto w-full rounded-xl" />
              </div>
              <div className="mt-10 grid gap-8 border-y border-black/15 py-8 sm:grid-cols-2">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b1730]">The question</p><p className="mt-3 text-sm leading-7 text-[#596861]">How might a single platform connect learning, practice, assessment, and evidence without overwhelming the learner?</p></div>
                <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b1730]">The direction</p><p className="mt-3 text-sm leading-7 text-[#596861]">A clear sequence of purposeful screens, with interactive scenarios used where action teaches more than passive content.</p></div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
