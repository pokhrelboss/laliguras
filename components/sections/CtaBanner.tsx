import React from "react";
import { Container } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Mail } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#0F2D24] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#163E32] text-[#F5C7CE] text-xs font-semibold px-3 py-1 rounded-full border border-[#215645]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E63952]" />
            <span>Ready to Protect Your Team?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Make Your Workplace Safer Starting Today.
          </h2>

          <p className="text-base sm:text-lg text-[#C4D6CD] max-w-2xl mx-auto leading-relaxed">
            Schedule a personalized walkthrough of the SafeStep platform. Discover how 360° simulations and automated compliance tracking can transform safety culture in your organization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-lg"
            >
              Request a Live Demo
            </Button>
            <Button
              href="mailto:info@laliguras.com"
              variant="outline"
              size="lg"
              leftIcon={<Mail className="w-4 h-4" />}
              className="w-full sm:w-auto bg-transparent text-white border-[#215645] hover:bg-[#163E32] hover:border-[#F5C7CE]"
            >
              Contact Solutions Team
            </Button>
          </div>

          <p className="text-xs text-[#A8BFB5] pt-2">
            No obligation. We typically respond within 1 business day.
          </p>
        </div>
      </Container>
    </section>
  );
};
