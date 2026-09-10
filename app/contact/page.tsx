import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DemoRequestForm } from "@/components/sections/DemoRequestForm";
import { COMPANY_INFO } from "@/data/company";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";


export const metadata: Metadata = {
  title: "Contact & Project Inquiries | Laliguras",
  description:
    "Start a project consultation with Laliguras, request a live demonstration of SafeStep, or discuss custom enterprise platform engineering.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAF8] py-16 md:py-24">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Coordinates & Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Badge variant="primary" size="md">
                GET IN TOUCH
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1914] tracking-tight leading-tight">
                Let&apos;s Build Something <br />
                <span className="text-[#9E1A2F]">Exceptional Together</span>
              </h1>
              <p className="text-base text-[#3D4F47] leading-relaxed">
                Have an ambitious digital product to engineer, an enterprise learning platform to architect, or want a demo of the SafeStep platform? We&apos;d love to connect.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E1E7E3] flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#FDF2F4] border border-[#F5C7CE] text-[#9E1A2F] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#52665C]">
                    Email Inquiries
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="text-sm font-semibold text-[#0A1914] hover:text-[#9E1A2F] transition-colors"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                  <p className="text-[11px] text-[#64766E] mt-0.5">
                    Direct engineer response within 24 hours.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E1E7E3] flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#EBF3F0] border border-[#CDE1D9] text-[#0F2D24] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#52665C]">
                    Telephone
                  </p>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-[#0A1914] hover:text-[#0F2D24] transition-colors"
                  >
                    {COMPANY_INFO.contact.phone}
                  </a>
                  <p className="text-[11px] text-[#64766E] mt-0.5">
                    Monday to Friday, 9:00 AM – 6:00 PM NPT
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E1E7E3] flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#F8FAF8] border border-[#CCD6CE] text-[#2E4038] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#52665C]">
                    Studio Location
                  </p>
                  <p className="text-sm font-semibold text-[#0A1914]">
                    {COMPANY_INFO.contact.location}
                  </p>
                  <p className="text-[11px] text-[#64766E] mt-0.5">
                    Federal Democratic Republic of Nepal
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Commitment Card */}
            <div className="p-6 rounded-2xl bg-[#0F2D24] text-white border border-[#1E4639] space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F5C7CE] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#E63952]" />
                <span>The Laliguras Guarantee</span>
              </div>
              <p className="text-xs text-[#C4D6CD] leading-relaxed">
                We believe in total transparency. All prospective partnerships receive direct access to our technical architects, structured scopes, and complete intellectual property ownership.
              </p>
            </div>
          </div>

          {/* Right Column: Demo Request Form */}
          <div className="lg:col-span-7" id="demo-form">
            <DemoRequestForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

