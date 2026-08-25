"use client";

import {
  Award,
  HeartPulse,
  ClipboardCheck,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: HeartPulse,
    title: "Evidence-Based Clinical Nutrition",
    description:
      "Every recommendation is based on nutrition science—not fad diets or shortcuts.",
  },
  {
    icon: Award,
    title: "I Lived the Transformation",
    description:
      "I personally lost 17 kg, so I understand the physical and emotional journey of changing your lifestyle.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalised Nutrition Plans",
    description:
      "Every plan is designed according to your health condition, lifestyle, food habits and long-term goals.",
  },
  {
    icon: Users,
    title: "Continuous Coaching & Support",
    description:
      "Transformation doesn't end with a diet chart. I guide you through every stage of your journey.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-[#0F4C81]/10 px-5 py-2 text-sm font-semibold text-[#0F4C81]">
              WHY CHOOSE HIRANYAKH'S WELLNESS
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              More Than a Diet Plan.
              <br />
              A Complete Lifestyle Transformation.
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              My approach combines clinical nutrition, sustainable habits,
              continuous guidance and personal experience to help you achieve
              long-term health—not temporary results.
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title}>
                <div className="rounded-3xl bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#10B981]/10">

                    <Icon
                      className="text-[#10B981]"
                      size={32}
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {feature.description}
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