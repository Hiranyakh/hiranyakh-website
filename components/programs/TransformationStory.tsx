"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import type { ProgramData } from "@/data/programs/types";

interface Props {
  data: ProgramData;
}

export default function TransformationStory({ data }: Props) {
  if (!data.transformation) return null;

  const t = data.transformation;

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-28">
      <Container>

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-[#10B981]/10 px-5 py-2 text-sm font-semibold text-[#10B981]">
              MY TRANSFORMATION
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              {t.title}
            </h2>

            <p className="mt-6 text-xl leading-9 text-slate-600">
              {t.subtitle}
            </p>

          </div>

        </FadeIn>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          <FadeIn>

            <div className="overflow-hidden rounded-[30px] bg-white shadow-2xl">

              <Image
                src={t.beforeImage}
                alt="Before Transformation"
                width={700}
                height={900}
                className="w-full object-cover"
              />

              <div className="p-8 text-center">

                <h3 className="text-2xl font-bold text-red-500">
                  BEFORE
                </h3>

                <p className="mt-3 text-3xl font-extrabold text-slate-900">
                  {t.beforeWeight}
                </p>

              </div>

            </div>

          </FadeIn>

          <FadeIn delay={0.2}>

            <div className="overflow-hidden rounded-[30px] bg-white shadow-2xl">

              <Image
                src={t.afterImage}
                alt="After Transformation"
                width={700}
                height={900}
                className="w-full object-cover"
              />

              <div className="p-8 text-center">

                <h3 className="text-2xl font-bold text-[#10B981]">
                  AFTER
                </h3>

                <p className="mt-3 text-3xl font-extrabold text-slate-900">
                  {t.afterWeight}
                </p>

              </div>

            </div>

          </FadeIn>

        </div>

        <FadeIn>

          <div className="mx-auto mt-24 max-w-5xl rounded-[35px] bg-white p-12 shadow-xl">

            <h3 className="text-3xl font-bold text-[#0F4C81]">
              My Story
            </h3>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              {t.story}
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              {t.highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10B981] text-white">
                    ✓
                  </div>

                  <p className="font-semibold text-slate-800">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <div className="mt-14 text-center">

              <Button>

                Start Your Transformation

              </Button>

            </div>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}