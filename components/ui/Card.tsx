import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  bordered?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, bordered = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-xl overflow-hidden transition-all duration-200",
          bordered && "border border-[#E1E7E3]",
          hoverEffect && "hover:border-[#9E1A2F]/40 hover:shadow-md hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  className,
  size = "lg",
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-8 w-full", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "default" | "subtle" | "white" | "forest";
}

export const Section: React.FC<SectionProps> = ({
  className,
  background = "default",
  children,
  ...props
}) => {
  const bgStyles = {
    default: "bg-[#F8FAF8]",
    subtle: "bg-[#F1F5F2]",
    white: "bg-white",
    forest: "bg-[#0F2D24] text-white",
  };

  return (
    <section
      className={cn("py-16 md:py-24 relative overflow-hidden", bgStyles[background], className)}
      {...props}
    >
      {children}
    </section>
  );
};
