"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function UnderstandingDiabetes() {
  const cards = [
    {
      title: "What is Diabetes?",
      text: "Diabetes is a metabolic condition where the body cannot effectively regulate blood sugar due to problems with insulin production or insulin resistance.",
    },
    {
      title: "Why Blood Sugar Matters",
      text: "Persistently high blood glucose can affect the heart, kidneys, eyes, nerves and overall quality of life if left unmanaged.",
    },
    {
      title: "The Good News",
      text: "With the right nutrition, physical activity and lifestyle changes, many people can significantly improve blood sugar control and overall health.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              UNDERSTANDING DIABETES
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
              Knowledge is the First Step Towards Better Health
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Understanding diabetes empowers you to make informed decisions
              that improve blood sugar control and reduce long-term health risks.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <FadeIn key={card.title}>
              <div className="rounded-3xl bg-slate-50 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {card.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}