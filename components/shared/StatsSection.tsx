"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  {
    value: "17 kg",
    label: "Personal Transformation",
  },
  {
    value: "Evidence",
    label: "Based Nutrition",
  },
  {
    value: "Engineer",
    label: "Analytical Approach",
  },
  {
    value: "100%",
    label: "Personalised Guidance",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-4xl font-extrabold text-[#10B981]">
                  {stat.value}
                </h3>

                <p className="mt-3 text-slate-600">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}