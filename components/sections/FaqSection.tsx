"use client";

import React, { useState } from "react";
import { FAQItem } from "@/types";
import { Accordion } from "@/components/ui/Accordion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqSectionProps {
  initialFaqs: FAQItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ initialFaqs }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Certification", "Technology", "Enterprise"];

  const filteredFaqs = initialFaqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const accordionItems = filteredFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: <p className="leading-relaxed text-[#3D4F47]">{faq.answer}</p>,
  }));

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Category Pills and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer",
                  isSelected
                    ? "bg-[#9E1A2F] text-white shadow-xs"
                    : "bg-white border border-[#CCD6CE] text-[#3D4F47] hover:bg-[#F1F5F2] hover:text-[#0A1914]"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64 shrink-0">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-[#CCD6CE] bg-white text-[#0A1914] placeholder:text-[#64766E] focus:outline-none focus:border-[#9E1A2F] focus:ring-2 focus:ring-[#9E1A2F]/15"
          />
          <Search className="w-3.5 h-3.5 text-[#64766E] absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Accordion List */}
      {accordionItems.length > 0 ? (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E1E7E3] shadow-xs">
          <Accordion items={accordionItems} allowMultiple={false} defaultOpenId="faq-1" />
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border border-[#E1E7E3]">
          <p className="text-sm font-semibold text-[#0A1914]">No matching questions found</p>
          <p className="text-xs text-[#52665C] mt-1">
            Try searching with different keywords or reset category filters.
          </p>
        </div>
      )}
    </div>
  );
};
