import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import HbA1cSection from "@/components/programs/HbA1cSection";
import ProgramHero from "@/components/programs/shared/ProgramHero";
import UnderstandingDiabetes from "@/components/programs/UnderstandingDiabetes";
import ProgramBenefits from "@/components/programs/shared/ProgramBenefits";
import ProgramFAQ from "@/components/programs/shared/ProgramFAQ";
import ProgramCTA from "@/components/programs/shared/ProgramCTA";

import diabetes from "@/data/programs/diabetes";

export default function DiabetesPage() {
  return (
    <>
      <Navbar />

      <ProgramHero data={diabetes} />

      <UnderstandingDiabetes />

      <HbA1cSection />

      <ProgramBenefits data={diabetes} />

      <ProgramFAQ data={diabetes} />

      <ProgramCTA data={diabetes} />

      <Footer />
    </>
  );
}