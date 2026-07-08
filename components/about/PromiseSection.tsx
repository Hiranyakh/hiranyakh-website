"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function PromiseSection() {
  return (
    <section className="bg-[#0F4C81] py-28 text-white">

      <Container>

        <FadeIn>

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              MY PROMISE
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight">

              Every Recommendation
              <br />
              Begins With One Question...

            </h2>

            <blockquote className="mt-14 text-3xl italic leading-relaxed text-blue-100">

              "Would I confidently recommend this to my own family?"

            </blockquote>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-blue-100">

              That question guides every consultation, every nutrition
              strategy and every recommendation I make.

              My commitment is to provide science-based,
              practical nutrition guidance that supports
              long-term health—not short-term trends.

            </p>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
}