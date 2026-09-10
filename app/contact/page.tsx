import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DemoRequestForm } from "@/components/sections/DemoRequestForm";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Laliguras",
  description: "Start a product conversation with Laliguras or ask about the SafeStep health and safety training platform.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      <section className="page-hero py-24 sm:py-32">
        <Container size="xl" className="relative z-10">
          <ScrollReveal><span className="eyebrow">Contact</span><h1 className="mt-8 max-w-5xl text-balance text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#101916]">Let’s make the next thing <span className="display-serif text-[#9b1730] italic">matter.</span></h1></ScrollReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28 lg:py-32">
        <Container size="xl">
          <div className="grid gap-14 lg:grid-cols-[.42fr_.58fr] lg:gap-20">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <p className="max-w-md text-base leading-8 text-[#52635b]">Tell us about the problem, the people it affects, and where you want to go. You do not need a polished brief to begin.</p>
                <div className="mt-10 border-y border-black/15 py-6">
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="flex items-center gap-3 py-2 text-sm font-semibold text-[#101916] transition-colors hover:text-[#9b1730]"><Mail className="h-4 w-4 text-[#9b1730]" strokeWidth={1.75} />{COMPANY_INFO.contact.email}</a>
                  <p className="flex items-center gap-3 py-2 text-sm text-[#52635b]"><MapPin className="h-4 w-4 text-[#9b1730]" strokeWidth={1.75} />{COMPANY_INFO.contact.location}</p>
                </div>
                <p className="mt-7 text-xs leading-6 text-[#77827d]">The online form confirms delivery only when the server-side Resend email service is configured. If it is unavailable, please use the email address above.</p>
              </div>
            </ScrollReveal>
            <div id="demo-form"><ScrollReveal direction="left" delay={100}><DemoRequestForm /></ScrollReveal></div>
          </div>
        </Container>
      </section>
    </div>
  );
}
