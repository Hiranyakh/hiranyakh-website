import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramGrid from "@/components/programs/ProgramGrid";
import ProgramsCTA from "@/components/programs/ProgramsCTA";

export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      <ProgramsHero />

      <ProgramGrid />

      <ProgramsCTA />

      <Footer />
    </>
  );
}