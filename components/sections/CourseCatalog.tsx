"use client";

import React, { useState } from "react";
import { Course, CourseCategory } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDuration } from "@/lib/utils";
import {
  Clock,
  BookOpen,
  Search,
  CheckCircle2,
  Users,
  Target,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CourseCatalogProps {
  initialCourses: Course[];
}

const CATEGORIES: ("All" | CourseCategory)[] = [
  "All",
  "Core Safety",
  "Compliance",
  "Industrial",
  "Workplace Health",
  "Emergency",
];

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ initialCourses }) => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | CourseCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const filteredCourses = initialCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const toggleCourseDetails = (id: string) => {
    setExpandedCourseId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-8">
      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#E1E7E3]">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer",
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

        {/* Search Bar */}
        <div className="relative w-full md:w-72 shrink-0">
          <input
            type="text"
            placeholder="Search modules, topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-[#CCD6CE] bg-white text-[#0A1914] placeholder:text-[#64766E] focus:outline-none focus:border-[#9E1A2F] focus:ring-2 focus:ring-[#9E1A2F]/15"
          />
          <Search className="w-4 h-4 text-[#64766E] absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#52665C]">
        <span>
          Showing <strong>{filteredCourses.length}</strong> of {initialCourses.length} modules
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-[#9E1A2F] hover:underline"
          >
            Clear search filter
          </button>
        )}
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => {
          const isExpanded = expandedCourseId === course.id;
          const isAvailable = course.status === "available";

          return (
            <Card
              key={course.id}
              id={course.slug}
              hoverEffect
              className={cn(
                "flex flex-col justify-between border-[#E1E7E3] transition-all",
                isExpanded && "ring-2 ring-[#9E1A2F]/30"
              )}
            >
              <div className="p-6 space-y-4">
                {/* Badges row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E1A2F]">
                    {course.category}
                  </span>
                  <Badge
                    variant={isAvailable ? "success" : "default"}
                    size="sm"
                  >
                    {isAvailable ? "Available Now" : "Coming Soon"}
                  </Badge>
                </div>

                {/* Course Title & Short Summary */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0A1914] leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[#3D4F47] leading-relaxed line-clamp-3">
                    {course.shortDescription}
                  </p>
                </div>

                {/* Duration & Lessons specs */}
                <div className="flex items-center gap-4 text-xs text-[#52665C] pt-2 border-t border-[#F1F5F2]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#0F2D24]" />
                    {formatDuration(course.durationMinutes)}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-[#0F2D24]" />
                    {course.lessonsCount} lessons
                  </span>
                  {course.has360Scenario && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-[#0E6245] bg-[#EBF9F1] px-2 py-0.5 rounded">
                      <Sparkles className="w-3 h-3" />
                      360° Scenario
                    </span>
                  )}
                </div>

                {/* Expandable Syllabus Details */}
                {isExpanded && (
                  <div className="pt-4 border-t border-[#E1E7E3] space-y-4 animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1914] mb-2 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[#9E1A2F]" />
                        Learning Objectives
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#3D4F47]">
                        {course.learningObjectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6245] shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1914] mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#0F2D24]" />
                        Target Audience
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {course.targetAudience.map((aud, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#F1F5F2] text-[#2E4038] px-2 py-0.5 rounded-md"
                          >
                            {aud}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-4 bg-[#F8FAF8] border-t border-[#E1E7E3] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => toggleCourseDetails(course.id)}
                  className="text-xs font-semibold text-[#2E4038] hover:text-[#0A1914] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{isExpanded ? "Hide Details" : "View Syllabus"}</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>

                <Button
                  href="/contact"
                  variant={isAvailable ? "primary" : "outline"}
                  size="sm"
                  className="text-xs"
                >
                  {isAvailable ? "Enroll Team" : "Pre-register"}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-[#E1E7E3] space-y-3">
          <p className="text-base font-semibold text-[#0A1914]">No training modules found</p>
          <p className="text-xs text-[#52665C]">
            Try clearing your search query or selecting another category filter.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
          >
            Reset All Filters
          </Button>
        </div>
      )}
    </div>
  );
};
