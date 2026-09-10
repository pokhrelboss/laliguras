import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LaligurasLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  layout?: "horizontal" | "stacked" | "mark" | "original";
  withLink?: boolean;
  subtitle?: string;
  priority?: boolean;
}

export const LaligurasLogo: React.FC<LaligurasLogoProps> = ({
  className,
  variant = "light",
  size = "md",
  layout = "horizontal",
  withLink = true,
  subtitle,
  priority = false,
}) => {
  const isDark = variant === "dark";

  // Size mapping for mark and text in horizontal mode
  const markSizes = {
    sm: { height: 34, width: 54, textHeight: 18, textWidth: 57 },
    md: { height: 46, width: 73, textHeight: 24, textWidth: 76 },
    lg: { height: 56, width: 88, textHeight: 28, textWidth: 88 },
    xl: { height: 72, width: 114, textHeight: 36, textWidth: 114 },
  };

  const currentMark = markSizes[size];

  let innerContent: React.ReactNode;

  if (layout === "stacked") {
    innerContent = (
      <div className={cn("inline-flex flex-col items-center gap-1.5 select-none group", className)}>
        <Image
          src="/logo/laliguras-trimmed.png"
          alt="Laliguras"
          width={currentMark.height * 1.2}
          height={currentMark.height * 1.2}
          priority={priority}
          className="h-auto w-auto max-h-[80px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {subtitle && (
          <span
            className={cn(
              "text-[9px] uppercase tracking-[0.18em] font-semibold",
              isDark ? "text-[#A8BFB5]" : "text-[#52665C]"
            )}
          >
            {subtitle}
          </span>
        )}
      </div>
    );
  } else if (layout === "mark") {
    innerContent = (
      <div className={cn("inline-flex items-center select-none group", className)}>
        <Image
          src="/logo/laliguras-mark.png"
          alt="Laliguras"
          width={currentMark.width}
          height={currentMark.height}
          priority={priority}
          className="h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
    );
  } else if (layout === "original") {
    innerContent = (
      <div className={cn("inline-flex items-center select-none group", className)}>
        <Image
          src="/logo/laliguras.png"
          alt="Laliguras"
          width={180}
          height={120}
          priority={priority}
          className="h-auto w-auto max-h-[70px] object-contain"
        />
      </div>
    );
  } else {
    // Default: Horizontal Lockup composed with mark + wordmark
    innerContent = (
      <div
        className={cn(
          "inline-flex items-center gap-2 sm:gap-2.5 select-none group transition-transform duration-200",
          isDark && "bg-white/95 backdrop-blur-xs rounded-xl px-3 py-1.5 shadow-xs border border-white/20 hover:bg-white",
          className
        )}
      >
        {/* Emblem Mark (Letter L, blooming Rhododendron flowers & Himalayan mountains) */}
        <div className="relative shrink-0 flex items-center">
          <Image
            src="/logo/laliguras-mark.png"
            alt="Laliguras Mark"
            width={currentMark.width}
            height={currentMark.height}
            priority={priority}
            className={cn(
              "object-contain transition-transform duration-300 group-hover:scale-105",
              size === "sm" && "h-7 sm:h-8 w-auto",
              size === "md" && "h-9 sm:h-11 md:h-12 w-auto",
              size === "lg" && "h-12 sm:h-14 w-auto",
              size === "xl" && "h-16 sm:h-18 w-auto"
            )}
          />
        </div>

        {/* Wordmark with flower petal dot on 'i' and flourish */}
        <div className="flex flex-col justify-center">
          <Image
            src="/logo/laliguras-text.png"
            alt="Laliguras"
            width={currentMark.textWidth}
            height={currentMark.textHeight}
            priority={priority}
            className={cn(
              "object-contain mt-0.5",
              size === "sm" && "h-4 sm:h-[18px] w-auto",
              size === "md" && "h-5 sm:h-6 md:h-[25px] w-auto",
              size === "lg" && "h-6 sm:h-7 w-auto",
              size === "xl" && "h-8 sm:h-9 w-auto"
            )}
          />

          {subtitle && (
            <span
              className={cn(
                "text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-semibold mt-0.5",
                isDark ? "text-[#52665C]" : "text-[#52665C]"
              )}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
    );
  }

  if (withLink) {
    return (
      <Link
        href="/"
        className="inline-block focus-visible:outline-2 focus-visible:outline-[#9E1A2F] rounded-lg"
        aria-label="Laliguras Home"
      >
        {innerContent}
      </Link>
    );
  }

  return innerContent;
};
