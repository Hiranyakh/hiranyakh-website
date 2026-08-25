"use client";

import FadeIn from "@/components/ui/FadeIn";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import { story } from "@/data/about";

export default function StorySection() {
  return (
    <section className="bg-white py-28">

      <Container>

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              MY JOURNEY
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
              Every Mission Has
              <span className="text-[#0F4C81]"> A Beginning.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              My journey into Clinical Nutrition didn't begin in a
              classroom. It began with a deeply personal search for
              answers that changed my life forever.

            </p>

          </div>

        </FadeIn>

        <div className="mt-20 space-y-10">

          {story.map((item, index) => (

            <FadeIn
              key={item.title}
              delay={index * 0.15}
            >

              <GlassCard className="p-10">

                <h3 className="text-3xl font-bold text-[#0F4C81]">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-9 text-gray-700">
                  {item.content}
                </p>

              </GlassCard>

            </FadeIn>

          ))}

        </div>

      </Container>

    </section>
  );
}