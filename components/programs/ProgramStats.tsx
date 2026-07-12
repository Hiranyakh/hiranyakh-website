"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { ProgramData } from "@/data/programs/types";

interface ProgramStatsProps {
  data: ProgramData;
}

export default function ProgramStats({
  data,
}: ProgramStatsProps) {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl bg-white p-10 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl font-extrabold text-[#10B981]">
                  {stat.value}
                </div>

                <p className="mt-4 text-lg font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}