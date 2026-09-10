"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Card";

export const StudioHero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (!imageRef.current) return;
      const offset = Math.min(window.scrollY * 0.14, 90);
      imageRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.055)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="grain mountain-divider relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#08120f] text-white sm:min-h-[calc(100svh-5rem)]">
      <div
        ref={imageRef}
        aria-hidden="true"
        className="absolute -inset-x-4 -top-10 bottom-0 will-change-transform"
        style={{
          backgroundImage: "url('/brand/laliguras-himalaya-hero.webp')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transform: "scale(1.055)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,14,11,.94)_0%,rgba(5,14,11,.79)_36%,rgba(5,14,11,.25)_67%,rgba(5,14,11,.1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,14,11,.8)_0%,transparent_45%,rgba(5,14,11,.2)_100%)]" />

      <Container size="xl" className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-between pb-24 pt-16 sm:min-h-[calc(100svh-5rem)] sm:pb-28 sm:pt-24 lg:pt-28">
        <div className="max-w-4xl">
          <div className="hero-rise mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75" style={{ animationDelay: "90ms" }}>
            <span className="petal-mark petal-drift" aria-hidden="true" />
            <span>Independent technology studio · Nepal</span>
          </div>

          <h1 className="hero-rise max-w-[880px] text-balance text-[clamp(3.5rem,9vw,8.3rem)] font-semibold leading-[0.86] tracking-[-0.075em]" style={{ animationDelay: "170ms" }}>
            Built with the
            <span className="display-serif block py-2 text-[#f3c7cf] italic">resolve of the Himalayas.</span>
          </h1>

          <div className="hero-rise mt-8 grid max-w-3xl gap-7 border-t border-white/25 pt-6 sm:grid-cols-[1fr_auto] sm:items-end" style={{ animationDelay: "310ms" }}>
            <p className="max-w-xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
              Laliguras designs and engineers thoughtful digital products, enterprise platforms, and interactive experiences from Nepal for organizations with ambitious problems to solve.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="group inline-flex min-h-12 items-center gap-2 bg-[#a91836] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#c02243]">
                Explore our work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center border border-white/35 bg-black/10 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#101916]">
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-rise mt-12 flex items-end justify-between border-t border-white/18 pt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55" style={{ animationDelay: "470ms" }}>
          <span>Chitwan · Nepal</span>
          <Link href="#studio-intro" className="hidden items-center gap-2 transition-colors hover:text-white sm:inline-flex">
            Discover Laliguras <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.75} />
          </Link>
          <span>Design · Engineering</span>
        </div>
      </Container>
    </section>
  );
};
