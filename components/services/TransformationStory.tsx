"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function TransformationStory() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <FadeIn>
            <div>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                MY TRANSFORMATION
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                I Didn't Just Study Nutrition.
                <br />
                I Lived It.
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                My journey began at <strong>84.2 kg</strong>. Like many people,
                I struggled with unhealthy habits, inconsistent routines and the
                challenge of maintaining a healthy weight.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Through evidence-based nutrition, sustainable lifestyle changes
                and consistency, I lost <strong>17 kg</strong> and completely
                transformed my health.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Today, I use the same scientific principles to help my clients
                achieve lasting transformation—not temporary results.
              </p>

              <div className="mt-10 flex gap-8">
                <div>
                  <h3 className="text-4xl font-extrabold text-[#10B981]">
                    17 kg
                  </h3>
                  <p className="text-slate-600">Weight Lost</p>
                </div>

                <div>
                  <h3 className="text-4xl font-extrabold text-[#10B981]">
                    100%
                  </h3>
                  <p className="text-slate-600">Lifestyle Change</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-3xl bg-slate-100 p-4 text-center shadow-lg">
                <Image
                  src="/images/before-placeholder.jpg"
                  alt="Before"
                  width={300}
                  height={450}
                  className="rounded-2xl"
                />
                <p className="mt-4 font-semibold">Before</p>
                <p className="text-slate-500">84.2 kg</p>
              </div>

              <div className="rounded-3xl bg-slate-100 p-4 text-center shadow-lg">
                <Image
                  src="/images/after-placeholder.jpg"
                  alt="After"
                  width={300}
                  height={450}
                  className="rounded-2xl"
                />
                <p className="mt-4 font-semibold">After</p>
                <p className="text-slate-500">66.5 kg</p>
              </div>

            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}