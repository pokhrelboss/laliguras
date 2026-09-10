import React from "react";
import type { Metadata } from "next";
import { Container, Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";
import {
  HeartHandshake,
  Shield,
  Lightbulb,
  Users2,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Compass,
  Target,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | People. Innovation. Safer Tomorrows",
  description:
    "Learn about Laliguras, our mission to transform workplace health and safety training, our Himalayan roots, and our dedication to protecting workers.",
};

export default function AboutPage() {
  const valueIcons = [
    HeartHandshake,
    Shield,
    Lightbulb,
    Users2,
    RefreshCw,
    CheckCircle2,
  ];

  return (
    <div className="bg-[#F8FAF8]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-[#E1E7E3] bg-gradient-to-b from-[#F8FAF8] via-white to-[#F8FAF8] overflow-hidden">
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="crimson" size="sm">
              About Laliguras
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0A1914] tracking-tight leading-tight">
              People. Innovation. <br />
              <span className="text-[#9E1A2F]">Safer Tomorrows.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#3D4F47] leading-relaxed">
              Laliguras is a team of passionate individuals dedicated to creating safer workplaces. We combine rigorous safety expertise with modern learning tools to make training engaging, interactive, and impactful.
            </p>
          </div>
        </Container>
      </section>

      {/* Story & Heritage Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E1E7E3]">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: The Laliguras Story */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="forest" size="sm">
                Our Heritage & Roots
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
                Rooted in Resilience, Driven by Purpose
              </h2>
              <div className="space-y-4 text-base text-[#3D4F47] leading-relaxed">
                <p>{COMPANY_INFO.story}</p>
                <p>
                  In high-risk workplace settings—from active logistics warehouses to heavy manufacturing facilities—a momentary lapse in hazard awareness can result in life-altering consequences. Traditional safety training has relied on passive video playback and paper-based questionnaires that workers forget the moment they clock out.
                </p>
                <p>
                  At Laliguras, we believe that true safety competency is formed by doing. When workers explore simulated 360-degree environments and experience cause-and-effect in interactive scenarios, they build active muscle memory and instinctive hazard recognition.
                </p>
              </div>

              {/* Quote Block */}
              <div className="p-6 rounded-xl bg-[#FDF2F4] border-l-4 border-[#9E1A2F] text-[#831526] space-y-2">
                <p className="text-base sm:text-lg font-semibold italic">
                  &ldquo;{COMPANY_INFO.quote.text}&rdquo;
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                  — {COMPANY_INFO.quote.author}
                </p>
              </div>
            </div>

            {/* Right Column: Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#0F2D24] rounded-2xl p-8 text-white space-y-6 shadow-xl border border-[#1E4639] relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-[#163E32] border border-[#215645] flex items-center justify-center text-[#E63952]">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  The Laligurans Inspiration
                </h3>
                <p className="text-sm text-[#C4D6CD] leading-relaxed">
                  The Laligurans (Rhododendron) is renowned for blooming across the rugged Himalayan mountain heights, braving fierce winds and steep rocky ridges. It stands as a universal emblem of endurance, vitality, and natural protection.
                </p>
                <div className="pt-4 border-t border-[#1E4639] space-y-3 text-xs text-[#A8BFB5]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>Evidence-based occupational health curriculum</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>Active 360° decision-making scenarios</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    <span>Accessible on any device, anywhere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 md:py-24 bg-[#F8FAF8] border-b border-[#E1E7E3]">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="p-8 sm:p-10 border-[#CDE1D9] bg-white hover:border-[#0F2D24] transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EBF3F0] text-[#0F2D24] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <Badge variant="forest" size="sm">
                  Our Mission
                </Badge>
                <h3 className="text-2xl font-bold text-[#0A1914]">
                  Transforming Safety Training
                </h3>
                <p className="text-base text-[#3D4F47] leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </Card>

            {/* Vision */}
            <Card className="p-8 sm:p-10 border-[#F5C7CE] bg-white hover:border-[#9E1A2F] transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] text-[#9E1A2F] flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <Badge variant="crimson" size="sm">
                  Our Vision
                </Badge>
                <h3 className="text-2xl font-bold text-[#0A1914]">
                  Empowering Every Workforce
                </h3>
                <p className="text-base text-[#3D4F47] leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E1E7E3]">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <Badge variant="crimson" size="sm">
              What Guides Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
              Our Guiding Values
            </h2>
            <p className="text-base text-[#3D4F47] leading-relaxed">
              These fundamental principles guide every module we build, every simulation we render, and every corporate relationship we maintain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_INFO.values.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-xl border border-[#E1E7E3] bg-[#F8FAF8] hover:bg-white hover:border-[#9E1A2F]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FDF2F4] text-[#9E1A2F] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1914] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#3D4F47] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Meet Team Teaser */}
      <section className="py-16 bg-[#F8FAF8] border-b border-[#E1E7E3]">
        <Container size="xl">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0F2D24] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <Badge variant="forest" size="sm" className="bg-[#163E32] text-[#A8BFB5] border-[#215645]">
                Our People
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Meet the Team Behind Laliguras
              </h3>
              <p className="text-sm text-[#C4D6CD] leading-relaxed">
                A multidisciplinary team committed to safety education, software reliability, and transformative training design.
              </p>
            </div>
            <Button
              href="/team"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="shrink-0 w-full md:w-auto"
            >
              View Team Members
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
