"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LaligurasLogo } from "@/components/ui/LaligurasLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Card";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Platform", href: "/platform" },
  { name: "Training", href: "/training" },
  { name: "Team", href: "/team" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E1E7E3]"
          : "bg-[#F8FAF8]/90 backdrop-blur-xs border-b border-transparent"
      )}
    >
      <Container size="xl">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex shrink-0 items-center">
            <LaligurasLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors relative",
                    isActive
                      ? "text-[#9E1A2F] font-semibold"
                      : "text-[#2E4038] hover:text-[#0A1914] hover:bg-[#F1F5F2]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#9E1A2F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs px-3"
            >
              Demo
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2E4038] hover:text-[#0A1914] hover:bg-[#F1F5F2] focus-visible:outline-2 focus-visible:outline-[#9E1A2F]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[64px] sm:top-[80px] bottom-0 z-40 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col justify-between border-t border-[#E1E7E3] animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64766E] mb-3">
              Navigation
            </p>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-3 px-3.5 rounded-lg text-base font-medium transition-colors",
                    isActive
                      ? "bg-[#FDF2F4] text-[#9E1A2F] font-semibold"
                      : "text-[#0A1914] hover:bg-[#F1F5F2]"
                  )}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Footer Action */}
          <div className="p-6 bg-[#F8FAF8] border-t border-[#E1E7E3] space-y-3">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Request a Demo
            </Button>
            <p className="text-xs text-center text-[#52665C]">
              Need assistance? Email{" "}
              <a href="mailto:info@laliguras.com" className="text-[#9E1A2F] underline">
                info@laliguras.com
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
