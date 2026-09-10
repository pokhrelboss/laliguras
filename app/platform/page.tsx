import React from "react";
import type { Metadata } from "next";
import { Container, Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PLATFORM_CAPABILITIES } from "@/data/platform";
import { InteractiveHazardPreview } from "@/components/sections/InteractiveHazardPreview";
import {
  BookOpen,
  Sparkles,
  PlayCircle,
  Scan,
  ClipboardCheck,
  TrendingUp,
  Award,
  FileCheck,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Layers,
  Building,
  UserCheck,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SafeStep Platform | Comprehensive Workplace Safety Training",
  description:
    "Explore the SafeStep training ecosystem: 360° hazard simulations, video lessons, knowledge assessments, and centralized compliance reporting.",
};

export default function PlatformPage() {
  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Sparkles,
    PlayCircle,
    Scan,
    ClipboardCheck,
    TrendingUp,
    Award,
    FileCheck,
    Users,
    BarChart3,
  };

  return (
    <div className="bg-[#f5f4ef]">
      {/* Platform Hero */}
      <section className="page-hero py-20 sm:py-28 lg:py-32">
        <Container size="xl" className="relative z-10">
          <div className="max-w-5xl space-y-6">
            <span className="eyebrow">SafeStep · A separate Laliguras project</span>
            <h1 className="text-balance text-5xl font-semibold leading-[.92] tracking-[-0.065em] text-[#101916] sm:text-7xl lg:text-8xl">
              An integrated health and safety <span className="display-serif text-[#9b1730] italic">training platform.</span>
            </h1>
            <p className="max-w-2xl border-l border-[#9b1730] pl-6 text-base leading-8 text-[#52635b]">
              SafeStep is a distinct product project created by Laliguras. Its current system brings training content, interactive practice, assessment, progress, and learner support into one experience.
            </p>

            <div className="flex flex-col items-start gap-3.5 pt-2 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request Platform Demo
              </Button>
              <Button href="#capabilities" variant="outline" size="lg">
                View All Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive 360 Scenario Simulation */}
      <InteractiveHazardPreview />

      {/* 10 Core Platform Capabilities */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E1E7E3]" id="capabilities">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <Badge variant="forest" size="sm">
              Complete Ecosystem
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
              10 Pillars of the SafeStep Engine
            </h2>
            <p className="text-base text-[#3D4F47] leading-relaxed">
              Every tool and module is engineered to bridge the gap between regulatory requirements and real human behavioral change on shift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PLATFORM_CAPABILITIES.map((cap) => {
              const Icon = iconMap[cap.iconName] || Sparkles;
              return (
                <Card
                  key={cap.id}
                  hoverEffect
                  className="p-6 border-[#E1E7E3] hover:border-[#9E1A2F]/40 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] border border-[#F5C7CE] text-[#9E1A2F] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      {cap.badge && (
                        <Badge variant="crimson" size="sm">
                          {cap.badge}
                        </Badge>
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#0A1914] mb-1">
                        {cap.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#0F2D24] mb-2">
                        {cap.subtitle}
                      </p>
                      <p className="text-sm text-[#3D4F47] leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Multi-Tenant & White-Label Readiness (Phase 2 Architecture) */}
      <section className="py-16 md:py-24 bg-[#F8FAF8] border-b border-[#E1E7E3]" id="enterprise">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="forest" size="sm">
                Phase 2 Direction
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
                A Planned Multi-Tenant, White-Label Architecture
              </h2>
              <p className="text-base text-[#3D4F47] leading-relaxed">
                The current codebase includes a typed domain-model foundation for a future organization hierarchy. Tenant separation, branded portals, administrator tools, and automated reporting remain Phase 2 product direction—not production functionality.
              </p>

              <div className="space-y-3.5 text-sm text-[#2E4038]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0E6245] shrink-0 mt-0.5" />
                  <span>
                    <strong>Tenant Partitioning:</strong> Planned separation of organization records, assessments, and proprietary content.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0E6245] shrink-0 mt-0.5" />
                  <span>
                    <strong>Custom Branding:</strong> A proposed way to apply organization identity across learner portals.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0E6245] shrink-0 mt-0.5" />
                  <span>
                    <strong>Administrator Controls:</strong> A future surface for department filtering, oversight, and reporting exports.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md">
                  Discuss the Product Roadmap
                </Button>
              </div>
            </div>

            {/* Architectural Hierarchy Diagram Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E1E7E3] shadow-lg space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E1E7E3]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#52665C]">
                    Proposed SafeStep Hierarchy
                  </span>
                  <Badge variant="default" size="sm">
                    Planned Topology
                  </Badge>
                </div>

                <div className="space-y-3 font-sans">
                  {/* Tier 1: Laliguras Platform */}
                  <div className="p-3.5 rounded-lg bg-[#0F2D24] text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Layers className="w-5 h-5 text-[#E63952]" />
                      <div>
                        <p className="text-xs font-mono text-[#A8BFB5]">TIER 1</p>
                        <p className="text-sm font-bold">SafeStep Platform Foundation</p>
                      </div>
                    </div>
                    <span className="text-[11px] bg-[#163E32] px-2 py-0.5 rounded text-[#A8BFB5]">Direction</span>
                  </div>

                  <div className="flex justify-center -my-1 text-[#CCD6CE]">
                    ↓
                  </div>

                  {/* Tier 2: Client Companies */}
                  <div className="p-3.5 rounded-lg bg-[#FDF2F4] border border-[#F5C7CE] text-[#0A1914] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-[#9E1A2F]" />
                      <div>
                        <p className="text-xs font-mono text-[#9E1A2F]">TIER 2</p>
                        <p className="text-sm font-bold">Client Companies (White-Label Tenants)</p>
                      </div>
                    </div>
                    <span className="text-[11px] bg-white border border-[#F5C7CE] px-2 py-0.5 rounded text-[#9E1A2F]">Branded Portals</span>
                  </div>

                  <div className="flex justify-center -my-1 text-[#CCD6CE]">
                    ↓
                  </div>

                  {/* Tier 3: Client Admins */}
                  <div className="p-3.5 rounded-lg bg-[#EBF3F0] border border-[#CDE1D9] text-[#0A1914] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <UserCheck className="w-5 h-5 text-[#0F2D24]" />
                      <div>
                        <p className="text-xs font-mono text-[#0F2D24]">TIER 3</p>
                        <p className="text-sm font-bold">Company Admins & HSE Officers</p>
                      </div>
                    </div>
                    <span className="text-[11px] bg-white border border-[#CDE1D9] px-2 py-0.5 rounded text-[#0F2D24]">Roster & Analytics</span>
                  </div>

                  <div className="flex justify-center -my-1 text-[#CCD6CE]">
                    ↓
                  </div>

                  {/* Tier 4: Learners */}
                  <div className="p-3.5 rounded-lg bg-[#F8FAF8] border border-[#E1E7E3] text-[#0A1914] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-[#52665C]" />
                      <div>
                        <p className="text-xs font-mono text-[#52665C]">TIER 4</p>
                        <p className="text-sm font-bold">Employees & Learners</p>
                      </div>
                    </div>
                    <span className="text-[11px] bg-white border border-[#E1E7E3] px-2 py-0.5 rounded text-[#52665C]">360° Simulations & Certs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
