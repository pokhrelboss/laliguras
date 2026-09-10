import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work & Client Projects",
  description: "Explore digital products and enterprise platforms engineered by Laliguras, including our flagship client project SafeStep.",
};

export default function ProjectsPage() {
  const safeStep = PROJECTS.find((p) => p.id === "safestep") || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.id !== "safestep");

  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      
      {/* Page Header */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E1E7E3] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <ScrollReveal direction="up">
              <Badge variant="primary" size="md">
                PORTFOLIO OF CLIENT WORK
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1914] leading-[1.12]">
                Proven platforms, engineered with precision.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="text-lg sm:text-xl text-[#2E4038] leading-relaxed">
                From specialized training ecosystems like SafeStep to high-throughput enterprise telemetry systems, explore how Laliguras delivers lasting technology solutions for clients.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Flagship Case Study: SafeStep */}
      <section className="py-20">
        <Container size="xl">
          <ScrollReveal direction="up" duration={700}>
            <div className="rounded-3xl bg-[#0F2D24] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#1E4639] shadow-2xl mb-16">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163E32] border border-[#215645] text-xs font-semibold text-[#F5C7CE]">
                    <Sparkles className="w-3.5 h-3.5 text-[#E63952]" />
                    <span>Featured Client Project • Health & Safety Platform</span>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                      {safeStep.title}
                    </h2>
                    <p className="text-xl text-[#F5C7CE] font-medium mt-1">
                      {safeStep.subtitle}
                    </p>
                  </div>

                  <p className="text-[#C4D6CD] text-base leading-relaxed">
                    {safeStep.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#E2ECE7]">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                      <span>Interactive 360° Warehouse Hazard Sim</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#E2ECE7]">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                      <span>Learner Dashboard & Streak Engine</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#E2ECE7]">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                      <span>Chaptered Video Instructional Lessons</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#E2ECE7]">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                      <span>SHA-256 Verifiable Certificates</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1E4639] grid grid-cols-3 gap-4">
                    {safeStep.metrics.slice(0, 3).map((metric, mIdx) => (
                      <div key={mIdx}>
                        <p className="text-2xl font-bold text-white font-mono">{metric.value}</p>
                        <p className="text-[11px] text-[#A8BFB5] leading-snug mt-0.5">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href="/projects/safestep"
                      className="px-6 py-3.5 rounded-xl bg-[#9E1A2F] text-white text-sm font-semibold hover:bg-[#831526] transition-all shadow-md flex items-center gap-2"
                    >
                      Explore SafeStep Case Study <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Visual Card */}
                <div className="lg:col-span-5 bg-[#091C16] border border-[#215645] rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E4639]">
                    <span className="text-xs font-mono text-[#A8BFB5]">safestep.platform/suite</span>
                    <span className="text-xs text-[#22C55E] font-medium bg-[#163E32] px-2 py-0.5 rounded">Production</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#163E32] border border-[#215645] space-y-3">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Client Challenge
                    </p>
                    <p className="text-xs text-[#C4D6CD] leading-relaxed">
                      {safeStep.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F2D24] border border-[#1E4639] space-y-2">
                    <p className="text-xs font-bold text-[#F5C7CE] uppercase tracking-wider">
                      Laliguras Solution
                    </p>
                    <p className="text-xs text-[#A8BFB5] leading-relaxed">
                      Engineered a spatial 360° training platform combining micro-learning, instant feedback, and cryptographic compliance certification.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>

          {/* Other Projects Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#0A1914] tracking-tight">
              Additional Client Platforms
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project, idx) => (
                <ScrollReveal key={project.id} direction="up" delay={idx * 120} duration={600}>
                  <div className="p-8 rounded-3xl bg-white border border-[#E1E7E3] hover:border-[#CCD6CE] hover:shadow-[0_16px_36px_rgba(10,25,20,0.05)] transition-all h-full flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#9E1A2F] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-[#52665C] font-mono">{project.year}</span>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold text-[#0A1914] group-hover:text-[#9E1A2F] transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm font-medium text-[#52665C] mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-[#2E4038] leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="pt-3 border-t border-[#F1F5F2] space-y-2">
                        <p className="text-xs font-bold text-[#0A1914]">Key Features:</p>
                        <ul className="space-y-1 text-xs text-[#52665C]">
                          {project.features.map((f, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <span className="text-[#9E1A2F] font-bold">•</span>
                              <span><strong>{f.title}:</strong> {f.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-[#E1E7E3] grid grid-cols-3 gap-2">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx}>
                            <p className="text-base font-bold text-[#0A1914] font-mono">{m.value}</p>
                            <p className="text-[10px] text-[#52665C] leading-snug">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E1E7E3] flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-[#F1F5F2] text-[#2E4038] font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-[#52665C] group-hover:text-[#9E1A2F] flex items-center gap-1 shrink-0 ml-2">
                        Client Build <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-[#E1E7E3]">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto space-y-5">
            <h3 className="text-3xl font-bold text-[#0A1914]">Have a project in mind?</h3>
            <p className="text-base text-[#2E4038]">
              Let&apos;s discuss your system architecture, user workflows, and delivery roadmap.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Start a Conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
