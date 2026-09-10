import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "subtle";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#9E1A2F] text-white hover:bg-[#831526] active:bg-[#6E111F] shadow-sm hover:shadow focus-visible:outline-[#9E1A2F]",
      secondary:
        "bg-[#0F2D24] text-white hover:bg-[#1E4639] active:bg-[#091C16] shadow-sm focus-visible:outline-[#0F2D24]",
      outline:
        "border border-[#CCD6CE] bg-white text-[#0A1914] hover:bg-[#F1F5F2] hover:border-[#9E1A2F] active:bg-[#E1E7E3] focus-visible:outline-[#9E1A2F]",
      ghost:
        "text-[#2E4038] hover:bg-[#F1F5F2] hover:text-[#0A1914] active:bg-[#E1E7E3] focus-visible:outline-[#9E1A2F]",
      subtle:
        "bg-[#FDF2F4] text-[#9E1A2F] border border-[#F5C7CE] hover:bg-[#F9E5E8] active:bg-[#F5C7CE] focus-visible:outline-[#9E1A2F]",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 min-h-[34px]",
      md: "text-sm px-4 py-2.5 gap-2 min-h-[42px]",
      lg: "text-base px-6 py-3.5 gap-2.5 min-h-[48px]",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
          aria-disabled={disabled || isLoading}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
