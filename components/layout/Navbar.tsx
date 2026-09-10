"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LaligurasLogo } from "@/components/ui/LaligurasLogo";
import { Container } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Studio", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Journal", href: "/faq" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overHero = pathname === "/" && !scrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-[background-color,border-color,box-shadow] duration-500",
      overHero
        ? "border-white/10 bg-[#08120f]/90 text-white backdrop-blur-xl"
        : "border-black/10 bg-[#f5f4ef]/92 text-[#101916] shadow-[0_10px_35px_rgba(10,25,20,.06)] backdrop-blur-xl"
    )}>
      <Container size="xl">
        <div className="flex h-16 items-center justify-between gap-5 sm:h-20">
          <LaligurasLogo size="sm" variant={overHero ? "dark" : "light"} priority />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link key={link.name} href={link.href} className={cn(
                  "relative py-2 text-[13px] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#a91836] after:transition-transform hover:after:scale-x-100",
                  overHero ? "text-white/72 hover:text-white" : "text-[#35453e] hover:text-[#101916]",
                  active && (overHero ? "text-white after:scale-x-100" : "text-[#9b1730] after:scale-x-100")
                )}>
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className={cn(
              "group hidden min-h-10 items-center gap-2 border px-4 text-xs font-semibold transition-colors sm:inline-flex",
              overHero ? "border-white/35 text-white hover:bg-white hover:text-[#101916]" : "border-[#101916]/25 text-[#101916] hover:border-[#9b1730] hover:bg-[#9b1730] hover:text-white"
            )}>
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className={cn(
              "grid h-10 w-10 place-items-center border transition-colors lg:hidden",
              overHero ? "border-white/30 hover:bg-white/10" : "border-black/15 hover:bg-black/5"
            )} aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}>
              {mobileMenuOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 h-[calc(100dvh-4rem)] overflow-y-auto bg-[#f5f4ef] text-[#101916] sm:top-20 sm:h-[calc(100dvh-5rem)] lg:hidden">
          <Container size="xl" className="flex min-h-full flex-col justify-between py-8">
            <nav className="divide-y divide-black/10" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, index) => (
                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="group flex items-center justify-between py-5 text-3xl font-semibold tracking-[-0.04em]">
                  <span><span className="mr-4 align-middle text-[10px] font-semibold tracking-[0.16em] text-[#9b1730]">0{index + 1}</span>{link.name}</span>
                  <ArrowUpRight className="h-5 w-5 text-[#9b1730] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.75} />
                </Link>
              ))}
            </nav>
            <div className="border-t border-black/15 pt-6">
              <p className="mb-4 max-w-xs text-sm leading-6 text-[#65736c]">Have an ambitious digital product in mind?</p>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="inline-flex min-h-12 items-center gap-2 bg-[#9b1730] px-5 text-sm font-semibold text-white">Start a conversation <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} /></Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
