import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "crimson" | "primary" | "forest" | "neutral" | "outline" | "warning" | "success";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}) => {
  const variantStyles = {
    default: "bg-[#F1F5F2] text-[#2E4038] border border-[#E1E7E3]",
    crimson: "bg-[#FDF2F4] text-[#9E1A2F] border border-[#F5C7CE]",
    primary: "bg-[#FDF2F4] text-[#9E1A2F] border border-[#F5C7CE]",
    forest: "bg-[#EBF3F0] text-[#0F2D24] border border-[#CDE1D9]",
    neutral: "bg-white text-[#3D4F47] border border-[#E1E7E3] shadow-2xs",
    outline: "bg-white text-[#3D4F47] border border-[#E1E7E3] shadow-2xs",
    warning: "bg-[#FFF9EB] text-[#8C5D00] border border-[#FEE199]",
    success: "bg-[#EBF9F1] text-[#0E6245] border border-[#B4E5CE]",
  };


  const sizeStyles = {
    sm: "text-[11px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider",
    md: "text-xs font-semibold px-3 py-1 rounded-full",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors font-medium select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
