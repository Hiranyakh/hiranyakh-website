"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

export default function MeetHiranyakh() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <SectionTitle
            badge="MEET HIRANYAKH"
            title="Helping People Build"
            highlight="Health, Wealth & Purpose"
            description="Clinical Nutritionist • Wellness Coach • Business Mentor • Speaker"
          />
        </FadeIn>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <FadeIn delay={0.2}>
            <div className="relative mx-auto">

              <div className="absolute -left-8 -top-8 h-52 w-52 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

              <Image
                src="/images/hiranyakh-v2.png"
                alt="Hiranyakh Chatterjee"
                width={520}
                height={620}
                className="relative rounded-[35px] shadow-2xl"
              />

            </div>
          </FadeIn>

          {/* Content */}

          <FadeIn delay={0.4}>

            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Lives Through Science,
              Compassion & Sustainable Change.
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              I believe true wellness is much more than losing weight.
              It is about creating lifelong habits that improve health,
              confidence and overall quality of life.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Through evidence-based nutrition, personalised coaching,
              and years of practical experience, I help individuals
              overcome lifestyle diseases, regain their health and
              build a healthier future.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div>
                <h4 className="text-4xl font-extrabold text-[#0F4C81]">
                  500+
                </h4>

                <p className="text-gray-600">
                  Lives Transformed
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-extrabold text-[#0F4C81]">
                  1000+
                </h4>

                <p className="text-gray-600">
                  Consultations
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-extrabold text-[#0F4C81]">
                  10+
                </h4>

                <p className="text-gray-600">
                  Years Experience
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-extrabold text-[#10B981]">
                  100%
                </h4>

                <p className="text-gray-600">
                  Evidence Based
                </p>
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button>
                Book Consultation
              </Button>

              <Button variant="secondary">
                Download Profile
              </Button>

            </div>

          </FadeIn>

        </div>

      </div>
    </section>
  );
}