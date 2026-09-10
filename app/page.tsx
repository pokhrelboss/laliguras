import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropsRibbon } from "@/components/sections/ValuePropsRibbon";
import { InteractiveHazardPreview } from "@/components/sections/InteractiveHazardPreview";
import { FeaturedCoursesSection } from "@/components/sections/FeaturedCoursesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropsRibbon />
      <InteractiveHazardPreview />
      <FeaturedCoursesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CtaBanner />
    </>
  );
}
