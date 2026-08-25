"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { ProgramData } from "@/data/programs/types";

interface ProgramMethodProps {
  data: ProgramData;
}

export default function ProgramMethod({
  data,
}: ProgramMethodProps) {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>

          <div className="text-center">

            <span className="rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              THE HIRANYAKH METHOD™
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
              How The Program Works
            </h2>

          </div>

        </FadeIn>

        <div className="mx-auto mt-16 max-w-4xl">

          {data.method.map((step, index) => (

            <FadeIn key={step} delay={index * 0.1}>

              <div className="mb-8 flex items-center gap-6 rounded-3xl bg-slate-50 p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981] text-xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {step}
                </h3>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}