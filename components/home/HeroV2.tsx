import Image from "next/image";
import FloatingCard from "./FloatingCard";
import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import TrustBadge from "./TrustBadge";
export default function HeroV2() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="mx-auto flex min-h-[95vh] max-w-7xl flex-col items-center justify-center gap-14 px-6 py-20 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1">

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold tracking-wide text-emerald-700">
            PERSONALISED CLINICAL NUTRITION
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Transform Your Health
            <br />
            <span className="text-[#0F4C81]">
              with Science,
            </span>
            <br />
            Not Guesswork.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600">
            Evidence-based clinical nutrition and personalised coaching
            designed to help you lose weight, manage diabetes,
            improve gut health and build healthy habits that last.
          </p>

          <HeroButtons />

          <div className="mt-12 space-y-4">

            <TrustBadge text="17 kg Personal Transformation" />

            <TrustBadge text="Evidence-Based Nutrition" />

            <TrustBadge text="Personalised Coaching" />

          </div>

        </div>

        {/* RIGHT */}

<div className="relative flex flex-1 items-center justify-center">

  {/* Background Glows */}

  <div className="absolute h-[620px] w-[620px] rounded-full bg-sky-300/25 blur-[150px]" />

  <div className="absolute h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-[120px]" />
  <FloatingCard
  icon="trophy"
  title="17 kg"
  subtitle="Personal Transformation"
  className="-left-16 top-24 hidden lg:block z-20"
/>

<FloatingCard
  icon="stethoscope"
  title="Clinical"
  subtitle="Evidence-Based Nutrition"
  className="-right-16 top-36 hidden lg:block z-20"
/>

<FloatingCard
  icon="heart"
  title="1:1 Coaching"
  subtitle="Personalised Support"
  className="-left-12 bottom-24 hidden lg:block z-20"
/>
  <Image
    src="/images/hero/hiranyakh.png"
    alt="Hiranyakh Chatterjee"
    width={820}
    height={980}
    priority
    className="relative z-10 h-auto w-full max-w-2xl drop-shadow-[0_40px_80px_rgba(15,76,129,0.25)]"
  />
    </div>
    </div>
    </section>
  );
}