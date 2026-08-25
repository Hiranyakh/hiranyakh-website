import ProgramHero from "./ProgramHero";
import ProgramOverview from "./ProgramOverview";
import ProgramBenefits from "./ProgramBenefits";
import ProgramMethod from "./ProgramMethod";
import ProgramStats from "./ProgramStats";
import ProgramFAQ from "./ProgramFAQ";
import ProgramCTA from "./ProgramCTA";
import AuthoritySection from "./AuthoritySection";
import TransformationStory from "../TransformationStory";
import WhyChooseSection from "../WhyChooseSection";

import InfoSection from "./InfoSection";
import SymptomsSection from "./SymptomsSection";
import FoodGuide from "./FoodGuide";
import IdealForSection from "./IdealForSection";

import type { ProgramData } from "@/data/programs/types";

interface ProgramTemplateProps {
  data: ProgramData;
}

export default function ProgramTemplate({
  data,
}: ProgramTemplateProps) {
  return (
    <>
      {/* Hero */}
      <ProgramHero data={data} />

      {/* Weight Loss Transformation Story */}
      {data.transformation && (
        <TransformationStory data={data} />
      )}

      {/* Who is this Program For? */}
      {data.idealFor && (
        <IdealForSection data={data.idealFor} />
      )}

      {/* Educational Information */}
      {data.infoSection && (
        <InfoSection data={data.infoSection} />
      )}

      {/* Common Symptoms */}
      {data.symptoms && (
        <SymptomsSection data={data.symptoms} />
      )}

      {/* Foods */}
      {data.foodGuide && (
        <FoodGuide data={data.foodGuide} />
      )}

      {/* Trust Section */}
      <AuthoritySection />

      {/* Program Overview */}
      <ProgramOverview data={data} />

      {/* Benefits */}
      <ProgramBenefits data={data} />

      {/* Method */}
      <ProgramMethod data={data} />

      {/* Statistics */}
      <ProgramStats data={data} />

      {/* FAQ */}
      <ProgramFAQ data={data} />

      {/* CTA */}
      <ProgramCTA data={data} />
    </>
  );
}