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
    innerContent = (
      <div className={cn("inline-flex flex-col select-none transition-transform duration-300 hover:scale-[1.015]", className)}>
        <Image
          src={isDark ? "/logo/laliguras-horizontal-light.png" : "/logo/laliguras-horizontal.png"}
          alt="Laliguras"
          width={848}
          height={259}
          priority={priority}
          className={cn(
            "w-auto object-contain",
            size === "sm" && "h-9 sm:h-10",
            size === "md" && "h-11 sm:h-12",
            size === "lg" && "h-14 sm:h-16",
            size === "xl" && "h-18 sm:h-20"
          )}
        />
        {subtitle && (
          <span className={cn("mt-0.5 text-[8px] font-semibold uppercase tracking-[0.2em]", isDark ? "text-white/60" : "text-[#52665C]")}>{subtitle}</span>
        )}
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
