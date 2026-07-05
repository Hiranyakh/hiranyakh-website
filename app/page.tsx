import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import JourneySection from "@/components/JourneySection";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <JourneySection />
      <About />
    </>
  );
}