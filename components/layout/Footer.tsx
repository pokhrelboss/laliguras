import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { LaligurasLogo } from "@/components/ui/LaligurasLogo";
import { Container } from "@/components/ui/Card";
import { COMPANY_INFO } from "@/data/company";

const STUDIO_LINKS = [
  ["Studio", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Team", "/team"],
] as const;

const PROJECT_LINKS = [
  ["SafeStep case study", "/projects/safestep"],
  ["SafeStep platform", "/platform"],
  ["Training catalogue", "/training"],
  ["Questions", "/faq"],
] as const;

export const Footer: React.FC = () => (
  <footer className="relative overflow-hidden bg-[#0b1713] text-white">
    <div className="absolute inset-x-0 top-0 h-44 bg-himalaya-pattern opacity-25" aria-hidden="true" />
    <Container size="xl" className="relative">
      <div className="grid gap-14 border-b border-white/15 py-16 sm:py-20 lg:grid-cols-[1.4fr_.6fr_.6fr] lg:gap-20 lg:py-24">
        <div>
          <LaligurasLogo variant="dark" size="md" />
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/58">An independent Nepalese technology studio designing and engineering thoughtful digital products, enterprise systems, and interactive experiences.</p>
          <a href={`mailto:${COMPANY_INFO.contact.email}`} className="group mt-8 inline-flex items-center gap-2 border-b border-white/35 pb-1 text-sm font-semibold text-white transition-colors hover:border-[#ef93a5] hover:text-[#efb3bf]">
            {COMPANY_INFO.contact.email}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
          </a>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef93a5]">Laliguras</p>
          <ul className="space-y-3 text-sm text-white/65">
            {STUDIO_LINKS.map(([label, href]) => <li key={href}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef93a5]">SafeStep</p>
          <ul className="space-y-3 text-sm text-white/65">
            {PROJECT_LINKS.map(([label, href]) => <li key={href}><Link href={href} className="transition-colors hover:text-white">{label}</Link></li>)}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-5 py-7 text-[11px] text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Laliguras. Built in Nepal, for everywhere.</p>
        <div className="flex flex-wrap items-center gap-5">
          <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#ef93a5]" strokeWidth={1.75} /> {COMPANY_INFO.contact.location}</span>
          <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#ef93a5]" strokeWidth={1.75} /> {COMPANY_INFO.contact.email}</span>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
        </div>
      </div>
    </Container>
  </footer>
);
