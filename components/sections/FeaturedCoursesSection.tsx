import React from "react";
import Link from "next/link";
import { Container, Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { COURSES } from "@/data/courses";
import { formatDuration } from "@/lib/utils";
import { Clock, BookOpen, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";

export const FeaturedCoursesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E1E7E3]" id="courses">
      <Container size="xl">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-2">
            <Badge variant="forest" size="sm">
              Accredited Curriculum
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1914] tracking-tight">
              Essential Health & Safety Modules
            </h2>
            <p className="text-base text-[#3D4F47] leading-relaxed">
              Standardized, practical courseware built in accordance with modern occupational safety standards. Every module includes video demonstrations, interactive hazard checks, and verifiable certifications.
            </p>
          </div>

          <Button
            href="/training"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Browse Full Catalog
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COURSES.map((course) => {
            const isAvailable = course.status === "available";

            return (
              <Card
                key={course.id}
                hoverEffect
                className="flex flex-col justify-between border-[#E1E7E3] hover:border-[#9E1A2F]/40"
              >
                <div className="p-6 space-y-4">
                  {/* Card Header Tags */}
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

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0A1914] leading-snug group-hover:text-[#9E1A2F] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-[#3D4F47] leading-relaxed line-clamp-3">
                      {course.shortDescription}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="pt-2 border-t border-[#F1F5F2] space-y-1.5">
                    {course.keyTopics.slice(0, 2).map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#2E4038]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0E6245] shrink-0" />
                        <span className="line-clamp-1">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Metrics & Action */}
                <div className="p-6 pt-4 bg-[#F8FAF8] border-t border-[#E1E7E3] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs text-[#52665C]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {formatDuration(course.durationMinutes)}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <BookOpen className="w-3.5 h-3.5" />
                      {course.lessonsCount} lessons
                    </span>
                  </div>

                  {isAvailable ? (
                    <Link
                      href={`/training#${course.slug}`}
                      className="text-xs font-bold text-[#9E1A2F] hover:text-[#831526] inline-flex items-center gap-1 group/link"
                    >
                      <span>Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <span className="text-xs text-[#64766E] font-medium">
                      In Development
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#EBF3F0] border border-[#CDE1D9] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0F2D24] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#E63952]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#0F2D24]">
                Need custom safety modules for your organization?
              </h4>
              <p className="text-xs sm:text-sm text-[#1E4639]">
                We photograph your facility, digitize company SOPs, and build bespoke 360° training scenarios.
              </p>
            </div>
          </div>
          <Button href="/contact" variant="secondary" size="md" className="shrink-0 w-full md:w-auto">
            Request Custom Curriculum
          </Button>
        </div>
      </Container>
    </section>
  );
};
