import React from "react";
import Link from "next/link";
import { LaligurasLogo } from "@/components/ui/LaligurasLogo";
import { Container } from "@/components/ui/Card";
import { COMPANY_INFO } from "@/data/company";
import { COURSES } from "@/data/courses";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2D24] text-white border-t border-[#1E4639]">
      <Container size="xl">
        {/* Main Footer Grid */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <LaligurasLogo variant="dark" size="md" />
            <p className="text-sm text-[#C4D6CD] leading-relaxed max-w-sm">
              Laliguras transforms workplace safety into an engaging, life-saving habit. 
              Our SafeStep platform combines 360° hazard simulations, accredited courseware, 
              and verifiable compliance tracking.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-[#A8BFB5] bg-[#163E32] px-3 py-2 rounded-lg border border-[#215645] max-w-fit">
              <ShieldCheck className="w-4 h-4 text-[#E63952]" />
              <span>Rooted in Resilience • Dedicated to Safety</span>
            </div>
          </div>

          {/* Column 2: Platform & Ecosystem */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#A8BFB5]">
              SafeStep Platform
            </p>
            <ul className="space-y-2.5 text-sm text-[#E2ECE7]">
              <li>
                <Link href="/platform" className="hover:text-white transition-colors">
                  Overview & Capabilities
                </Link>
              </li>
              <li>
                <Link href="/platform#interactive-simulation" className="hover:text-white transition-colors">
                  360° Hazard Scenarios
                </Link>
              </li>
              <li>
                <Link href="/platform#video-learning" className="hover:text-white transition-colors">
                  Interactive Video Lessons
                </Link>
              </li>
              <li>
                <Link href="/platform#assessments" className="hover:text-white transition-colors">
                  Knowledge Assessments
                </Link>
              </li>
              <li>
                <Link href="/platform#certifications" className="hover:text-white transition-colors">
                  Verifiable Certificates
                </Link>
              </li>
              <li>
                <Link href="/platform#enterprise" className="hover:text-white transition-colors">
                  Multi-Tenant White Label
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Training Modules */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#A8BFB5]">
              Training Modules
            </p>
            <ul className="space-y-2.5 text-sm text-[#E2ECE7]">
              {COURSES.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/training#${course.slug}`}
                    className="hover:text-white transition-colors line-clamp-1"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/training"
                  className="text-[#F5C7CE] hover:underline font-medium inline-block text-xs mt-1"
                >
                  View All Modules →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations */}
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#A8BFB5]">
              Contact & Hours
            </p>
            <ul className="space-y-3 text-sm text-[#E2ECE7]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E63952] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E63952] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:underline text-white"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E63952] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:underline text-white"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#A8BFB5]">
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Configurable Socials */}
        <div className="py-8 border-t border-[#1E4639] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8BFB5]">
          <p>© 2026 Laliguras. All rights reserved. Built for safer, stronger workplaces.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-3 pl-3 border-l border-[#215645]">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8BFB5] hover:text-white p-1 rounded transition-colors"
                aria-label="Laliguras LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.46 1.46 0 0 0-1.45-1.45 1.48 1.48 0 0 0-1.48 1.45c0 .8.65 1.45 1.48 1.45m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8BFB5] hover:text-white p-1 rounded transition-colors"
                aria-label="Laliguras X Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
