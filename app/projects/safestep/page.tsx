import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InteractiveHazardPreview } from "@/components/sections/InteractiveHazardPreview";
import { PROJECTS } from "@/data/projects";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Play
} from "lucide-react";

export const metadata: Metadata = {
  title: "SafeStep Showcase — An Integrated Health and Safety Training Platform",
  description: "Explore SafeStep, an integrated workplace health and safety training platform designed and engineered by Laliguras for an occupational safety client.",
};

export default function SafeStepCaseStudyPage() {
  const safeStep = PROJECTS.find((p) => p.id === "safestep") || PROJECTS[0];


  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-[#E1E7E3] py-4">
        <Container size="xl">
          <div className="flex items-center justify-between text-xs">
            <Link 
              href="/projects" 
              className="text-[#52665C] hover:text-[#9E1A2F] flex items-center gap-1.5 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Projects
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-[#52665C]">Client:</span>
              <span className="font-semibold text-[#0A1914]">Occupational Health & Safety Client</span>
              <span className="text-[#A8BFB5]">•</span>
              <span className="text-[#9E1A2F] font-semibold">Built by Laliguras</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Case Study Hero */}
      <section className="py-20 md:py-28 bg-[#0F2D24] text-white relative overflow-hidden border-b border-[#1E4639]">
        <div className="absolute inset-0 bg-himalaya-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-32 right-1/3 w-[600px] h-[600px] bg-radial from-[#1E4639] to-transparent rounded-full opacity-50 blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-4xl space-y-7">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163E32] border border-[#215645] text-xs font-semibold text-[#F5C7CE]">
                <Sparkles className="w-3.5 h-3.5 text-[#E63952]" />
                <span>Client Case Study • Health & Safety Platform</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                SafeStep
              </h1>
              <p className="text-2xl sm:text-3xl text-[#F5C7CE] font-medium mt-2">
                An Integrated Health and Safety Training Platform
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="text-lg sm:text-xl text-[#C4D6CD] leading-relaxed max-w-3xl">
                A modern workplace health and safety training platform featuring interactive learning, practical training modules, assessments, progress tracking, certificates and immersive real-world safety scenarios. Designed and developed by <strong className="text-white">Laliguras</strong>.
              </p>
            </ScrollReveal>

            {/* Metrics Bar */}
            <ScrollReveal direction="up" delay={200}>
              <div className="pt-6 border-t border-[#1E4639] grid grid-cols-2 sm:grid-cols-4 gap-6">
                {safeStep.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-3xl font-bold text-white font-mono">{metric.value}</p>
                    <p className="text-xs font-semibold text-[#F5C7CE]">{metric.label}</p>
                    {metric.context && (
                      <p className="text-[10px] text-[#A8BFB5]">{metric.context}</p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Quick Action Navigation */}
            <ScrollReveal direction="up" delay={250}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#interactive-sim"
                  className="px-6 py-3.5 rounded-xl bg-[#9E1A2F] text-white text-sm font-semibold hover:bg-[#831526] transition-all shadow-md flex items-center gap-2"
                >
                  Test 360° Hazard Simulator <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#product-architecture"
                  className="px-6 py-3.5 rounded-xl bg-[#163E32] text-white text-sm font-semibold hover:bg-[#1E4639] border border-[#215645] transition-all"
                >
                  Product Architecture Tour
                </a>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Client Challenge vs Laliguras Solution */}
      <section className="py-20 bg-white border-b border-[#E1E7E3]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* The Challenge */}
            <ScrollReveal direction="up" delay={50}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAF8] border border-[#E1E7E3] h-full space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                  The Client Challenge
                </span>
                <h2 className="text-2xl font-bold text-[#0A1914]">
                  Passive compliance checklists failed to prevent physical injuries.
                </h2>
                <p className="text-sm text-[#2E4038] leading-relaxed">
                  Traditional safety training was delivered through static slideshows and PDF binders that workers skipped through. Frontline personnel could answer theoretical multiple-choice questions on paper, but failed to recognize dynamic hazards like blind forklift intersections or chemical spills on physical warehouse floors.
                </p>
                <div className="pt-3 border-t border-[#E1E7E3] space-y-2 text-xs text-[#52665C]">
                  <p className="font-semibold text-[#0A1914]">Client Objectives:</p>
                  <ul className="space-y-1.5">
                    <li>• Replace passive compliance with practical situational judgment.</li>
                    <li>• Provide measurable learner progress tracking for managers.</li>
                    <li>• Issue tamper-evident audit-proof digital certifications.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* The Laliguras Solution */}
            <ScrollReveal direction="up" delay={150}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0F2D24] text-white h-full space-y-4 shadow-xl border border-[#1E4639]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5C7CE]">
                  The Laliguras Solution
                </span>
                <h2 className="text-2xl font-bold text-white">
                  SafeStep: An interactive, spatial training suite built for real retention.
                </h2>
                <p className="text-sm text-[#C4D6CD] leading-relaxed">
                  Laliguras architected and developed SafeStep from the ground up. We designed modular micro-learning chapters, high-definition video ergonomics, in-browser 360° warehouse simulations, and cryptographic verification seals. The platform runs natively across mobile and desktop browsers with zero app installs required.
                </p>
                <div className="pt-3 border-t border-[#1E4639] space-y-2 text-xs text-[#A8BFB5]">
                  <p className="font-semibold text-white">Key Delivery Highlights:</p>
                  <ul className="space-y-1.5">
                    <li>• 10 core modular product capabilities integrated into one unified portal.</li>
                    <li>• Native 360° interactive canvas running smoothly at 60fps.</li>
                    <li>• Multi-tenant enterprise architecture ready for white-label client rollouts.</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* Visual Product Tour (Scrollytelling Product Architecture) */}
      <section id="product-architecture" className="py-20 md:py-28 bg-[#F8FAF8] border-b border-[#E1E7E3]">
        <Container size="xl">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <ScrollReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E1A2F]">
                Product Tour
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1914]">
                Inside the SafeStep Product Architecture
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <p className="text-base text-[#2E4038] leading-relaxed">
                Explore the key features designed and engineered by Laliguras for the SafeStep platform ecosystem.
              </p>
            </ScrollReveal>
          </div>

          {/* Product Tour Feature Blocks */}
          <div className="space-y-16">
            
            {/* Feature 1: Learner Dashboard */}
            <ScrollReveal direction="up">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7E3] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                    01. Learner Dashboard
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1914]">
                    Intuitive Daily Progress & Habit Tracking
                  </h3>
                  <p className="text-sm text-[#2E4038] leading-relaxed">
                    Designed for busy operational schedules, the SafeStep dashboard provides employees with immediate visibility into their ongoing training: 3/5 modules completed (60%), 2 earned certificates, active 5-day learning streak, and 4.5 total hours logged.
                  </p>
                  <ul className="space-y-2 text-xs text-[#52665C]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      <span>Single-click &apos;Continue Learning&apos; card for active courses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      <span>Dedicated navigation: Dashboard, Modules, Assessments, Certificates</span>
                    </li>
                  </ul>
                </div>

                {/* Dashboard Visual Mockup Card */}
                <div className="lg:col-span-6 bg-[#0F2D24] rounded-2xl p-6 border border-[#1E4639] text-white space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E4639] text-xs">
                    <span className="font-semibold text-[#F5C7CE]">SafeStep Learner Portal</span>
                    <span className="text-xs bg-[#163E32] text-[#22C55E] px-2 py-0.5 rounded">Active Session</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#163E32] border border-[#215645]">
                      <p className="text-[11px] text-[#A8BFB5]">Training Progress</p>
                      <p className="text-xl font-bold text-white mt-1">3 / 5 Modules</p>
                      <div className="w-full h-1.5 bg-[#0F2D24] rounded-full mt-2 overflow-hidden">
                        <div className="w-[60%] h-full bg-[#9E1A2F]" />
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#163E32] border border-[#215645]">
                      <p className="text-[11px] text-[#A8BFB5]">Certificates</p>
                      <p className="text-xl font-bold text-white mt-1">2 Earned</p>
                      <span className="text-[10px] text-[#22C55E]">Audited & Verified</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#163E32] border border-[#215645] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Manual Handling Training</p>
                      <p className="text-[10px] text-[#A8BFB5]">6 lessons • 30 mins</p>
                    </div>
                    <span className="px-3 py-1 rounded bg-[#9E1A2F] text-xs font-semibold text-white">
                      In Progress (60%)
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2: Video Learning & Ergonomics */}
            <ScrollReveal direction="up">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7E3] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5 lg:order-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                    02. Video Learning Engine
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1914]">
                    Practical Ergonomics & Posture Instruction
                  </h3>
                  <p className="text-sm text-[#2E4038] leading-relaxed">
                    Instead of generic animations, SafeStep delivers filmed workplace ergonomics showing real workers demonstrating correct kinetic lifting techniques, posture angles, and hazardous chemical handling.
                  </p>
                  <ul className="space-y-2 text-xs text-[#52665C]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      <span>Chaptered outline: Introduction, Risk Factors, Proper Lifting, Summary</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      <span>Mark as Complete milestone gates preventing blind skips</span>
                    </li>
                  </ul>
                </div>

                {/* Video Mockup Card */}
                <div className="lg:col-span-6 bg-[#0A1914] rounded-2xl p-6 border border-[#1E4639] text-white space-y-4 lg:order-1 shadow-xl">
                  <div className="aspect-video bg-[#163E32] rounded-xl flex flex-col items-center justify-center relative overflow-hidden border border-[#215645] group">
                    <div className="w-14 h-14 rounded-full bg-[#9E1A2F] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                      <span>1. Correct Lifting Techniques</span>
                      <span className="font-mono">02:34 / 04:15</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#A8BFB5]">
                    <span>Module: Manual Handling Training</span>
                    <span className="text-[#22C55E]">Chapter 1 of 6</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 3: Assessments & Digital Certification */}
            <ScrollReveal direction="up">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E1E7E3] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                    03. Knowledge Checks & Certificates
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1914]">
                    Scenario-Based Assessments & Verifiable Credentials
                  </h3>
                  <p className="text-sm text-[#2E4038] leading-relaxed">
                    Learners demonstrate genuine competence through scenario-based evaluations requiring an 80% passing grade. Upon completion, SafeStep cryptographically generates a Certificate of Completion with a unique SHA-256 verification hash.
                  </p>
                  <ul className="space-y-2 text-xs text-[#52665C]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      <span>Instant score feedback (e.g. 8/10 • 80%) with remediation advice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                      <span>Printable, auditable PDF credentials with employer verification portal</span>
                    </li>
                  </ul>
                </div>

                {/* Certificate Mockup Visual */}
                <div className="lg:col-span-6 p-6 rounded-2xl bg-white border-2 border-[#CCD6CE] shadow-xl space-y-4 text-center">
                  <div className="p-6 border border-[#E1E7E3] rounded-xl space-y-3 bg-[#F8FAF8]">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#EBF3F0] text-[#0F2D24] flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#9E1A2F]" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9E1A2F]">
                      Certificate of Completion
                    </p>
                    <p className="text-xs text-[#52665C]">This is to certify that</p>
                    <p className="text-lg font-bold text-[#0A1914]">Sijan Bhandari</p>
                    <p className="text-xs text-[#2E4038]">
                      has successfully completed <strong>Manual Handling Training</strong>
                    </p>
                    <div className="pt-3 border-t border-[#E1E7E3] flex justify-between items-center text-[10px] text-[#52665C]">
                      <span>Issued: 10 September 2026</span>
                      <span className="font-mono">Hash: #SS-9821A-VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* LIVE INTERACTIVE 360° HAZARD SIMULATOR SECTION */}
      <section id="interactive-sim" className="scroll-mt-16">
        <div className="bg-[#0F2D24] text-white py-12 border-b border-[#1E4639]">
          <Container size="xl">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F5C7CE]">
                SafeStep Live Simulation Feature
              </span>
              <h2 className="text-3xl font-bold text-white">
                Interactive 360° Warehouse Hazard Simulator
              </h2>
              <p className="text-sm text-[#C4D6CD]">
                Experience the exact spatial training module engineered by Laliguras for SafeStep. Click the pulsating hazard markers to identify workplace safety risks in real time.
              </p>
            </div>
          </Container>
        </div>
        
        {/* Render our verified interactive hazard simulator right here! */}
        <InteractiveHazardPreview />
      </section>

      {/* Case Study Consultation Banner */}
      <section className="py-20 bg-white border-t border-[#E1E7E3]">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F4] text-[#9E1A2F] text-xs font-bold border border-[#F5C7CE]">
              Enterprise Platform Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1914]">
              Interested in a custom training platform like SafeStep?
            </h2>
            <p className="text-base text-[#2E4038]">
              Laliguras engineers bespoke learning management portals, interactive 3D simulations, and enterprise compliance systems tailored to your company&apos;s exact risk profile.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request Platform Consultation
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View Other Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
