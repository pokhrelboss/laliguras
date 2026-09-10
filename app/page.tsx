import { StudioHero } from "@/components/sections/StudioHero";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { SafeStepFeaturedBanner } from "@/components/sections/SafeStepFeaturedBanner";
import { WhyLaligurasSection } from "@/components/sections/WhyLaligurasSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { StudioCtaBanner } from "@/components/sections/StudioCtaBanner";

export default function HomePage() {
  return (
    <>
      <StudioHero />
      <WhatWeDoSection />
      <ServicesOverview />
      <FeaturedProjectsSection />
      <SafeStepFeaturedBanner />
      <WhyLaligurasSection />
      <TeamSection />
      <StudioCtaBanner />
    </>
  );
}

