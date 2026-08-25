"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { ProgramData } from "@/data/programs/types";

interface ProgramBenefitsProps {
  data: ProgramData;
}

export default function ProgramBenefits({
  data,
}: ProgramBenefitsProps) {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <FadeIn>

          <div className="text-center">

            <span className="rounded-full bg-[#10B981]/10 px-4 py-2 text-sm font-semibold text-[#10B981]">
              BENEFITS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
              What You'll Achieve
            </h2>

          </div>

        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {data.benefits.map((benefit) => (

            <FadeIn key={benefit}>

              <div className="rounded-3xl bg-white p-8 shadow-lg">

                <div className="mb-4 text-3xl">
                  ✅
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {benefit}
                </h3>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}