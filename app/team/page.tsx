import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TEAM_MEMBERS } from "@/data/team";
import { Sparkles, ArrowRight } from "lucide-react";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | Laliguras Digital Product Studio",
  description:
    "Meet the engineers, architects, and product designers behind Laliguras: creators of mission-critical software and the SafeStep platform.",
};

export default function TeamPage() {
  return (
    <div className="bg-[#F8FAF8] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E1E7E3] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <ScrollReveal direction="up">
              <Badge variant="primary" size="md">
                OUR PEOPLE & BUILDERS
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1914] leading-[1.12]">
                The engineers & product minds behind Laliguras.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="text-lg sm:text-xl text-[#2E4038] leading-relaxed">
                A dedicated team united by a commitment to architectural rigor, thoughtful product design, and turning complex client challenges into enduring digital software.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Team Grid: 3-cols Desktop, 2-cols Tablet, 1-col Mobile */}
      <section className="py-20">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal key={member.id} direction="up" delay={idx * 80} duration={500}>
                <div className="p-8 rounded-3xl bg-white border border-[#E1E7E3] hover:border-[#CCD6CE] hover:shadow-[0_16px_36px_rgba(10,25,20,0.05)] transition-all h-full flex flex-col justify-between group">
                  <div className="space-y-6">
                    {/* Avatar & Social Links */}
                    <div className="flex items-center justify-between">
                      {/* Neutral Initials Avatar */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F2D24] to-[#1E4639] text-[#F8FAF8] flex items-center justify-center font-mono font-bold text-xl border border-[#215645] shadow-xs group-hover:scale-105 transition-transform select-none">
                        {member.initials}
                      </div>

                      {/* Socials */}
                      <div className="flex items-center gap-2">
                        {member.linkedInUrl && (
                          <a
                            href={member.linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-[#52665C] hover:text-[#9E1A2F] hover:bg-[#FDF2F4] transition-colors"
                            aria-label={`${member.name} LinkedIn Profile`}
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.46 1.46 0 0 0-1.45-1.45 1.48 1.48 0 0 0-1.48 1.45c0 .8.65 1.45 1.48 1.45m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                            </svg>
                          </a>
                        )}
                        {member.githubUrl && (
                          <a
                            href={member.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-[#52665C] hover:text-[#0A1914] hover:bg-[#F1F5F2] transition-colors"
                            aria-label={`${member.name} GitHub Profile`}
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                            </svg>
                          </a>
                        )}
                      </div>

                    </div>

                    {/* Name & Role (Role is optional, uninvented per instructions) */}
                    <div>
                      <h2 className="text-2xl font-bold text-[#0A1914] tracking-tight group-hover:text-[#9E1A2F] transition-colors">
                        {member.name}
                      </h2>
                      {member.role ? (
                        <p className="text-xs font-semibold text-[#9E1A2F] uppercase tracking-wider mt-1">
                          {member.role}
                        </p>
                      ) : (
                        <p className="text-xs font-medium text-[#52665C] mt-0.5">
                          Team Laliguras
                        </p>
                      )}
                    </div>

                    {/* Short Bio */}
                    {member.bio && (
                      <p className="text-sm text-[#2E4038] leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 mt-6 border-t border-[#F1F5F2] flex items-center justify-between text-xs text-[#52665C]">
                    <span>Kathmandu, Nepal</span>
                    <span className="font-mono text-[#9E1A2F] font-semibold">Engineering</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Culture Statement Card */}
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0F2D24] text-white border border-[#1E4639] shadow-xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-[#163E32] border border-[#215645] text-[#E63952] flex items-center justify-center shrink-0">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2 text-center md:text-left flex-1">
                <h3 className="text-xl font-bold text-white">
                  Crafting resilient digital solutions with Himalayan spirit.
                </h3>
                <p className="text-sm text-[#C4D6CD] leading-relaxed max-w-2xl">
                  We believe true innovation comes from focused collaboration, rigorous system design, and quiet dedication. Whether building the SafeStep training ecosystem or scaling custom client software, our team is committed to engineering excellence.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-[#9E1A2F] text-white text-xs font-semibold hover:bg-[#831526] transition-colors inline-flex items-center gap-1.5"
                >
                  Work With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
