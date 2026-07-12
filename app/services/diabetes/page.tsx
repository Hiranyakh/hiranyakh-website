import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

import ProgramTemplate from "@/components/programs/ProgramTemplate";

import diabetes from "@/data/programs/diabetes";

export default function DiabetesPage() {
  return (
    <>
      <Navbar />
      <ProgramTemplate data={diabetes} />
      <Footer />
    </>
  );
}