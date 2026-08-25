"use client";

import {
  ClipboardList,
  Stethoscope,
  Apple,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    icon: ClipboardList,
    title: "Book Consultation",
    description:
      "Schedule a one-to-one consultation at a convenient time.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Assessment",
    description:
      "Medical history, lifestyle, eating habits, body composition and health goals are carefully evaluated.",
  },
  {
    icon: Apple,
    title: "Personalised Nutrition Plan",
    description:
      "A practical nutrition strategy tailored to your health condition, lifestyle and preferences.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Follow-up",
    description:
      "Regular reviews, accountability and plan adjustments keep you moving forward.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Transformation",
    description:
      "The goal is sustainable health—not temporary results.",
  },
];

export default function HowIWorkSection() {
  return (
    <section className="bg-white py-28">
      <Container>

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              MY PROCESS
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
              How We Work Together
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every recommendation is personalised, practical and based on your individual health goals.
            </p>

          </div>

        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <FadeIn
                key={step.title}
                delay={index * 0.1}
              >

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="inline-flex rounded-2xl bg-blue-50 p-4 text-[#0F4C81]">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {step.description}
                  </p>

                </div>

              </FadeIn>

            );

          })}

        </div>

      </Container>
    </section>
  );
}