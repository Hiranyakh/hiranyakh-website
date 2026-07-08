"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import GlassCard from "@/components/ui/GlassCard";
import { philosophy } from "@/data/about";

export default function PhilosophySection() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              MY PHILOSOPHY
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
              Nutrition Is More Than
              <span className="text-[#0F4C81]"> Food.</span>
            </h2>

          </div>

        </FadeIn>

        <FadeIn delay={0.2}>

          <GlassCard className="mx-auto mt-16 max-w-5xl p-12 text-center">

            <blockquote className="text-3xl font-bold leading-relaxed text-[#0F4C81] italic">

              “{philosophy.quote}”

            </blockquote>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-700">

              {philosophy.description}

            </p>

          </GlassCard>

        </FadeIn>

      </Container>

    </section>
  );
}