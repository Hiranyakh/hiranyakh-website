import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Hiranyakh's Wellness.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
