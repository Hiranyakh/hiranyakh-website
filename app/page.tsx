import Navbar from "@/components/Navbar";
import HeroV2 from "@/components/home/HeroV2";
import TransformationSection from "@/components/home/TransformationSection";
import TrustNumbers from "@/components/home/TrustNumbers";

import TrustBar from "@/components/TrustBar";
import JourneySection from "@/components/JourneySection";

import MissionSection from "@/components/sections/MissionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EbookSection from "@/components/sections/EbookSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

import Footer from "@/components/layout/Footer";
import StorySection from "@/components/home/StorySection";
export default function Home() {
  return (
    <>
      <Navbar />

      <HeroV2 />

      <TrustNumbers />

      <TrustBar />

      <JourneySection />

      <StorySection />

      <ServicesSection />

      <MissionSection />

      <ServicesSection />

      <TransformationSection />
      <EbookSection />

      <TestimonialsSection />

      <CTASection />

      <Footer />
    </>
  );
}