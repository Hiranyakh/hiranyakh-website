import Image from "next/image";

import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import TrustBadge from "./TrustBadge";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <HeroBackground />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left */}

        <div className="flex-1">

          <span className="mb-6 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            PERSONALISED CLINICAL NUTRITION
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Helping You
            <br />
            Transform Your Health.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Evidence-based Clinical Nutrition and personalised coaching
            to help you lose weight, manage diabetes, improve gut health
            and build lifelong healthy habits.
          </p>

          <HeroButtons />

          <div className="mt-10 space-y-4">
            <TrustBadge text="17 kg Personal Transformation" />
            <TrustBadge text="Evidence-Based Nutrition" />
            <TrustBadge text="Personalised Coaching" />
            <TrustBadge text="Sustainable Lifestyle" />
          </div>

        </div>

        {/* Right */}

        <div className="relative flex flex-1 justify-center">

          <Image
            src="/images/hero/hiranyakh.png"
            alt="Hiranyakh Chatterjee"
            width={650}
            height={800}
            priority
            className="relative z-10 h-auto w-full max-w-xl"
          />

        </div>

      </div>
    </section>
  );
}