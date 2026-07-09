"use client";

import FadeIn from "@/components/ui/FadeIn";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import {
  Moon,
  HeartPulse,
  Brain,
  Salad,
  Dumbbell,
  Flame,
} from "lucide-react";

const benefits = [
  {
    icon: Moon,
    title: "Poor Sleep",
    description:
      "Lack of quality sleep disrupts hunger hormones and makes weight management more difficult.",
  },
  {
    icon: Brain,
    title: "Stress",
    description:
      "Chronic stress elevates cortisol, increasing cravings and encouraging fat storage.",
  },
  {
    icon: HeartPulse,
    title: "Hormonal Imbalance",
    description:
      "Thyroid issues, insulin resistance and PCOS can significantly affect body weight.",
  },
  {
    icon: Salad,
    title: "Poor Nutrition",
    description:
      "Restrictive diets often fail because they are difficult to maintain and nutritionally inadequate.",
  },
  {
    icon: Dumbbell,
    title: "Muscle Loss",
    description:
      "Rapid weight loss can reduce muscle mass, slowing metabolism over time.",
  },
  {
    icon: Flame,
    title: "Inflammation",
    description:
      "Chronic inflammation and gut health issues can make sustainable weight loss more challenging.",
  },
];

export default function BenefitGrid() {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              WHY MOST DIETS FAIL
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Weight Gain Is More Than Just Calories
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sustainable weight management requires understanding the
              biological, hormonal and lifestyle factors influencing your body.
            </p>

          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <GlassCard className="p-8 h-full">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </GlassCard>
              </FadeIn>
            );
          })}

        </div>

      </Container>
    </section>
  );
}