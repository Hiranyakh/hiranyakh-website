"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { UserCheck } from "lucide-react";

const audience = [
  "Busy Professionals",
  "People struggling with Belly Fat",
  "Individuals with PCOS",
  "People with Diabetes or Prediabetes",
  "Thyroid-related Weight Gain",
  "Fatty Liver",
  "People tired of Crash Diets",
  "Anyone seeking Sustainable Weight Loss",
];

export default function WhoItsFor() {
  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F4C81]">
              WHO THIS PROGRAM IS FOR
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              If You See Yourself Here, This Program Was Designed For You
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Every person has a different journey. The program is tailored to
              your health, lifestyle and goals.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item, index) => (
            <FadeIn key={item} delay={index * 0.05}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <UserCheck size={28} />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {item}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}