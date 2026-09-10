import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LaligurasLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withLink?: boolean;
}

export const LaligurasLogo: React.FC<LaligurasLogoProps> = ({
  className,
  variant = "light",
  size = "md",
  withLink = true,
}) => {
  const isDark = variant === "dark";

  const sizeDimensions = {
    sm: { height: 28, iconSize: 24, fontSize: "text-lg" },
    md: { height: 36, iconSize: 32, fontSize: "text-xl sm:text-2xl" },
    lg: { height: 48, iconSize: 42, fontSize: "text-2xl sm:text-3xl" },
  };

  const currentSize = sizeDimensions[size];

  const content = (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      {/* Rhododendron Flower Vector Mark */}
      <svg
        width={currentSize.iconSize}
        height={currentSize.iconSize}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Deep green stem & leaf base */}
        <path
          d="M18 29V34M18 29C14 28 10 24 9 20C12 21 16 23 18 29ZM18 29C22 28 26 24 27 20C24 21 20 23 18 29Z"
          fill="#0F2D24"
          stroke="#0F2D24"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Rhododendron Crimson cluster petals */}
        {/* Center top petal */}
        <path
          d="M18 4C15.5 8 15.5 13 18 16C20.5 13 20.5 8 18 4Z"
          fill="#9E1A2F"
        />
        {/* Left top petal */}
        <path
          d="M13 7.5C11 11.5 12.5 16 16 18C15 14.5 15.5 10 13 7.5Z"
          fill="#831526"
        />
        {/* Right top petal */}
        <path
          d="M23 7.5C25 11.5 23.5 16 20 18C21 14.5 20.5 10 23 7.5Z"
          fill="#831526"
        />
        {/* Left mid petal */}
        <path
          d="M8.5 14C8 18.5 11.5 22 15.5 22C13.5 19 12 15.5 8.5 14Z"
          fill="#B12239"
        />
        {/* Right mid petal */}
        <path
          d="M27.5 14C28 18.5 24.5 22 20.5 22C22.5 19 24 15.5 27.5 14Z"
          fill="#B12239"
        />
        {/* Central vibrant blossom core */}
        <circle cx="18" cy="18" r="3.2" fill="#E63952" />
        <circle cx="18" cy="18" r="1.5" fill="#FFE3E7" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className={cn(
            "font-extrabold tracking-tight font-sans transition-colors leading-none",
            currentSize.fontSize,
            isDark
              ? "text-white group-hover:text-[#F5C7CE]"
              : "text-[#0A1914] group-hover:text-[#9E1A2F]"
          )}
        >
          Laliguras
        </span>
        <span
          className={cn(
            "text-[9px] uppercase tracking-[0.2em] font-semibold mt-0.5",
            isDark ? "text-[#A8BFB5]" : "text-[#52665C]"
          )}
        >
          Safety Training
        </span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" className="inline-block focus-visible:outline-2 focus-visible:outline-[#9E1A2F] rounded-md">
        {content}
      </Link>
    );
  }

  return content;
};
