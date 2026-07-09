"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { Check, X } from "lucide-react";

const comparison = [
  {
    ordinary: "Generic diet charts",
    hiranyakh: "Personalised nutrition strategy",
  },
  {
    ordinary: "Focus only on weight",
    hiranyakh: "Focus on long-term health",
  },
  {
    ordinary: "Temporary restrictions",
    hiranyakh: "Sustainable lifestyle habits",
  },
  {
    ordinary: "One-size-fits-all plans",
    hiranyakh: "Tailored after assessment",
  },
  {
    ordinary: "Quick fixes",
    hiranyakh: "Evidence-based transformation",
  },
  {
    ordinary: "Calories only",
    hiranyakh: "Body composition, metabolism & behaviour",
  },
];

export default function WhyDifferent() {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              WHY MY APPROACH IS DIFFERENT
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Not Another Diet Program
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Sustainable transformation requires understanding the individual,
              not simply reducing calories.
            </p>

          </div>
        </FadeIn>

        <div className="mt-16 overflow-hidden rounded-3xl shadow-xl">

          <div className="grid grid-cols-2 bg-[#0F4C81] text-white">

            <div className="p-6 text-center text-xl font-bold">
              Typical Programs
            </div>

            <div className="bg-[#10B981] p-6 text-center text-xl font-bold">
              The Hiranyakh Transformation Program™
            </div>

          </div>

          {comparison.map((row) => (
            <div
              key={row.ordinary}
              className="grid grid-cols-2 border-b border-slate-200"
            >
              <div className="flex items-center gap-3 p-6">
                <X className="text-red-500" />
                {row.ordinary}
              </div>

              <div className="flex items-center gap-3 bg-emerald-50 p-6">
                <Check className="text-emerald-600" />
                {row.hiranyakh}
              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}