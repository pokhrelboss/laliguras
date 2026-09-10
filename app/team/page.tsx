import React from "react";
import type { Metadata } from "next";
import { Container, Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TEAM_MEMBERS } from "@/data/team";
import { Sparkles, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | Laliguras Workplace Training",
  description:
    "Meet the team behind Laliguras: dedicated to creating engaging, modern, and practical health and safety training platforms.",
};

export default function TeamPage() {
  return (
    <div className="bg-[#F8FAF8] py-16 md:py-24">
      <Container size="xl" className="space-y-16">
        {/* Header Banner */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="crimson" size="sm">
            Our People
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1914] tracking-tight">
            The Team Behind Laliguras
          </h1>
          <p className="text-base sm:text-lg text-[#3D4F47] leading-relaxed">
            A dedicated collective united by a shared mission: making workplace safety education engaging, practical, and accessible for modern organizations.
          </p>
        </div>

        {/* Team Grid: 3-cols Desktop, 2-cols Tablet, 1-col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <Card
              key={member.id}
              hoverEffect
              className="p-8 border-[#E1E7E3] hover:border-[#9E1A2F]/40 flex flex-col justify-between transition-all"
            >
              <div className="space-y-6">
                {/* Avatar Row */}
                <div className="flex items-center justify-between">
                  {/* Elegant Neutral Initials Placeholder */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0F2D24] to-[#1E4639] text-[#F8FAF8] flex items-center justify-center font-bold text-2xl tracking-wider shadow-sm border-2 border-white select-none">
                    {member.initials}
                  </div>

                  {member.specialization && (
                    <span className="text-[11px] font-semibold text-[#0F2D24] bg-[#EBF3F0] px-3 py-1 rounded-full border border-[#CDE1D9] max-w-[170px] text-right truncate">
                      {member.specialization}
                    </span>
                  )}
                </div>

                {/* Name & Role (Role is supported but unset if not designated) */}
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-[#0A1914]">
                    {member.name}
                  </h2>
                  {member.role ? (
                    <p className="text-sm font-semibold text-[#9E1A2F]">
                      {member.role}
                    </p>
                  ) : (
                    <p className="text-xs text-[#52665C] font-medium tracking-wide">
                      Team Laliguras
                    </p>
                  )}
                </div>

                {/* Bio */}
                <p className="text-sm text-[#3D4F47] leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer: Social / LinkedIn Link */}
              <div className="pt-6 mt-6 border-t border-[#F1F5F2] flex items-center justify-between text-xs">
                <span className="text-[#64766E] font-medium">Laliguras Safety</span>

                {member.linkedInUrl && (
                  <a
                    href={member.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#9E1A2F] hover:text-[#831526] transition-colors"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Culture Statement Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E1E7E3] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#FDF2F4] border border-[#F5C7CE] text-[#9E1A2F] flex items-center justify-center shrink-0">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#0A1914]">
              Building a Culture of Vigilance and Care
            </h3>
            <p className="text-sm text-[#3D4F47] leading-relaxed">
              We are constantly seeking safety researchers, instructional designers, and industry partners who share our commitment to zero-preventable workplace harm.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
