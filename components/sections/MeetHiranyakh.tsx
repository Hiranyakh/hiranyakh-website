"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  GraduationCap,
  BadgeCheck,
  HeartPulse,
  BookOpen,
} from "lucide-react";

const qualifications = [
  "Post Graduate Diploma in Nutrition & Dietetics Management",
  "Diploma in Nutrition & Dietetics (Grade A+)",
  "Certified Nutrition Advisor – Integrative Dietetics",
];

const specializations = [
  "Weight Loss",
  "Diabetes Management",
  "Gut Health",
  "PCOS",
  "Fatty Liver",
  "Lifestyle Disorders",
];

export default function MeetHiranyakh() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="MEET HIRANYAKH"
          title="Helping People Live"
          highlight="Healthier Lives"
          description="Clinical Nutritionist • Wellness Coach • Author • Speaker • Business Mentor"
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* Left Image */}

          <FadeIn>

            <div className="relative">

              <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-70"></div>

              <Image
                src="/images/hiranyakh-v2.png"
                alt="Hiranyakh Chatterjee"
                width={520}
                height={650}
                className="relative rounded-[35px] shadow-2xl"
              />

              <div className="absolute bottom-6 left-6 rounded-3xl bg-white/90 backdrop-blur-lg p-6 shadow-xl">

                <div className="flex items-center gap-3">

                  <BadgeCheck
                    className="text-[#10B981]"
                    size={26}
                  />

                  <div>

                    <p className="font-bold text-gray-900">
                      Certified Professional
                    </p>

                    <p className="text-sm text-gray-500">
                      Evidence-Based Nutrition
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </FadeIn>

          {/* Right Side */}

          <FadeIn delay={0.2}>

            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Transforming Health Through
              Science, Nutrition & Sustainable Habits.
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              I believe nutrition is much more than calorie counting.
              True wellness comes from understanding your body,
              developing sustainable habits, and making evidence-based
              lifestyle choices that last a lifetime.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              My mission is to empower individuals with practical,
              science-backed nutrition strategies that improve health,
              prevent lifestyle diseases, and create lasting transformation.
            </p>

            {/* Qualifications */}

            <div className="mt-10">

              <div className="mb-5 flex items-center gap-3">

                <GraduationCap className="text-[#0F4C81]" />

                <h4 className="text-xl font-bold">
                  Professional Qualifications
                </h4>

              </div>

              <div className="space-y-4">

                {qualifications.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >

                    <BadgeCheck
                      className="mt-1 text-[#10B981]"
                      size={18}
                    />

                    <span className="text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Expertise */}

            <div className="mt-12">

              <div className="mb-5 flex items-center gap-3">

                <HeartPulse className="text-[#0F4C81]" />

                <h4 className="text-xl font-bold">
                  Areas of Expertise
                </h4>

              </div>

              <div className="grid grid-cols-2 gap-4">

                {specializations.map((item) => (

                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-center font-medium shadow-sm"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-4">

              <Button>
                Book Consultation
              </Button>

              <Button variant="secondary">

                <BookOpen size={18} />

                View Credentials

              </Button>

            </div>

          </FadeIn>

        </div>

      </div>
    </section>
  );
}