"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Comprehensive Health Assessment",
    description:
      "A detailed evaluation of your medical history, lifestyle, eating habits and health goals.",
  },
  {
    title: "Body Composition Analysis",
    description:
      "Assessment of body fat, muscle mass, visceral fat and metabolic indicators.",
  },
  {
    title: "Blood Report Analysis",
    description:
      "Scientific interpretation of your blood investigations to identify nutritional and metabolic concerns.",
  },
  {
    title: "Personalised Nutrition Plan",
    description:
      "A practical meal plan tailored to your food preferences, routine and medical conditions.",
  },
  {
    title: "Lifestyle & Habit Coaching",
    description:
      "Guidance on sleep, stress, hydration, physical activity and sustainable habit formation.",
  },
  {
    title: "Follow-up & Progress Monitoring",
    description:
      "Regular reviews to refine your plan, monitor progress and keep you accountable.",
  },
];

export default function WhatYouReceive() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              WHAT YOU'LL RECEIVE
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              More Than a Diet Plan
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every consultation is designed to help you build sustainable health,
              not just lose weight temporarily.
            </p>

          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {services.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>

              <div className="flex gap-5 rounded-3xl bg-white p-8 shadow-lg">

                <CheckCircle2
                  className="mt-1 text-emerald-500"
                  size={30}
                />

                <div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>

            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}