import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import JourneySection from "@/components/JourneySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import MeetHiranyakh from "@/components/MeetHiranyakh";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <JourneySection />
      <WhyChooseSection />
      <MeetHiranyakh />
    </>
  );
}