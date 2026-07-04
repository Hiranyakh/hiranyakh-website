import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
    </>
  );
}