"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId,
  className,
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-[#E1E7E3] border-y border-[#E1E7E3]", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="py-2 transition-colors">
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between py-4 text-left font-medium text-[#0A1914] transition-all hover:text-[#9E1A2F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9E1A2F] group"
              >
                <span className="text-base sm:text-lg font-semibold pr-4 leading-snug group-hover:translate-x-0.5 transition-transform duration-150">
                  {item.title}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E1E7E3] bg-[#F8FAF8] text-[#52665C] transition-transform duration-200 group-hover:border-[#9E1A2F]/30 group-hover:text-[#9E1A2F]",
                    isOpen && "rotate-180 bg-[#FDF2F4] text-[#9E1A2F] border-[#F5C7CE]"
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                isOpen ? "max-h-[800px] opacity-100 pb-5 pt-1" : "max-h-0 opacity-0"
              )}
            >
              <div className="text-sm sm:text-base text-[#3D4F47] leading-relaxed pr-6">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
