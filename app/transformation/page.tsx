import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

export default function TransformationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold text-[#0F4C81]">
            Transformation
          </h1>

          <p className="mt-6 text-xl text-slate-600">
            This page is under development.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}