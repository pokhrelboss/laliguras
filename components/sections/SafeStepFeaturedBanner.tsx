"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  ArrowRight, 
  Sparkles, 
  Video, 
  Compass, 
  FileCheck2, 
  BarChart3, 
  Award, 
  UserCheck, 
  HelpCircle,
  Building2
} from "lucide-react";


export const SafeStepFeaturedBanner: React.FC = () => {
  const safeStepFeatures = [
    {
      title: "Learner Dashboard",
      description: "Intuitive overview of active modules, deadlines, streaks, and certificates.",
      icon: BarChart3,
    },
    {
      title: "Practical Training Modules",
      description: "Structured curriculum covering manual handling, fire, chemical safety & PPE.",
      icon: FileCheck2,
    },
    {
      title: "Video Learning",
      description: "High-definition chaptered video instructions with key takeaways.",
      icon: Video,
    },
    {
      title: "Interactive 360° Scenarios",
      description: "Spatial browser simulations where workers navigate and pinpoint hazards.",
      icon: Compass,
    },
    {
      title: "Knowledge Assessments",
      description: "Contextual quizzes with immediate feedback and 80% passing thresholds.",
      icon: FileCheck2,
    },
    {
      title: "Progress Tracking",
      description: "Real-time compliance visibility for teams, supervisors, and individuals.",
      icon: BarChart3,
    },
    {
      title: "Tamper-Proof Certificates",
      description: "Verifiable digital credentials with SHA-256 verification hashes.",
      icon: Award,
    },
    {
      title: "Learner Profiles",
      description: "Historical training logs, department mappings, and recertification cycles.",
      icon: UserCheck,
    },
    {
      title: "Help / FAQ Support",
      description: "Contextual in-app knowledge base for troubleshooting and guidance.",
      icon: HelpCircle,
    },
    {
      title: "Client-Focused Experience",
      description: "Multi-tenant deployment options with custom client branding and SOPs.",
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0F2D24] text-white relative overflow-hidden border-b border-[#1E4639]">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-himalaya-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-radial from-[#1E4639] to-transparent rounded-full opacity-40 blur-3xl pointer-events-none" />

      <Container size="xl" className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163E32] border border-[#215645] text-xs font-semibold text-[#F5C7CE]">
              <Sparkles className="w-3.5 h-3.5 text-[#E63952]" />
              <span>Project Deep-Dive • Client Showcase</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              SafeStep: An Integrated Health and Safety Training Platform
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <p className="text-base sm:text-lg text-[#C4D6CD] leading-relaxed">
              SafeStep is a complete training ecosystem engineered by <span className="text-white font-semibold">Laliguras</span> for an occupational safety client. By replacing outdated paper binders with interactive 360° hazard simulations and verifiable digital credentials, SafeStep redefines workplace compliance.
            </p>
          </ScrollReveal>
        </div>

        {/* 10 SafeStep Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {safeStepFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <ScrollReveal key={feat.title} direction="up" delay={idx * 50} duration={500}>
                <div className="p-5 rounded-xl bg-[#163E32]/70 border border-[#215645] hover:bg-[#163E32] hover:border-[#E63952]/40 transition-all h-full flex flex-col justify-between group">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2D24] text-[#E63952] flex items-center justify-center border border-[#1E4639] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#F5C7CE] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#A8BFB5] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                  <span className="text-[10px] text-[#52665C] uppercase tracking-wider font-mono mt-3 pt-2 border-t border-[#1E4639]">
                    SafeStep Feature
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <ScrollReveal direction="up" delay={200}>
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#9E1A2F] to-[#831526] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-[#F5C7CE]/20">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl font-bold text-white">Experience SafeStep in Action</h4>
              <p className="text-sm text-white/80 max-w-xl">
                Explore the full case study with architectural insights, learner dashboards, and a live in-browser 360° hazard simulation demo.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/projects/safestep"
                className="px-6 py-3.5 rounded-xl bg-white text-[#9E1A2F] text-sm font-bold hover:bg-[#F8FAF8] transition-all shadow-md flex items-center gap-2"
              >
                View Full SafeStep Showcase <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
};
