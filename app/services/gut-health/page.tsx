import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

import ProgramTemplate from "@/components/programs/shared/ProgramTemplate";

import gutHealth from "@/data/programs/gut-health";

export default function GutHealthPage() {
  return (
    <>
      <Navbar />

      <ProgramTemplate data={gutHealth} />

      <Footer />
    </>
  );
}