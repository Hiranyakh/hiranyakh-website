import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Book a Consultation",
  description: "Book a 1:1 Nutrition Consultation with Hiranyakh Chatterjee.",
};

const bookingUrl = "https://cal.com/hiranyak-chatterjee-iajpeu/1-1-nutrition-consultation";

export default function BookConsultationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">1:1 NUTRITION CONSULTATION</span>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#081F36] sm:text-6xl">Personalised nutrition guidance, <span className="text-[#0F4C81]">one conversation at a time.</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">A 45-minute one-on-one consultation to understand your nutrition goals, lifestyle, dietary habits and health priorities, and discuss an appropriate nutrition strategy.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">45 minutes</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Online</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">₹1,000</span>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_80px_rgba(15,76,129,.10)]">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 sm:px-8">
              <div><h2 className="font-bold text-[#081F36]">Choose your preferred time</h2><p className="mt-1 text-sm text-slate-500">You&apos;ll receive confirmation and meeting details after booking.</p></div>
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="hidden rounded-full border border-[#0F4C81] px-5 py-2 text-sm font-semibold text-[#0F4C81] sm:inline-flex">Open in Cal.com</a>
            </div>
            <iframe title="Book a 1:1 Nutrition Consultation" src={`${bookingUrl}?embed=true`} className="h-[900px] w-full border-0" />
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-slate-400">Consultations provide nutrition education and personalised guidance and are not a substitute for emergency medical care. Please share relevant information accurately during your consultation.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
