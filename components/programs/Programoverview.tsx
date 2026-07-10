"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import type { ProgramData } from "@/data/programs/types";

interface ProgramOverviewProps {
  data: ProgramData;
}

export default function ProgramOverview({
  data,
}: ProgramOverviewProps) {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>

          <div className="mx-auto max-w-4xl">

            <span className="rounded-full bg-[#0F4C81]/10 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              PROGRAM OVERVIEW
            </span>

            <h2 className="mt-8 text-4xl font-extrabold text-slate-900">
              A Personalised Transformation Journey
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              {data.overview}
            </p>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}