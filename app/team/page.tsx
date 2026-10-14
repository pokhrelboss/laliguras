import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TEAM_MEMBERS } from "@/data/team";

export const metadata: Metadata = {
  title: "Team Laliguras — The People Behind the Studio",
  description: "Meet the core team of project managers, engineers, and coordinators behind Laliguras: Ishan Bhandari, Sakshyam Pokhrel, Sukriti Rimal, Aayush Neupane, Arbin Giri, and Sijan Kafle.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      <section className="page-hero py-24 sm:py-32 lg:py-40">
        <Container size="xl" className="relative z-10">
          <ScrollReveal>
            <span className="eyebrow">Team Laliguras</span>
            <h1 className="mt-8 max-w-5xl text-balance text-[clamp(3.5rem,8vw,8.2rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#101916]">
              Small enough to care. <span className="display-serif text-[#9b1730] italic">Curious enough</span> to grow.
            </h1>
            <p className="mt-8 max-w-2xl border-l border-[#9b1730] pl-6 text-base leading-8 text-[#52635b]">
              Meet the core team of engineers, project managers, and coordinators shaping Laliguras and bringing high-impact digital platforms to life.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {TEAM_MEMBERS.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 60}>
                <article className="group relative flex flex-col bg-white border border-black/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-black/25">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e8e6df]">
                    {member.photoUrl ? (
                      <Image
                        src={member.photoUrl}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-4xl font-bold text-[#596861]">
                        {member.initials}
                      </div>
                    )}
                    <div className="absolute top-4 left-4 z-10 flex items-center justify-center h-8 w-8 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold tracking-wider text-[#9b1730] shadow-xs">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-4 border-t border-black/10">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9b1730] block leading-tight">
                        {member.role}
                      </span>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#101916]">
                        {member.name}
                      </h2>
                    </div>
                    <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#707e77]">
                      <span>Laliguras Studio</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#102a22] font-semibold">Nepal</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <div className="mt-24 grid gap-8 bg-[#102a22] p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef93a5]">Work with us</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">
                  A thoughtful team for ambitious work.
                </h2>
              </div>
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-2 bg-[#9b1730] px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101916]"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
