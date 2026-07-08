import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import TimelineSection from "@/components/about/TimelineSection";
import QualificationsSection from "@/components/about/QualificationsSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import PromiseSection from "@/components/about/PromiseSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />

      <StorySection />

      <TimelineSection />

      <QualificationsSection />

      <PhilosophySection />

      <PromiseSection />

      <CTASection />
       <Footer />
    </>
  );
}