"use client";

import FadeIn from "@/components/ui/FadeIn";
import Container from "@/components/ui/Container";

const stats = [
  {
    number: "17 kg",
    title: "Personal Transformation",
  },
  {
    number: "100%",
    title: "Evidence-Based Approach",
  },
  {
    number: "1:1",
    title: "Personalised Coaching",
  },
  {
    number: "∞",
    title: "Lifelong Healthy Habits",
  },
];

export default function TrustNumbers() {
  return (
    <section className="bg-white py-20">
      <Container>
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-3xl bg-slate-50 p-10 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h2 className="text-5xl font-extrabold text-[#0F4C81]">
                  {stat.number}
                </h2>

                <p className="mt-4 text-lg font-semibold text-slate-700">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}