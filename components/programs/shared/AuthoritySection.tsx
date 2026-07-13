"use client";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const points = [
  {
    title: "Evidence-Based Clinical Nutrition",
    description:
      "Every recommendation is based on clinical nutrition principles and tailored to your health condition.",
  },
  {
    title: "Personalised Meal Planning",
    description:
      "No generic diet charts. Your nutrition plan is designed around your lifestyle, preferences and medical history.",
  },
  {
    title: "Lifestyle Transformation",
    description:
      "The goal is not a temporary diet. The goal is long-term health through sustainable habits.",
  },
  {
    title: "Continuous Guidance",
    description:
      "Regular reviews and follow-up support help you stay accountable and achieve lasting results.",
  },
];

export default function AuthoritySection() {
  return (
    <Section background="bg-slate-50">
      <FadeIn>
        <SectionHeader
          badge="WHY CHOOSE HIRANYAKH'S WELLNESS"
          title="A Scientific, Personalised Approach to Better Health"
          subtitle="Every program is designed to help you build sustainable habits, improve your health and achieve lasting results."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {point.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}