"use client";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

interface FoodGuideProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    eat: string[];
    avoid: string[];
  };
}

export default function FoodGuide({
  data,
}: FoodGuideProps) {
  return (
    <Section background="bg-white">
      <FadeIn>
        <SectionHeader
          badge={data.badge}
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-emerald-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-emerald-700">
              ✅ Foods to Include
            </h3>

            <ul className="space-y-4">
              {data.eat.map((food) => (
                <li
                  key={food}
                  className="rounded-xl bg-white p-4 shadow"
                >
                  {food}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-red-50 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-700">
              ❌ Foods to Limit
            </h3>

            <ul className="space-y-4">
              {data.avoid.map((food) => (
                <li
                  key={food}
                  className="rounded-xl bg-white p-4 shadow"
                >
                  {food}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}