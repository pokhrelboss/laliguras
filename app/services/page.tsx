import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";
import { 
  Code2, 
  Layers, 
  Compass, 
  Palette, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ArrowUpRight
} from "lucide-react";


export const metadata: Metadata = {
  title: "Services & Technical Capabilities",
  description: "Explore Laliguras engineering capabilities: Digital product engineering, custom enterprise platforms & LMS, interactive 360° simulations, UI/UX systems, and cloud infrastructure.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Layers,
  Compass,
  Palette,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      
      {/* Page Header */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E1E7E3] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <ScrollReveal direction="up">
              <Badge variant="primary" size="md">
                ENGINEERING & DESIGN CAPABILITIES
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1914] leading-[1.12]">
                Services tailored for high-stakes digital platforms.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="text-lg sm:text-xl text-[#2E4038] leading-relaxed">
                We combine architectural precision, human-centered UI craft, and agile full-stack engineering to build custom software that scales seamlessly.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Technical Consultation
                </Button>
                <Button
                  href="/projects"
                  variant="outline"
                  size="lg"
                >
                  View Client Case Studies
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Services Deep-Dive Section */}
      <section className="py-20 md:py-28">
        <Container size="xl">
          <div className="space-y-16">
            {SERVICES.map((service, idx) => {
              const Icon = ICON_MAP[service.iconName] || Code2;
              const isReversed = idx % 2 === 1;

              return (
                <ScrollReveal key={service.id} direction="up" delay={50} duration={600}>
                  <div 
                    id={service.slug}
                    className={`p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7E3] shadow-xs scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] text-[#9E1A2F] flex items-center justify-center border border-[#F5C7CE]">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1914] tracking-tight">
                          {service.title}
                        </h2>
                        <p className="text-base text-[#2E4038] mt-3 leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="space-y-3 pt-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#0A1914]">
                          What We Deliver:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#2E4038]">
                              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="pt-4 border-t border-[#E1E7E3]">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#52665C] mb-2">
                          Key Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.keyTechnologies.map((tech) => (
                            <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-[#F1F5F2] text-[#0A1914] font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Value & Benefits Column */}
                    <div className="lg:col-span-5 bg-[#F8FAF8] rounded-2xl p-6 sm:p-8 border border-[#E1E7E3] space-y-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                        Strategic Client Benefits
                      </h3>
                      <ul className="space-y-3 text-xs sm:text-sm text-[#2E4038]">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9E1A2F] mt-2 shrink-0" />
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {service.id === "enterprise-platforms-lms" && (
                        <div className="pt-4 border-t border-[#E1E7E3]">
                          <Link
                            href="/projects/safestep"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9E1A2F] hover:underline"
                          >
                            Explore SafeStep LMS Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5-Step Delivery Lifecycle Section */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E1E7E3]">
        <Container size="xl">
          <div className="max-w-3xl space-y-4 mb-16">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E1A2F]">
                Our Process
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1914]">
                How we deliver from concept to scale.
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <p className="text-base text-[#2E4038] leading-relaxed">
                We eliminate guesswork through structured 2-week agile engineering sprints, direct senior access, and rigorous testing.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {COMPANY_INFO.howWeWork.map((step, idx) => (
              <ScrollReveal key={step.step} direction="up" delay={idx * 80} duration={500}>
                <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-[#E1E7E3] h-full space-y-3">
                  <span className="font-mono text-sm font-bold text-[#9E1A2F]">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0A1914]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#52665C] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
