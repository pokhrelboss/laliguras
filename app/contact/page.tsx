import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DemoRequestForm } from "@/components/sections/DemoRequestForm";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Laliguras | Office & Project Inquiries",
  description:
    "Start a product conversation with Laliguras, request a SafeStep platform demo, or visit our studio office at ISMT College, Bharatpur, Chitwan, Nepal.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef]">
      {/* Hero */}
      <section className="page-hero py-24 sm:py-32">
        <Container size="xl" className="relative z-10">
          <ScrollReveal>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-8 max-w-5xl text-balance text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#101916]">
              Let’s make the next thing <span className="display-serif text-[#9b1730] italic">matter.</span>
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 sm:py-28 lg:py-32">
        <Container size="xl">
          <div className="grid gap-14 lg:grid-cols-[.42fr_.58fr] lg:gap-20">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <p className="max-w-md text-base leading-8 text-[#52635b]">
                  Tell us about the problem, the people it affects, and where you want to go. You do not need a polished brief to begin.
                </p>
                <div className="mt-10 border-y border-black/15 py-6 space-y-2">
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="flex items-center gap-3 py-2 text-sm font-semibold text-[#101916] transition-colors hover:text-[#9b1730]"
                  >
                    <Mail className="h-4 w-4 text-[#9b1730]" strokeWidth={1.75} />
                    {COMPANY_INFO.contact.email}
                  </a>
                  <a
                    href={COMPANY_INFO.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 py-2 text-sm text-[#52635b] transition-colors hover:text-[#101916]"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-[#9b1730] mt-0.5" strokeWidth={1.75} />
                    <span>
                      {COMPANY_INFO.contact.location}
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#9b1730] ml-2">
                        View Map <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
                      </span>
                    </span>
                  </a>
                </div>
                <p className="mt-7 text-xs leading-6 text-[#77827d]">
                  The online form confirms delivery immediately when the Resend email service is configured. If you prefer direct correspondence, reach out via our studio email.
                </p>
              </div>
            </ScrollReveal>
            <div id="demo-form">
              <ScrollReveal direction="left" delay={100}>
                <DemoRequestForm />
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Office Location & Interactive Map Section */}
      <section id="office-location" className="border-t border-black/15 bg-[#eae8e1] py-24 sm:py-32">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-[.42fr_.58fr] lg:gap-16 lg:items-start">
            <ScrollReveal>
              <div>
                <span className="eyebrow">Studio Headquarters</span>
                <h2 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#101916] sm:text-4xl lg:text-5xl">
                  Our Office in <span className="display-serif text-[#9b1730] italic">Bharatpur.</span>
                </h2>
                <p className="mt-6 text-sm leading-7 text-[#52635b]">
                  Laliguras operates from ISMT College in Bharatpur, Chitwan. We design, architect, and engineer digital products and enterprise platforms from the heart of central Nepal.
                </p>

                <div className="mt-10 space-y-6 border-y border-black/15 py-8">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#9b1730]/10 text-[#9b1730]">
                      <MapPin className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#77827d]">Address</p>
                      <p className="mt-1 text-base font-semibold text-[#101916]">ISMT College</p>
                      <p className="text-sm text-[#52635b]">Bharatpur-12, Chitwan, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#102a22]/10 text-[#102a22]">
                      <Clock className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#77827d]">Working Hours</p>
                      <p className="mt-1 text-sm font-semibold text-[#101916]">{COMPANY_INFO.contact.hours}</p>
                      <p className="text-xs text-[#77827d]">Meetings & consultations by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#9b1730]/10 text-[#9b1730]">
                      <Navigation className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#77827d]">Region & Access</p>
                      <p className="mt-1 text-sm text-[#52635b]">
                        Conveniently accessible along Bypass Road / Bharatpur central hub with ample campus parking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={COMPANY_INFO.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-[#9b1730] px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white transition-colors hover:bg-[#101916]"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="inline-flex items-center gap-2 border border-black/20 bg-white/60 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#101916] transition-colors hover:bg-white"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#9b1730]" strokeWidth={2} />
                    Email the Studio
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Interactive Map Embed */}
            <ScrollReveal direction="left" delay={120}>
              <div className="relative overflow-hidden rounded-2xl border border-black/15 bg-white p-2 shadow-xl shadow-black/5 sm:p-3">
                <div className="mb-3 flex items-center justify-between px-2 pt-1 text-xs text-[#52635b]">
                  <span className="flex items-center gap-2 font-semibold text-[#101916]">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Laliguras Studio Base
                  </span>
                  <span className="text-[11px] text-[#77827d]">ISMT College, Bharatpur</span>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#e2e0d8] sm:aspect-[16/11]">
                  <iframe
                    title="Laliguras Studio Location - ISMT College, Bharatpur-12, Chitwan, Nepal"
                    src={COMPANY_INFO.contact.mapEmbedUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-2 pb-1 text-[11px] text-[#77827d]">
                  <span>Bharatpur-12, Chitwan, Bagmati Province, Nepal</span>
                  <a
                    href={COMPANY_INFO.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#9b1730] hover:underline"
                  >
                    Directions →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
