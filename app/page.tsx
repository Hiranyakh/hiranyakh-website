
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

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

import StorySection from "@/components/home/StorySection";

export const metadata: Metadata = {
  title: "Clinical Nutritionist | Hiranyakh's Wellness",
  description:
    "Consult Hiranyakh Chatterjee for personalised clinical nutrition, weight management, diabetes care, gut health, IBS, liver health, and lifestyle wellness.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clinical Nutritionist | Hiranyakh's Wellness",
    description:
      "Personalised nutrition consultation for weight management, diabetes care, gut health, and overall wellness.",
    url: "https://nutrition.hiranyakhchatterjee.com/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroV2 />

        <TrustNumbers />

        <TrustBar />

        <JourneySection />

        <StorySection />

        <ServicesSection />

        <MissionSection />

        <TransformationSection />

        <EbookSection />

        <TestimonialsSection />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
