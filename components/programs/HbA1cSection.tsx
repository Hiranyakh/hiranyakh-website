"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const levels = [
  {
    range: "< 5.7%",
    status: "Normal",
    color: "bg-green-500",
  },
  {
    range: "5.7% - 6.4%",
    status: "Prediabetes",
    color: "bg-yellow-500",
  },
  {
    range: "6.5% +",
    status: "Diabetes",
    color: "bg-red-500",
  },
];

export default function HbA1cSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              HBA1C EXPLAINED
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              What Does Your HbA1c Mean?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              HbA1c reflects your average blood sugar over the past
              2–3 months and is one of the most important indicators
              of long-term diabetes control.
            </p>

          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {levels.map((item) => (

            <FadeIn key={item.status}>

              <div className="rounded-3xl bg-white p-10 shadow-lg">

                <div
                  className={`h-4 w-full rounded-full ${item.color}`}
                />

                <h3 className="mt-8 text-4xl font-bold">
                  {item.range}
                </h3>

                <p className="mt-4 text-xl font-semibold text-slate-700">
                  {item.status}
                </p>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}