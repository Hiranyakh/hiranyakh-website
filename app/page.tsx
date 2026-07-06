import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import JourneySection from "@/components/JourneySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import MissionSection from "@/components/sections/MissionSection";
import ServicesSection from "@/components/sections/ServicesSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <JourneySection />
      <WhyChooseSection />
      <MissionSection />
      <ServicesSection />
    </>
  );
}