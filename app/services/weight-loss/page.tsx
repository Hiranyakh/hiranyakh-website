import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

import ProgramTemplate from "@/components/programs/shared/ProgramTemplate";

import weightLoss from "@/data/programs/weight-loss";

export default function WeightLossPage() {
  return (
    <>
      <Navbar />

      <ProgramTemplate data={weightLoss} />

      <Footer />
    </>
  );
}