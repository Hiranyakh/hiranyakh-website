import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

import ServiceHero from "@/components/services/ServiceHero";
import StatsSection from "@/components/shared/StatsSection";
import TransformationStory from "@/components/services/TransformationStory";
import BenefitGrid from "@/components/services/BenefitGrid";
import WhyDifferent from "@/components/services/WhyDifferent";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import WhoItsFor from "@/components/services/WhoItsFor";
import WhatYouReceive from "@/components/services/WhatYouReceive";
import FAQSection from "@/components/services/FAQSection";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function WeightLossPage() {
  return (
    <>
      <Navbar />

      <ServiceHero
        badge="THE HIRANYAKH TRANSFORMATION PROGRAM™"
        title="You've Tried Diets. It's Time to Transform Your Health."
        description="Evidence-based clinical nutrition, personalised guidance and sustainable lifestyle changes to help you achieve lasting health."
      />

      <StatsSection />

      <TransformationStory />

      <BenefitGrid />

      <WhyDifferent />

      <ProcessTimeline />

      <WhoItsFor />

      <WhatYouReceive />

      <FAQSection />

      <ServiceCTA />

      <Footer />
    </>
  );
}