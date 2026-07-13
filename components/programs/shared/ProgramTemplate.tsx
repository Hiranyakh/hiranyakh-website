import ProgramHero from "./ProgramHero";
import TransformationStory from "../TransformationStory";
import ProgramOverview from "./ProgramOverview";
import ProgramBenefits from "./ProgramBenefits";
import ProgramMethod from "./ProgramMethod";
import ProgramStats from "./ProgramStats";
import ProgramFAQ from "./ProgramFAQ";
import ProgramCTA from "./ProgramCTA";
import WhyChooseSection from "../WhyChooseSection";
import type { ProgramData } from "@/data/programs/types";

interface ProgramTemplateProps {
  data: ProgramData;
}

export default function ProgramTemplate({
  data,
}: ProgramTemplateProps) {
  return (
    <>
      <ProgramHero data={data} />
      
      <TransformationStory data={data} />

      <WhyChooseSection />

      <ProgramOverview data={data} />

      <ProgramBenefits data={data} />

      <ProgramMethod data={data} />

      <ProgramStats data={data} />

      <ProgramFAQ data={data} />

      <ProgramCTA data={data} />
    </>
  );
}