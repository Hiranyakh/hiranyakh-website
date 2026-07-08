"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { qualifications } from "@/data/about";

export default function QualificationsSection() {
  return (
    <section className="bg-white py-28">

      <Container>

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              QUALIFICATIONS
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-gray-900">

              Learning Never Stops

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              Continuous education helps me provide practical,
              evidence-based nutrition guidance tailored to every individual.

            </p>

          </div>

        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {qualifications.map((item, index) => (

            <FadeIn
              key={item.title}
              delay={index * 0.15}
            >

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#0F4C81]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {item.institution}
                  </p>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>

    </section>
  );
}