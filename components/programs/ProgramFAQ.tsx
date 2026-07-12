"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { ProgramData } from "@/data/programs/types";

interface ProgramFAQProps {
  data: ProgramData;
}

export default function ProgramFAQ({
  data,
}: ProgramFAQProps) {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>
          <div className="mb-16 text-center">

            <span className="rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              FAQ
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>

          </div>
        </FadeIn>

        <div className="mx-auto max-w-4xl space-y-6">

          {data.faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {item.question}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.answer}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}